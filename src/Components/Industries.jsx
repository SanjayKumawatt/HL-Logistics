import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Zap, Factory, ShieldCheck, Store, Boxes, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const industriesData = [
  {
    id: 1,
    icon: ShoppingCart,
    color: "#E8732A",
    title: "E-Commerce & D2C",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=600&q=80",
    body: "High order volumes, last-mile pressure, and return complexity - all of which the platform is being built to handle. Future capabilities include real-time consumer tracking, intelligent RTO (Return to Origin) management, and automated multi-courier allocation algorithms to reduce shipping costs.",
    link: "/industries/ecommerce",
  },
  {
    id: 2,
    icon: Zap,
    color: "#2563EB",
    title: "FMCG & Consumer Goods",
    image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=600&q=80",
    body: "Tight delivery windows and wide distribution networks demand planning tools that do not break under scale. We are integrating predictive inventory positioning, expiry date tracking (FEFO), and multi-stop route optimization to ensure secondary distribution runs flawlessly.",
    link: "/industries/fmcg",
  },
  {
    id: 3,
    icon: Factory,
    color: "#E8732A",
    title: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    body: "Plant-to-warehouse and warehouse-to-dealer movements will be manageable through a single connected view. The system will support raw material tracking, Just-In-Time (JIT) delivery coordination, and integrated yard management for heavy freight handling.",
    link: "/industries/manufacturing",
  },
  {
    id: 4,
    icon: ShieldCheck,
    color: "#2563EB",
    title: "Pharma & Healthcare",
    image: "https://plus.unsplash.com/premium_photo-1661777361143-4e7a5cf85cb2?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    body: "Temperature-sensitive cargo and strict compliance requirements call for structured, highly auditable transport workflows. Expect built-in support for Electronic Proof of Delivery (ePOD), strict batch traceability, and seamless integrations with cold-chain monitoring IoT devices.",
    link: "/industries/pharma",
  },
  {
    id: 5,
    icon: Store,
    color: "#E8732A",
    title: "Retail Chains",
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=600&q=80",
    body: "Store replenishment, vendor coordination, and inbound logistics across multiple locations - handled entirely in one centralized place. Streamline warehouse cross-docking, manage reverse logistics from stores, and orchestrate omnichannel fulfillment seamlessly.",
    link: "/industries/retail",
  },
  {
    id: 6,
    icon: Boxes,
    color: "#2563EB",
    title: "3PL & Freight Forwarders",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=80",
    body: "Multi-client operations need deep visibility alongside strict data separation. The platform will natively support both. It will offer dedicated client-facing portals, automated activity-based billing (3PL billing), and highly flexible multi-tenant warehouse configurations.",
    link: "/industries/3pl",
  },
];

const IndustriesSection = () => {
  // Animation Variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-[#EEF2FF] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
        >
          <div className="bg-blue-100 text-blue-700 text-xs font-semibold rounded-full px-4 py-1.5 mb-6 uppercase tracking-wider">
            Industries
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1340] mb-5 tracking-tight leading-tight">
            Built for the sectors where logistics pressure is highest
          </h2>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            The platform is being designed with specific industry challenges in mind. 
            We understand that a one-size-fits-all approach doesn't work for modern 
            supply chains. Our modules adapt to the unique workflows, compliance needs, 
            and massive scale of your specific sector.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {industriesData.map((industry) => (
            <motion.div
              key={industry.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white border border-[#E0E7FF] shadow-sm rounded-2xl p-6 md:p-8 flex flex-col gap-4 transition-colors duration-300 hover:border-[#2563EB] hover:shadow-md group"
            >
              {/* Image Section */}
              <div className="w-full h-40 mb-2 rounded-xl overflow-hidden relative">
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Icon */}
              <div className="mb-0">
                <industry.icon size={36} color={industry.color} strokeWidth={1.5} />
              </div>

              {/* Title & Body */}
              <h3 className="text-xl font-bold text-[#0B1340]">
                {industry.title}
              </h3>
              <p className="text-[#4B5563] text-sm leading-relaxed flex-1">
                {industry.body}
              </p>

              {/* Action Link (CTA) */}
              <div className="mt-4 pt-5 border-t border-[#E0E7FF]/60 flex items-center">
                <Link
                  to={industry.link}
                  className="text-[#2563EB] font-medium text-sm flex items-center gap-1.5 transition-all hover:text-blue-800 hover:underline w-full group-hover:gap-2"
                >
                  Explore Solutions 
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default IndustriesSection;