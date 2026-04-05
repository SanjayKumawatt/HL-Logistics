import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Truck,
  Warehouse,
  Route,
  TrendingUp,
  Check,
  Minus,
  Server,
  Shield,
  Smartphone,
  Plug,
  Mail,
  MapPin,
  BarChart2,
  ChevronRight,
  ChevronDown,
  AlertTriangle,
} from "lucide-react";

const WhatWeBuild = () => {
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
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <div className="w-full font-sans bg-white">
      
      {/* =========================================
          SECTION 1: PAGE HERO
      ========================================= */}
      <section className="relative w-full min-h-[60vh] bg-gradient-to-br from-[#0B1340] to-[#1a237e] overflow-hidden py-24 flex items-center">
        {/* Network Pattern Background */}
        <svg className="absolute inset-0 w-full h-full z-0 opacity-10 pointer-events-none" aria-hidden="true">
          <defs>
            <pattern id="network-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#network-dots)" />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
            
            {/* HERO LEFT */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="w-full lg:w-[55%] flex flex-col items-start"
            >
              <motion.div variants={fadeRight} className="text-xs text-white/40 mb-6 font-medium tracking-wide">
                Home <span className="mx-2">→</span> What We Build
              </motion.div>
              
              <motion.div variants={fadeRight} className="bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs rounded-full px-4 py-1.5 font-semibold uppercase tracking-wider mb-4">
                Our Platform
              </motion.div>

              <motion.h1 variants={fadeRight} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight">
                <span className="block">One platform.</span>
                <span className="block mt-1">Three modules.</span>
                <span className="block mt-1">Zero gaps.</span>
              </motion.h1>

              <motion.p variants={fadeRight} className="text-white/60 text-base md:text-lg mt-6 max-w-lg leading-relaxed">
                HEALTHYLIFE LOGISTICS PRIVATE LIMITED is building an end-to-end logistics software suite for India. The platform will connect transport planning, warehouse operations, and delivery routing into one seamless system - designed from scratch for the complexity of Indian supply chains.
              </motion.p>

              <motion.div variants={fadeRight} className="flex flex-wrap gap-3 mt-10">
                <div className="bg-white/10 border border-white/20 text-white text-sm font-medium rounded-full px-4 py-2.5 flex items-center gap-2">
                  <Truck size={16} className="text-[#E8732A]" /> Transport Management
                </div>
                <div className="bg-white/10 border border-white/20 text-white text-sm font-medium rounded-full px-4 py-2.5 flex items-center gap-2">
                  <Warehouse size={16} className="text-[#E8732A]" /> Warehouse Management
                </div>
                <div className="bg-white/10 border border-white/20 text-white text-sm font-medium rounded-full px-4 py-2.5 flex items-center gap-2">
                  <Route size={16} className="text-[#E8732A]" /> Route Planning
                </div>
              </motion.div>

              <motion.div variants={fadeRight} className="mt-10">
                <Link to="/reach-us" className="inline-block bg-[#E8732A] text-white font-semibold rounded-full px-8 py-3.5 hover:brightness-110 transition-all duration-300 shadow-lg shadow-orange-500/20">
                  Reach Out Early
                </Link>
              </motion.div>
            </motion.div>

            {/* HERO RIGHT (CSS Visual) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-full lg:w-[45%] flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md shadow-2xl flex flex-col items-center">
                
                {/* Card A: TMS */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="w-full bg-[#1a237e] border border-blue-400/30 rounded-xl p-5 shadow-inner">
                  <div className="flex items-center gap-3 mb-3">
                    <Truck size={24} className="text-orange-400" />
                    <div>
                      <div className="font-bold text-white leading-tight">TMS</div>
                      <div className="text-white/60 text-xs">Transport Management System</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-white/10 text-white/80 text-[11px] rounded px-2 py-0.5">Planning</span>
                    <span className="bg-white/10 text-white/80 text-[11px] rounded px-2 py-0.5">Tracking</span>
                    <span className="bg-white/10 text-white/80 text-[11px] rounded px-2 py-0.5">Auditing</span>
                  </div>
                </motion.div>

                <ChevronDown size={24} className="text-orange-400 my-2 opacity-80" />

                {/* Card B: WMS */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="w-full bg-[#1a237e] border border-blue-400/30 rounded-xl p-5 shadow-inner">
                  <div className="flex items-center gap-3 mb-3">
                    <Warehouse size={24} className="text-[#2563EB]" />
                    <div>
                      <div className="font-bold text-white leading-tight">WMS</div>
                      <div className="text-white/60 text-xs">Warehouse Management System</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-white/10 text-white/80 text-[11px] rounded px-2 py-0.5">Inventory</span>
                    <span className="bg-white/10 text-white/80 text-[11px] rounded px-2 py-0.5">Putaway</span>
                    <span className="bg-white/10 text-white/80 text-[11px] rounded px-2 py-0.5">Picking</span>
                  </div>
                </motion.div>

                <ChevronDown size={24} className="text-orange-400 my-2 opacity-80" />

                {/* Card C: RPE */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="w-full bg-[#1a237e] border border-blue-400/30 rounded-xl p-5 shadow-inner">
                  <div className="flex items-center gap-3 mb-3">
                    <Route size={24} className="text-green-400" />
                    <div>
                      <div className="font-bold text-white leading-tight">RPE</div>
                      <div className="text-white/60 text-xs">Route Planning Engine</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-white/10 text-white/80 text-[11px] rounded px-2 py-0.5">Capacity</span>
                    <span className="bg-white/10 text-white/80 text-[11px] rounded px-2 py-0.5">Routing</span>
                    <span className="bg-white/10 text-white/80 text-[11px] rounded px-2 py-0.5">ETA</span>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: PLATFORM OVERVIEW STRIP
      ========================================= */}
      <section className="w-full bg-[#EEF2FF] border-y border-[#BFDBFE] py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-2xl md:text-3xl font-bold text-[#0B1340] mb-3 tracking-tight">
            How the three modules connect
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-12">
            Each module works independently - but together they form a complete logistics operating system. Data flows from transport to warehouse to last-mile without manual handoffs.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6"
          >
            {/* Box 1 */}
            <motion.div variants={fadeRight} className="w-full max-w-xs bg-white rounded-xl border border-[#E0E7FF] shadow-sm px-6 py-5 flex flex-col items-center">
              <Truck size={28} className="text-[#E8732A] mb-2" />
              <div className="font-bold text-[#0B1340] text-lg">TMS</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mt-1 font-medium">Transport Layer</div>
            </motion.div>

            <ChevronRight size={24} className="text-[#2563EB] rotate-90 lg:rotate-0 hidden sm:block opacity-50" />
            <ChevronDown size={24} className="text-[#2563EB] sm:hidden opacity-50" />

            {/* Box 2 */}
            <motion.div variants={fadeRight} className="w-full max-w-xs bg-white rounded-xl border border-[#E0E7FF] shadow-sm px-6 py-5 flex flex-col items-center">
              <Warehouse size={28} className="text-[#2563EB] mb-2" />
              <div className="font-bold text-[#0B1340] text-lg">WMS</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mt-1 font-medium">Warehouse Layer</div>
            </motion.div>

            <ChevronRight size={24} className="text-[#2563EB] rotate-90 lg:rotate-0 hidden sm:block opacity-50" />
            <ChevronDown size={24} className="text-[#2563EB] sm:hidden opacity-50" />

            {/* Box 3 */}
            <motion.div variants={fadeRight} className="w-full max-w-xs bg-white rounded-xl border border-[#E0E7FF] shadow-sm px-6 py-5 flex flex-col items-center">
              <Route size={28} className="text-[#E8732A] mb-2" />
              <div className="font-bold text-[#0B1340] text-lg">RPE</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mt-1 font-medium">Delivery Layer</div>
            </motion.div>

            <ChevronRight size={24} className="text-[#2563EB] rotate-90 lg:rotate-0 hidden sm:block opacity-50" />
            <ChevronDown size={24} className="text-[#2563EB] sm:hidden opacity-50" />

            {/* Box 4 */}
            <motion.div variants={fadeRight} className="w-full max-w-xs bg-[#0B1340] rounded-xl shadow-md px-6 py-5 flex flex-col items-center">
              <BarChart2 size={28} className="text-[#E8732A] mb-2" />
              <div className="font-bold text-white text-lg">Analytics</div>
              <div className="text-xs text-white/50 uppercase tracking-wide mt-1 font-medium">Unified Dashboard</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: MODULE 1 - TMS
      ========================================= */}
      <section className="w-full bg-[#FFFFFF] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          
          {/* VISUAL LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="w-full max-w-xl bg-[#F8FAFF] rounded-3xl border border-[#E0E7FF] p-6 shadow-lg">
              {/* Top bar */}
              <div className="flex justify-between items-center border-b border-[#E0E7FF] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="text-sm font-semibold text-[#0B1340]">Transport Management System</div>
                  <span className="flex items-center gap-1 bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Live</span>
                </div>
                <div className="text-xs text-gray-400 font-medium">Today, April 2026</div>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                <span className="bg-[#0B1340] text-white rounded-full px-4 py-1.5 text-xs font-medium cursor-default">Overview</span>
                <span className="text-gray-500 px-3 py-1.5 text-xs font-medium cursor-default">Shipments</span>
                <span className="text-gray-500 px-3 py-1.5 text-xs font-medium cursor-default">Reports</span>
              </div>

              {/* Mini Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl border border-[#E0E7FF] p-4 flex flex-col shadow-sm">
                  <span className="text-xs text-gray-500 font-medium mb-1">Total Shipments</span>
                  <div className="flex items-center justify-between">
                    <span className="text-[#0B1340] font-bold text-xl">1,284</span>
                    <TrendingUp size={16} className="text-green-500" />
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-[#E0E7FF] p-4 flex flex-col shadow-sm">
                  <span className="text-xs text-gray-500 font-medium mb-1">In Transit</span>
                  <div className="flex items-center justify-between">
                    <span className="text-[#0B1340] font-bold text-xl">342</span>
                    <span className="bg-orange-100 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded">Active</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-[#E0E7FF] p-4 flex flex-col shadow-sm">
                  <span className="text-xs text-gray-500 font-medium mb-1">Delivered Today</span>
                  <div className="flex items-center justify-between">
                    <span className="text-[#0B1340] font-bold text-xl">98</span>
                    <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded">Done</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-[#E0E7FF] p-4 flex flex-col shadow-sm">
                  <span className="text-xs text-gray-500 font-medium mb-1">Pending Dispatch</span>
                  <div className="flex items-center justify-between">
                    <span className="text-[#0B1340] font-bold text-xl">56</span>
                    <span className="bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded">Wait</span>
                  </div>
                </div>
              </div>

              {/* Shipment Table */}
              <div className="bg-white rounded-xl border border-[#E0E7FF] p-4 shadow-sm">
                <div className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">Recent Shipments</div>
                <div className="flex flex-col">
                  <div className="py-2.5 border-b border-[#F3F4F6] text-xs text-gray-600 flex justify-between items-center">
                    <span className="font-semibold text-[#0B1340] w-16">#TMS-1042</span>
                    <span className="w-24">Pune → Mumbai</span>
                    <span className="hidden sm:inline w-28 truncate">Rajesh Transport</span>
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded font-medium text-[10px]">In Transit</span>
                  </div>
                  <div className="py-2.5 border-b border-[#F3F4F6] text-xs text-gray-600 flex justify-between items-center">
                    <span className="font-semibold text-[#0B1340] w-16">#TMS-1039</span>
                    <span className="w-24">Delhi → Jaipur</span>
                    <span className="hidden sm:inline w-28 truncate">FastMove Logistics</span>
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded font-medium text-[10px]">Delivered</span>
                  </div>
                  <div className="py-2.5 text-xs text-gray-600 flex justify-between items-center">
                    <span className="font-semibold text-[#0B1340] w-16">#TMS-1051</span>
                    <span className="w-24">Chennai → Blr</span>
                    <span className="hidden sm:inline w-28 truncate">QuickShip</span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded font-medium text-[10px]">Planned</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* TEXT RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <div className="mb-4">
              <span className="bg-orange-100 text-orange-700 text-xs font-bold rounded-full px-3 py-1 mr-3">Module 01</span>
              <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wide">Transport Management System</span>
            </div>
            
            <h3 className="text-4xl font-bold text-[#0B1340] leading-tight tracking-tight mt-2 mb-4">
              <span className="block">Every shipment.</span>
              <span className="block">Every stage.</span>
              <span className="block">In one place.</span>
            </h3>

            <div className="text-[#4B5563] text-base leading-relaxed space-y-4 mb-8">
              <p>Managing transport across India means dealing with multiple vendors, unpredictable routes, and a documentation trail that is hard to hold together. The TMS module will bring all of this into a single interface.</p>
              <p>From the moment a shipment is planned to the moment it is delivered and invoiced, every action will be visible, assigned, and auditable. Planners will not need to chase updates over phone calls. The system will surface what needs attention - before it becomes a problem.</p>
            </div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-4">
              {[
                { title: "Shipment Planning", desc: "Create and assign loads across multiple vendors from one screen." },
                { title: "Real-Time Tracking", desc: "Live location and status updates for every active shipment." },
                { title: "Vendor Management", desc: "Maintain a structured vendor list with rate cards, performance records, and contact details." },
                { title: "Document Management", desc: "LR copies, invoices, and PODs attached to each shipment - searchable and auditable." },
                { title: "Exception Alerts", desc: "Automated flags for delays, missing documents, or SLA breaches - before they escalate." }
              ].map((feature, idx) => (
                <motion.div variants={fadeUp} key={idx} className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-0.5 shrink-0">
                    <Check size={14} className="text-green-600 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0B1340] text-sm mr-1">{feature.title}:</span>
                    <span className="text-gray-500 text-sm">{feature.desc}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            
          </motion.div>

        </div>
      </section>

      {/* =========================================
          SECTION 4: MODULE 2 - WMS
      ========================================= */}
      <section className="w-full bg-[#F0F4FF] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-16">
          
          {/* TEXT LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <div className="mb-4 flex items-center flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-700 text-xs font-bold rounded-full px-3 py-1">Module 02</span>
              <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wide">Warehouse Management System</span>
            </div>
            
            <h3 className="text-4xl font-bold text-[#0B1340] leading-tight tracking-tight mt-2 mb-4">
              <span className="block">Smarter warehouses</span>
              <span className="block">start with better</span>
              <span className="block">decisions.</span>
            </h3>

            <div className="text-[#4B5563] text-base leading-relaxed space-y-4 mb-8">
              <p>Warehouse inefficiency rarely announces itself. It accumulates - in misplaced inventory, in manual cycle counts that take all day, in picking errors that cause returns, in stock-outs that nobody saw coming.</p>
              <p>The WMS module will replace these slow, manual processes with intelligent automation. Every bin, every SKU, every movement will be tracked. The system will guide putaway, direct picking, and surface reorder signals before shelves run dry.</p>
            </div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-4">
              {[
                { title: "Inventory Tracking", desc: "Real-time stock levels across all bins, racks, and zones in the facility." },
                { title: "Intelligent Putaway", desc: "The system will assign bin locations based on SKU velocity, weight, and zone rules." },
                { title: "Guided Picking", desc: "Pick lists optimised by route inside the warehouse - reducing walk time and errors." },
                { title: "Cycle Count Automation", desc: "Scheduled and triggered counts that do not require shutting down operations." },
                { title: "Reorder Signals", desc: "Stock thresholds trigger alerts before inventory runs out." }
              ].map((feature, idx) => (
                <motion.div variants={fadeUp} key={idx} className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-0.5 shrink-0">
                    <Check size={14} className="text-green-600 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0B1340] text-sm mr-1">{feature.title}:</span>
                    <span className="text-gray-500 text-sm">{feature.desc}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* VISUAL RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="w-full max-w-xl bg-white rounded-3xl border border-[#E0E7FF] p-6 shadow-lg">
              <div className="flex justify-between items-center border-b border-[#E0E7FF] pb-4 mb-5">
                <div className="text-sm font-semibold text-[#0B1340]">Warehouse Overview</div>
                <div className="text-xs text-gray-500 font-medium">Zone A - Pune Facility</div>
              </div>

              {/* Grid 2x3 */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                {[
                  { name: "Zone A", count: "842", percent: "85%", bg: "bg-green-500", iconCol: "text-blue-500" },
                  { name: "Zone B", count: "634", percent: "72%", bg: "bg-blue-500", iconCol: "text-blue-500" },
                  { name: "Zone C", count: "291", percent: "38%", bg: "bg-orange-400", iconCol: "text-orange-500" },
                  { name: "Zone D", count: "1,204", percent: "91%", bg: "bg-green-500", iconCol: "text-blue-500" },
                  { name: "Zone E", count: "78", percent: "12%", bg: "bg-red-500", badge: true, iconCol: "text-red-500" },
                  { name: "Zone F", count: "445", percent: "55%", bg: "bg-blue-400", iconCol: "text-blue-500" }
                ].map((zone, idx) => (
                  <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.08 }}
                    viewport={{ once: true }}
                    key={idx} 
                    className="bg-[#F8FAFF] rounded-xl border border-[#E0E7FF] p-3.5 shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-1.5">
                        <Warehouse size={14} className={zone.iconCol} />
                        <span className="text-xs font-bold text-[#0B1340]">{zone.name}</span>
                      </div>
                      {zone.badge && <span className="bg-red-100 text-red-600 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">Low Stock</span>}
                    </div>
                    <div className="text-[10px] text-gray-500 font-medium mb-1.5">{zone.count} SKUs</div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className={`${zone.bg} h-1.5 rounded-full`} style={{ width: zone.percent }}></div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================
          SECTION 5: MODULE 3 - ROUTE PLANNING
      ========================================= */}
      <section className="w-full bg-[#FFFFFF] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          
          {/* VISUAL LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="w-full max-w-xl bg-[#F8FAFF] rounded-3xl border border-[#E0E7FF] p-6 shadow-lg">
              <div className="flex justify-between items-center mb-5">
                <div className="text-sm font-semibold text-[#0B1340]">Route Planning Engine</div>
                <div className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">3 Active Routes</div>
              </div>

              {/* Map Area */}
              <div className="bg-[#EEF2FF] rounded-2xl p-4 relative h-64 border border-[#E0E7FF] overflow-hidden mb-5">
                {/* SVG Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
                  {/* Pune to Mumbai */}
                  <line x1="15%" y1="50%" x2="33%" y2="20%" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="4 4" />
                  {/* Pune to Nashik */}
                  <line x1="15%" y1="50%" x2="70%" y2="30%" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="4 4" />
                  {/* Nashik to Aurangabad */}
                  <line x1="70%" y1="30%" x2="85%" y2="75%" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="4 4" />
                </svg>

                {/* Nodes */}
                <div className="absolute top-[50%] left-[15%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-7 h-7 bg-[#0B1340] rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-sm z-10">P</div>
                  <span className="text-[10px] font-bold text-[#0B1340] mt-1 bg-white/50 px-1 rounded backdrop-blur-sm">Pune</span>
                </div>
                
                <div className="absolute top-[20%] left-[33%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-7 h-7 bg-[#E8732A] rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-sm z-10">M</div>
                  <span className="text-[10px] font-bold text-[#0B1340] mt-1 bg-white/50 px-1 rounded backdrop-blur-sm">Mumbai</span>
                </div>

                <div className="absolute top-[30%] left-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-7 h-7 bg-[#2563EB] rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-sm z-10">N</div>
                  <span className="text-[10px] font-bold text-[#0B1340] mt-1 bg-white/50 px-1 rounded backdrop-blur-sm">Nashik</span>
                </div>

                <div className="absolute top-[75%] left-[85%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-7 h-7 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-sm z-10">A</div>
                  <span className="text-[10px] font-bold text-[#0B1340] mt-1 bg-white/50 px-1 rounded backdrop-blur-sm">Aurangabad</span>
                </div>

                {/* Route Badges floating */}
                <div className="absolute top-[30%] left-[20%] bg-orange-100 text-orange-700 text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm border border-orange-200">Route 1 · 148 km</div>
                <div className="absolute top-[38%] left-[45%] bg-blue-100 text-blue-700 text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm border border-blue-200">Route 2 · 211 km</div>
                <div className="absolute top-[52%] left-[75%] bg-gray-100 text-gray-600 text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm border border-gray-200">Route 3 · 112 km</div>

                {/* Animated Truck */}
                <motion.div
                  animate={{ x: [0, 60, 0], y: [0, -60, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute top-[50%] left-[15%] -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <div className="bg-white rounded-full p-1 shadow-md border border-gray-100">
                    <Truck size={14} className="text-[#E8732A]" />
                  </div>
                </motion.div>
              </div>

              {/* Route List */}
              <div className="flex flex-col border border-[#E0E7FF] bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="py-2.5 px-4 border-b border-[#F3F4F6] flex justify-between items-center text-xs">
                  <div className="flex gap-2 w-32"><span className="font-bold text-[#0B1340]">Route 1</span><span className="text-gray-400">|</span><span className="text-gray-600">Pune → Mumbai</span></div>
                  <div className="text-gray-500 font-medium">2 Vehicles</div>
                  <span className="bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded text-[10px]">₹ Optimised</span>
                </div>
                <div className="py-2.5 px-4 border-b border-[#F3F4F6] flex justify-between items-center text-xs">
                  <div className="flex gap-2 w-32"><span className="font-bold text-[#0B1340]">Route 2</span><span className="text-gray-400">|</span><span className="text-gray-600">Pune → Nashik</span></div>
                  <div className="text-gray-500 font-medium">1 Vehicle</div>
                  <span className="bg-orange-100 text-orange-700 font-bold px-2 py-0.5 rounded text-[10px]">₹ In Review</span>
                </div>
                <div className="py-2.5 px-4 flex justify-between items-center text-xs">
                  <div className="flex gap-2 w-32"><span className="font-bold text-[#0B1340]">Route 3</span><span className="text-gray-400">|</span><span className="text-gray-600">Nashik → A'bad</span></div>
                  <div className="text-gray-500 font-medium">1 Vehicle</div>
                  <span className="bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded text-[10px]">₹ Planned</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* TEXT RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <div className="mb-4">
              <span className="bg-orange-100 text-orange-700 text-xs font-bold rounded-full px-3 py-1 mr-3">Module 03</span>
              <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wide">Capacity & Route Planning</span>
            </div>
            
            <h3 className="text-4xl font-bold text-[#0B1340] leading-tight tracking-tight mt-2 mb-4">
              <span className="block">Every kilometre</span>
              <span className="block">should earn</span>
              <span className="block">its cost.</span>
            </h3>

            <div className="text-[#4B5563] text-base leading-relaxed space-y-4 mb-8">
              <p>Most delivery routes in India are planned by habit - the same roads, the same sequence, the same vehicles - regardless of whether it is the most efficient choice that day.</p>
              <p>The route planning engine will calculate optimal loads and paths using real constraints: vehicle capacity, delivery time windows, road conditions, and stop sequencing. Every run will be designed to reduce cost per drop and improve on-time delivery rates.</p>
            </div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-4">
              {[
                { title: "Load Optimisation", desc: "Vehicle loads calculated against capacity constraints - weight, volume, and item type." },
                { title: "Dynamic Route Calculation", desc: "Routes built using live inputs - not yesterday's plan." },
                { title: "Time Window Management", desc: "Customer delivery windows factored into every route plan." },
                { title: "Multi-Stop Sequencing", desc: "The system will order stops for minimum distance and maximum on-time performance." },
                { title: "Cost Per Drop Tracking", desc: "Every route tracked against its actual cost - surfaced for review and improvement." }
              ].map((feature, idx) => (
                <motion.div variants={fadeUp} key={idx} className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-0.5 shrink-0">
                    <Check size={14} className="text-green-600 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0B1340] text-sm mr-1">{feature.title}:</span>
                    <span className="text-gray-500 text-sm">{feature.desc}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* =========================================
          SECTION 6: FEATURE COMPARISON TABLE
      ========================================= */}
      <section className="w-full bg-[#EEF2FF] py-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide">Platform Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight mb-3">What the platform will do</h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">A summary of capabilities planned across all three modules.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-white rounded-2xl border border-[#E0E7FF] shadow-sm overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr className="bg-[#0B1340] text-white">
                    <th className="py-4 px-6 font-semibold w-[40%] text-sm">Capability</th>
                    <th className="py-4 px-4 font-semibold w-[20%] text-center text-sm">
                      <div className="flex flex-col items-center gap-1"><Truck size={18} className="text-orange-400" />TMS</div>
                    </th>
                    <th className="py-4 px-4 font-semibold w-[20%] text-center text-sm">
                      <div className="flex flex-col items-center gap-1"><Warehouse size={18} className="text-blue-400" />WMS</div>
                    </th>
                    <th className="py-4 px-4 font-semibold w-[20%] text-center text-sm">
                      <div className="flex flex-col items-center gap-1"><Route size={18} className="text-green-400" />Route Planning</div>
                    </th>
                  </tr>
                </thead>
                <motion.tbody variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  {[
                    { cap: "Real-Time Tracking", t: true, w: false, r: true },
                    { cap: "Inventory Management", t: false, w: true, r: false },
                    { cap: "Vendor Management", t: true, w: true, r: false },
                    { cap: "Route Optimisation", t: false, w: false, r: true },
                    { cap: "Document Management", t: true, w: true, r: false },
                    { cap: "Alerts & Exceptions", t: true, w: true, r: true },
                    { cap: "Analytics Dashboard", t: true, w: true, r: true },
                    { cap: "Mobile Access", t: true, w: true, r: true },
                  ].map((row, idx) => (
                    <motion.tr variants={fadeUp} key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFF]'} border-b border-[#E0E7FF] last:border-0`}>
                      <td className="py-3 px-6 text-sm text-gray-700 font-medium">{row.cap}</td>
                      <td className="py-3 px-4 text-center">
                        {row.t ? <Check size={14} className="bg-green-100 text-green-600 rounded-full p-0.5 mx-auto w-5 h-5" strokeWidth={3} /> : <Minus size={16} className="text-gray-300 mx-auto" />}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.w ? <Check size={14} className="bg-green-100 text-green-600 rounded-full p-0.5 mx-auto w-5 h-5" strokeWidth={3} /> : <Minus size={16} className="text-gray-300 mx-auto" />}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.r ? <Check size={14} className="bg-green-100 text-green-600 rounded-full p-0.5 mx-auto w-5 h-5" strokeWidth={3} /> : <Minus size={16} className="text-gray-300 mx-auto" />}
                      </td>
                    </motion.tr>
                  ))}
                </motion.tbody>
              </table>
            </div>
            <div className="bg-[#EEF2FF] text-xs text-gray-500 py-3 px-6 border-t border-[#E0E7FF]">
              All capabilities listed are planned for the platform launch. Features are in active development.
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================
          SECTION 7: TECH APPROACH
      ========================================= */}
      <section className="w-full bg-[#FFFFFF] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide">How We're Building It</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight mb-4">Built to be reliable<br />from the first day it launches.</h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">The technical decisions we are making now will determine how well the platform scales later. These are the principles guiding the build.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
          >
            <motion.div variants={fadeUp} className="bg-blue-50 rounded-2xl p-8 border border-blue-100 hover:shadow-md transition-shadow">
              <Server size={36} className="text-[#2563EB] mb-5" />
              <h3 className="text-[#0B1340] font-bold text-xl mb-3">Cloud-Native Architecture</h3>
              <p className="text-gray-600 text-sm leading-relaxed">The platform is being built on a cloud-native stack designed to scale horizontally as transaction volumes grow. No on-premise dependencies.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-orange-50 rounded-2xl p-8 border border-orange-100 hover:shadow-md transition-shadow">
              <Shield size={36} className="text-[#E8732A] mb-5" />
              <h3 className="text-[#0B1340] font-bold text-xl mb-3">Security From the Ground Up</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Security architecture is being designed into the platform before launch - not added after. We are committed to applying appropriate security measures on launch.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-blue-50 rounded-2xl p-8 border border-blue-100 hover:shadow-md transition-shadow">
              <Smartphone size={36} className="text-[#2563EB] mb-5" />
              <h3 className="text-[#0B1340] font-bold text-xl mb-3">Mobile-First for Field Teams</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Drivers, warehouse staff, and field coordinators will access the platform through a mobile interface built for low-bandwidth conditions common across India.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-orange-50 rounded-2xl p-8 border border-orange-100 hover:shadow-md transition-shadow">
              <Plug size={36} className="text-[#E8732A] mb-5" />
              <h3 className="text-[#0B1340] font-bold text-xl mb-3">Integration-Ready</h3>
              <p className="text-gray-600 text-sm leading-relaxed">The platform will expose APIs for integration with ERP systems, e-commerce platforms, and third-party logistics tools already in use by businesses.</p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* =========================================
          SECTION 8: EARLY ACCESS CTA
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
              <span className="bg-orange-400/20 text-orange-400 text-xs font-semibold rounded-full px-5 py-2 inline-block uppercase tracking-wider">Talk To Us</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Want to know when the<br />platform launches?
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/60 text-base md:text-lg max-w-xl mx-auto mt-6 leading-relaxed">
              We are having early conversations with logistics businesses who want to be involved before the platform goes live. If that sounds like you, write to us - we respond within one working day.
            </motion.p>

            <motion.div variants={fadeUp} className="flex justify-center items-center gap-2 mt-6">
              <Mail size={18} className="text-[#E8732A]" />
              <span className="text-white/60 text-sm font-medium">inquiry@healthylifelogisol.in</span>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link to="/reach-us" className="bg-[#E8732A] text-white rounded-full px-8 py-3.5 font-semibold text-center transition-all duration-300 hover:brightness-110 shadow-lg shadow-[#E8732A]/20">
                Start the Conversation
              </Link>
              <Link to="/" className="border-2 border-white/30 text-white rounded-full px-8 py-3.5 font-semibold text-center transition-all duration-300 hover:border-white hover:bg-white/10">
                Back to Home
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default WhatWeBuild;