import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Truck,
  MapPin,
  FileText,
  Bell,
  Navigation,
  Users,
  BarChart2,
  ClipboardList,
  AlertTriangle,
  CheckCircle,
  Phone,
  FileX,
  EyeOff,
  ChevronDown,
  ChevronRight,
  Boxes,
  Package,
  Factory,
  ShieldCheck,
  Mail,
  Check,
} from "lucide-react";

const TransportPage = () => {
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
      q: "When will the TMS module be available?",
      a: "The platform is currently in active development. We are not yet live. If you would like to be informed when the platform launches, write to us at inquiry@healthylifelogisol.in - we will keep you updated.",
    },
    {
      q: "Will the TMS work for businesses outside Maharashtra?",
      a: "Yes. The platform is being designed for pan-India operations. Transport routes, vendor networks, and document requirements across all major Indian states are being accounted for in the product design.",
    },
    {
      q: "Can the TMS integrate with our existing ERP system?",
      a: "The platform is being built with integration in mind. We plan to expose APIs that will allow connection with ERP systems and other tools already in use. Specific integrations will be confirmed closer to launch.",
    },
    {
      q: "How will document storage work?",
      a: "Documents will be uploaded directly to the platform - attached to the shipment they belong to. They will be searchable, downloadable, and available for audit without manual retrieval. Full details of the document module will be shared at launch.",
    },
    {
      q: "Is there a mobile app for drivers?",
      a: "The platform is being designed mobile-first for field teams. Drivers will be able to update shipment status and upload PODs from a mobile interface. This is being built as part of the core TMS - not an afterthought.",
    },
    {
      q: "How do we get early access?",
      a: "We are having early conversations with logistics businesses before the platform launches. Reach out to us at inquiry@healthylifelogisol.in or through the contact page. We respond within one working day.",
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
                Home <span className="mx-2">→</span> Platform <span className="mx-2">→</span> Transport Management
              </motion.div>
              
              <motion.div variants={fadeRight} className="mt-3 bg-orange-400/20 text-orange-300 border border-orange-400/30 text-xs rounded-full px-4 py-1.5 font-semibold uppercase tracking-wider inline-block">
                Transport Management System
              </motion.div>

              <motion.h1 variants={fadeRight} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mt-4">
                <span className="block">Transport that</span>
                <span className="block">runs on data,</span>
                <span className="block">not on calls.</span>
              </motion.h1>

              <motion.p variants={fadeRight} className="text-white/60 text-base md:text-lg mt-5 max-w-lg leading-relaxed">
                The TMS module will give logistics teams full visibility and control over every shipment - from the moment a load is planned to the moment it is delivered and invoiced. No more chasing vendors. No more missing documents. No more surprises.
              </motion.p>

              <motion.div variants={fadeRight} className="flex flex-wrap gap-3 mt-8">
                <div className="bg-white/10 border border-white/20 text-white text-xs font-medium rounded-full px-4 py-2 flex items-center gap-2">
                  <MapPin size={14} className="text-[#E8732A]" /> End-to-End Visibility
                </div>
                <div className="bg-white/10 border border-white/20 text-white text-xs font-medium rounded-full px-4 py-2 flex items-center gap-2">
                  <FileText size={14} className="text-[#E8732A]" /> Document Management
                </div>
                <div className="bg-white/10 border border-white/20 text-white text-xs font-medium rounded-full px-4 py-2 flex items-center gap-2">
                  <Bell size={14} className="text-[#E8732A]" /> Exception Alerts
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

            {/* HERO RIGHT (Replaced with Image) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-full lg:w-[45%] flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-md aspect-[4/5] bg-white/5 border border-white/10 rounded-3xl p-3 backdrop-blur-md shadow-2xl relative overflow-hidden group">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1733259739350-d30a39452c9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhbnNwb3J0JTIwZmxlZXQlMjBvcGVyYXRpb258ZW58MHx8MHx8fDA%3D" 
                    alt="Transport Fleet Operations" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1340]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white font-semibold text-lg drop-shadow-md">
                    End-to-end Fleet Visibility
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
              Transport coordination in India is still broken.
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              Despite the scale of the logistics industry, the tools used to manage it remain largely manual, fragmented, and reactive.
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
              <Phone size={32} className="text-[#E8732A] mb-5" />
              <h3 className="text-[#0B1340] font-bold text-lg mb-3">Coordination over calls</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Most transport teams still use WhatsApp groups and phone calls to coordinate shipments. Updates get lost. Accountability disappears. And when something goes wrong, there is no record to fall back on.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-orange-50 border border-orange-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <FileX size={32} className="text-[#E8732A] mb-5" />
              <h3 className="text-[#0B1340] font-bold text-lg mb-3">Documents scattered everywhere</h3>
              <p className="text-gray-600 text-sm leading-relaxed">LR copies, invoices, PODs - spread across email threads, WhatsApp chats, and physical files. Finding a single document for a disputed shipment can take hours. Audits take days.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-orange-50 border border-orange-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <EyeOff size={32} className="text-[#E8732A] mb-5" />
              <h3 className="text-[#0B1340] font-bold text-lg mb-3">No real-time visibility</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Once a truck leaves the yard, most businesses have no idea where it is. Status updates depend on the driver picking up the phone - which does not always happen.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-orange-50 border border-orange-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <AlertTriangle size={32} className="text-[#E8732A] mb-5" />
              <h3 className="text-[#0B1340] font-bold text-lg mb-3">Exceptions caught too late</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Delays, route deviations, and SLA breaches are discovered after they happen - not while there is still time to act. By then, the customer is already calling.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: WHAT TMS WILL DO
      ========================================= */}
      <section className="w-full bg-[#FFFFFF] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide">Core Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight mb-4">What the TMS module will deliver</h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">Every capability listed below is planned for the platform launch and is currently in active development.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: ClipboardList, title: "Shipment Planning", desc: "Create, assign, and schedule shipments across multiple vendors from a single planning screen. Set priorities, assign vehicles, and confirm dispatch in minutes.", bg: "bg-blue-50", col: "text-[#2563EB]" },
              { icon: Navigation, title: "Real-Time Tracking", desc: "Live location and status updates for every active shipment. Know exactly where each vehicle is - and what its next stop is.", bg: "bg-orange-50", col: "text-[#E8732A]" },
              { icon: Users, title: "Vendor Management", desc: "Maintain a structured vendor database with rate cards, vehicle lists, performance history, and contact details - all linked to shipment records.", bg: "bg-blue-50", col: "text-[#2563EB]" },
              { icon: FileText, title: "Document Management", desc: "Attach LR copies, invoices, e-way bills, and PODs to each shipment. Every document stored, searchable, and available for audit at any time.", bg: "bg-orange-50", col: "text-[#E8732A]" },
              { icon: Bell, title: "Exception & Delay Alerts", desc: "Automated alerts for SLA breaches, unconfirmed deliveries, and route deviations - sent to the right person before the situation escalates.", bg: "bg-blue-50", col: "text-[#2563EB]" },
              { icon: BarChart2, title: "Performance Reporting", desc: "On-time delivery rates, vendor performance scores, cost per shipment - all available as reports that update without manual input.", bg: "bg-orange-50", col: "text-[#E8732A]" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight">From planning to proof of delivery<br />- in one flow.</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-2 xl:gap-4"
          >
            {[
              { num: "1", icon: ClipboardList, title: "Create Shipment", desc: "Enter origin, destination, cargo details, and assign a vendor." },
              { num: "2", icon: Truck, title: "Assign Vehicle", desc: "Select vehicle and driver from vendor fleet." },
              { num: "3", icon: Navigation, title: "Dispatch & Track", desc: "Shipment goes live. Real-time tracking begins." },
              { num: "4", icon: Bell, title: "Monitor Exceptions", desc: "System flags delays or deviations automatically." },
              { num: "5", icon: FileText, title: "Receive POD", desc: "Driver uploads proof of delivery on arrival." },
              { num: "6", icon: CheckCircle, title: "Close & Invoice", desc: "Shipment closed. Invoice and documents archived.", iconCol: "text-green-500" }
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <motion.div variants={fadeRight} className="w-full max-w-[220px] bg-white rounded-2xl border border-[#E0E7FF] p-5 shadow-sm flex flex-col items-center relative z-10">
                  <div className="bg-[#0B1340] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center mb-3">
                    {step.num}
                  </div>
                  <step.icon size={24} className={`mb-2 ${step.iconCol || 'text-[#E8732A]'}`} />
                  <h4 className="text-[#0B1340] font-semibold text-sm mb-1">{step.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
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
        
        {/* BLOCK 1: VENDOR MGMT */}
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
                src="https://plus.unsplash.com/premium_photo-1664910424170-14db1f73c2fd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Vendor Management and Logistics Partners" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0B1340]/5 group-hover:bg-transparent transition-colors duration-300"></div>
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
            <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wide mb-3">Vendor Management</span>
            <h3 className="text-3xl font-bold text-[#0B1340] leading-tight mb-4">
              Your entire vendor<br />network, structured<br />and searchable.
            </h3>
            <div className="text-[#4B5563] text-sm leading-relaxed space-y-4 mb-6">
              <p>Most businesses manage transport vendors across a mix of saved contacts, rate negotiation emails, and memory. When a vendor underperforms or a rate dispute arises, there is nothing to refer to.</p>
              <p>The TMS will maintain a structured vendor directory - with rate cards, vehicle lists, performance scores, and full shipment history attached to each vendor profile. Every decision will be backed by data.</p>
            </div>
            <div className="flex flex-col gap-2">
              {["Rate card management per vendor", "Vehicle and driver profiles linked to vendor", "Performance history tied to completed shipments"].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-[#0B1340] font-medium">
                  <div className="bg-green-100 rounded-full p-0.5 mt-0.5 shrink-0"><Check size={12} className="text-green-600 stroke-[3]" /></div>
                  {point}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BLOCK 2: DOCUMENT MGMT */}
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
              <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wide mb-3">Document Management</span>
              <h3 className="text-3xl font-bold text-[#0B1340] leading-tight mb-4">
                Every document.<br />Every shipment.<br />Always findable.
              </h3>
              <div className="text-[#4B5563] text-sm leading-relaxed space-y-4 mb-6">
                <p>A disputed delivery. A GST audit. A missing POD from three months ago. In most logistics operations, finding the right document at the right moment means digging through email threads and WhatsApp chats.</p>
                <p>The TMS will store every document against the shipment it belongs to - LR copies, e-way bills, invoices, and PODs. Searchable by date, vendor, route, or shipment ID. Always available. Always auditable.</p>
              </div>
              <div className="flex flex-col gap-2">
                {["LR, POD, invoice attached per shipment", "Searchable by date, vendor, or route", "Available for audit without manual retrieval"].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-[#0B1340] font-medium">
                    <div className="bg-green-100 rounded-full p-0.5 mt-0.5 shrink-0"><Check size={12} className="text-green-600 stroke-[3]" /></div>
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
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop" 
                  alt="Digital Document Management" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0B1340]/5 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BLOCK 3: EXCEPTIONS */}
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
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop" 
                alt="Monitoring and Exception Alerts" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0B1340]/5 group-hover:bg-transparent transition-colors duration-300"></div>
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
            <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wide mb-3">Exception Management</span>
            <h3 className="text-3xl font-bold text-[#0B1340] leading-tight mb-4">
              Know about problems<br />before your customers<br />call you.
            </h3>
            <div className="text-[#4B5563] text-sm leading-relaxed space-y-4 mb-6">
              <p>In most logistics operations, exceptions are discovered reactively - when a customer complains, when an invoice is disputed, or when a vehicle simply does not arrive.</p>
              <p>The TMS will surface exceptions as they develop - not after. Delays, missing documents, SLA breach risks, and unconfirmed deliveries will trigger automatic alerts to the right person, with enough context to act immediately.</p>
            </div>
            <div className="flex flex-col gap-2">
              {["Automated delay and deviation detection", "SLA breach warnings before the window closes", "Alerts routed to the right team member"].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-[#0B1340] font-medium">
                  <div className="bg-green-100 rounded-full p-0.5 mt-0.5 shrink-0"><Check size={12} className="text-green-600 stroke-[3]" /></div>
                  {point}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BLOCK 4: ANALYTICS */}
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
              <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wide mb-3">Reporting & Analytics</span>
              <h3 className="text-3xl font-bold text-[#0B1340] leading-tight mb-4">
                Data that tells you<br />what to fix -<br />not just what happened.
              </h3>
              <div className="text-[#4B5563] text-sm leading-relaxed space-y-4 mb-6">
                <p>Transport reporting in most companies means a spreadsheet updated at the end of the month. By the time the data is ready, the decisions it should have informed have already been made.</p>
                <p>The TMS reporting module will update in real time. On-time delivery rates, vendor performance, cost per shipment, and lane efficiency - all visible without manual effort. The goal is not just to report what happened. It is to show what needs to change.</p>
              </div>
              <div className="flex flex-col gap-2">
                {["On-time delivery rates by vendor and lane", "Cost per shipment tracked automatically", "Reports available without manual data entry"].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-[#0B1340] font-medium">
                    <div className="bg-green-100 rounded-full p-0.5 mt-0.5 shrink-0"><Check size={12} className="text-green-600 stroke-[3]" /></div>
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
                  alt="Real-time Reporting and Analytics Dashboard" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0B1340]/5 group-hover:bg-transparent transition-colors duration-300"></div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight">The TMS is being designed<br />for these operations.</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
          >
            {[
              { icon: Truck, title: "Logistics Companies", desc: "Fleet operators and transport companies managing multi-vendor, multi-route operations who need visibility across every active shipment.", col: "text-[#E8732A]" },
              { icon: Package, title: "E-Commerce Businesses", desc: "D2C and marketplace sellers managing high shipment volumes with last-mile complexity and return logistics pressure.", col: "text-[#2563EB]" },
              { icon: Factory, title: "Manufacturers", desc: "Plants dispatching finished goods to dealers, distributors, or warehouses across multiple states.", col: "text-[#E8732A]" },
              { icon: ShieldCheck, title: "Pharma & Healthcare", desc: "Businesses moving temperature-sensitive cargo that requires structured documentation and delivery confirmation.", col: "text-[#2563EB]" },
              { icon: Boxes, title: "3PL Providers", desc: "Third-party logistics companies managing transport on behalf of multiple clients who need separate tracking and reporting.", col: "text-[#E8732A]" }
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
          SECTION 7: LIVE DASHBOARD PREVIEW
      ========================================= */}
      <section className="w-full bg-[#0B1340] py-24 overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="bg-white/10 text-white/70 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide border border-white/10">Platform Preview</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">This is what the TMS<br />dashboard will look like.</h2>
            <p className="text-white/50 text-base max-w-lg mx-auto">An early look at the interface being designed for transport planners and operations managers.</p>
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
                app.healthylifelogisol.in/transport
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight">Common questions about the TMS</h2>
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
              <span className="bg-orange-400/20 text-orange-400 text-xs font-semibold rounded-full px-5 py-2 inline-block uppercase tracking-wider">Register Early Interest</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Be among the first to<br />use the TMS when it<br />launches.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/60 text-base md:text-lg max-w-xl mx-auto mt-6 leading-relaxed">
              We are speaking with logistics businesses now - before the platform goes live. If transport visibility is a challenge you are facing, we want to hear from you.
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

export default TransportPage;