import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navData = [
  {
    title: "Platform",
    subItems: [
      { name: "Transport Management", path: "/platform/transport" },
      { name: "Warehouse Management", path: "/platform/warehouse" },
      { name: "Route Planning", path: "/platform/route-planning" },
    ],
  },
  {
    title: "Products",
    subItems: [
      { name: "TMS Suite", path: "/products/tms" },
      { name: "WMS Suite", path: "/products/wms" },
      { name: "Capacity Planner", path: "/products/capacity-planner" },
    ],
  },
  {
    title: "Industries",
    subItems: [
      { name: "E-Commerce & D2C", path: "/industries/ecommerce" },
      { name: "FMCG & Consumer Goods", path: "/industries/fmcg" },
      { name: "Manufacturing", path: "/industries/manufacturing" },
      { name: "Pharma & Healthcare", path: "/industries/pharma" },
      { name: "Retail Chains", path: "/industries/retail" },
      { name: "3PL & Freight Forwarders", path: "/industries/3pl" },
    ],
  },
  {
    title: "Resources",
    path: "/resources",
  },
  {
    title: "About Us",
    path: "/about-us",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Animation Variants
  const navContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-[#0B1340] to-[#0D1B6E] shadow-lg backdrop-blur-sm"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO SECTION */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <Link to="/" className="flex items-center gap-3">
              {/* Globe/Network SVG Icon */}
              <div className="w-8 h-8 rounded-full border-[1.5px] border-white flex items-center justify-center relative shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white stroke-current stroke-[1.5] z-10">
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-[30%] left-[25%] z-20"></div>
                <div className="absolute w-1 h-1 bg-white rounded-full bottom-[25%] right-[30%] z-20"></div>
                <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-[50%] left-[65%] z-20 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>

              {/* Logo Text */}
              <div className="flex flex-col">
                <div className="text-white text-xl tracking-wide flex items-baseline">
                  <span className="font-bold">HL</span>
                  <span className="font-normal ml-1">Logistics</span>
                </div>
                <span className="text-[10px] text-gray-400 -mt-1 tracking-wider uppercase">
                  Powered by HealthyLife
                </span>
              </div>
            </Link>
          </motion.div>

          {/* DESKTOP NAV LINKS */}
          <motion.nav
            variants={navContainerVariants}
            initial="hidden"
            animate="show"
            className="hidden lg:flex items-center space-x-8"
          >
            {navData.map((item) => (
              <motion.div key={item.title} variants={navItemVariants} className="relative">
                {item.subItems ? (
                  <div
                    className="group py-6" // Expanded hover area to prevent dropdown closing unexpectedly
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 text-white font-normal hover:text-gray-200 transition-colors focus:outline-none">
                      {item.title}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          activeDropdown === item.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-[-10px] w-64 bg-[#0D1B6E] rounded-lg shadow-xl py-2 px-4 border border-white/10"
                        >
                          {item.subItems.map((sub) => (
                            <NavLink
                              key={sub.name}
                              to={sub.path}
                              className={({ isActive }) =>
                                `block w-full text-left py-2 text-sm transition-colors duration-200 ${
                                  isActive
                                    ? "text-[#E8732A]"
                                    : "text-white hover:text-[#E8732A]"
                                }`
                              }
                            >
                              {sub.name}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-base font-normal transition-colors duration-200 ${
                        isActive ? "text-[#E8732A]" : "text-white hover:text-gray-200"
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                )}
              </motion.div>
            ))}
          </motion.nav>

          {/* DESKTOP CTA BUTTON & MOBILE TOGGLE */}
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="hidden lg:block"
            >
              <Link
                to="/reach-us"
                className="inline-block border border-white bg-transparent text-white px-6 py-2 rounded-full font-medium transition-all duration-200 hover:bg-white hover:text-[#0B1340]"
              >
                Talk To Us
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (Slide Down) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed top-[80px] left-0 w-full bg-[#0B1340] border-t border-white/10 overflow-y-auto"
          >
            <div className="flex flex-col px-6 py-8 space-y-6 pb-32">
              {navData.map((item) => (
                <div key={item.title} className="flex flex-col">
                  {item.subItems ? (
                    <>
                      <div className="text-gray-300 uppercase tracking-wider text-xs font-semibold mb-3">
                        {item.title}
                      </div>
                      <div className="flex flex-col space-y-3 pl-4 border-l border-white/10 ml-2">
                        {item.subItems.map((sub) => (
                          <NavLink
                            key={sub.name}
                            to={sub.path}
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              `text-lg transition-colors ${
                                isActive ? "text-[#E8732A]" : "text-white hover:text-[#E8732A]"
                              }`
                            }
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `text-lg font-medium transition-colors ${
                          isActive ? "text-[#E8732A]" : "text-white hover:text-[#E8732A]"
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  )}
                </div>
              ))}

              <div className="pt-6 mt-4 border-t border-white/10">
                <Link
                  to="/reach-us"
                  onClick={closeMobileMenu}
                  className="block w-full text-center border border-white bg-transparent text-white px-6 py-3 rounded-full font-medium transition-all duration-200 hover:bg-white hover:text-[#0B1340]"
                >
                  Talk To Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;