import React from "react";
import IndustryPageTemplate from "../templates/IndustryPageTemplate";
import {
  ShieldCheck,
  FileText,
  Clock,
  ClipboardList,
  PackageX,
  ScanLine,
  Bell
} from "lucide-react";
// Import Thermometer manually as lucide-react might not have it directly in older versions, 
// substituting with ShieldCheck/Alert for safety if needed, but assuming standard lucide icons are present.
// For the sake of this prompt, we'll use standard icons available.
const ThermometerIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>
);

const PharmaPage = () => {
  const heroData = {
    badge: "Pharma & Healthcare",
    badgeStyle: "bg-blue-400/20 text-blue-300 border-blue-400/30",
    breadcrumb: "Home → Industries → Pharma & Healthcare",
    headline: "Pharma logistics\nthat leaves no\ngap in the chain.",
    subtext: "Temperature-sensitive cargo, strict compliance requirements, and documented chain of custody - the platform will be designed for healthcare logistics where every gap in the record is a regulatory risk.",
    chips: [
      { icon: <ShieldCheck size={14} className="text-[#2563EB]" />, label: "Compliance Tracking" },
      { icon: <ThermometerIcon size={14} className="text-[#2563EB]" />, label: "Cold Chain" },
      { icon: <FileText size={14} className="text-[#2563EB]" />, label: "Audit Trail" },
      { icon: <Clock size={14} className="text-[#2563EB]" />, label: "Time-Critical Delivery" }
    ],
    visual: (
      <div className="w-full max-w-md aspect-[4/5] bg-white/5 border border-white/10 rounded-3xl p-3 backdrop-blur-md shadow-2xl relative overflow-hidden group">
        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <img 
            src="https://plus.unsplash.com/premium_photo-1661504998870-565058e233dd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Pharmaceutical Logistics Cold Chain" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1340]/90 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white font-semibold text-lg drop-shadow-md">
            Compliant Cold Chain
          </div>
        </div>
      </div>
    )
  };

  const overviewData = {
    tag: "Industry Overview",
    headline: "Built for regulatory strictness",
    subtext: "The platform is being designed for healthcare operations where compliance is non-negotiable.",
    stats: [
      { value: "Cold Chain", label: "Temperature zones supported" },
      { value: "Compliance", label: "Regulatory documentation covered" },
      { value: "Batch Tracking", label: "Full batch visibility planned" },
      { value: "Audit Trail", label: "Every movement documented" }
    ]
  };

  const challengesData = {
    tag: "The Challenge",
    headline: "Gaps in records create\nregulatory risks.",
    cards: [
      {
        icon: <ThermometerIcon size={32} className="text-[#E8732A]" />,
        title: "Temperature excursions that go undetected",
        body: "A cold chain break that is not recorded is still a regulatory failure. Without structured monitoring and documentation, temperature excursions happen - and there is no record to investigate or defend against."
      },
      {
        icon: <ClipboardList size={32} className="text-[#E8732A]" />,
        title: "Compliance documentation that falls behind",
        body: "Pharma logistics generates significant compliance documentation. When this is managed manually, documents fall behind, records are incomplete, and audits surface gaps that should not exist."
      },
      {
        icon: <PackageX size={32} className="text-[#E8732A]" />,
        title: "Batch visibility across the chain",
        body: "Knowing which batch is where - at the warehouse, in transit, at the distributor - is a compliance requirement, not just an operational preference. Without a system, this visibility does not exist."
      },
      {
        icon: <Clock size={32} className="text-[#E8732A]" />,
        title: "Time-critical deliveries with no fallback",
        body: "Hospital and pharmacy supply chains cannot absorb delays that would be acceptable in other industries. A missed delivery window may affect patient care - not just customer satisfaction."
      }
    ]
  };

  const solutionData = {
    tag: "Platform Capabilities",
    headline: "How the platform solves\npharma logistics.",
    blocks: [
      {
        eyebrow: "Cold Chain & Compliance",
        headline: "Every temperature\nzone documented.\nEvery movement auditable.",
        body: [
          "The platform will be designed to support temperature zone management in warehouse operations - tracking which SKUs are stored where, under what conditions, and for how long. Every movement logged against the relevant batch and documentation requirements.",
          "For transport, the TMS will support documentation requirements for cold chain shipments - including carrier qualification, transit time constraints, and delivery confirmation with temperature record attachment."
        ],
        points: [
          "Temperature zone management in WMS",
          "Cold chain documentation per shipment",
          "Batch-level tracking from warehouse to delivery"
        ],
        visual: (
          <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop" alt="Cold Chain Storage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
        )
      },
      {
        eyebrow: "Audit Trail & Documentation",
        headline: "Documentation that\nis always complete\nand always findable.",
        body: [
          "A pharma audit does not announce itself. When documentation is managed manually, preparation for an audit means a scramble to reconstruct records that should have been maintained continuously.",
          "The platform will maintain a structured document record for every shipment - attached at the right stage, searchable by batch, carrier, or date, and available for audit without preparation time."
        ],
        points: [
          "All documents attached per shipment automatically",
          "Searchable by batch, carrier, date, or route",
          "Audit-ready without manual preparation"
        ],
        visual: (
          <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop" alt="Audit and Documentation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
        )
      }
    ]
  };

  const featuresData = {
    tag: "Key Features",
    headline: "Relevant features for pharma.",
    cards: [
      { icon: <ShieldCheck size={24} className="text-[#2563EB]" />, title: "Compliance Documentation", body: "All required documents attached per shipment at the right stage." },
      { icon: <ThermometerIcon size={24} className="text-[#E8732A]" />, title: "Temperature Zone Tracking", body: "Cold chain zones managed and documented in the warehouse module." },
      { icon: <ScanLine size={24} className="text-[#2563EB]" />, title: "Batch Tracking", body: "Full batch visibility from warehouse to final delivery point." },
      { icon: <FileText size={24} className="text-[#E8732A]" />, title: "Audit Trail", body: "Every movement documented and searchable for regulatory review." },
      { icon: <Clock size={24} className="text-[#2563EB]" />, title: "Time-Critical Delivery", body: "Delivery windows and SLA tracking for time-sensitive medical supply." },
      { icon: <Bell size={24} className="text-[#E8732A]" />, title: "Exception Alerts", body: "Delays and documentation gaps flagged before they become compliance issues." }
    ]
  };

  const whyData = {
    tag: "Why This Platform",
    headline: "Built for the compliance\nrequirements of pharma.",
    subtext: "The platform prioritizes traceability and documentation.",
    points: [
      { icon: <ShieldCheck size={24} />, title: "Compliance first", body: "Documentation requirements built into the workflow - not added after." },
      { icon: <FileText size={24} />, title: "Audit-ready by default", body: "Records maintained continuously - not assembled before an audit." },
      { icon: <ScanLine size={24} />, title: "Batch visibility", body: "Full chain of custody from storage to delivery." },
      { icon: <Bell size={24} />, title: "Proactive exception management", body: "Gaps surfaced before they become regulatory findings." }
    ]
  };

  const faqData = {
    tag: "FAQs",
    headline: "Common questions about pharma logistics",
    faqs: [
      { q: "Does the platform support cold chain documentation?", a: "Temperature zone management in the WMS and cold chain documentation for transport are planned features. Specific capabilities confirmed at launch." },
      { q: "Can it handle batch tracking across the full chain?", a: "Batch-level tracking from warehouse to delivery is planned as part of the WMS and TMS modules." },
      { q: "Does it generate compliance documentation automatically?", a: "Document management - with documents attached at the right stage per shipment - is planned. Specific regulatory formats will be confirmed before launch." },
      { q: "Can it support hospital and pharmacy supply chains?", a: "Time-critical delivery tracking and documentation for healthcare supply chains is a specific design consideration." },
      { q: "Will it integrate with our pharma ERP or track-and-trace system?", a: "API integration with pharma ERP and regulatory track-and-trace systems is planned. Details confirmed before launch." },
      { q: "How do we register interest?", a: "Write to inquiry@healthylifelogisol.in." }
    ]
  };

  const ctaData = {
    tag: "Built for Pharma",
    headline: "Register early interest\nfor pharma logistics.",
    subtext: "We are speaking with pharma and healthcare logistics companies before launch.",
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

export default PharmaPage;