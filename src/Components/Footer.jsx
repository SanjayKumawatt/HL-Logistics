import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Truck,
  Globe,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";

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

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B1340] border-t border-[#1e2d6b] flex flex-col">
      {/* MAIN FOOTER SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10"
        >
          {/* COLUMN 1 - Brand (Spans 2 columns on large screens for visual balance) */}
          <div className="flex flex-col lg:col-span-2">
            {/* Logo */}
            <Link to="/" className="flex flex-col w-fit">
              <div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full border-[1.5px] border-white flex items-center justify-center relative shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white stroke-current stroke-[1.5] z-10">
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-[30%] left-[25%] z-20"></div>
                <div className="absolute w-1 h-1 bg-white rounded-full bottom-[25%] right-[30%] z-20"></div>
                <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-[50%] left-[65%] z-20 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
                <div className="text-white text-xl tracking-wide flex items-baseline">
                  <span className="font-bold">HL</span>
                  <span className="font-light ml-1">Logistics</span>
                </div>
              </div>
              <span className="text-xs text-white/40 mt-1 tracking-wider">
                Powered by HealthyLife
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mt-4">
              Building logistics intelligence for India - transport, warehouse,
              and route planning in one connected platform.
            </p>

            {/* Domain */}
            <a
              href="https://healthylifelogisol.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm text-white/50 hover:text-[#E8732A] transition flex items-center gap-2 w-fit"
            >
              <Globe size={14} className="text-white/40" />
              healthylifelogisol.in
            </a>
          </div>

          {/* COLUMN 2 - Platform & Products */}
          <div className="flex flex-col gap-8">
            {/* Platform */}
            <div>
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
                {navData[0].title}
              </h4>
              <div className="flex flex-col gap-3">
                {navData[0].subItems.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-sm text-white/60 hover:text-[#E8732A] transition flex items-center gap-1 w-fit group"
                  >
                    <ChevronRight size={12} className="text-white/30 group-hover:text-[#E8732A] transition" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
                {navData[1].title}
              </h4>
              <div className="flex flex-col gap-3">
                {navData[1].subItems.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-sm text-white/60 hover:text-[#2563EB] transition flex items-center gap-1 w-fit group"
                  >
                    <ChevronRight size={12} className="text-white/30 group-hover:text-[#2563EB] transition" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 3 - Industries */}
          <div className="flex flex-col lg:col-span-1">
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              {navData[2].title}
            </h4>
            <div className="flex flex-col gap-3">
              {navData[2].subItems.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm text-white/60 hover:text-[#E8732A] transition flex items-center gap-1 w-fit group"
                >
                  <ChevronRight size={12} className="text-white/30 group-hover:text-[#E8732A] transition" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN 4 - Company & Contact (Spans 2 columns on large screens) */}
          <div className="flex flex-col lg:col-span-2 pl-0 lg:pl-8 border-none lg:border-l border-white/10">
            {/* Company Links */}
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              Company
            </h4>
            <div className="flex flex-col gap-3 mb-8">
              <Link
                to={navData[3].path}
                className="text-sm text-white/60 hover:text-white transition flex items-center gap-1 w-fit group"
              >
                <ChevronRight size={12} className="text-white/30 group-hover:text-white transition" />
                {navData[3].title}
              </Link>
              <Link
                to={navData[4].path}
                className="text-sm text-white/60 hover:text-white transition flex items-center gap-1 w-fit group"
              >
                <ChevronRight size={12} className="text-white/30 group-hover:text-white transition" />
                {navData[4].title}
              </Link>
            </div>

            {/* Contact */}
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              Get In Touch
            </h4>
            
            <div

              
              className="flex items-start gap-2 text-sm text-white/60 hover:text-[#E8732A] transition"
            >
              <Mail size={14} className="text-[#E8732A] shrink-0 mt-0.5" />
              inquiry@healthylifelogisol.in
            </div>

            <div className="flex items-start gap-2 mt-4 text-sm text-white/60 leading-relaxed">
              <MapPin size={14} className="text-[#E8732A] shrink-0 mt-0.5" />
              <span>
                Office No. 310 Lunkad Sky, Max,<br />
                P.no. 94, Sr No. 199, Dapodi Bazar,<br />
                Pune, Maharashtra - 411012
              </span>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <Clock size={12} className="text-white/30" />
              <span className="text-xs text-white/30">
                Responds within one working day
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* DIVIDER */}
      <hr className="border-t border-[#1e2d6b] my-0 w-full" />

      {/* BOTTOM BAR */}
      <div className="w-full bg-[#060d2e] py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          {/* Copyright */}
          <div className="text-xs text-white/30 text-center md:text-left">
            © 2026 HEALTHYLIFE LOGISTICS PRIVATE LIMITED
          </div>

          {/* Legal / Secondary Links */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/30 hover:text-white/50 transition cursor-default">
              healthylifelogisol.in
            </span>
            <span className="text-white/20">·</span>
            <Link
              to="/legal"
              className="text-xs text-white/30 hover:text-[#E8732A] transition"
            >
              Legal Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;