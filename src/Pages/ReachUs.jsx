import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Construction,
  MessageSquare,
  Globe,
  CheckCircle,
  Lock
} from "lucide-react";

const ReachUsPage = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    role: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ State
  const [openFaq, setOpenFaq] = useState(null);

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  // Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "This field is required";
    if (!formData.email.trim()) newErrors.email = "This field is required";
    if (!formData.message.trim()) newErrors.message = "This field is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
    }
  };

  const faqs = [
    {
      q: "Is the platform available now?",
      a: "No. HEALTHYLIFE LOGISTICS PRIVATE LIMITED is in active development. The platform is not yet live and we are not yet onboarding clients. We are open to early conversations with logistics businesses - but we will be honest with you about where the product is."
    },
    {
      q: "What kind of businesses are you speaking with right now?",
      a: "We are most interested in speaking with logistics companies, e-commerce businesses, manufacturers, 3PL providers, and FMCG distributors who are facing real challenges with transport visibility, warehouse management, or delivery route efficiency. If that describes your operation, we would like to hear from you."
    },
    {
      q: "Do you have a demo or product video?",
      a: "Not yet. The platform is in development and we do not have a live demo to show. When you write to us, we can share where the product is, what we are building, and what the timeline looks like."
    },
    {
      q: "Will you contact me if I leave my email address?",
      a: "Only to respond to your enquiry or to notify you when the platform is close to launch - if you have asked us to. We do not send unsolicited emails."
    },
    {
      q: "Where are you based?",
      a: "HEALTHYLIFE LOGISTICS PRIVATE LIMITED is registered and based in Pune, Maharashtra. Our registered address is Office No. 310 Lunkad Sky, Max, P.no. 94, Sr No. 199, Dapodi Bazar, Pune - 411012."
    }
  ];

  return (
    <div className="w-full font-sans bg-white">
      
      {/* =========================================
          SECTION 1: HERO
      ========================================= */}
      <section className="relative w-full min-h-[65vh] bg-gradient-to-br from-[#0B1340] to-[#1a237e] py-28 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPatternHero" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#dotPatternHero)" />
          </svg>
          <div className="w-[800px] h-[800px] rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-[500px] h-[500px] rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-white/30 mb-6 font-medium tracking-wide">
            Home <span className="mx-2">→</span> Reach Us
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-orange-400/20 text-orange-300 border border-orange-400/30 text-xs rounded-full px-4 py-1.5 inline-block uppercase tracking-wider font-semibold">
            Get In Touch
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 leading-tight max-w-2xl mx-auto whitespace-pre-line">
            We are reachable.{"\n"}We respond fast.{"\n"}Write to us.
          </motion.h1>

          

          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-wrap gap-4 justify-center mt-10">
            <motion.div variants={fadeUp} className="bg-white/10 border border-white/20 text-white text-xs font-medium rounded-full px-4 py-2 flex items-center gap-2">
              <Clock size={14} /> Responds within one working day
            </motion.div>
            <motion.div variants={fadeUp} className="bg-white/10 border border-white/20 text-white text-xs font-medium rounded-full px-4 py-2 flex items-center gap-2">
              <Mail size={14} /> inquiry@healthylifelogisol.in
            </motion.div>
            <motion.div variants={fadeUp} className="bg-white/10 border border-white/20 text-white text-xs font-medium rounded-full px-4 py-2 flex items-center gap-2">
              <MapPin size={14} /> Pune, Maharashtra
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-16">
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
              <ChevronDown size={32} className="text-white/30 mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: PRE-NOTE
      ========================================= */}
     

      {/* =========================================
          SECTION 3: CONTACT FORM & CONTEXT
      ========================================= */}
      <section className="w-full bg-[#FFFFFF] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left: Form Area */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-[55%]"
            >
              <div className="bg-white rounded-3xl border border-[#E0E7FF] shadow-md p-6 md:p-8">
                
                {!isSubmitted ? (
                  <>
                    <div className="border-b border-[#E0E7FF] pb-6 mb-6">
                      <h2 className="text-2xl font-bold text-[#0B1340]">Start the Conversation</h2>
                      <p className="text-gray-500 text-sm mt-1">Fill this in and we will get back to you within one working day.</p>
                    </div>

                    <div className="flex flex-col gap-5">
                      {/* Name */}
                      <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Full Name *</label>
                        <input 
                          type="text" name="name" value={formData.name} onChange={handleInputChange}
                          placeholder="Your full name"
                          className={`bg-[#F8FAFF] border rounded-xl px-4 py-3 text-[#0B1340] text-sm w-full focus:outline-none transition-colors duration-200 ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-[#E0E7FF] focus:border-[#2563EB]'}`}
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">This field is required</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Email Address *</label>
                        <input 
                          type="email" name="email" value={formData.email} onChange={handleInputChange}
                          placeholder="your@email.com"
                          className={`bg-[#F8FAFF] border rounded-xl px-4 py-3 text-[#0B1340] text-sm w-full focus:outline-none transition-colors duration-200 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#E0E7FF] focus:border-[#2563EB]'}`}
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">This field is required</p>}
                      </div>

                      {/* Organisation */}
                      <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Organisation Name</label>
                        <input 
                          type="text" name="org" value={formData.org} onChange={handleInputChange}
                          placeholder="Your company name"
                          className="bg-[#F8FAFF] border border-[#E0E7FF] rounded-xl px-4 py-3 text-[#0B1340] text-sm w-full focus:border-[#2563EB] focus:outline-none transition-colors duration-200"
                        />
                      </div>

                      {/* Role Dropdown */}
                      <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">What best describes you?</label>
                        <div className="relative">
                          <select 
                            name="role" value={formData.role} onChange={handleInputChange}
                            className="bg-[#F8FAFF] border border-[#E0E7FF] rounded-xl px-4 py-3 text-[#0B1340] text-sm w-full appearance-none cursor-pointer focus:border-[#2563EB] focus:outline-none transition-colors duration-200"
                          >
                            <option value="" disabled>Select your role...</option>
                            <option value="Logistics Company">Logistics Company</option>
                            <option value="E-Commerce Business">E-Commerce Business</option>
                            <option value="Manufacturer">Manufacturer</option>
                            <option value="3PL Provider">3PL Provider</option>
                            <option value="Pharma / Healthcare">Pharma / Healthcare</option>
                            <option value="FMCG Distributor">FMCG Distributor</option>
                            <option value="Retail Chain">Retail Chain</option>
                            <option value="Other">Other</option>
                          </select>
                          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Your Message *</label>
                        <textarea 
                          name="message" value={formData.message} onChange={handleInputChange}
                          rows="5"
                          placeholder="Tell us about your logistics operation and the challenges you are facing. There is no wrong answer."
                          className={`bg-[#F8FAFF] border rounded-xl px-4 py-3 text-[#0B1340] text-sm w-full resize-none focus:outline-none transition-colors duration-200 ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-[#E0E7FF] focus:border-[#2563EB]'}`}
                        ></textarea>
                        {errors.message && <p className="text-xs text-red-500 mt-1">This field is required</p>}
                      </div>

                      {/* Submit Button */}
                      <button 
                        onClick={handleSubmit}
                        className="w-full mt-2 bg-[#E8732A] text-white rounded-xl py-4 text-sm font-semibold hover:brightness-110 active:scale-[0.99] transition-all"
                      >
                        Start the Conversation
                      </button>

                      <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mt-2">
                        <Lock size={12} />
                        <span>Your information is only used to respond to your enquiry.</span>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Success State */
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    className="bg-green-50 border border-green-200 rounded-2xl p-8 md:p-12 text-center"
                  >
                    <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
                    <h2 className="text-[#0B1340] font-bold text-2xl md:text-3xl mb-2">Message sent.</h2>
                    <p className="text-gray-600 text-sm md:text-base mb-6">We will get back to you within one working day.</p>
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", org: "", role: "", message: "" });
                      }}
                      className="text-[#2563EB] text-sm font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Right: Company Info & Address */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-[45%]"
            >
              <div className="sticky top-8">
                
                <h3 className="text-lg font-semibold text-[#0B1340] mb-6">Contact Information</h3>
                
                <div className="flex flex-col gap-5">
                  {/* Email Card */}
                  <div className="bg-[#F8FAFF] border border-[#E0E7FF] rounded-2xl p-5 flex items-start gap-4 hover:border-blue-200 transition-colors group">
                    <div className="bg-blue-50 p-3 rounded-xl text-[#2563EB] shrink-0 group-hover:bg-blue-100 transition-colors">
                      <Mail size={24} />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Email Us</h4>
                      <a href="mailto:inquiry@healthylifelogisol.in" className="text-[#0B1340] font-semibold text-sm hover:text-[#2563EB] transition-colors break-all">
                        inquiry@healthylifelogisol.in
                      </a>
                    </div>
                  </div>

                  {/* Domain Card */}
                  <div className="bg-[#F8FAFF] border border-[#E0E7FF] rounded-2xl p-5 flex items-start gap-4 hover:border-orange-200 transition-colors group">
                    <div className="bg-orange-50 p-3 rounded-xl text-[#E8732A] shrink-0 group-hover:bg-orange-100 transition-colors">
                      <Globe size={24} />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Our Website</h4>
                      <a href="https://healthylifelogisol.in" target="_blank" rel="noreferrer" className="text-[#0B1340] font-semibold text-sm hover:text-[#E8732A] transition-colors">
                        healthylifelogisol.in
                      </a>
                      {/* <span className="text-xs text-gray-400 mt-1">Platform currently in development</span> */}
                    </div>
                  </div>

                  {/* Address Card */}
                  <div className="bg-[#F8FAFF] border border-[#E0E7FF] rounded-2xl p-5 flex items-start gap-4 hover:border-blue-200 transition-colors group">
                    <div className="bg-blue-50 p-3 rounded-xl text-[#2563EB] shrink-0 group-hover:bg-blue-100 transition-colors">
                      <MapPin size={24} />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Registered Office</h4>
                      <p className="text-[#0B1340] text-sm font-medium leading-relaxed">
                        Office No. 310 Lunkad Sky, Max,<br />
                        P.no. 94, Sr No. 199, Dapodi Bazar,<br />
                        Pune, Maharashtra - 411012
                      </p>
                    </div>
                  </div>
                </div>

                {/* Commitment */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3 mt-6">
                  <Clock size={20} className="text-green-600 shrink-0" />
                  <span className="text-green-800 text-sm font-semibold">We guarantee a response within one working day.</span>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: FAQ STRIP
      ========================================= */}
      <section className="w-full bg-[#F0F4FF] py-24 overflow-hidden border-t border-[#E0E7FF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] tracking-tight">Quick answers before you write</h2>
          </motion.div>

          <div className="flex flex-col bg-white rounded-3xl border border-[#E0E7FF] px-6 py-2 shadow-sm">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="border-b border-[#F3F4F6] last:border-0 py-5 overflow-hidden"
              >
                <div 
                  className="flex justify-between items-center cursor-pointer group"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
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

    </div>
  );
};

export default ReachUsPage;