import React from "react";
import { Link } from "react-router-dom";
import { Target, LayoutDashboard, BrainCircuit, Handshake } from "lucide-react";
import { motion } from "motion/react";

const whyUsPoints = [
  {
    id: 1,
    icon: Target,
    title: "India-first design",
    body: "Every single feature will be meticulously shaped around Indian road networks, local warehousing norms, e-way bill integrations, and regional compliance requirements. We understand the ground reality of Indian freight and have designed the system to handle its unique challenges natively.",
  },
  {
    id: 2,
    icon: LayoutDashboard,
    title: "End-to-end in one platform",
    body: "TMS, WMS, and route planning will work natively as one deeply connected system. No more dealing with three separate tools stitched together with fragile API integrations. Data flows seamlessly from procurement and dispatch to final delivery and auditing.",
  },
  {
    id: 3,
    icon: BrainCircuit,
    title: "AI at the core",
    body: "Advanced machine learning algorithms will actively power your operational decisions - from dynamic multi-stop routing and predictive ETA calculations, to intelligent inventory reorder points and automated load balancing across your fleet.",
  },
  {
    id: 4,
    icon: Handshake,
    title: "Built with the industry in mind",
    body: "We are actively building this platform for modern businesses facing real, day-to-day logistics pressure. This is not a generic, imported software solution retrofitted for India - it is built from the ground up to solve your actual operational bottlenecks.",
  },
];

const WhyUs = () => {
  // Animation Variants
  const leftVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const pointVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-[#FFFFFF] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 xl:gap-20">
          
          {/* LEFT SIDE (45%) */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full lg:w-[45%] flex flex-col items-start"
          >
            <div className="bg-blue-100 text-blue-700 text-xs font-semibold rounded-full px-4 py-1.5 mb-6 uppercase tracking-wider">
              Why Us
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1340] mb-5 tracking-tight leading-[1.1]">
              Built for India.<br />
              Designed for complexity.
            </h2>
            
            <p className="text-[#4B5563] text-base md:text-lg leading-relaxed max-w-md mb-8">
              Indian logistics is not a simplified version of global logistics. It is its own unique problem - with its varied geography, intricate compliance layers, fragmented vendor networks, and a chaotic last-mile reality. That is exactly what we are building this platform for.
            </p>
            
            <Link
              to="/what-we-build"
              className="bg-[#E8732A] text-white rounded-full px-7 py-3.5 font-medium transition-all duration-300 hover:brightness-110 shadow-sm hover:shadow-md inline-block"
            >
              See What We're Building
            </Link>

            {/* Decorative Stat Chips */}
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="bg-[#EEF2FF] text-[#0B1340] text-xs font-medium rounded-full px-4 py-1.5 border border-[#BFDBFE]">
                🇮🇳 India-First
              </span>
              <span className="bg-[#EEF2FF] text-[#0B1340] text-xs font-medium rounded-full px-4 py-1.5 border border-[#BFDBFE]">
                🔗 End-to-End
              </span>
              <span className="bg-[#EEF2FF] text-[#0B1340] text-xs font-medium rounded-full px-4 py-1.5 border border-[#BFDBFE]">
                🤖 AI-Powered
              </span>
            </div>
          </motion.div>

          {/* RIGHT SIDE (55%) */}
          <motion.div
            variants={rightContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full lg:w-[55%] flex flex-col gap-8"
          >
            {whyUsPoints.map((point) => (
              <motion.div
                key={point.id}
                variants={pointVariants}
                className="flex flex-row gap-5 border-l-4 border-[#EEF2FF] pl-5 transition-colors duration-300 hover:border-[#2563EB] group"
              >
                {/* Icon Wrapper */}
                <div className="flex-shrink-0">
                  <div className="bg-orange-50 rounded-xl p-3.5 border border-orange-100 transition-colors group-hover:bg-orange-100/50">
                    <point.icon size={26} color="#E8732A" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col pt-1">
                  <h3 className="text-lg font-bold text-[#0B1340] mb-2">
                    {point.title}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed">
                    {point.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;