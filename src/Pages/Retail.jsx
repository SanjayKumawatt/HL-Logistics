import React from "react";
import IndustryPageTemplate from "../templates/IndustryPageTemplate";
import {
  Store,
  Truck,
  BarChart2,
  Package,
  GitBranch,
  Bell,
  FileText
} from "lucide-react";

const RetailPage = () => {
  const heroData = {
    badge: "Retail Chains",
    badgeStyle: "bg-orange-400/20 text-orange-300 border-orange-400/30",
    breadcrumb: "Home → Industries → Retail",
    headline: "Shelves stocked.\nStores replenished.\nChain coordinated.",
    subtext: "Multi-location replenishment, vendor inbound coordination, and store-level delivery tracking - the platform will manage the logistics of retail distribution without requiring a separate system for each part.",
    chips: [
      { icon: <Store size={14} className="text-[#E8732A]" />, label: "Store Replenishment" },
      { icon: <Truck size={14} className="text-[#E8732A]" />, label: "Vendor Inbound" },
      { icon: <BarChart2 size={14} className="text-[#E8732A]" />, label: "Chain Visibility" },
      { icon: <Package size={14} className="text-[#E8732A]" />, label: "Multi-Location" }
    ],
    visual: (
      <div className="w-full max-w-md aspect-[4/5] bg-white/5 border border-white/10 rounded-3xl p-3 backdrop-blur-md shadow-2xl relative overflow-hidden group">
        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=1200&auto=format&fit=crop" 
            alt="Retail Supply Chain and Replenishment" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1340]/90 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white font-semibold text-lg drop-shadow-md">
            Seamless Retail Replenishment
          </div>
        </div>
      </div>
    )
  };

  const overviewData = {
    tag: "Industry Overview",
    headline: "Built for multi-location retail",
    subtext: "The platform is being designed for retail operations that demand synchronization.",
    stats: [
      { value: "Multi-Store", label: "Store locations supported" },
      { value: "Replenishment", label: "Cycles planned and tracked" },
      { value: "Vendor Inbound", label: "Supplier shipments managed" },
      { value: "Chain Visibility", label: "Across all locations" }
    ]
  };

  const challengesData = {
    tag: "The Challenge",
    headline: "Retail distribution breaks down\nwithout clear visibility.",
    cards: [
      {
        icon: <Store size={32} className="text-[#E8732A]" />,
        title: "Store replenishment that arrives late",
        body: "An empty shelf is lost revenue. Replenishment that misses delivery windows means stores open without full stock - and the operations team spends the morning on the phone finding out why."
      },
      {
        icon: <Truck size={32} className="text-[#E8732A]" />,
        title: "Vendor inbound that is hard to track",
        body: "Retail supply chains depend on vendors delivering on time. When inbound visibility stops at the purchase order, the first sign of a problem is often the missing delivery."
      },
      {
        icon: <GitBranch size={32} className="text-[#E8732A]" />,
        title: "Coordination across multiple locations",
        body: "Managing replenishment for ten or twenty store locations means ten or twenty sets of delivery schedules, vendor relationships, and stock levels to track. Without a system, this does not scale."
      },
      {
        icon: <BarChart2 size={32} className="text-[#E8732A]" />,
        title: "Stock intelligence that is always out of date",
        body: "Replenishment decisions based on yesterday's stock count - or last week's - mean stores are either over-stocked on slow movers or running out of fast ones. The data lag is the problem."
      }
    ]
  };

  const solutionData = {
    tag: "Platform Capabilities",
    headline: "How the platform solves\nretail logistics.",
    blocks: [
      {
        eyebrow: "Store Replenishment Planning",
        headline: "Replenishment routes\nbuilt around\nstore opening times.",
        body: [
          "Retail store deliveries have hard time constraints. Loading bays open at specific times. Floor staff are available to receive stock before the store opens. Routes that do not account for these windows create problems at the store.",
          "The route planning engine will build replenishment routes around store delivery windows. Every location's constraints factored in. Loads planned per vehicle. Drivers dispatched with a route that works - not one that was estimated and hoped for."
        ],
        points: [
          "Store delivery windows in route planning",
          "Multi-store replenishment in one route plan",
          "Load plans optimised for mixed-SKU deliveries"
        ],
        visual: (
          <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" alt="Route Planning for Stores" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
        )
      },
      {
        eyebrow: "Vendor & Inbound Management",
        headline: "Vendor shipments tracked\nbefore they become\na problem.",
        body: [
          "A vendor who consistently delivers late costs the retail operation more than the late delivery itself - in stockouts, in emergency re-orders, in staff time spent managing the exception. But without data, there is no case for change.",
          "The TMS module will track vendor inbound shipments from dispatch to receipt. Delivery performance recorded per vendor. Over time, this data will surface the vendors whose reliability is affecting store stock levels."
        ],
        points: [
          "Live inbound tracking per vendor shipment",
          "Delivery performance recorded per vendor",
          "Late delivery alerts before stores are affected"
        ],
        visual: (
          <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
            <img src="https://plus.unsplash.com/premium_photo-1661695797140-74c3a42a9c92?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vendor Management" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
        )
      }
    ]
  };

  const featuresData = {
    tag: "Key Features",
    headline: "Relevant features for retail.",
    cards: [
      { icon: <Store size={24} className="text-[#2563EB]" />, title: "Store Replenishment Planning", body: "Routes built around store windows and multi-location stock requirements." },
      { icon: <Truck size={24} className="text-[#E8732A]" />, title: "Vendor Inbound Management", body: "Supplier shipments tracked from dispatch to store receipt." },
      { icon: <BarChart2 size={24} className="text-[#2563EB]" />, title: "Chain-Level Analytics", body: "Stock and delivery performance across all store locations." },
      { icon: <Package size={24} className="text-[#E8732A]" />, title: "Multi-Location Inventory", body: "Inventory levels across all stores and the distribution centre." },
      { icon: <Bell size={24} className="text-[#2563EB]" />, title: "Replenishment Alerts", body: "Low stock and missed delivery notifications before stores are affected." },
      { icon: <FileText size={24} className="text-[#E8732A]" />, title: "Delivery Documentation", body: "Delivery confirmations and vendor documents per store per delivery." }
    ]
  };

  const whyData = {
    tag: "Why This Platform",
    headline: "Built for multi-location\nretail operations.",
    subtext: "The platform provides holistic visibility across all retail nodes.",
    points: [
      { icon: <Store size={24} />, title: "Store-first planning", body: "Routes built around store windows and replenishment cycles." },
      { icon: <Truck size={24} />, title: "Vendor accountability", body: "Inbound performance tracked and recorded per supplier." },
      { icon: <BarChart2 size={24} />, title: "Chain visibility", body: "Stock and delivery data across all locations in one place." },
      { icon: <Bell size={24} />, title: "Proactive alerts", body: "Problems surfaced before shelves run empty." }
    ]
  };

  const faqData = {
    tag: "FAQs",
    headline: "Common questions about retail logistics",
    faqs: [
      { q: "Can it manage replenishment for stores across multiple cities?", a: "Multi-city and multi-location replenishment planning is part of the product design." },
      { q: "Does it track vendor inbound deliveries?", a: "Vendor inbound tracking - from dispatch to store receipt - is planned as part of the TMS module." },
      { q: "Can it manage inventory across multiple store locations?", a: "Multi-location inventory management is planned as part of the WMS module." },
      { q: "Will it integrate with our retail ERP or POS system?", a: "API integration with retail ERP and POS systems is planned. Details confirmed before launch." },
      { q: "Can it handle seasonal peaks for retail?", a: "Peak-load design is a core consideration - the platform is being built to handle volume spikes, not just average operations." },
      { q: "How do we register interest?", a: "Write to inquiry@healthylifelogisol.in." }
    ]
  };

  const ctaData = {
    tag: "Built for Retail",
    headline: "Register early interest\nfor retail logistics.",
    subtext: "We are speaking with retail chains and distribution operations before launch.",
    btn1: "Register Early Interest",
    btn2: "See Platform Overview"
  };

  return (
    <IndustryPageTemplate 
      heroData={heroData}
      overviewData={overviewData}
      challengesData={challengesData}
      solutionData={solutionData}
      featuresData={featuresData}
      whyData={whyData}
      faqData={faqData}
      ctaData={ctaData}
    />
  );
};

export default RetailPage;