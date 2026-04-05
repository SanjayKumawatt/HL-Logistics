import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Navigation,
  Weight,
  Clock,
  MapPin,
  IndianRupee,
  BarChart2,
  ClipboardList,
  Truck,
  Package,
  PackageOpen,
  TrendingUp,
  TrendingDown,
  Repeat,
  CheckCircle,
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  ShoppingCart,
  Factory,
  Boxes,
  Refrigerator,
  Mail,
  LayoutDashboard,
  Route
} from "lucide-react";

const RoutePlanningPage = () => {
  // Shared Animation Variants
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

  // FAQ State
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "When will the route planning engine be available?",
      a: "The platform is in active development and not yet live. Write to us at inquiry@healthylifelogisol.in to be informed when the engine launches.",
    },
    {
      q: "Does it work for pan-India routes - not just local delivery?",
      a: "Yes. The engine is being designed for inter-city and interstate routes, not just last-mile delivery. Long-haul route planning with multi-day delivery windows is part of the product scope.",
    },
    {
      q: "Can it handle multiple vehicle types in the same fleet?",
      a: "Multi-vehicle fleet management is planned - the engine will account for different vehicle capacities, load types, and compliance requirements within the same route plan.",
    },
    {
      q: "Will it integrate with our existing order management system?",
      a: "API integration is planned to allow order data to flow directly into the route planning engine without manual input. Specific integrations will be confirmed before launch.",
    },
    {
      q: "How does it handle last-minute order changes?",
      a: "Dynamic re-routing for last-minute additions or cancellations is part of the engine design. The system will recalculate affected routes rather than requiring a full rebuild.",
    },
    {
      q: "How do we get involved before launch?",
      a: "We are speaking with fleet operators and logistics businesses now. Reach out at inquiry@healthylifelogisol.in or through the contact page. We respond within one working day.",
    },
  ];

  return (
    <div className="w-full font-sans bg-white">
      
      {/* =========================================
          SECTION 1: PAGE HERO
      ========================================= */}
      <section className="relative w-full min-h-[65vh] bg-gradient-to-br from-[#0B1340] to-[#1a237e] overflow-hidden py-24 flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
            
            {/* HERO LEFT */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="w-full lg:w-[55%] flex flex-col items-start"
            >
              <motion.div variants={fadeRight} className="text-xs text-white/40 font-medium tracking-wide">
                Home <span className="mx-2">→</span> Platform <span className="mx-2">→</span> Route Planning
              </motion.div>
              
              <motion.div variants={fadeRight} className="mt-3 bg-green-400/20 text-green-300 border border-green-400/30 text-xs rounded-full px-4 py-1.5 font-semibold uppercase tracking-wider inline-block">
                Capacity & Route Planning Engine
              </motion.div>

              <motion.h1 variants={fadeRight} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mt-4">
                <span className="block">Every route planned.</span>
                <span className="block">Every kilometre</span>
                <span className="block">accounted for.</span>
              </motion.h1>

              <motion.p variants={fadeRight} className="text-white/60 text-base md:text-lg mt-5 max-w-lg leading-relaxed">
                The route planning engine will calculate optimal delivery routes and vehicle loads using real constraints - weight, volume, time windows, and geography. Every run will be designed to reduce cost per drop and improve on-time delivery rates across India's complex road network.
              </motion.p>

              <motion.div variants={fadeRight} className="flex flex-wrap gap-3 mt-8">
                <div className="bg-white/10 border border-white/20 text-white text-xs font-medium rounded-full px-4 py-2 flex items-center gap-2">
                  <Navigation size={14} className="text-green-400" /> Dynamic Routing
                </div>
                <div className="bg-white/10 border border-white/20 text-white text-xs font-medium rounded-full px-4 py-2 flex items-center gap-2">
                  <Weight size={14} className="text-green-400" /> Load Optimisation
                </div>
                <div className="bg-white/10 border border-white/20 text-white text-xs font-medium rounded-full px-4 py-2 flex items-center gap-2">
                  <Clock size={14} className="text-green-400" /> Time Window Planning
                </div>
              </motion.div>

              <motion.div variants={fadeRight} className="flex flex-wrap gap-4 mt-8">
                <Link to="/reach-us" className="inline-block bg-[#E8732A] text-white font-semibold rounded-full px-6 py-3 hover:brightness-110 transition-all duration-300 shadow-lg shadow-orange-500/20">
                  Register Early Interest
                </Link>
                <Link to="/what-we-build" className="inline-block border border-white/30 text-white font-semibold rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-300">
                  See All Modules
                </Link>
              </motion.div>
            </motion.div>

            {/* HERO RIGHT (Image Visual) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-full lg:w-[45%] flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-md aspect-[4/5] bg-white/5 border border-white/10 rounded-3xl p-3 backdrop-blur-md shadow-2xl relative overflow-hidden group">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
                    alt="Digital Route Map Interface" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1340]/90 via-[#0B1340]/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-white font-semibold text-lg drop-shadow-md mb-2">
                      Route Planning Engine
                    </div>
                    <div className="flex items-center justify-between bg-white/10 border border-white/20 backdrop-blur-md rounded-xl px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-300 text-xs font-bold uppercase tracking-wide">3 Routes Active</span>
                      </div>
                      <span className="text-white/60 text-xs font-medium">Live Optimisation</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: THE PROBLEM
      ========================================= */}
      <section className="w-full bg-[#FFF8F4] border-y border-orange-100 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="bg-orange-100 text-orange-700 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight mb-4 max-w-2xl mx-auto">
              Most delivery routes in India are planned by habit.
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              Same roads. Same sequence. Same vehicles. Regardless of whether it is the most efficient choice.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
          >
            <motion.div variants={fadeUp} className="bg-orange-50 border border-orange-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <Repeat size={32} className="text-[#E8732A] mb-5" />
              <h3 className="text-[#0B1340] font-bold text-lg mb-3">Routes planned by habit</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Drivers take the same road every day because it is familiar - not because it is optimal. Nobody has calculated whether a different sequence would save 40 kilometres. Nobody has time to.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-orange-50 border border-orange-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <PackageOpen size={32} className="text-[#E8732A] mb-5" />
              <h3 className="text-[#0B1340] font-bold text-lg mb-3">Vehicles running half-empty</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Loads are filled based on what is ready, not on what maximises vehicle capacity. Half-empty trucks leave daily. The cost per delivery climbs without anyone deciding to let it.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-orange-50 border border-orange-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <Clock size={32} className="text-[#E8732A] mb-5" />
              <h3 className="text-[#0B1340] font-bold text-lg mb-3">Missed delivery windows</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Customer time windows are noted somewhere - a spreadsheet, a WhatsApp message, a sticky note. Routes are not built around them. Deliveries arrive late. Complaints follow.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-orange-50 border border-orange-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <TrendingUp size={32} className="text-[#E8732A] mb-5" />
              <h3 className="text-[#0B1340] font-bold text-lg mb-3">Rising cost with no clear fix</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Fuel costs, driver overtime, and failed delivery attempts - all rising. The cause is diffuse. No single decision looks wrong. But the total cost per drop keeps climbing.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: CORE CAPABILITIES
      ========================================= */}
      <section className="w-full bg-[#FFFFFF] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide">Core Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight mb-4">What the route planning engine will deliver</h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">Every capability listed is planned for platform launch and in active development.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: Navigation, title: "Dynamic Route Calculation", desc: "Routes calculated using live inputs - traffic conditions, stop density, vehicle type, and road constraints. Not a static plan from last month.", bg: "bg-blue-50", col: "text-[#2563EB]" },
              { icon: Weight, title: "Load & Capacity Optimisation", desc: "Vehicle loads calculated against weight, volume, and item compatibility constraints. Every vehicle will leave carrying what it should - not less.", bg: "bg-orange-50", col: "text-[#E8732A]" },
              { icon: Clock, title: "Time Window Management", desc: "Customer delivery windows factored into every route. The engine will plan sequences that honour commitments - not just minimise distance.", bg: "bg-blue-50", col: "text-[#2563EB]" },
              { icon: MapPin, title: "Multi-Stop Sequencing", desc: "Stops ordered for minimum drive time and maximum on-time performance. The engine considers road type, stop cluster, and vehicle capacity together.", bg: "bg-orange-50", col: "text-[#E8732A]" },
              { icon: IndianRupee, title: "Cost Per Drop Tracking", desc: "Every route tracked against its actual cost - fuel, time, and vehicle. Surfaced for review so managers can identify where efficiency is being lost.", bg: "bg-blue-50", col: "text-[#2563EB]" },
              { icon: BarChart2, title: "Route Performance Analytics", desc: "On-time rates, distance per delivery, cost trends, and driver performance - available as reports without manual data entry.", bg: "bg-orange-50", col: "text-[#E8732A]" }
            ].map((feature, idx) => (
              <motion.div variants={fadeUp} key={idx} className="bg-white border border-[#E0E7FF] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#2563EB] transition-all duration-300">
                <div className={`${feature.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-5`}>
                  <feature.icon size={24} className={feature.col} />
                </div>
                <h3 className="text-[#0B1340] font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: HOW IT WORKS (STEP BY STEP)
      ========================================= */}
      <section className="w-full bg-[#F0F4FF] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight">From order list to<br />optimised route - in minutes.</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-2 xl:gap-4"
          >
            {[
              { num: "1", icon: ClipboardList, title: "Upload Orders", desc: "Delivery orders imported - destination, weight, volume, and time window.", iconCol: "text-[#E8732A]" },
              { num: "2", icon: Truck, title: "Set Vehicle Fleet", desc: "Available vehicles entered with capacity, type, and starting point.", iconCol: "text-[#2563EB]" },
              { num: "3", icon: Navigation, title: "Engine Calculates", desc: "Route planning engine processes all constraints and generates optimal routes.", iconCol: "text-[#E8732A]" },
              { num: "4", icon: Weight, title: "Loads Assigned", desc: "Each vehicle assigned an optimised load based on capacity and route.", iconCol: "text-[#2563EB]" },
              { num: "5", icon: MapPin, title: "Routes Dispatched", desc: "Drivers receive routes on mobile. Tracking begins from departure.", iconCol: "text-[#E8732A]" },
              { num: "6", icon: BarChart2, title: "Performance Reviewed", desc: "Actual vs planned compared. Cost per drop updated automatically.", iconCol: "text-[#2563EB]" }
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <motion.div variants={fadeRight} className="w-full max-w-[220px] bg-white rounded-2xl border border-[#E0E7FF] p-5 shadow-sm flex flex-col items-center relative z-10">
                  <div className="bg-[#0B1340] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center mb-3">
                    {step.num}
                  </div>
                  <step.icon size={24} className={`mb-2 ${step.iconCol}`} />
                  <h4 className="text-[#0B1340] font-semibold text-sm mb-1 text-center">{step.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed text-center">{step.desc}</p>
                </motion.div>
                
                {idx < 5 && (
                  <>
                    <ChevronRight size={20} className="text-[#BFDBFE] hidden lg:block shrink-0" />
                    <ChevronDown size={20} className="text-[#BFDBFE] lg:hidden my-1 shrink-0" />
                  </>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: FEATURE DEEP DIVE
      ========================================= */}
      <section className="w-full bg-[#FFFFFF] py-10 overflow-hidden">
        
        {/* BLOCK 1: DYNAMIC ROUTING */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 py-16 border-b border-[#F3F4F6]">
          {/* VISUAL LEFT (Image) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
              <img 
                src="https://images.unsplash.com/photo-1569098644584-210bcd375b59?q=80&w=1200&auto=format&fit=crop" 
                alt="Dynamic Traffic and Route Calculation" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          </motion.div>

          {/* TEXT RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wide mb-3">Dynamic Route Calculation</span>
            <h3 className="text-3xl font-bold text-[#0B1340] leading-tight mb-4">
              Routes built on<br />data, not on<br />yesterday's habit.
            </h3>
            <div className="text-[#4B5563] text-sm leading-relaxed space-y-4 mb-6">
              <p>A delivery route planned manually at 8am may already be wrong by 9am. A blocked expressway, a vehicle running late, a new urgent order - any of these changes the optimal plan.</p>
              <p>The route planning engine will calculate routes using live inputs. Stop density, vehicle capacity, road conditions, and delivery windows processed together to generate the most efficient sequence. Every time. Without a planner spending two hours in a spreadsheet.</p>
            </div>
            <div className="flex flex-col gap-2">
              {["Routes recalculated with real constraints", "New orders inserted into active plans", "Road and traffic conditions factored in"].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-[#0B1340] font-medium">
                  <div className="bg-green-100 rounded-full p-0.5 mt-0.5 shrink-0"><CheckCircle size={14} className="text-green-600" /></div>
                  {point}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BLOCK 2: LOAD & CAPACITY */}
        <div className="w-full bg-[#F0F4FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-16 py-16">
            {/* TEXT LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-1/2 flex flex-col"
            >
              <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wide mb-3">Load & Capacity Optimisation</span>
              <h3 className="text-3xl font-bold text-[#0B1340] leading-tight mb-4">
                Vehicles that leave<br />full and return<br />on schedule.
              </h3>
              <div className="text-[#4B5563] text-sm leading-relaxed space-y-4 mb-6">
                <p>An underfilled vehicle is a cost that nobody budgeted for. A vehicle overloaded past its compliance limit is a liability. Both happen when loading decisions are made manually under time pressure.</p>
                <p>The engine will calculate optimal loads against vehicle capacity - weight, volume, and item compatibility considered together. Every vehicle will be loaded to its optimal level. Not to whatever was ready first.</p>
              </div>
              <div className="flex flex-col gap-2">
                {["Weight and volume calculated per vehicle", "Item compatibility rules enforced", "Compliance limits respected automatically"].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-[#0B1340] font-medium">
                    <div className="bg-green-100 rounded-full p-0.5 mt-0.5 shrink-0"><CheckCircle size={14} className="text-green-600" /></div>
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* VISUAL RIGHT (Image) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
                <img 
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop" 
                  alt="Optimal Loading and Vehicle Capacity" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BLOCK 3: TIME WINDOWS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 py-16 border-b border-[#F3F4F6]">
          {/* VISUAL LEFT (Image) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
              <img 
                src="https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=1200&auto=format&fit=crop" 
                alt="Delivery Time Window Management" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          </motion.div>

          {/* TEXT RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wide mb-3">Time Window Management</span>
            <h3 className="text-3xl font-bold text-[#0B1340] leading-tight mb-4">
              Deliveries that arrive<br />when customers<br />expect them.
            </h3>
            <div className="text-[#4B5563] text-sm leading-relaxed space-y-4 mb-6">
              <p>Delivery windows are a commitment. When a business tells a customer their order will arrive between 2pm and 4pm, that window needs to be built into the route - not noted on a sticky note and hoped for.</p>
              <p>The engine will factor delivery windows into route sequencing from the start. Stops will be ordered to honour each window. Where a conflict exists, the system will flag it - before the driver leaves, not while they are on the road.</p>
            </div>
            <div className="flex flex-col gap-2">
              {["Time windows built into route sequencing", "Conflicts flagged before dispatch", "At-risk deliveries surfaced in real time"].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-[#0B1340] font-medium">
                  <div className="bg-green-100 rounded-full p-0.5 mt-0.5 shrink-0"><CheckCircle size={14} className="text-green-600" /></div>
                  {point}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BLOCK 4: COST ANALYTICS */}
        <div className="w-full bg-[#F0F4FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-16 py-16">
            {/* TEXT LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-1/2 flex flex-col"
            >
              <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wide mb-3">Cost Per Drop Analytics</span>
              <h3 className="text-3xl font-bold text-[#0B1340] leading-tight mb-4">
                Know exactly what<br />each delivery<br />actually costs.
              </h3>
              <div className="text-[#4B5563] text-sm leading-relaxed space-y-4 mb-6">
                <p>Most businesses know their monthly fuel bill. Very few know the cost of a single delivery on a specific lane, with a specific vehicle type, on a Tuesday versus a Friday.</p>
                <p>The route planning engine will track cost per drop by route, vehicle, and lane. Over time, this data will show where efficiency is being lost - and what changes will recover it. The goal is not just to plan better routes today. It is to make every week's routes better than last week's.</p>
              </div>
              <div className="flex flex-col gap-2">
                {["Cost per drop tracked per route and lane", "Vehicle efficiency compared automatically", "Trend data shows where to improve"].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-[#0B1340] font-medium">
                    <div className="bg-green-100 rounded-full p-0.5 mt-0.5 shrink-0"><CheckCircle size={14} className="text-green-600" /></div>
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* VISUAL RIGHT (Image) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
                  alt="Cost Tracking and Route Analytics" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 6: WHO THIS IS FOR
      ========================================= */}
      <section className="w-full bg-[#EEF2FF] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide">Who This Is Built For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight">Built for operations<br />where delivery efficiency matters.</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
          >
            {[
              { icon: Truck, title: "Logistics & Transport Companies", desc: "Fleet operators running multi-stop delivery routes who need to optimise vehicle utilisation and reduce cost per delivery consistently.", col: "text-[#E8732A]" },
              { icon: ShoppingCart, title: "E-Commerce & D2C Brands", desc: "High daily delivery volumes with customer time window commitments - where route efficiency directly affects customer satisfaction.", col: "text-[#2563EB]" },
              { icon: Factory, title: "FMCG Distributors", desc: "Wide distribution networks with many stops per route and tight delivery schedules driven by retail shelf replenishment cycles.", col: "text-[#E8732A]" },
              { icon: Refrigerator, title: "Cold Chain Operators", desc: "Temperature-sensitive deliveries that cannot afford delays or route deviations - where planning accuracy is critical.", col: "text-[#2563EB]" },
              { icon: Boxes, title: "3PL Providers", desc: "Multi-client route planning with separate performance tracking and reporting per client operation.", col: "text-[#E8732A]" }
            ].map((audience, idx) => (
              <motion.div variants={fadeUp} key={idx} className="bg-white rounded-2xl border border-[#E0E7FF] p-6 shadow-sm w-full md:w-[calc(50%-12px)] lg:w-72 flex flex-col hover:border-[#2563EB] hover:shadow-md hover:scale-105 transition-all duration-300">
                <audience.icon size={32} className={`${audience.col} mb-4`} />
                <h3 className="text-[#0B1340] font-bold text-lg mb-2">{audience.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{audience.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 7: LIVE DASHBOARD PREVIEW (Image)
      ========================================= */}
      <section className="w-full bg-[#0B1340] py-24 overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="bg-white/10 text-white/70 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide border border-white/10">Platform Preview</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">This is what the route<br />planning dashboard<br />will look like.</h2>
            <p className="text-white/50 text-base max-w-lg mx-auto">An early look at the interface being designed for fleet managers and logistics planners.</p>
          </motion.div>

          {/* DASHBOARD IMAGE WRAPPER */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full bg-[#0D1550] rounded-2xl border border-white/10 shadow-2xl overflow-hidden hidden md:flex flex-col max-w-5xl mx-auto"
          >
            {/* Top Browser Bar */}
            <div className="bg-[#060d2e] px-4 py-3 flex items-center border-b border-white/5">
              <div className="flex gap-2 mr-6">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="bg-white/10 rounded-full px-4 py-1.5 text-white/30 text-[10px] flex-1 max-w-lg mx-auto font-mono text-center border border-white/5">
                app.healthylifelogisol.in/route-planning
              </div>
            </div>

            {/* High-res Dashboard Image */}
            <div className="w-full aspect-[16/9] relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1800&auto=format&fit=crop" 
                alt="Software Route Planning Dashboard Preview" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0B1340]/20 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Mobile Fallback */}
          <div className="md:hidden text-center text-white/50 text-sm border border-white/10 rounded-xl p-8 bg-white/5">
            Please view on a desktop or tablet screen to see the full dashboard preview.
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 8: FAQ
      ========================================= */}
      <section className="w-full bg-[#FFFFFF] py-24 overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight">Common questions about<br />the route planning engine</h2>
          </motion.div>

          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="border-b border-[#E0E7FF] py-5 overflow-hidden"
              >
                <div 
                  className="flex justify-between items-center cursor-pointer group"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-[#0B1340] font-semibold text-base pr-8 group-hover:text-[#2563EB] transition-colors">{faq.q}</h3>
                  <ChevronDown 
                    size={20} 
                    className={`text-gray-400 shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-[#2563EB]' : ''}`} 
                  />
                </div>
                
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="text-gray-600 text-sm leading-relaxed pt-4 pb-2">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 9: CTA BANNER
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
              <span className="bg-green-400/20 text-green-300 text-xs font-semibold rounded-full px-5 py-2 inline-block uppercase tracking-wider">Register Early Interest</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Be among the first to<br />use the route planning<br />engine when it launches.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/60 text-base md:text-lg max-w-xl mx-auto mt-6 leading-relaxed">
              We are speaking with fleet managers and logistics businesses before the platform goes live. If delivery efficiency and cost per drop are challenges you face, we want to hear from you.
            </motion.p>

            <motion.div variants={fadeUp} className="flex justify-center items-center gap-2 mt-6">
              <Mail size={18} className="text-[#E8732A]" />
              <span className="text-white/60 text-sm font-medium">inquiry@healthylifelogisol.in</span>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link to="/reach-us" className="bg-[#E8732A] text-white rounded-full px-8 py-3.5 font-semibold text-center transition-all duration-300 hover:brightness-110 shadow-lg shadow-[#E8732A]/20">
                Register Early Interest
              </Link>
              <Link to="/what-we-build" className="border-2 border-white/30 text-white rounded-full px-8 py-3.5 font-semibold text-center transition-all duration-300 hover:border-white hover:bg-white/10">
                Explore Other Modules
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default RoutePlanningPage;