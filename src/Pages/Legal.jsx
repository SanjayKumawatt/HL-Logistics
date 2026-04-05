import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Shield, Scale, FileText, Mail, MapPin, Info } from "lucide-react";

const LegalPage = () => {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const legalSections = [
    {
      id: "company-info",
      icon: <Info size={24} className="text-[#2563EB]" />,
      title: "1. Company Information",
      content: (
        <>
          <p className="mb-4">
            This website and the associated platform are operated and owned by <strong>HEALTHYLIFE LOGISTICS PRIVATE LIMITED</strong>.
          </p>
          <div className="bg-[#F8FAFF] border border-[#E0E7FF] rounded-xl p-5 mt-4">
            <div className="flex items-start gap-3 mb-3">
              <MapPin size={18} className="text-[#E8732A] shrink-0 mt-0.5" />
              <p className="text-sm text-[#0B1340] leading-relaxed">
                <strong>Registered Office:</strong><br />
                Office No. 310 Lunkad Sky, Max,<br />
                P.no. 94, Sr No. 199, Dapodi Bazar,<br />
                Pune, Maharashtra, India — 411012
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-[#E8732A] shrink-0 mt-0.5" />
              <p className="text-sm text-[#0B1340] leading-relaxed">
                <strong>General Inquiries:</strong><br />
                <a href="mailto:inquiry@healthylifelogisol.in" className="text-[#2563EB] hover:underline">inquiry@healthylifelogisol.in</a>
              </p>
            </div>
          </div>
        </>
      )
    },
    {
      id: "terms-of-use",
      icon: <FileText size={24} className="text-[#E8732A]" />,
      title: "2. Terms of Website Use",
      content: (
        <>
          <p className="mb-4">
            By accessing and using this website, you agree to comply with and be bound by these Terms of Use. The content provided on this website is for general informational purposes only.
          </p>
          <p className="mb-4">
            <strong>Platform in Development:</strong> Please note that the HEALTHYLIFE LOGISTICS platform, including its TMS, WMS, and Route Planning modules, is currently under active development. All descriptions of capabilities, features, and workflows reflect planned functionality and are subject to change without prior notice.
          </p>
          <p>
            We do not guarantee that the website will be entirely free from errors or interruptions. We reserve the right to modify, suspend, or discontinue any part of the website or our services at our sole discretion.
          </p>
        </>
      )
    },
    {
      id: "privacy-policy",
      icon: <Shield size={24} className="text-[#2563EB]" />,
      title: "3. Privacy & Data Protection",
      content: (
        <>
          <p className="mb-4">
            We respect your privacy and are committed to protecting any personal data you share with us. This section outlines how we collect and handle your information.
          </p>
          <ul className="list-disc pl-5 space-y-3 mb-4 text-gray-600">
            <li><strong>Information Collection:</strong> We only collect information that you voluntarily provide to us via our contact forms or email (e.g., name, email address, organization details).</li>
            <li><strong>Use of Information:</strong> The information collected is used solely for the purpose of responding to your inquiries, understanding your business needs, and providing updates regarding our platform's launch.</li>
            <li><strong>Data Sharing:</strong> We do not sell, trade, or rent your personal information to third parties. We treat your business inquiries with strict confidentiality.</li>
            <li><strong>Security:</strong> We implement reasonable security measures to protect the information you submit through our website.</li>
          </ul>
        </>
      )
    },
    {
      id: "intellectual-property",
      icon: <Scale size={24} className="text-[#E8732A]" />,
      title: "4. Intellectual Property",
      content: (
        <>
          <p className="mb-4">
            All content on this website, including but not limited to text, graphics, logos, software architecture concepts, UI mockups, and visual designs, is the exclusive property of HEALTHYLIFE LOGISTICS PRIVATE LIMITED or its content suppliers and is protected by applicable copyright and trademark laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, or create derivative works from any material on this website without our explicit prior written consent.
          </p>
        </>
      )
    },
    {
      id: "jurisdiction",
      icon: <Scale size={24} className="text-[#2563EB]" />,
      title: "5. Governing Law & Jurisdiction",
      content: (
        <>
          <p>
            These legal notices and any dispute arising out of your use of this website or early engagements with our company shall be governed by and construed in accordance with the laws of India. Any legal actions or proceedings shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Pune, Maharashtra, India</strong>.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="w-full font-sans bg-[#F8FAFF] min-h-screen">
      
      {/* =========================================
          TOP BAR (BACK TO HOME)
      ========================================= */}
      <div className="w-full bg-[#0B1340] border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>

      {/* =========================================
          HEADER SECTION
      ========================================= */}
      <section className="w-full bg-[#0B1340] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-blue-500/20 text-blue-300 text-xs font-bold rounded-full px-4 py-1.5 mb-5 inline-block uppercase tracking-wide border border-blue-400/30">
              Legal
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Legal Notice &<br />Terms of Service
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
              Please read these terms carefully. They govern your use of our website and outline our commitment to your privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          CONTENT SECTION
      ========================================= */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#E0E7FF] shadow-sm overflow-hidden">
            <div className="p-8 md:p-12">
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col gap-12"
              >
                {legalSections.map((section, idx) => (
                  <motion.div key={section.id} variants={fadeUp} className="flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-[#EEF2FF] p-2.5 rounded-xl">
                        {section.icon}
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-[#0B1340]">
                        {section.title}
                      </h2>
                    </div>
                    <div className="text-gray-600 text-sm md:text-base leading-relaxed pl-0 md:pl-14">
                      {section.content}
                    </div>
                    
                    {/* Add divider except for the last item */}
                    {idx !== legalSections.length - 1 && (
                      <hr className="mt-12 border-t border-[#E0E7FF] ml-0 md:ml-14" />
                    )}
                  </motion.div>
                ))}
              </motion.div>

            </div>
            
            
          </div>
        </div>
      </section>

    </div>
  );
};

export default LegalPage;