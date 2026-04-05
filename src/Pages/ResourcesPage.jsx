import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Mail } from "lucide-react";

const ResourcesPage = () => {
  // Category Filter State
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const categories = [
    "All Posts",
    
  ];

  // Blog Posts Data
  const blogPosts = [
    {
      id: 1,
      category: "Industry Perspective",
      color: "blue",
      barColor: "bg-blue-500",
      badgeColor: "bg-blue-100 text-blue-700",
      title: "Why logistics visibility is still broken for mid-size Indian businesses",
      excerpt: "Most logistics tracking in India stops at the city level. For businesses shipping across state lines, what happens between dispatch and delivery is a black box. This is not a technology gap - it is a workflow gap that technology has not yet been asked to close."
    },
    {
      id: 2,
      category: "Product Thinking",
      color: "orange",
      barColor: "bg-orange-500",
      badgeColor: "bg-orange-100 text-orange-700",
      title: "The real cost of manual transport coordination",
      excerpt: "When transport is coordinated over WhatsApp and phone calls, the cost is not just inefficiency. It is unaccountable loss - loads that went untracked, disputes that went undocumented, decisions made without data."
    },
    {
      id: 3,
      category: "Supply Chain",
      color: "indigo",
      barColor: "bg-indigo-500",
      badgeColor: "bg-indigo-100 text-indigo-700",
      title: "Three warehouse problems that software should have solved by now",
      excerpt: "Cycle counts that take a full day. Stock adjustments made from memory. Bin locations that only the senior warehouse manager knows. None of these are hard problems. They are simply unsolved ones."
    },
    {
      id: 4,
      category: "Industry Perspective",
      color: "blue",
      barColor: "bg-blue-500",
      badgeColor: "bg-blue-100 text-blue-700",
      title: "Why Indian FMCG distribution still runs on relationships, not data",
      excerpt: "In most FMCG distribution networks, the best-performing distributor is not the one with the best infrastructure - it is the one with the longest relationship with the sales manager. That is a data problem."
    },
    {
      id: 5,
      category: "Operations",
      color: "green",
      barColor: "bg-green-500",
      badgeColor: "bg-green-100 text-green-700",
      title: "The first-attempt delivery problem in Indian last-mile",
      excerpt: "A failed first-attempt delivery does not just cost the re-delivery fee. It costs the customer's patience, the operations team's time, and the next day's route plan. In India's Tier 2 cities, first-attempt success rates are lower than most operations teams acknowledge."
    },
    {
      id: 6,
      category: "Product Thinking",
      color: "orange",
      barColor: "bg-orange-500",
      badgeColor: "bg-orange-100 text-orange-700",
      title: "What a good TMS actually needs to do - and what most get wrong",
      excerpt: "Most TMS products are built around the assumption that transport teams have structured data. In India, most do not. The data is in WhatsApp. The rate cards are in email. The PODs are on someone's phone."
    },
    {
      id: 7,
      category: "Supply Chain",
      color: "indigo",
      barColor: "bg-indigo-500",
      badgeColor: "bg-indigo-100 text-indigo-700",
      title: "Cold chain logistics in India: the gap between regulation and reality",
      excerpt: "India's pharmaceutical cold chain regulations are clear. The gap between what the regulation requires and what most cold chain operators can document is significant. That gap is where compliance risk lives."
    },
    {
      id: 8,
      category: "Operations",
      color: "green",
      barColor: "bg-green-500",
      badgeColor: "bg-green-100 text-green-700",
      title: "Route planning for Indian roads: why global tools fall short",
      excerpt: "Route optimisation tools built for European road networks assume predictable roads, reliable ETAs, and accurate map data. Indian road conditions offer none of these consistently. The optimisation problem is different."
    },
    {
      id: 9,
      category: "Industry Perspective",
      color: "blue",
      barColor: "bg-blue-500",
      badgeColor: "bg-blue-100 text-blue-700",
      title: "The 3PL opportunity in India - and why technology is the gap",
      excerpt: "India's 3PL sector is growing. The businesses using 3PL services are becoming more demanding about visibility and reporting. The gap is not in the service - it is in the technology that should be supporting it."
    }
  ];

  // Actual Filtering Logic
  const filteredPosts = activeCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="w-full font-sans bg-white">
      
      {/* =========================================
          SECTION 1: HERO
      ========================================= */}
      <section className="relative w-full bg-[#0B1340] py-24 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs text-white/30 font-medium tracking-wide mb-6"
          >
            Home <span className="mx-2">→</span> Resources
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-blue-400/20 text-blue-300 border border-blue-400/30 text-xs rounded-full px-4 py-1.5 font-semibold uppercase tracking-wider mb-6 inline-block"
          >
            Resources
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight whitespace-pre-line"
          >
            Perspectives on{"\n"}Indian logistics.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/60 text-base md:text-lg mt-6 max-w-xl mx-auto leading-relaxed"
          >
            We write about the industry we are building for - the problems, the gaps, and the thinking behind what we are building. No case studies. No client stories. We do not have those yet. Just honest observations.
          </motion.p>
        </div>
      </section>

      {/* =========================================
          SECTION 2: CATEGORY FILTER
      ========================================= */}
      <section className="w-full bg-[#FFFFFF] border-b border-[#E0E7FF] py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === category
                    ? "bg-[#0B1340] text-white shadow-md transform scale-105"
                    : "bg-white text-[#4B5563] border border-[#E0E7FF] hover:border-[#0B1340] hover:text-[#0B1340] hover:shadow-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: BLOG GRID
      ========================================= */}
      <section className="w-full bg-[#F0F4FF] py-20 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.div 
                key={post.id} 
                variants={cardVariant}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-[#E0E7FF] shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-md"
              >
                {/* Top Color Bar */}
                <div className={`h-1.5 w-full ${post.barColor}`}></div>
                
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  {/* Category Badge */}
                  <div className="flex items-start mb-4">
                    <span className={`${post.badgeColor} text-xs font-bold rounded-full px-3 py-1 inline-block uppercase tracking-wide`}>
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[#0B1340] font-bold text-xl leading-snug mb-3">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-2 flex-1">
                    {post.excerpt}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="text-center text-gray-500 py-20 font-medium">
              No posts found in this category.
            </div>
          )}
        </div>
      </section>

      {/* =========================================
          SECTION 4: STAY UPDATED CTA
      ========================================= */}
      <section className="relative w-full bg-[#0B1340] py-24 overflow-hidden flex items-center justify-center text-center">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <div className="w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-96 h-96 rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-64 h-64 rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%]"></div>
          
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="w-2.5 h-2.5 bg-white/10 rounded-full absolute top-16 left-1/4" />
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="w-2 h-2 bg-white/10 rounded-full absolute bottom-20 right-1/4" />
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="w-3 h-3 bg-white/10 rounded-full absolute top-1/3 right-[15%]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            
            <motion.div variants={fadeUp} className="mb-6">
              <span className="bg-orange-400/20 text-orange-400 text-xs font-semibold rounded-full px-5 py-2 inline-block uppercase tracking-wider">Stay Updated</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15] whitespace-pre-line">
              New perspectives when{"\n"}we publish them.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/60 text-base md:text-lg max-w-lg mx-auto mt-6 leading-relaxed mb-10">
              We write when we have something worth saying. No scheduled newsletter. No content calendar. Just posts when the thinking is ready.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col items-center">
              <Link 
                to="/reach-us"
                className="inline-block bg-[#E8732A] text-white font-bold rounded-full px-8 py-3.5 hover:brightness-110 transition-all shadow-lg shadow-orange-500/20"
              >
                Start a Conversation
              </Link>
              <div className="flex items-center gap-2 mt-6 text-white/40 text-sm font-medium">
                <Mail size={16} className="text-[#E8732A]" />
                <span>inquiry@healthylifelogisol.in</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ResourcesPage;