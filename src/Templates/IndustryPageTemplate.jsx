import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  Check,
  Mail
} from "lucide-react";

const IndustryPageTemplate = ({
  heroData,
  overviewData,
  challengesData,
  solutionData,
  featuresData,
  whyData,
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
                Home <span className="mx-2">→</span> Industries
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

              <motion.div variants={fadeRight} className="mt-8">
                <Link to="/reach-us" className="inline-block bg-[#E8732A] text-white font-semibold rounded-full px-6 py-3 hover:brightness-110 transition-all duration-300 shadow-lg shadow-orange-500/20">
                  Discuss Your Requirements
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

      {/* SECTION 2 - INDUSTRY OVERVIEW STRIP */}
      {overviewData && (
        <section className="w-full bg-[#EEF2FF] border-y border-[#BFDBFE] py-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
              <span className="bg-blue-100 text-blue-700 text-xs font-bold rounded-full px-4 py-1.5 mb-4 inline-block uppercase tracking-wide">{overviewData.tag}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1340] tracking-tight">{overviewData.headline}</h2>
              <p className="text-gray-500 text-sm max-w-2xl mx-auto mt-2">{overviewData.subtext}</p>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col md:flex-row items-center justify-center gap-4">
              {overviewData.stats.map((stat, idx) => (
                <motion.div key={idx} variants={fadeUp} className="bg-white rounded-xl border border-[#E0E7FF] shadow-sm px-6 py-5 text-center w-full md:w-64">
                  <div className="text-2xl font-bold text-[#0B1340] mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* SECTION 3 - INDUSTRY CHALLENGES */}
      {challengesData && (
        <section className="w-full bg-[#FFF8F4] border-y border-orange-100 py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
              <span className="bg-orange-100 text-orange-700 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide">{challengesData.tag}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight whitespace-pre-line">{challengesData.headline}</h2>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {challengesData.cards.map((card, idx) => (
                <motion.div key={idx} variants={fadeUp} className="bg-orange-50 border border-orange-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
                  <div className="text-[#E8732A] mb-5">{card.icon}</div>
                  <h3 className="text-[#0B1340] font-bold text-lg mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* SECTION 4 - HOW PLATFORM HELPS (Alternating Blocks) */}
      {solutionData && (
        <section className="w-full bg-[#FFFFFF] py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
              <span className="bg-blue-100 text-blue-700 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide">{solutionData.tag}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight">{solutionData.headline}</h2>
            </motion.div>

            <div className="flex flex-col gap-24">
              {solutionData.blocks.map((block, idx) => {
                const isVisualLeft = idx % 2 === 0;
                
                return (
                  <div key={idx} className={`flex flex-col ${isVisualLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                    
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
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5 - RELEVANT FEATURES */}
      {featuresData && (
        <section className="w-full bg-[#F0F4FF] py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
              <span className="bg-blue-100 text-blue-700 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide">{featuresData.tag}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight">{featuresData.headline}</h2>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuresData.cards.map((feature, idx) => (
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

      {/* SECTION 6 - WHY THIS PLATFORM */}
      {whyData && (
        <section className="w-full bg-[#FFFFFF] py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 lg:gap-12 xl:gap-20">
            {/* Left Side */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full lg:w-[45%] flex flex-col items-start">
              <div className="bg-blue-100 text-blue-700 text-xs font-semibold rounded-full px-4 py-1.5 mb-6 uppercase tracking-wider">{whyData.tag}</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1340] mb-5 tracking-tight leading-[1.1] whitespace-pre-line">
                {whyData.headline}
              </h2>
              <p className="text-[#4B5563] text-base md:text-lg leading-relaxed max-w-md mb-8">
                {whyData.subtext}
              </p>
              <Link to="/what-we-build" className="bg-[#E8732A] text-white rounded-full px-7 py-3.5 font-medium transition-all duration-300 hover:brightness-110 inline-block">
                View Full Platform Capabilities
              </Link>
            </motion.div>

            {/* Right Side (Points) */}
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full lg:w-[55%] flex flex-col gap-8">
              {whyData.points.map((point, idx) => (
                <motion.div key={idx} variants={fadeUp} className="flex flex-row gap-5 border-l-4 border-[#EEF2FF] pl-5 transition-colors duration-300 hover:border-[#2563EB] group">
                  <div className="flex-shrink-0">
                    <div className="bg-orange-50 rounded-xl p-3.5 border border-orange-100 text-[#E8732A]">
                      {point.icon}
                    </div>
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="text-lg font-bold text-[#0B1340] mb-2">{point.title}</h3>
                    <p className="text-[#4B5563] text-sm leading-relaxed">{point.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* SECTION 7 - FAQ */}
      {faqData && (
        <section className="w-full bg-[#F0F4FF] py-24 overflow-hidden">
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

      {/* SECTION 8 - CTA BANNER */}
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

export default IndustryPageTemplate;