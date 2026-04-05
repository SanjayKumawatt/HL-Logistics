import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ShoppingCart,
  Zap,
  Factory,
  ShieldCheck,
  Store,
  Users,
  ArrowRight,
  Mail
} from "lucide-react";

const IndustriesPage = () => {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Industries Data
  const industriesData = [
    {
      id: "ecommerce",
      icon: ShoppingCart,
      color: "text-[#E8732A]",
      bgBadge: "bg-orange-50",
      title: "E-Commerce & D2C",
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop",
      description: "High order volumes, last-mile pressure, and return complexity handled seamlessly. Built for scale and seasonal peaks.",
      route: "/industries/ecommerce"
    },
    {
      id: "fmcg",
      icon: Zap,
      color: "text-[#2563EB]",
      bgBadge: "bg-blue-50",
      title: "FMCG & Consumer Goods",
      image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?q=80&w=800&auto=format&fit=crop",
      description: "Tight delivery windows and wide distribution networks managed at speed. Optimised for rigid replenishment cycles.",
      route: "/industries/fmcg"
    },
    {
      id: "manufacturing",
      icon: Factory,
      color: "text-[#E8732A]",
      bgBadge: "bg-orange-50",
      title: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      description: "Plant to dealer, warehouse to line. Connected visibility across inbound raw materials, WIP, and outbound dispatch.",
      route: "/industries/manufacturing"
    },
    {
      id: "pharma",
      icon: ShieldCheck,
      color: "text-[#2563EB]",
      bgBadge: "bg-blue-50",
      title: "Pharma & Healthcare",
      image: "https://images.unsplash.com/photo-1584308666744-247b8e50f66b?q=80&w=800&auto=format&fit=crop",
      description: "Strict compliance, temperature tracking, and audit-ready documentation built into the core workflow.",
      route: "/industries/pharma"
    },
    {
      id: "retail",
      icon: Store,
      color: "text-[#E8732A]",
      bgBadge: "bg-orange-50",
      title: "Retail Chains",
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=800&auto=format&fit=crop",
      description: "Multi-location replenishment and vendor inbound coordination in one single, unified view.",
      route: "/industries/retail"
    },
    {
      id: "3pl",
      icon: Users,
      color: "text-[#2563EB]",
      bgBadge: "bg-blue-50",
      title: "3PL & Freight Forwarders",
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop",
      description: "Multi-client operations with full data separation, shared fleet optimisation, and dedicated reporting.",
      route: "/industries/3pl"
    }
  ];

  return (
    <div className="w-full font-sans bg-white">
      
      {/* =========================================
          SECTION 1: HERO
      ========================================= */}
      <section className="relative w-full min-h-[55vh] bg-[#0B1340] py-24 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <div className="w-[800px] h-[800px] rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-[500px] h-[500px] rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs text-white/30 font-medium tracking-wide mb-6"
          >
            Home <span className="mx-2">→</span> Industries
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-blue-400/20 text-blue-300 border border-blue-400/30 text-xs rounded-full px-4 py-1.5 font-semibold uppercase tracking-wider mb-6 inline-block"
          >
            Industries We Serve
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
          >
            Built for sectors where<br />logistics pressure is highest.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/60 text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            We understand that a one-size-fits-all approach doesn't work for modern supply chains. Our platform adapts to the unique workflows, compliance needs, and scale of your specific sector.
          </motion.p>
        </div>
      </section>

      {/* =========================================
          SECTION 2: INDUSTRIES GRID
      ========================================= */}
      <section className="w-full bg-[#F0F4FF] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industriesData.map((industry) => (
              <motion.div 
                key={industry.id} 
                variants={cardVariant}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl border border-[#E0E7FF] shadow-sm overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-lg hover:border-[#2563EB]"
              >
                {/* High-Quality Image Header */}
                <div className="w-full h-48 relative overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#0B1340]/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  
                  {/* Floating Icon */}
                  <div className={`absolute bottom-4 left-6 ${industry.bgBadge} ${industry.color} p-3 rounded-xl shadow-md transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300`}>
                    <industry.icon size={24} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-1 pt-8">
                  <h3 className="text-[#0B1340] font-bold text-xl leading-snug mb-3">
                    {industry.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    {industry.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-[#F3F4F6]">
                    <Link 
                      to={industry.route} 
                      className="text-[#2563EB] font-semibold text-sm flex items-center gap-1.5 hover:underline w-fit group/link"
                    >
                      Explore Solutions <ArrowRight size={16} className="transform transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* =========================================
          SECTION 3: CTA BANNER
      ========================================= */}
      <section className="relative w-full bg-[#0B1340] py-24 overflow-hidden flex items-center justify-center text-center">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <div className="w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-96 h-96 rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="w-2.5 h-2.5 bg-white/10 rounded-full absolute top-16 left-1/4" />
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="w-2 h-2 bg-white/10 rounded-full absolute bottom-20 right-1/4" />
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="w-3 h-3 bg-white/10 rounded-full absolute top-1/3 right-[15%]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            
            <span className="bg-orange-400/20 text-orange-400 text-xs font-semibold rounded-full px-5 py-2 inline-block uppercase tracking-wider mb-6">
              Get Involved Early
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-6 whitespace-pre-line">
              Don't see your industry?{"\n"}We'd still love to talk.
            </h2>

            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">
              We are actively developing our core modules. If you operate a logistics-heavy business in India and want to shape the software of tomorrow, reach out to us.
            </p>

            <div className="flex flex-col items-center gap-3 mt-4">
              <Link 
                to="/reach-us"
                className="inline-block bg-[#E8732A] text-white font-bold rounded-full px-8 py-3.5 hover:brightness-110 transition-all shadow-lg shadow-orange-500/20"
              >
                Start a Conversation
              </Link>
              <div className="flex items-center gap-2 mt-4 text-white/40 text-sm font-medium">
                <Mail size={16} className="text-[#E8732A]" />
                <span>inquiry@healthylifelogisol.in</span>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default IndustriesPage;