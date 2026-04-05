import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const resourcesData = [
  {
    id: 1,
    tag: "Industry Perspective",
    tagStyles: "bg-blue-100 text-blue-700",
    title: "Why logistics visibility is still broken for mid-size Indian businesses",
    excerpt: "Most logistics tracking in India stops at the city level. What happens between dispatch and delivery is often a black box - and that is a workflow problem, not a technology one. The reliance on fragmented local fleets means data simply doesn't flow backward smoothly. We explore why fixing this requires redesigning the operational process, not just installing another GPS tracker on a truck.",
    link: "/resources",
  },
  {
    id: 2,
    tag: "Product Thinking",
    tagStyles: "bg-orange-100 text-orange-700",
    title: "The real cost of manual transport coordination",
    excerpt: "When transport is coordinated over WhatsApp groups and endless phone calls, the cost is not just sheer inefficiency - it is unaccountable financial loss. Loads go untracked. Disputes over detention charges go completely undocumented. We break down the invisible financial leaks caused by manual dispatching and how structured digital procurement instantly patches these critical gaps.",
    link: "/resources",
  },
  {
    id: 3,
    tag: "Supply Chain",
    tagStyles: "bg-indigo-100 text-indigo-700",
    title: "Three warehouse problems that software should have solved by now",
    excerpt: "Cycle counts that take a full working day. Stock adjustments made entirely by memory. Putaway processes that rely heavily on the warehouse manager's intuition rather than systematic rules. None of these are hard problems - they are just unsolved ones for the mid-market. We discuss why modern WMS needs to be highly accessible, intuitive, and built for rapid, frictionless deployment.",
    link: "/resources",
  },
];

const ResourcesTeaser = () => {
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
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-[#F0F4FF] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <div className="bg-blue-100 text-blue-700 text-xs font-semibold rounded-full px-4 py-1.5 mb-6 uppercase tracking-wider">
            Resources
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1340] mb-5 tracking-tight">
            Perspectives from the team
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            We write thoughtfully about the industry we are building for - not just promotional content about the work we have done. Read our takes on supply chain challenges.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {resourcesData.map((resource) => (
            <motion.div
              key={resource.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="bg-white border border-[#E0E7FF] shadow-sm rounded-2xl p-6 md:p-8 flex flex-col gap-3 transition-all duration-300 hover:shadow-md group"
            >
              <div className="flex items-start">
                <span className={`${resource.tagStyles} text-xs font-semibold rounded-full px-3 py-1`}>
                  {resource.tag}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-[#0B1340] mt-3 leading-snug">
                {resource.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mt-1">
                {resource.excerpt}
              </p>
              
              
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-14 flex justify-center"
        >
          <Link
            to="/resources"
            className="border-2 border-[#0B1340] text-[#0B1340] rounded-full px-8 py-3.5 text-sm font-bold transition-all duration-300 hover:bg-[#0B1340] hover:text-white"
          >
            View All Resources
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ResourcesTeaser;