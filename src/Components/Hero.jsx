import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Check, ChevronDown } from "lucide-react";

const Hero = () => {
  // Background particles generator
  const particles = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section className="relative w-full min-h-[90vh] bg-gradient-to-br from-[#0B1340] via-[#0D1B6E] to-[#1a237e] overflow-hidden flex items-center pt-25 pb-26 lg:pt-25 lg:pb-25">
      
      {/* BACKGROUND ELEMENTS (z-0) */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {/* Subtle SVG Network Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
              <path d="M2 2 L60 60 M60 2 L2 60" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.3" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#network-pattern)" />
        </svg>

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white opacity-15"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: ["0%", "-400%", "0%"],
              x: ["0%", "200%", "0%"],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT (z-10) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="w-full lg:w-[55%] flex flex-col items-start pt-8 lg:pt-0">
            

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-[#E8732A] mb-1 block"
              >
                HL Logistics :
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-white block"
              >
                AI-powered end-to-end
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-white block mt-1"
              >
                logistics software
              </motion.div>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-white/75 max-w-lg mb-10 leading-relaxed"
            >
              We are building a platform that will power India's logistics and
              fulfilment networks - from transport planning to last-mile
              delivery, all in one place.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link
                to="/what-we-build"
                className="border-2 border-white text-white rounded-full px-7 py-3.5 font-medium text-center transition-colors duration-300 hover:bg-white hover:text-[#0B1340]"
              >
                See What We're Building
              </Link>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/reach-us"
                  className="block bg-[#E8732A] text-white rounded-full px-7 py-3.5 font-medium text-center transition-all duration-300 hover:brightness-110 shadow-[0_4px_14px_0_rgba(232,115,42,0.39)]"
                >
                  Schedule a Meeting
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: VISUAL MOCKUP */}
          <div className="w-full lg:w-[45%] relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            
            {/* Background Network/Globe Rings */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full z-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-[280px] h-[280px] border border-white/10 rounded-full relative">
                {/* Decorative SVG Network Nodes */}
                <svg className="absolute inset-0 w-full h-full overflow-visible" opacity="0.3">
                  <circle cx="0" cy="140" r="4" fill="white" />
                  <circle cx="280" cy="140" r="4" fill="white" />
                  <circle cx="140" cy="0" r="4" fill="white" />
                  <circle cx="140" cy="280" r="4" fill="white" />
                  <line x1="0" y1="140" x2="140" y2="0" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="140" y1="0" x2="280" y2="140" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
              </div>
            </motion.div>

            {/* CSS Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="relative z-10 w-[280px] h-[580px] border-2 border-white/20 bg-white/5 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-4 flex flex-col"
            >
              {/* Inner bezel */}
              <div className="absolute inset-1 border border-white/10 rounded-[2.2rem] pointer-events-none" />
              
              {/* Status Bar */}
              <div className="flex justify-between items-center text-[11px] text-white/70 px-3 mb-6 font-medium mt-1">
                <span>9:41</span>
                <div className="flex gap-1.5 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
                </div>
              </div>

              {/* Mockup Header */}
              <div className="flex items-center gap-3 mb-6 px-1">
                <div className="w-10 h-10 rounded-full bg-[#E8732A]/20 flex items-center justify-center text-[#E8732A] font-bold border border-[#E8732A]/30">
                  HL
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Logistics Hub</div>
                  <div className="text-white/50 text-[10px]">Command Center</div>
                </div>
              </div>

              {/* Card 1: Shipment Status */}
              <div className="bg-white/10 rounded-2xl p-4 mb-4 border border-white/5 shadow-inner">
                <div className="text-xs text-white/70 font-medium mb-3 flex justify-between">
                  <span>Shipment Status</span>
                  <span className="text-[#E8732A]">In Transit</span>
                </div>
                {/* Fake Tracking Bar */}
                <div className="flex gap-2 w-full h-2">
                  <div className="flex-1 bg-[#E8732A] rounded-full shadow-[0_0_8px_rgba(232,115,42,0.6)]" />
                  <div className="flex-1 bg-[#E8732A] rounded-full shadow-[0_0_8px_rgba(232,115,42,0.6)]" />
                  <div className="flex-1 bg-white/20 rounded-full" />
                </div>
                <div className="flex justify-between mt-2 text-[9px] text-white/40">
                  <span>Picked Up</span>
                  <span className="text-[#E8732A]">En Route</span>
                  <span>Delivered</span>
                </div>
              </div>

              {/* Card 2: Active Routes */}
              <div className="bg-white/10 rounded-2xl p-4 flex-1 border border-white/5">
                <div className="text-xs text-white/70 font-medium mb-4">Active Routes</div>
                <div className="space-y-4">
                  {/* Route 1 */}
                  <div>
                    <div className="flex justify-between text-[10px] text-white/60 mb-1.5">
                      <span>Mumbai → Delhi</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div className="bg-blue-400 w-[85%] h-full rounded-full" />
                    </div>
                  </div>
                  {/* Route 2 */}
                  <div>
                    <div className="flex justify-between text-[10px] text-white/60 mb-1.5">
                      <span>Bangalore → Chennai</span>
                      <span>40%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div className="bg-[#E8732A] w-[40%] h-full rounded-full" />
                    </div>
                  </div>
                  {/* Route 3 */}
                  <div>
                    <div className="flex justify-between text-[10px] text-white/60 mb-1.5">
                      <span>Pune → Ahmedabad</span>
                      <span>15%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div className="bg-purple-400 w-[15%] h-full rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Button inside phone */}
              <div className="mt-4 w-full py-3.5 bg-[#E8732A] rounded-xl text-center text-xs text-white font-semibold shadow-md">
                Update Status
              </div>
            </motion.div>

            {/* Floating Card (Outside Phone) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute bottom-8 -right-4 lg:-right-12 z-20"
            >
              
            </motion.div>

          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/50" size={24} />
        </motion.div>
        <span className="text-[10px] text-white/40 mt-1 uppercase tracking-widest">
          Scroll to explore
        </span>
      </div>
      
    </section>
  );
};

export default Hero;