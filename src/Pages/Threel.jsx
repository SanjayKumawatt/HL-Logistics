import React from "react";
import IndustryPageTemplate from "../templates/IndustryPageTemplate";
import {
  Users,
  BarChart2,
  Truck,
  Boxes,
  FileText,
  Bell
} from "lucide-react";

const ThreePLPage = () => {
  const heroData = {
    badge: "3PL & Freight Forwarders",
    badgeStyle: "bg-blue-400/20 text-blue-300 border-blue-400/30",
    breadcrumb: "Home → Industries → 3PL",
    headline: "Multi-client logistics.\nOne platform.\nFull separation.",
    subtext: "Managing transport and warehouse operations for multiple clients - with separate tracking, separate reporting, and separate visibility for each - is a coordination challenge that the platform will be built to solve.",
    chips: [
      { icon: <Users size={14} className="text-[#2563EB]" />, label: "Multi-Client" },
      { icon: <BarChart2 size={14} className="text-[#2563EB]" />, label: "Per-Client Reporting" },
      { icon: <Truck size={14} className="text-[#2563EB]" />, label: "Shared Fleet" },
      { icon: <Boxes size={14} className="text-[#2563EB]" />, label: "Separate Inventory" }
    ],
    visual: (
      <div className="w-full max-w-md aspect-[4/5] bg-white/5 border border-white/10 rounded-3xl p-3 backdrop-blur-md shadow-2xl relative overflow-hidden group">
        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop" 
            alt="3PL Multi-Client Logistics" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1340]/90 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white font-semibold text-lg drop-shadow-md">
            Third-Party Logistics Control
          </div>
        </div>
      </div>
    )
  };

  const overviewData = {
    tag: "Industry Overview",
    headline: "Built for multi-tenant operations",
    subtext: "The platform is being designed for 3PLs that require strict data separation.",
    stats: [
      { value: "Multi-Client", label: "Client operations supported" },
      { value: "Shared Fleet", label: "Vehicle utilisation managed" },
      { value: "Separate Reporting", label: "Per client analytics planned" },
      { value: "Full Visibility", label: "Across all client operations" }
    ]
  };

  const challengesData = {
    tag: "The Challenge",
    headline: "Mixing client data creates\noperational chaos.",
    cards: [
      {
        icon: <Users size={32} className="text-[#E8732A]" />,
        title: "Client operations that bleed into each other",
        body: "Managing shipments and inventory for multiple clients on one system without proper separation creates data integrity problems. The wrong client sees the wrong information. Billing becomes complicated."
      },
      {
        icon: <BarChart2 size={32} className="text-[#E8732A]" />,
        title: "Per-client reporting that takes hours",
        body: "Each client wants their own performance report. Without structured data per client, generating those reports means manual compilation - every month, for every client."
      },
      {
        icon: <Truck size={32} className="text-[#E8732A]" />,
        title: "Fleet utilisation across multiple clients",
        body: "A shared vehicle fleet that is not optimally allocated across client operations means some clients wait while vehicles sit idle elsewhere. Utilisation stays low."
      },
      {
        icon: <FileText size={32} className="text-[#E8732A]" />,
        title: "Documentation that crosses client boundaries",
        body: "When documents are not tied to the correct client operation, audits and billing disputes become time-consuming investigations rather than straightforward reviews."
      }
    ]
  };

  const solutionData = {
    tag: "Platform Capabilities",
    headline: "How the platform solves\n3PL operations.",
    blocks: [
      {
        eyebrow: "Multi-Client Operations",
        headline: "Every client operation\nseparate. Every\nrecord clean.",
        body: [
          "A 3PL running operations for five clients on one system needs clean data separation - not workarounds. Inventory, shipments, and documents for each client need to be visible only to that client and to the 3PL operator managing their account.",
          "The platform will support multi-client operations with clear data separation. Inventory managed per client. Shipments tracked per client. Reports generated per client. One system - not five."
        ],
        points: [
          "Client-level data separation throughout",
          "Per-client inventory and shipment visibility",
          "Separate reporting per client without manual work"
        ],
        visual: (
          <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" alt="Multi-Client Dashboard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
        )
      },
      {
        eyebrow: "Fleet Utilisation & Reporting",
        headline: "Shared fleet.\nOptimal allocation.\nClient reports ready.",
        body: [
          "A shared vehicle fleet is a competitive advantage for a 3PL - but only if it is well-allocated. When allocation decisions are made manually, utilisation suffers. Some clients wait. Some vehicles sit idle.",
          "The route planning engine will optimise fleet allocation across all active client operations - maximising vehicle utilisation while respecting each client's delivery requirements. Performance reports per client generated from the same data set."
        ],
        points: [
          "Fleet allocated across client operations optimally",
          "Per-client on-time and cost performance reports",
          "Billing data structured per client automatically"
        ],
        visual: (
          <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
            <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop" alt="Fleet Optimisation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
        )
      }
    ]
  };

  const featuresData = {
    tag: "Key Features",
    headline: "Relevant features for 3PLs.",
    cards: [
      { icon: <Users size={24} className="text-[#2563EB]" />, title: "Multi-Client Management", body: "Separate operations for each client in one platform." },
      { icon: <Truck size={24} className="text-[#E8732A]" />, title: "Shared Fleet Optimisation", body: "Vehicle allocation optimised across all active client operations." },
      { icon: <Boxes size={24} className="text-[#2563EB]" />, title: "Per-Client Inventory", body: "Separate inventory tracking and reporting for each client." },
      { icon: <BarChart2 size={24} className="text-[#E8732A]" />, title: "Per-Client Analytics", body: "Performance reports generated per client without manual compilation." },
      { icon: <FileText size={24} className="text-[#2563EB]" />, title: "Document Separation", body: "All documents tied to the correct client operation." },
      { icon: <Bell size={24} className="text-[#E8732A]" />, title: "Cross-Client Alerts", body: "Exceptions flagged per client without cross-contamination." }
    ]
  };

  const whyData = {
    tag: "Why This Platform",
    headline: "Built for the complexity\nof 3PL operations.",
    subtext: "The platform solves the multi-tenant data challenges that 3PLs face.",
    points: [
      { icon: <Users size={24} />, title: "Clean client separation", body: "Data separation built into the platform - not managed by discipline." },
      { icon: <BarChart2 size={24} />, title: "Per-client reporting", body: "Client reports generated automatically - not compiled manually." },
      { icon: <Truck size={24} />, title: "Fleet optimisation", body: "Shared vehicles allocated efficiently across client operations." },
      { icon: <FileText size={24} />, title: "Billing-ready data", body: "Client records structured for billing without manual extraction." }
    ]
  };

  const faqData = {
    tag: "FAQs",
    headline: "Common questions about 3PL logistics",
    faqs: [
      { q: "Can the platform support operations for multiple clients simultaneously?", a: "Multi-client operations with clear data separation is a core design requirement for the platform." },
      { q: "Will each client have their own login and view?", a: "Client-level access with separate visibility is planned. Details of the access model will be confirmed at launch." },
      { q: "Can it generate per-client performance reports?", a: "Per-client reporting - on-time rates, shipment volumes, and cost performance - is planned as part of the analytics module." },
      { q: "Does it support freight forwarding documentation?", a: "Document management for freight forwarding - including carrier documents and customs-related records - is being considered in the product scope." },
      { q: "Can it manage both warehouse and transport for 3PL operations?", a: "Yes. The platform covers both TMS and WMS operations - designed to work together for full 3PL functionality." },
      { q: "How do we register interest?", a: "Write to inquiry@healthylifelogisol.in." }
    ]
  };

  const ctaData = {
    tag: "Built for 3PL",
    headline: "Register early interest\nfor 3PL logistics.",
    subtext: "We are speaking with 3PL operators and freight forwarders before launch.",
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

export default ThreePLPage;