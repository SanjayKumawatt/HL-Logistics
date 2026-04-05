import React from "react";
import IndustryPageTemplate from "../templates/IndustryPageTemplate";
import {
  Factory,
  Boxes,
  Truck,
  BarChart2,
  GitMerge,
  FileX,
  PackageCheck,
  FileText,
  Bell
} from "lucide-react";

const ManufacturingPage = () => {
  const heroData = {
    badge: "Manufacturing",
    badgeStyle: "bg-orange-400/20 text-orange-300 border-orange-400/30",
    breadcrumb: "Home → Industries → Manufacturing",
    headline: "Plant to dealer.\nWarehouse to line.\nAll in one view.",
    subtext: "Raw material inbound, WIP tracking, finished goods dispatch - the platform will manage every leg of manufacturing logistics through a single connected interface.",
    chips: [
      { icon: <Factory size={14} className="text-[#E8732A]" />, label: "Plant Logistics" },
      { icon: <Boxes size={14} className="text-[#E8732A]" />, label: "WIP Tracking" },
      { icon: <Truck size={14} className="text-[#E8732A]" />, label: "Dispatch" },
      { icon: <BarChart2 size={14} className="text-[#E8732A]" />, label: "Supply Visibility" }
    ],
    visual: (
      <div className="w-full max-w-md aspect-[4/5] bg-white/5 border border-white/10 rounded-3xl p-3 backdrop-blur-md shadow-2xl relative overflow-hidden group">
        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <img 
            src="https://plus.unsplash.com/premium_photo-1664299080383-ac1c321f8753?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Manufacturing Logistics Operations" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1340]/90 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white font-semibold text-lg drop-shadow-md">
            Connected Supply Chain
          </div>
        </div>
      </div>
    )
  };

  const overviewData = {
    tag: "Industry Overview",
    headline: "Built for industrial complexity",
    subtext: "The platform is being designed for manufacturing operations where delays stop production.",
    stats: [
      { value: "Inbound", label: "Raw material flows managed" },
      { value: "WIP", label: "Work in progress tracked" },
      { value: "Outbound", label: "Finished goods dispatched" },
      { value: "Multi-Plant", label: "Locations supported" }
    ]
  };

  const challengesData = {
    tag: "The Challenge",
    headline: "Fragmented systems create\nexpensive blind spots.",
    cards: [
      {
        icon: <Factory size={32} />,
        title: "Inbound material delays that stop production",
        body: "A production line that stops waiting for raw material is the most expensive kind of logistics failure. Inbound visibility - knowing where a shipment is before it is late - is what prevents it."
      },
      {
        icon: <GitMerge size={32} />,
        title: "WIP that is hard to track",
        body: "Material moving between production stages without a tracking system becomes invisible. Quantities are estimated. Bottlenecks are discovered late. Planning becomes reactive."
      },
      {
        icon: <Truck size={32} />,
        title: "Finished goods dispatch coordination",
        body: "Coordinating outbound shipments to multiple dealers and distributors across a large geography - with different delivery windows and vehicle requirements - is a daily coordination challenge."
      },
      {
        icon: <FileX size={32} />,
        title: "Documentation that does not keep pace",
        body: "Manufacturing logistics generates significant documentation - GRNs, delivery challans, e-way bills, inspection reports. Managing these manually means delays at every checkpoint."
      }
    ]
  };

  const solutionData = {
    tag: "Platform Capabilities",
    headline: "How the platform solves\nmanufacturing logistics.",
    blocks: [
      {
        eyebrow: "Inbound & WIP Tracking",
        headline: "Know where every\nshipment is before\nthe line needs it.",
        body: [
          "Production planning depends on knowing when raw materials will arrive. When inbound visibility stops at the purchase order, production teams plan around estimates - and absorb delays that better information would have prevented.",
          "The TMS module will provide live inbound tracking for raw material shipments. WIP movements between production stages tracked through the WMS. Every stage visible before it becomes a bottleneck."
        ],
        points: [
          "Live inbound tracking for raw material",
          "WIP movement tracked between production stages",
          "Alerts for delays before they stop the line"
        ],
        visual: (
          <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" alt="Inbound Tracking" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
        )
      },
      {
        eyebrow: "Finished Goods Dispatch",
        headline: "Outbound shipments\nplanned and tracked\nat scale.",
        body: [
          "A manufacturing plant dispatching to multiple dealers across several states is managing a complex logistics operation - even if it does not look like one from the outside. Route planning, document management, and delivery confirmation all need to work together.",
          "The platform will bring finished goods dispatch planning, route optimisation, and document management into one interface. Dealers confirmed. Documents attached. Deliveries tracked to POD."
        ],
        points: [
          "Multi-dealer dispatch planned in one interface",
          "Route optimisation for finished goods distribution",
          "All dispatch documents attached per shipment"
        ],
        visual: (
          <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
            <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop" alt="Outbound Dispatch" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
        )
      }
    ]
  };

  const featuresData = {
    tag: "Key Features",
    headline: "Relevant features for manufacturing.",
    cards: [
      { icon: <PackageCheck size={24} className="text-[#2563EB]" />, title: "Inbound Tracking", body: "Live visibility on raw material shipments before they reach the plant." },
      { icon: <GitMerge size={24} className="text-[#E8732A]" />, title: "WIP Movement Tracking", body: "Material flow between production stages tracked and auditable." },
      { icon: <Truck size={24} className="text-[#2563EB]" />, title: "Outbound Dispatch Management", body: "Multi-dealer dispatch planned and tracked in one interface." },
      { icon: <FileText size={24} className="text-[#E8732A]" />, title: "Document Management", body: "GRNs, challans, e-way bills - all attached per shipment." },
      { icon: <Bell size={24} className="text-[#2563EB]" />, title: "Inbound Delay Alerts", body: "Notifications for raw material delays before they affect production." },
      { icon: <BarChart2 size={24} className="text-[#E8732A]" />, title: "Supply Chain Analytics", body: "Inbound performance, dispatch efficiency, and cost per shipment." }
    ]
  };

  const whyData = {
    tag: "Why This Platform",
    headline: "Built for manufacturing\nlogistics complexity.",
    subtext: "The platform addresses the specific operational needs of manufacturing plants.",
    points: [
      { icon: <PackageCheck size={24} />, title: "End-to-end visibility", body: "Inbound, WIP, and outbound in one system." },
      { icon: <FileText size={24} />, title: "Documentation that keeps pace", body: "Every document attached at the right stage." },
      { icon: <Bell size={24} />, title: "Proactive alerts", body: "Delays surfaced before they stop the line." },
      { icon: <BarChart2 size={24} />, title: "Supply chain data", body: "Visibility without manual reporting." }
    ]
  };

  const faqData = {
    tag: "FAQs",
    headline: "Common questions about manufacturing logistics",
    faqs: [
      { q: "Can it manage both inbound and outbound logistics for a plant?", a: "Yes. The platform is designed to cover raw material inbound, WIP tracking, and finished goods outbound in one connected system." },
      { q: "Does it support multi-plant operations?", a: "Multi-plant support is in the product scope. Inventory and shipments across more than one facility managed from a single interface." },
      { q: "Can it handle GRN and delivery challan management?", a: "Document management - including GRNs, delivery challans, and e-way bills - is planned as part of the TMS module." },
      { q: "Will it integrate with our manufacturing ERP?", a: "API integration with ERP systems is planned. Specific integrations confirmed before launch." },
      { q: "Can it manage dealer distribution across multiple states?", a: "Yes. Pan-India dealer distribution management is part of the product design." },
      { q: "How do we register interest?", a: "Write to inquiry@healthylifelogisol.in." }
    ]
  };

  const ctaData = {
    tag: "Built for Manufacturing",
    headline: "Register early interest\nfor manufacturing logistics.",
    subtext: "We are speaking with manufacturing companies before launch.",
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

export default ManufacturingPage;