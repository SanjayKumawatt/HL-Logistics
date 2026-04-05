import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const CTABanner = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
    },
  };

  return (
    <section className="relative w-full bg-[#0B1340] py-24 overflow-hidden flex items-center justify-center">
      
      {/* BACKGROUND DECORATIVE ELEMENTS (Absolute & Pointer Events None) */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {/* Concentric Circles */}
        <div className="w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-96 h-96 rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-64 h-64 rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%]"></div>
        <div className="w-32 h-32 rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

        {/* Floating Animated Dots */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-2.5 h-2.5 bg-white/10 rounded-full absolute top-16 left-1/4"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="w-2 h-2 bg-white/10 rounded-full absolute bottom-20 right-1/4"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="w-3 h-3 bg-white/10 rounded-full absolute top-1/3 right-[15%]"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          {/* Tag */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="bg-orange-400/20 text-orange-400 text-xs font-semibold rounded-full px-5 py-2 inline-block uppercase tracking-wider">
              Get Involved Early
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto tracking-tight leading-[1.15]"
          >
            Be part of the platform before it launches.
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            We are currently in active development, building out the core modules. We genuinely believe that the most effective enterprise products are built in close collaboration with the people who will actually use them daily. If you operate a logistics-heavy business in India and want to shape the software of tomorrow, we are open to early conversations. Reach out - we review every inquiry and respond within one working day.
          </motion.p>
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10 w-full sm:w-auto"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/reach-us"
              className="block bg-[#E8732A] text-white rounded-full px-8 py-3.5 font-semibold text-center transition-all duration-300 hover:brightness-110 shadow-lg shadow-[#E8732A]/20"
            >
              Start the Conversation
            </Link>
          </motion.div>
          
          <Link
            to="/what-we-build"
            className="block border-2 border-white/40 text-white rounded-full px-8 py-3.5 font-semibold text-center transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            See What We're Building
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default CTABanner;