import React from "react";
import { Package, MapPin, Clock, Zap } from "lucide-react";
import { motion } from "motion/react";

const statsData = [
  {
    id: 1,
    icon: Package,
    title: "3 Core Modules",
    subtext: "Being built in parallel",
  },
  {
    id: 2,
    icon: MapPin,
    title: "Pan-India Scope",
    subtext: "Designed for every state",
  },
  {
    id: 3,
    icon: Clock,
    title: "Real-Time Tracking",
    subtext: "Planned for launch",
  },
  {
    id: 4,
    icon: Zap,
    title: "AI-Powered",
    subtext: "At every decision point",
  },
];

const StatsBar = () => {
  // Animation Variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section className="w-full bg-[#112166] border-y border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <div className="mb-4 bg-[#E8732A]/10 p-3 rounded-2xl border border-[#E8732A]/20 inline-flex items-center justify-center">
                <stat.icon size={28} color="#E8732A" strokeWidth={2} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5 tracking-tight">
                {stat.title}
              </h3>
              <p className="text-sm text-white/60 font-medium">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;