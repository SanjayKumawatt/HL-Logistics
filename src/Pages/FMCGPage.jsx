import React from "react";
import IndustryPageTemplate from "../templates/IndustryPageTemplate";
import {
  Zap,
  Route,
  Package,
  BarChart2,
  Clock,
  Network,
  PackageOpen,
  Bell,
  Truck,
  Weight
} from "lucide-react";

const FMCGPage = () => {
  const heroData = {
    badge: "FMCG & Consumer Goods",
    badgeStyle: "bg-blue-400/20 text-blue-300 border-blue-400/30",
    breadcrumb: "Home → Industries → FMCG",
    headline: "Distribution networks\nthat move at\nFMCG speed.",
    subtext: "Tight delivery windows, wide distribution networks, and high-frequency replenishment - the platform will be designed for consumer goods operations where delivery schedules are not negotiable.",
    chips: [
      { icon: <Zap size={14} className="text-[#2563EB]" />, label: "Tight Windows" },
      { icon: <Route size={14} className="text-[#2563EB]" />, label: "Wide Coverage" },
      { icon: <Package size={14} className="text-[#2563EB]" />, label: "High Frequency" },
      { icon: <BarChart2 size={14} className="text-[#2563EB]" />, label: "Distributor Visibility" }
    ],
    visual: (
      <div className="w-full max-w-md aspect-[4/5] bg-white/5 border border-white/10 rounded-3xl p-3 backdrop-blur-md shadow-2xl relative overflow-hidden group">
        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1601598851547-4302969d0614?q=80&w=1200&auto=format&fit=crop" 
            alt="FMCG Distribution Operations" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1340]/90 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white font-semibold text-lg drop-shadow-md">
            Fast-Moving Distribution
          </div>
        </div>
      </div>
    )
  };

  const overviewData = {
    tag: "Industry Overview",
    headline: "Built for distribution speed",
    subtext: "The platform is being designed for consumer goods operations where delivery schedules are rigid.",
    stats: [
      { value: "Wide Network", label: "Distribution reach supported" },
      { value: "High Frequency", label: "Replenishment cycles covered" },
      { value: "Tight Windows", label: "Delivery scheduling built for" },
      { value: "Multi-SKU", label: "Product variety managed" }
    ]
  };

  const challengesData = {
    tag: "The Challenge",
    headline: "Manual coordination fails\nat FMCG scale.",
    cards: [
      {
        icon: <Clock size={32} />,
        title: "Delivery windows that do not move",
        body: "Retail shelves need to be restocked before the morning rush. Distributors have loading bays that open for two hours. Miss the window and the delivery waits - or is turned away."
      },
      {
        icon: <Network size={32} />,
        title: "Wide networks that are hard to coordinate",
        body: "FMCG distribution means managing dozens of routes, hundreds of stops, and multiple distributors across a large geography. Coordination at this scale breaks manual systems quickly."
      },
      {
        icon: <PackageOpen size={32} />,
        title: "Vehicle utilisation that is hard to optimise",
        body: "With hundreds of SKUs and varying order sizes, loading decisions made manually rarely approach optimal. Vehicles run underfilled. Cost per case delivered rises."
      },
      {
        icon: <BarChart2 size={32} />,
        title: "Distributor performance that is hard to see",
        body: "Which distributor is consistently late? Which lane has the highest damage rate? Which route costs the most per case? Without structured data, these questions are hard to answer."
      }
    ]
  };

  const solutionData = {
    tag: "Platform Capabilities",
    headline: "How the platform solves\nFMCG distribution.",
    blocks: [
      {
        eyebrow: "Distribution Route Planning",
        headline: "Every route planned\nfor the window\nthat matters.",
        body: [
          "FMCG delivery windows are set by the retailer, not the distributor. Routes need to be planned around those windows - not the other way around.",
          "The route planning engine will build delivery sequences that honour each retailer's window. Vehicle loads optimised against SKU mix and capacity. Every run planned to arrive when the loading bay is open."
        ],
        points: [
          "Time windows built into route sequencing",
          "Load plans optimised for SKU mix and weight",
          "Wide network coverage in a single plan"
        ],
        visual: (
          <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" alt="Route Planning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
        )
      },
      {
        eyebrow: "Distributor & Fleet Visibility",
        headline: "One view across\nevery distributor\nand every route.",
        body: [
          "A distribution network with ten distributors across a region is hard to monitor when each one reports separately. Visibility is fragmented. Problems surface late.",
          "The TMS module will provide a unified view across the full distribution network - active shipments, delivery confirmations, and performance scores for every distributor in the system."
        ],
        points: [
          "Single view across all distributors",
          "Delivery confirmation with POD per stop",
          "Distributor performance scores over time"
        ],
        visual: (
          <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
            <img src="https://plus.unsplash.com/premium_photo-1773877923489-f524dcb5c55d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Distributor Tracking" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
        )
      }
    ]
  };

  const featuresData = {
    tag: "Key Features",
    headline: "Relevant features for FMCG.",
    cards: [
      { icon: <Route size={24} className="text-[#2563EB]" />, title: "Distribution Route Optimisation", body: "Routes built around retailer time windows and vehicle capacity constraints." },
      { icon: <Truck size={24} className="text-[#E8732A]" />, title: "Fleet & Distributor Management", body: "All distributors and vehicles in one directory with performance tracking." },
      { icon: <Clock size={24} className="text-[#2563EB]" />, title: "Time Window Compliance", body: "Delivery windows factored into every route plan from the start." },
      { icon: <Package size={24} className="text-[#E8732A]" />, title: "Multi-SKU Load Planning", body: "Vehicle loads optimised across a wide product mix per run." },
      { icon: <Bell size={24} className="text-[#2563EB]" />, title: "Delivery Alerts", body: "Missed windows and late deliveries flagged automatically." },
      { icon: <BarChart2 size={24} className="text-[#E8732A]" />, title: "Distribution Analytics", body: "Cost per case, on-time rates, and distributor performance - without manual compilation." }
    ]
  };

  const whyData = {
    tag: "Why This Platform",
    headline: "Built for the pace\nof FMCG distribution.",
    subtext: "The platform is designed to handle the rigid timelines of consumer goods.",
    points: [
      { icon: <Clock size={24} />, title: "Window-first planning", body: "Routes built around retailer schedules." },
      { icon: <Weight size={24} />, title: "SKU-aware load plans", body: "Multi-SKU loads optimised per vehicle." },
      { icon: <Network size={24} />, title: "Full network visibility", body: "One view across all distributors." },
      { icon: <BarChart2 size={24} />, title: "Data that updates itself", body: "Analytics without manual reporting." }
    ]
  };

  const faqData = {
    tag: "FAQs",
    headline: "Common questions about FMCG logistics",
    faqs: [
      { q: "Can the platform manage a distribution network across multiple states?", a: "Yes. Pan-India distribution management is central to the product design - including interstate routes and multi-state distributor networks." },
      { q: "Does it support high-frequency daily replenishment runs?", a: "High-frequency route planning - including daily replenishment schedules - is part of the route planning engine design." },
      { q: "Can it handle hundreds of SKUs in a single load plan?", a: "Multi-SKU load optimisation is planned - including weight, volume, and compatibility constraints across a large product range." },
      { q: "Will it track distributor-level delivery performance?", a: "Distributor performance tracking - including on-time rates and POD confirmation - is planned as part of the TMS module." },
      { q: "Can it integrate with our existing DMS or ERP?", a: "API integration with DMS and ERP systems is planned. Details confirmed before launch." },
      { q: "How do we register interest?", a: "Write to inquiry@healthylifelogisol.in or use the contact page." }
    ]
  };

  const ctaData = {
    tag: "Built for FMCG",
    headline: "Register early interest\nfor FMCG distribution.",
    subtext: "We are speaking with consumer goods companies and distributors before launch.",
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

export default FMCGPage;