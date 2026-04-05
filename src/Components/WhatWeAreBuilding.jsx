import React from "react";
import { Link } from "react-router-dom";
import { Truck, Warehouse, Route } from "lucide-react";
import { motion } from "motion/react";

const modulesData = [
  {
    id: 1,
    icon: Truck,
    title: "Transport Management System",
    description:
      "The TMS module will bring every stage of transportation - from procurement to proof of delivery - into one interface. Planners will be able to assign, track, and audit shipments in real time.",
    link: "/what-we-build",
  },
  {
    id: 2,
    icon: Warehouse,
    title: "Warehouse Management System",
    description:
      "The WMS module will automate stock decisions, guide putaway and picking through intelligent rules, and give warehouse teams a single source of truth for every SKU in the facility.",
    link: "/what-we-build",
  },
  {
    id: 3,
    icon: Route,
    title: "Capacity & Route Planning",
    description:
      "The route planning engine will calculate optimal loads and paths using real constraints - weight, volume, time windows, and geography. Every run will be designed to earn its fuel.",
    link: "/what-we-build",
  },
];

const WhatWeBuilding = () => {
  // Animation Variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-[#FFFFFF] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <div className="bg-blue-100 text-blue-700 text-xs font-semibold rounded-full px-3 py-1 mb-6">
            Our Platform
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] mb-3 tracking-tight">
            Three modules. One connected platform.
          </h2>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            HEALTHYLIFE LOGISTICS PRIVATE LIMITED is building a logistics software
            suite designed to address the most persistent challenges in Indian
            supply chain operations.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {modulesData.map((module) => (
            <motion.div
              key={module.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-white border border-[#E0E7FF] shadow-sm rounded-2xl p-8 flex flex-col gap-4 transition-colors duration-300 hover:border-[#2563EB] hover:shadow-md"
            >
              {/* Icon */}
              <div className="mb-2">
                <module.icon size={36} color="#E8732A" strokeWidth={1.5} />
              </div>

              {/* Title & Body */}
              <h3 className="text-xl font-bold text-[#0B1340]">
                {module.title}
              </h3>
              <p className="text-[#4B5563] text-sm leading-relaxed flex-1">
                {module.description}
              </p>

              {/* Bottom Footer */}
              <div className="mt-4 flex items-center justify-between pt-4 border-t border-[#E0E7FF]/60">
                <span className="bg-blue-100 text-blue-700 text-xs font-medium rounded-full px-3 py-1">
                  In Development
                </span>
                <Link
                  to={module.link}
                  className="text-[#2563EB] font-medium text-sm hover:underline transition-all flex items-center"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeBuilding;