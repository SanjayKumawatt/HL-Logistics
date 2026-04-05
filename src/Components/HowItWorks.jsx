import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="w-full flex flex-col font-sans">
      {/* SECTION HEADER */}
      <div className="bg-white pt-24 pb-8 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold rounded-full px-4 py-1.5 mb-6 uppercase tracking-wider">
            The Platform
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1340] tracking-tight mb-4">
            Designed to scale with your operations
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Our modules are built to handle the chaotic reality of Indian supply chains. From first-mile procurement to last-mile delivery, every step is optimized.
          </p>
        </div>
      </div>

      {/* BLOCK 1: Transport Management (Visual Left, Text Right) */}
      <section className="bg-[#FFFFFF] py-20 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* VISUAL LEFT - Replaced CSS box with Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="w-full max-w-lg aspect-[4/3] rounded-2xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
              <img 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop" 
                alt="Transport and Fleet Management" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0B1340]/5 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          </motion.div>

          {/* TEXT RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <span className="text-[#2563EB] uppercase tracking-wide text-sm font-semibold mb-3">
              Transport Management
            </span>
            <h3 className="text-[#0B1340] font-bold text-3xl md:text-4xl mb-4 leading-tight">
              Delegate transportation to AI with an advanced TMS
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              The platform will streamline the entire transportation process - from intelligent carrier matching and procurement, to execution, real-time tracking, and automated freight auditing. Businesses will gain complete visibility over their fleet, drastically reducing unnecessary costs and manual interventions at every stage of the journey.
            </p>
            <Link to="/platform/transport" className="text-[#E8732A] hover:text-[#D03D08] font-semibold inline-flex items-center gap-1.5 w-fit group transition-colors">
              Explore TMS capabilities <ArrowRight size={18} className="transform transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* BLOCK 2: Warehouse Management (Text Left, Visual Right) */}
      <section className="bg-[#F0F4FF] py-20 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
          
          {/* TEXT LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <span className="text-[#2563EB] uppercase tracking-wide text-sm font-semibold mb-3">
              Warehouse Management
            </span>
            <h3 className="text-[#0B1340] font-bold text-3xl md:text-4xl mb-4 leading-tight">
              Unlock operational excellence with smarter WMS
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              When the warehouse module launches, it will unify your entire inventory ecosystem. It is designed to automate complex decision-making like dynamic putaway routing, batch picking rules, and space utilization. Bring precision at scale through AI-powered warehousing technology that reduces cycle count times from days to hours.
            </p>
            <Link to="/platform/warehouse" className="text-[#E8732A] hover:text-[#D03D08] font-semibold inline-flex items-center gap-1.5 w-fit group transition-colors">
              Explore WMS capabilities <ArrowRight size={18} className="transform transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* VISUAL RIGHT - Replaced CSS box with Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="w-full max-w-lg aspect-[4/3] rounded-2xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
              <img 
                src="https://plus.unsplash.com/premium_photo-1733266897023-8ef16ad9350a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Modern Warehouse Operations" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0B1340]/5 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BLOCK 3: Route Planning (Visual Left, Text Right) */}
      <section className="bg-[#FFFFFF] py-20 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* VISUAL LEFT - Replaced CSS box with Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="w-full max-w-lg aspect-[4/3] rounded-2xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
              <img 
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop" 
                alt="Logistics and Route Planning" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0B1340]/5 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          </motion.div>

          {/* TEXT RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <span className="text-[#2563EB] uppercase tracking-wide text-sm font-semibold mb-3">
              Route Planning
            </span>
            <h3 className="text-[#0B1340] font-bold text-3xl md:text-4xl mb-4 leading-tight">
              Reduce cost per drop with AI-powered capacity & route planning
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              The route planning engine will increase delivery efficiency across all legs of the transportation journey. It calculates real-world constraints like vehicle weight limits, strict delivery time windows, and live traffic data - designed to optimise fuel costs and consistently meet customer SLA expectations.
            </p>
            <Link to="/platform/route-planning" className="text-[#E8732A] hover:text-[#D03D08] font-semibold inline-flex items-center gap-1.5 w-fit group transition-colors">
              Explore Route Planning <ArrowRight size={18} className="transform transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;