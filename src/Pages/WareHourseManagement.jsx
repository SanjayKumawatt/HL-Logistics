import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Warehouse,
  Boxes,
  ScanLine,
  RefreshCw,
  ArrowDownToLine,
  BellRing,
  BarChart2,
  ClipboardX,
  MapPinOff,
  AlertOctagon,
  TrendingDown,
  CheckCircle,
  PackageCheck,
  PackageOpen,
  ShoppingCart,
  Factory,
  Store,
  Pill,
  Mail,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const WarehousePage = () => {
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
      q: "When will the WMS be available?",
      a: "The platform is in active development and not yet live. Write to us at inquiry@healthylifelogisol.in to be informed when the WMS launches.",
    },
    {
      q: "Can the WMS handle multiple warehouse locations?",
      a: "Multi-location warehouse management is part of the product scope. The platform will be designed to handle inventory across more than one facility from a single interface.",
    },
    {
      q: "Will it work for cold storage or temperature-controlled warehouses?",
      a: "Temperature zone management and batch tracking are being considered in the product design - particularly for pharma and food businesses. Specific capabilities will be confirmed at launch.",
    },
    {
      q: "Does the WMS support barcode or RFID scanning?",
      a: "Barcode-based scanning is planned as part of the mobile interface for warehouse staff. RFID integration will be evaluated based on demand. Details will be shared closer to launch.",
    },
    {
      q: "Can it integrate with our existing procurement or ERP system?",
      a: "The platform is being built with API integration in mind. Connection with ERP and procurement systems is planned. Specific integrations will be confirmed before launch.",
    },
    {
      q: "How do we get involved before launch?",
      a: "We are speaking with warehouse operators now. Reach out at inquiry@healthylifelogisol.in or through the contact page. We respond within one working day.",
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
                Home <span className="mx-2">→</span> Platform <span className="mx-2">→</span> Warehouse Management
              </motion.div>
              
              <motion.div variants={fadeRight} className="mt-3 bg-blue-400/20 text-blue-300 border border-blue-400/30 text-xs rounded-full px-4 py-1.5 font-semibold uppercase tracking-wider inline-block">
                Warehouse Management System
              </motion.div>

              <motion.h1 variants={fadeRight} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mt-4">
                <span className="block">Warehouses that</span>
                <span className="block">run on intelligence,</span>
                <span className="block">not instinct.</span>
              </motion.h1>

              <motion.p variants={fadeRight} className="text-white/60 text-base md:text-lg mt-5 max-w-lg leading-relaxed">
                The WMS module will give warehouse teams full control over inventory, bin locations, putaway, picking, and stock accuracy - without relying on memory, spreadsheets, or manual counts. Every movement tracked. Every decision informed.
              </motion.p>

              <motion.div variants={fadeRight} className="flex flex-wrap gap-3 mt-8">
                <div className="bg-white/10 border border-white/20 text-white text-xs font-medium rounded-full px-4 py-2 flex items-center gap-2">
                  <Boxes size={14} className="text-blue-300" /> Inventory Tracking
                </div>
                <div className="bg-white/10 border border-white/20 text-white text-xs font-medium rounded-full px-4 py-2 flex items-center gap-2">
                  <ScanLine size={14} className="text-blue-300" /> Guided Picking
                </div>
                <div className="bg-white/10 border border-white/20 text-white text-xs font-medium rounded-full px-4 py-2 flex items-center gap-2">
                  <RefreshCw size={14} className="text-blue-300" /> Cycle Count Automation
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

            {/* HERO RIGHT (Image) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-full lg:w-[45%] flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-md aspect-[4/5] bg-white/5 border border-white/10 rounded-3xl p-3 backdrop-blur-md shadow-2xl relative overflow-hidden group">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1749940574192-5b15477d3e48?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Modern Logistics Warehouse" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1340]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white font-semibold text-lg drop-shadow-md">
                    Total Inventory Control
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
              Warehouse inefficiency rarely announces itself.
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              It accumulates - quietly, consistently, and expensively.
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
              <ClipboardX size={32} className="text-[#E8732A] mb-5" />
              <h3 className="text-[#0B1340] font-bold text-lg mb-3">Manual stock counts</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Cycle counts that require shutting down operations for hours. Counts done by memory. Discrepancies discovered weeks later when a customer order cannot be fulfilled.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-orange-50 border border-orange-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <MapPinOff size={32} className="text-[#E8732A] mb-5" />
              <h3 className="text-[#0B1340] font-bold text-lg mb-3">Items that disappear</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Stock that is in the system but not on the shelf. Misplaced inventory that takes half a day to locate. Bin locations known only to the warehouse veteran who has been there for years.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-orange-50 border border-orange-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <AlertOctagon size={32} className="text-[#E8732A] mb-5" />
              <h3 className="text-[#0B1340] font-bold text-lg mb-3">Picking errors and returns</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Wrong items picked because the picking list was printed two hours ago. Returns that trace back to warehouse errors that nobody caught in time.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-orange-50 border border-orange-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <TrendingDown size={32} className="text-[#E8732A] mb-5" />
              <h3 className="text-[#0B1340] font-bold text-lg mb-3">Stock-outs nobody predicted</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Inventory that runs out without warning because reorder points were set in a spreadsheet that nobody updated. The system did not know. Nobody told it.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight mb-4">What the WMS module will deliver</h2>
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
              { icon: Boxes, title: "Real-Time Inventory Tracking", desc: "Live stock levels across every bin, rack, and zone. Every inbound and outbound movement updates inventory automatically - no manual entry required.", bg: "bg-blue-50", col: "text-[#2563EB]" },
              { icon: ArrowDownToLine, title: "Intelligent Putaway", desc: "The system will assign bin locations based on SKU velocity, weight class, and zone rules - ensuring fast-moving items are always within reach.", bg: "bg-orange-50", col: "text-[#E8732A]" },
              { icon: ScanLine, title: "Guided Picking", desc: "Pick lists optimised by route inside the warehouse. Staff will follow the most efficient sequence - reducing walk time, errors, and fulfilment delays.", bg: "bg-blue-50", col: "text-[#2563EB]" },
              { icon: RefreshCw, title: "Cycle Count Automation", desc: "Scheduled and triggered counts that run without halting operations. Discrepancies flagged immediately - not discovered at month-end.", bg: "bg-orange-50", col: "text-[#E8732A]" },
              { icon: BellRing, title: "Reorder Alerts", desc: "Stock thresholds set per SKU. When inventory drops below the defined level, the system triggers an alert - before the shelf runs empty.", bg: "bg-blue-50", col: "text-[#2563EB]" },
              { icon: BarChart2, title: "Warehouse Analytics", desc: "Throughput rates, picking accuracy, zone utilisation, and slow-moving inventory - all visible in one reporting dashboard.", bg: "bg-orange-50", col: "text-[#E8732A]" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight">From inbound goods to outbound<br />orders - fully tracked.</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-2 xl:gap-4"
          >
            {[
              { num: "1", icon: PackageCheck, title: "Goods Inward", desc: "Inbound stock received and logged against purchase orders.", iconCol: "text-[#E8732A]" },
              { num: "2", icon: ArrowDownToLine, title: "Putaway", desc: "System assigns optimal bin location. Staff directed to the right zone.", iconCol: "text-[#2563EB]" },
              { num: "3", icon: Boxes, title: "Inventory Live", desc: "Stock levels update in real time across all zones and bins.", iconCol: "text-[#E8732A]" },
              { num: "4", icon: ScanLine, title: "Pick Order", desc: "Picking list generated and optimised by warehouse route.", iconCol: "text-[#2563EB]" },
              { num: "5", icon: PackageOpen, title: "Pack & Dispatch", desc: "Order packed, verified, and released for dispatch.", iconCol: "text-[#E8732A]" },
              { num: "6", icon: CheckCircle, title: "Cycle Count", desc: "Automated count verifies stock accuracy without disrupting operations.", iconCol: "text-[#2563EB]" }
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
          SECTION 5: FEATURE DEEP DIVE (Images instead of CSS Mockups)
      ========================================= */}
      <section className="w-full bg-[#FFFFFF] py-10 overflow-hidden">
        
        {/* BLOCK 1: INVENTORY TRACKING */}
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
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop" 
                alt="Warehouse Inventory Racks" 
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
            <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wide mb-3">Inventory Tracking</span>
            <h3 className="text-3xl font-bold text-[#0B1340] leading-tight mb-4">
              Every SKU.<br />Every bin.<br />Always accurate.
            </h3>
            <div className="text-[#4B5563] text-sm leading-relaxed space-y-4 mb-6">
              <p>When stock levels live in a spreadsheet, accuracy depends entirely on the person updating it. When someone forgets - or updates the wrong row - the data becomes a liability, not an asset.</p>
              <p>The WMS will maintain a live inventory record that updates with every movement. Inbound, putaway, picking, dispatch - each action reflected instantly. The system will always know what is where. Staff will not need to.</p>
            </div>
            <div className="flex flex-col gap-2">
              {["Live stock updates on every movement", "Bin-level location for every SKU", "Searchable by SKU, product, or bin"].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-[#0B1340] font-medium">
                  <div className="bg-green-100 rounded-full p-0.5 mt-0.5 shrink-0"><CheckCircle size={14} className="text-green-600" /></div>
                  {point}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BLOCK 2: PUTAWAY & PICKING */}
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
              <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wide mb-3">Putaway & Picking</span>
              <h3 className="text-3xl font-bold text-[#0B1340] leading-tight mb-4">
                The right item.<br />The right place.<br />Every time.
              </h3>
              <div className="text-[#4B5563] text-sm leading-relaxed space-y-4 mb-6">
                <p>In a warehouse without a system, experienced staff carry the location map in their heads. When they leave, the knowledge goes with them. New staff make errors. Productivity drops.</p>
                <p>The WMS will direct putaway and picking through intelligent rules - SKU velocity, weight class, zone designation, and expiry date. Every staff member will know exactly where to go and what to pick. Experience will no longer be a bottleneck.</p>
              </div>
              <div className="flex flex-col gap-2">
                {["Putaway rules based on SKU and zone logic", "Picking sequence optimised by warehouse route", "New staff productive from day one"].map((point, idx) => (
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
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop" 
                  alt="Warehouse Worker Picking Items" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BLOCK 3: CYCLE COUNT */}
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
                src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1200&auto=format&fit=crop" 
                alt="Digital Warehouse Inventory Management" 
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
            <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wide mb-3">Cycle Count Automation</span>
            <h3 className="text-3xl font-bold text-[#0B1340] leading-tight mb-4">
              Counts that run<br />without stopping<br />the warehouse.
            </h3>
            <div className="text-[#4B5563] text-sm leading-relaxed space-y-4 mb-6">
              <p>A full warehouse count traditionally means halting operations, deploying all staff, and accepting a full day of lost productivity. For most teams, this means it happens once a quarter - if at all.</p>
              <p>The WMS will enable rolling cycle counts that run continuously, zone by zone, without disrupting active operations. Discrepancies will surface immediately - not at the end of a quarterly audit.</p>
            </div>
            <div className="flex flex-col gap-2">
              {["Continuous counts without halting operations", "Discrepancies flagged in real time", "Audit trail maintained automatically"].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-[#0B1340] font-medium">
                  <div className="bg-green-100 rounded-full p-0.5 mt-0.5 shrink-0"><CheckCircle size={14} className="text-green-600" /></div>
                  {point}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BLOCK 4: ANALYTICS & REORDER */}
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
              <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wide mb-3">Reorder & Analytics</span>
              <h3 className="text-3xl font-bold text-[#0B1340] leading-tight mb-4">
                Never run out<br />of stock that<br />you should have seen<br />coming.
              </h3>
              <div className="text-[#4B5563] text-sm leading-relaxed space-y-4 mb-6">
                <p>Reorder decisions based on gut feeling lead to two problems: over-ordering slow-moving items and running out of fast-moving ones. Both cost money.</p>
                <p>The WMS will track stock against defined thresholds. When inventory drops below the reorder level, the system will alert the right person - with enough time to act before the shelf runs empty. And the analytics dashboard will show which SKUs need threshold adjustments over time.</p>
              </div>
              <div className="flex flex-col gap-2">
                {["Reorder thresholds set per SKU", "Alerts triggered before stock runs out", "Analytics show slow and fast movers"].map((point, idx) => (
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
                  alt="Warehouse Analytics Dashboard" 
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight">Built for these<br />warehouse operations.</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
          >
            {[
              { icon: Warehouse, title: "3PL Warehouse Operators", desc: "Multi-client warehouse operations that need separate inventory tracking, zone management, and reporting per client.", col: "text-[#E8732A]" },
              { icon: ShoppingCart, title: "E-Commerce Fulfilment", desc: "High SKU count, fast order turnaround, and return processing - all requiring real-time inventory accuracy.", col: "text-[#2563EB]" },
              { icon: Factory, title: "Manufacturing Plants", desc: "Raw material inbound, WIP tracking, and finished goods dispatch managed through a single warehouse interface.", col: "text-[#E8732A]" },
              { icon: Pill, title: "Pharma & Healthcare", desc: "Batch tracking, expiry management, and temperature-zone compliance built into the warehouse workflow.", col: "text-[#2563EB]" },
              { icon: Store, title: "Retail Distribution Centres", desc: "Multi-SKU, multi-channel fulfilment with replenishment planning and slow-mover identification.", col: "text-[#E8732A]" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">This is what the WMS<br />dashboard will look like.</h2>
            <p className="text-white/50 text-base max-w-lg mx-auto">An early look at the warehouse management interface being designed for warehouse managers and operations teams.</p>
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
                app.healthylifelogisol.in/warehouse
              </div>
            </div>

            {/* High-res Dashboard Image */}
            <div className="w-full aspect-[16/9] relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1800&auto=format&fit=crop" 
                alt="Software Dashboard Preview" 
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight">Common questions about the WMS</h2>
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
              <span className="bg-blue-400/20 text-blue-300 text-xs font-semibold rounded-full px-5 py-2 inline-block uppercase tracking-wider">Register Early Interest</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Be among the first to<br />use the WMS when it<br />launches.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/60 text-base md:text-lg max-w-xl mx-auto mt-6 leading-relaxed">
              We are speaking with warehouse operators before the platform goes live. If inventory accuracy and warehouse efficiency are challenges you are facing, we want to hear from you.
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

export default WarehousePage;