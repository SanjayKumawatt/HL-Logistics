import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronRight,
  ChevronDown,
  Check,
  Mail,
  LayoutDashboard
} from "lucide-react";

const ProductPageTemplate = ({
  heroData,
  problemData,
  capabilitiesData,
  stepsData,
  deepDiveData,
  audienceData,
  dashboardData,
  faqData,
  ctaData
}) => {
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

  return (
    <div className="w-full font-sans bg-white">
      
      {/* SECTION 1 - HERO */}
      <section className="relative w-full min-h-[65vh] bg-gradient-to-br from-[#0B1340] to-[#1a237e] overflow-hidden py-24 flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
            
            {/* Left Side */}
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="w-full lg:w-[55%] flex flex-col items-start">
              <motion.div variants={fadeRight} className="text-xs text-white/40 font-medium tracking-wide">
                {heroData.breadcrumb}
              </motion.div>
              
              <motion.div variants={fadeRight} className={`mt-3 border text-xs rounded-full px-4 py-1.5 font-semibold uppercase tracking-wider inline-block ${heroData.badgeStyle}`}>
                {heroData.badge}
              </motion.div>

              <motion.h1 variants={fadeRight} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mt-4 whitespace-pre-line">
                {heroData.headline}
              </motion.h1>

              <motion.p variants={fadeRight} className="text-white/60 text-base md:text-lg mt-5 max-w-lg leading-relaxed whitespace-pre-line">
                {heroData.subtext}
              </motion.p>

              <motion.div variants={fadeRight} className="flex flex-wrap gap-3 mt-8">
                {heroData.chips.map((chip, idx) => (
                  <div key={idx} className="bg-white/10 border border-white/20 text-white text-xs font-medium rounded-full px-4 py-2 flex items-center gap-2">
                    {chip.icon} {chip.label}
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeRight} className="flex flex-wrap gap-4 mt-8">
                <Link to="/reach-us" className="inline-block bg-[#E8732A] text-white font-semibold rounded-full px-6 py-3 hover:brightness-110 transition-all duration-300 shadow-lg shadow-orange-500/20">
                  {heroData.cta1}
                </Link>
                <Link to="/what-we-build" className="inline-block border border-white/30 text-white font-semibold rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-300">
                  {heroData.cta2}
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side (Visual/Image) */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="w-full lg:w-[45%] flex justify-center lg:justify-end">
              {heroData.visual}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - THE PROBLEM */}
      {problemData && (
        <section className="w-full bg-[#FFF8F4] border-y border-orange-100 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
              <span className="bg-orange-100 text-orange-700 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide">{problemData.tag}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight mb-4 max-w-2xl mx-auto whitespace-pre-line">
                {problemData.headline}
              </h2>
              <p className="text-gray-500 text-base max-w-xl mx-auto">{problemData.subtext}</p>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {problemData.cards.map((card, idx) => (
                <motion.div key={idx} variants={fadeUp} className="bg-orange-50 border border-orange-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
                  <div className="mb-5">{card.icon}</div>
                  <h3 className="text-[#0B1340] font-bold text-lg mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* SECTION 3 - CORE CAPABILITIES */}
      {capabilitiesData && (
        <section className="w-full bg-[#FFFFFF] py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
              <span className="bg-blue-100 text-blue-700 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide">{capabilitiesData.tag}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight mb-4 whitespace-pre-line">{capabilitiesData.headline}</h2>
              <p className="text-gray-500 text-base max-w-2xl mx-auto">{capabilitiesData.subtext}</p>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilitiesData.cards.map((feature, idx) => (
                <motion.div key={idx} variants={fadeUp} className="bg-white border border-[#E0E7FF] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#2563EB] transition-all duration-300">
                  <div className={`${idx % 2 === 0 ? 'bg-blue-50 text-[#2563EB]' : 'bg-orange-50 text-[#E8732A]'} w-12 h-12 rounded-xl flex items-center justify-center mb-5`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-[#0B1340] font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* SECTION 4 - HOW IT WORKS (STEPS) */}
      {stepsData && (
        <section className="w-full bg-[#F0F4FF] py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
              <span className="bg-blue-100 text-blue-700 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide">{stepsData.tag}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight whitespace-pre-line">{stepsData.headline}</h2>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-2 xl:gap-4">
              {stepsData.steps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <motion.div variants={fadeRight} className="w-full max-w-[220px] bg-white rounded-2xl border border-[#E0E7FF] p-5 shadow-sm flex flex-col items-center relative z-10">
                    <div className="bg-[#0B1340] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center mb-3">
                      {idx + 1}
                    </div>
                    <div className="mb-2 text-[#E8732A]">{step.icon}</div>
                    <h4 className="text-[#0B1340] font-semibold text-sm mb-1 text-center">{step.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed text-center">{step.body}</p>
                  </motion.div>
                  
                  {idx < stepsData.steps.length - 1 && (
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
      )}

      {/* SECTION 5 - FEATURE DEEP DIVE BLOCKS */}
      {deepDiveData && (
        <section className="w-full bg-[#FFFFFF] py-10 overflow-hidden">
          {deepDiveData.blocks.map((block, idx) => {
            const isVisualLeft = idx % 2 === 0;
            const bgClass = isVisualLeft ? "bg-[#FFFFFF]" : "bg-[#F0F4FF]";
            
            return (
              <div key={idx} className={`w-full ${bgClass}`}>
                <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ${isVisualLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 py-16 ${isVisualLeft ? 'border-b border-[#F3F4F6]' : ''}`}>
                  
                  {/* VISUAL */}
                  <motion.div initial={{ opacity: 0, x: isVisualLeft ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="w-full lg:w-1/2 flex justify-center">
                    {block.visual}
                  </motion.div>

                  {/* TEXT */}
                  <motion.div initial={{ opacity: 0, x: isVisualLeft ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} className="w-full lg:w-1/2 flex flex-col">
                    <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wide mb-3">{block.eyebrow}</span>
                    <h3 className="text-3xl font-bold text-[#0B1340] leading-tight mb-4 whitespace-pre-line">{block.headline}</h3>
                    <div className="text-[#4B5563] text-sm leading-relaxed space-y-4 mb-6">
                      {block.body.map((para, i) => <p key={i}>{para}</p>)}
                    </div>
                    <div className="flex flex-col gap-2">
                      {block.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-[#0B1340] font-medium">
                          <div className="bg-green-100 rounded-full p-0.5 mt-0.5 shrink-0"><Check size={12} className="text-green-600 stroke-[3]" /></div>
                          {point}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </section>
      )}

      {/* SECTION 6 - WHO THIS IS FOR */}
      {audienceData && (
        <section className="w-full bg-[#EEF2FF] py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
              <span className="bg-blue-100 text-blue-700 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide">{audienceData.tag}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight whitespace-pre-line">{audienceData.headline}</h2>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
              {audienceData.cards.map((audience, idx) => (
                <motion.div key={idx} variants={fadeUp} className="bg-white rounded-2xl border border-[#E0E7FF] p-6 shadow-sm w-full md:w-[calc(50%-12px)] lg:w-64 flex flex-col hover:border-[#2563EB] hover:shadow-md hover:scale-105 transition-all duration-300">
                  <div className={`${idx % 2 === 0 ? 'text-[#E8732A]' : 'text-[#2563EB]'} mb-4`}>{audience.icon}</div>
                  <h3 className="text-[#0B1340] font-bold text-lg mb-2">{audience.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{audience.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* SECTION 7 - DASHBOARD MOCKUP */}
      {dashboardData && (
        <section className="w-full bg-[#0B1340] py-24 overflow-hidden relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
              <span className="bg-white/10 text-white/70 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide border border-white/10">{dashboardData.tag}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 whitespace-pre-line">{dashboardData.headline}</h2>
              <p className="text-white/50 text-base max-w-lg mx-auto">{dashboardData.subtext}</p>
            </motion.div>

            {/* DASHBOARD UI WRAPPER */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full bg-[#0D1550] rounded-2xl border border-white/10 shadow-2xl overflow-hidden hidden md:flex flex-col max-w-5xl mx-auto"
            >
              {/* Browser Bar */}
              <div className="bg-[#060d2e] px-4 py-3 flex items-center border-b border-white/5">
                <div className="flex gap-2 mr-6">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="bg-white/10 rounded-full px-4 py-1.5 text-white/30 text-[10px] flex-1 max-w-lg mx-auto font-mono text-center border border-white/5">
                  {dashboardData.url}
                </div>
              </div>

              <div className="flex min-h-[450px]">
                {/* Sidebar */}
                <div className="w-48 bg-[#060d2e] border-r border-white/5 p-4 flex flex-col shrink-0">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-4">
                    <div className="bg-white/10 p-1 rounded-md text-[#E8732A]"><LayoutDashboard size={16} /></div>
                    <span className="text-white text-sm font-bold tracking-wide">HL Logistics</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {dashboardData.sidebarItems.map((item, i) => (
                      <div key={i} className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs cursor-default transition-colors ${i === 0 ? 'bg-white/10 text-white font-semibold' : 'text-white/50 hover:bg-white/5 hover:text-white font-medium'}`}>
                        <div className="flex items-center gap-2.5">
                          {item.icon} <span>{item.label}</span>
                        </div>
                        {item.badge && <span className="bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{item.badge}</span>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 bg-gradient-to-br from-[#0D1550] to-[#0A0F30]">
                  {dashboardData.mainContent}
                </div>
              </div>
            </motion.div>

            {/* Mobile Fallback */}
            <div className="md:hidden text-center text-white/50 text-sm border border-white/10 rounded-xl p-8 bg-white/5">
              Please view on a desktop or tablet screen to see the full dashboard preview.
            </div>
          </div>
        </section>
      )}

      {/* SECTION 8 - FAQ */}
      {faqData && (
        <section className="w-full bg-[#FFFFFF] py-24 overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
              <span className="bg-blue-100 text-blue-700 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide">{faqData.tag}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight">{faqData.headline}</h2>
            </motion.div>

            <div className="flex flex-col">
              {faqData.faqs.map((faq, index) => (
                <motion.div key={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="border-b border-[#E0E7FF] py-5 overflow-hidden">
                  <div className="flex justify-between items-center cursor-pointer group" onClick={() => toggleFaq(index)}>
                    <h3 className="text-[#0B1340] font-semibold text-base pr-8 group-hover:text-[#2563EB] transition-colors">{faq.q}</h3>
                    <ChevronDown size={20} className={`text-gray-400 shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-[#2563EB]' : ''}`} />
                  </div>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                        <p className="text-gray-600 text-sm leading-relaxed pt-4 pb-2">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 9 - CTA BANNER */}
      {ctaData && (
        <section className="relative w-full bg-[#0B1340] py-24 overflow-hidden flex items-center justify-center">
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
                <span className="bg-blue-400/20 text-blue-300 text-xs font-semibold rounded-full px-5 py-2 inline-block uppercase tracking-wider">{ctaData.tag}</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15] whitespace-pre-line">{ctaData.headline}</motion.h2>
              <motion.p variants={fadeUp} className="text-white/60 text-base md:text-lg max-w-xl mx-auto mt-6 leading-relaxed">{ctaData.subtext}</motion.p>
              <motion.div variants={fadeUp} className="flex justify-center items-center gap-2 mt-6">
                <Mail size={18} className="text-[#E8732A]" />
                <span className="text-white/60 text-sm font-medium">inquiry@healthylifelogisol.in</span>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Link to="/reach-us" className="bg-[#E8732A] text-white rounded-full px-8 py-3.5 font-semibold text-center transition-all duration-300 hover:brightness-110 shadow-lg shadow-[#E8732A]/20">
                  {ctaData.btn1}
                </Link>
                <Link to="/what-we-build" className="border-2 border-white/30 text-white rounded-full px-8 py-3.5 font-semibold text-center transition-all duration-300 hover:border-white hover:bg-white/10">
                  {ctaData.btn2}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductPageTemplate;