import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ChevronDown,
  Building2,
  Globe,
  Mail,
  MapPin,
  Calendar,
  Users,
  Target,
  MessageSquare,
  Truck,
  Warehouse,
  Route,
  ArrowRight
} from "lucide-react";

const AboutUsPage = () => {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <div className="w-full font-sans bg-white">
      
      {/* =========================================
          SECTION 1: HERO
      ========================================= */}
      <section className="relative w-full min-h-[70vh] bg-gradient-to-br from-[#0B1340] to-[#1a237e] overflow-hidden py-32 flex flex-col items-center justify-center text-center">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          {/* Network Dots Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
          
          {/* Faint Circles */}
          <div className="w-[800px] h-[800px] sm:w-[1200px] sm:h-[1200px] rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs text-white/30 font-medium tracking-wide mb-6"
          >
            Home <span className="mx-2">→</span> About Us
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/10 border border-white/20 text-white/70 text-xs rounded-full px-4 py-1.5 font-semibold tracking-wider mb-6 inline-block"
          >
            HEALTHYLIFE LOGISTICS PRIVATE LIMITED
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl whitespace-pre-line"
          >
            We are building logistics{"\n"}software for the way India{"\n"}actually moves goods.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/60 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            Not a simplified version of a global platform. Not a port of something built for European roads and American warehouses. Something designed from the ground up for Indian complexity.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={32} className="text-white/30 mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: THE OPENING (WHY WE EXIST)
      ========================================= */}
      <section className="w-full bg-[#FFFFFF] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
            
            {/* Left - Pull Quote */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-[40%] flex flex-col relative pt-8"
            >
              <div className="absolute top-0 left-0 text-9xl text-[#E0E7FF] font-serif leading-none select-none -translate-y-6 -translate-x-4">
                "
              </div>
              <h2 className="relative z-10 text-2xl md:text-3xl font-semibold text-[#0B1340] leading-relaxed max-w-sm">
                Indian logistics is not a simplified version of global logistics. It is its own problem.
              </h2>
            </motion.div>

            {/* Right - Body */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-[60%] flex flex-col"
            >
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold rounded-full px-3 py-1 uppercase tracking-wide">Why We Started</span>
              </div>
              
              <h3 className="text-3xl font-bold text-[#0B1340] mb-8 leading-tight">
                The gap was not in ambition.<br />It was in the software.
              </h3>

              <div className="text-gray-600 text-base leading-relaxed space-y-6">
                <p>
                  India moves an enormous volume of goods every day - across state lines, through varying road conditions, via networks of carriers and distributors that have been built over decades on trust and relationships. The logistics sector works. But it works despite its technology, not because of it.
                </p>
                <p>
                  Most logistics software available in India is either a global platform retrofitted for local conditions - and struggling with the fit - or a basic tool that handles one part of the problem while leaving the rest to spreadsheets and phone calls. The gap between what is needed and what is available is real.
                </p>
                <p>
                  HEALTHYLIFE LOGISTICS PRIVATE LIMITED was incorporated in 2026 to build the platform that fills that gap - designed for Indian road networks, Indian compliance requirements, and the real operational conditions that Indian logistics teams face every day.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: WHAT WE ARE BUILDING
      ========================================= */}
      <section className="w-full bg-[#EEF2FF] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide">The Platform</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight whitespace-pre-line mb-4">
              Three modules.{"\n"}One connected system.
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              The platform is in active development. Here is what we are building.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* TMS Card */}
            <motion.div variants={fadeUp} className="bg-white rounded-2xl border border-[#E0E7FF] p-6 md:p-8 flex flex-col shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-orange-50 text-[#E8732A] p-3 rounded-xl">
                  <Truck size={28} />
                </div>
                <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">In Development</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1340] mb-3">Transport Management System</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                End-to-end visibility for every shipment. Plan loads, track vehicles in real time, manage vendors, and maintain a digital document vault.
              </p>
              <Link to="/what-we-build" className="text-[#2563EB] font-medium text-sm flex items-center gap-1.5 hover:underline w-fit">
                See Full Details <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* WMS Card */}
            <motion.div variants={fadeUp} className="bg-white rounded-2xl border border-[#E0E7FF] p-6 md:p-8 flex flex-col shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-blue-50 text-[#2563EB] p-3 rounded-xl">
                  <Warehouse size={28} />
                </div>
                <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">In Development</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1340] mb-3">Warehouse Management System</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                Intelligent automation for inventory control. Real-time stock tracking, guided picking routes, and continuous cycle counts without halting operations.
              </p>
              <Link to="/what-we-build" className="text-[#2563EB] font-medium text-sm flex items-center gap-1.5 hover:underline w-fit">
                See Full Details <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Route Planning Card */}
            <motion.div variants={fadeUp} className="bg-white rounded-2xl border border-[#E0E7FF] p-6 md:p-8 flex flex-col shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-green-50 text-green-600 p-3 rounded-xl">
                  <Route size={28} />
                </div>
                <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">In Development</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1340] mb-3">Route Planning Engine</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                Dynamic calculations for multi-stop routes. Optimise vehicle loads, honour customer time windows, and track cost per drop accurately.
              </p>
              <Link to="/what-we-build" className="text-[#2563EB] font-medium text-sm flex items-center gap-1.5 hover:underline w-fit">
                See Full Details <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: HOW WE THINK (PRINCIPLES)
      ========================================= */}
      <section className="w-full bg-[#FFFFFF] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
            
            {/* Left - Headline */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-[40%] flex flex-col"
            >
              <div className="mb-6">
                <span className="bg-orange-100 text-orange-700 text-xs font-bold rounded-full px-4 py-1.5 uppercase tracking-wide">Our Principles</span>
              </div>
              <h2 className="text-4xl font-bold text-[#0B1340] leading-[1.15] tracking-tight whitespace-pre-line mb-6">
                The decisions we{"\n"}make now will{"\n"}determine what the{"\n"}platform is later.
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-sm">
                We are early. What we prioritise now - in design, in technology choices, in how we think about the problem - will compound. These are the principles we are building with.
              </p>
            </motion.div>

            {/* Right - Principles List */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="w-full lg:w-[60%] flex flex-col gap-10"
            >
              {[
                {
                  num: "01",
                  title: "India first, always",
                  body: "Every design decision starts with Indian operating conditions. Not adapted from somewhere else. Started here."
                },
                {
                  num: "02",
                  title: "Honest about what we are",
                  body: "We are a new company building a platform that is not yet live. We will not pretend otherwise. Startups that overclaim burn trust faster than they build it."
                },
                {
                  num: "03",
                  title: "Problems before features",
                  body: "We are building for specific, documented problems in Indian logistics - not building features and hoping they find a problem to solve."
                },
                {
                  num: "04",
                  title: "Simple to use, complex underneath",
                  body: "The platform will handle genuine complexity - multi-stop routes, batch tracking, compliance documentation. The interface will not show all of it at once."
                },
                {
                  num: "05",
                  title: "Built to last, not to launch",
                  body: "Launch is not the goal. A platform that logistics businesses keep using - because it makes their operations work better every week - is the goal."
                }
              ].map((principle, idx) => (
                <motion.div key={idx} variants={fadeUp} className="flex flex-col border-l-4 border-[#E0E7FF] pl-6 hover:border-[#E8732A] transition-colors duration-300 group">
                  <div className="text-5xl font-bold text-[#E0E7FF] leading-none mb-2 group-hover:text-[#E8732A]/20 transition-colors">{principle.num}</div>
                  <h3 className="text-[#0B1340] font-bold text-xl mb-2">{principle.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-md">{principle.body}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: COMPANY DETAILS
      ========================================= */}
      
      {/* =========================================
          SECTION 6: THE TEAM
      ========================================= */}
      <section className="w-full bg-[#FFFFFF] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="bg-orange-100 text-orange-700 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide">The Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight whitespace-pre-line mb-6">
              A small team building{"\n"}something real.
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We are a small founding team. We are not listing names and titles here - not because we have something to hide, but because a list of job titles on a website does not tell you anything meaningful about whether a team can build what it says it will build. What we can tell you is what we are building, why we are building it, and how to reach us.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <motion.div variants={fadeUp} className="bg-[#EEF2FF] rounded-2xl p-8 text-center flex flex-col items-center hover:bg-blue-50 transition-colors duration-300">
              <div className="bg-white p-3 rounded-full shadow-sm text-[#2563EB] mb-5">
                <Users size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#0B1340] mb-3">Small and focused</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are not a large team. We are building with focus rather than headcount - at this stage, that is the right choice.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[#EEF2FF] rounded-2xl p-8 text-center flex flex-col items-center hover:bg-blue-50 transition-colors duration-300">
              <div className="bg-white p-3 rounded-full shadow-sm text-[#E8732A] mb-5">
                <Target size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#0B1340] mb-3">Logistics-focused</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The problem we are building for is specific. Our focus is on Indian logistics operations - not a platform trying to solve everything for everyone.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[#EEF2FF] rounded-2xl p-8 text-center flex flex-col items-center hover:bg-blue-50 transition-colors duration-300">
              <div className="bg-white p-3 rounded-full shadow-sm text-[#2563EB] mb-5">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#0B1340] mb-3">Reachable</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                If you want to talk to the team, write to inquiry@healthylifelogisol.in. We respond within one working day.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 7: CTA
      ========================================= */}
      <section className="relative w-full bg-[#0B1340] py-24 overflow-hidden flex items-center justify-center">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <div className="w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-96 h-96 rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-64 h-64 rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%]"></div>
          
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="w-2.5 h-2.5 bg-white/10 rounded-full absolute top-16 left-1/4" />
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="w-2 h-2 bg-white/10 rounded-full absolute bottom-20 right-1/4" />
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="w-3 h-3 bg-white/10 rounded-full absolute top-1/3 right-[15%]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            
            <motion.div variants={fadeUp} className="mb-6">
              <span className="bg-white/10 text-white/60 text-xs font-semibold rounded-full px-5 py-2 inline-block uppercase tracking-wider">Get In Touch</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15] whitespace-pre-line">
              We are building this.{"\n"}If it sounds like what{"\n"}you need - write to us.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/60 text-base md:text-lg max-w-xl mx-auto mt-6 leading-relaxed">
              We are open to early conversations with logistics businesses. We do not have a sales team. We respond to enquiries ourselves. Write to us - we will get back to you within one working day.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col items-center gap-3 mt-8">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#E8732A]" />
                <a href="mailto:inquiry@healthylifelogisol.in" className="text-white/80 font-medium text-sm hover:underline">inquiry@healthylifelogisol.in</a>
              </div>
              <div className="flex items-center gap-2 max-w-md text-center">
                <MapPin size={16} className="text-[#E8732A] shrink-0" />
                <span className="text-white/50 text-xs leading-relaxed">Office No. 310 Lunkad Sky, Max, Dapodi Bazar, Pune - 411012</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link to="/reach-us" className="bg-[#E8732A] text-white rounded-full px-8 py-3.5 font-semibold text-center transition-all duration-300 hover:brightness-110 shadow-lg shadow-[#E8732A]/20">
                Start the Conversation
              </Link>
              <Link to="/what-we-build" className="border-2 border-white/30 text-white rounded-full px-8 py-3.5 font-semibold text-center transition-all duration-300 hover:border-white hover:bg-white/10">
                See What We're Building
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;