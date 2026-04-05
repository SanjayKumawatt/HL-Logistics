import React from "react";
import IndustryPageTemplate from "../templates/IndustryPageTemplate";
import {
  ShoppingCart,
  Package,
  RefreshCw,
  Zap,
  PackageX,
  MapPin,
  BarChart2,
  Boxes,
  Navigation,
  Route,
  Bell,
  Target
} from "lucide-react";

const EcommercePage = () => {
  const heroData = {
    badge: "E-Commerce & D2C",
    badgeStyle: "bg-orange-400/20 text-orange-300 border-orange-400/30",
    breadcrumb: "Home → Industries → E-Commerce & D2C",
    headline: "Logistics built for\nthe speed of\nIndian e-commerce.",
    subtext: "High order volumes, last-mile complexity, and return management - the platform will be designed to handle all three without requiring a separate tool for each.",
    chips: [
      { icon: <ShoppingCart size={14} className="text-[#E8732A]" />, label: "Order Management" },
      { icon: <Package size={14} className="text-[#E8732A]" />, label: "Last Mile" },
      { icon: <RefreshCw size={14} className="text-[#E8732A]" />, label: "Returns" },
      { icon: <Zap size={14} className="text-[#E8732A]" />, label: "Scale" }
    ],
    visual: (
      <div className="w-full max-w-md aspect-[4/5] bg-white/5 border border-white/10 rounded-3xl p-3 backdrop-blur-md shadow-2xl relative overflow-hidden group">
        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1200&auto=format&fit=crop" 
            alt="E-commerce Fulfillment" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1340]/90 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white font-semibold text-lg drop-shadow-md">
            High-Volume Fulfillment
          </div>
        </div>
      </div>
    )
  };

  const overviewData = {
    tag: "Industry Overview",
    headline: "Built for e-commerce scale",
    subtext: "The platform is being designed with e-commerce fulfillment challenges at the centre.",
    stats: [
      { value: "High Volume", label: "Order throughput designed for" },
      { value: "Last Mile", label: "Delivery tracking built in" },
      { value: "Returns", label: "Reverse logistics supported" },
      { value: "Multi-Channel", label: "Selling channels covered" }
    ]
  };

  const challengesData = {
    tag: "The Challenge",
    headline: "E-commerce logistics breaks\nwhen order volumes spike.",
    cards: [
      {
        icon: <PackageX size={32} />,
        title: "Order volume that spikes unpredictably",
        body: "Festive seasons and sale events send order volumes to multiples of normal. Systems that work fine in September collapse in October. The platform will be designed for peak loads, not average ones."
      },
      {
        icon: <MapPin size={32} />,
        title: "Last-mile complexity",
        body: "Delivering to Tier 2 and Tier 3 cities means dealing with incomplete addresses, limited courier options, and first-attempt delivery rates that are lower than metro averages. Each of these is a cost that compounds."
      },
      {
        icon: <RefreshCw size={32} />,
        title: "Return volumes that are hard to manage",
        body: "E-commerce returns in India can represent a significant portion of total orders. Without a structured reverse logistics process, returned inventory sits unprocessed and unavailable for resale."
      },
      {
        icon: <BarChart2 size={32} />,
        title: "Visibility that stops at dispatch",
        body: "Most e-commerce operations know when an order left the warehouse. What happens after is largely invisible until a customer calls. That gap costs money and erodes trust."
      }
    ]
  };

  const solutionData = {
    tag: "Platform Capabilities",
    headline: "How the platform solves\ne-commerce logistics.",
    blocks: [
      {
        eyebrow: "Order & Shipment Management",
        headline: "From order confirmed\nto delivery complete\n- fully visible.",
        body: [
          "The TMS module will track every outbound shipment from the moment it is created to the moment the POD is uploaded. Courier assignments, tracking updates, and delivery confirmation - in one interface rather than spread across carrier portals.",
          "For D2C brands managing multiple courier partners, the platform will provide a single view across all active shipments - without requiring manual updates from each partner separately."
        ],
        points: [
          "Single view across all courier partners",
          "Status updates without manual carrier portal checks",
          "Delivery confirmation with POD upload"
        ],
        visual: (
          <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop" alt="Order Tracking" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
        )
      },
      {
        eyebrow: "Returns & Reverse Logistics",
        headline: "Returns processed\nquickly and inventory\nrestored faster.",
        body: [
          "Returned inventory that sits unprocessed is unavailable for resale. In a high-return category, this becomes a working capital problem - not just an operational one.",
          "The WMS module will support return receipt, inspection logging, and restocking workflows. Returned items tracked from the moment they arrive at the warehouse to the moment they are available for the next order."
        ],
        points: [
          "Return receipt and inspection workflow",
          "Inventory restored to available stock on clearance",
          "Return reason tracking for supplier and product analysis"
        ],
        visual: (
          <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
            <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop" alt="Reverse Logistics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
        )
      }
    ]
  };

  const featuresData = {
    tag: "Key Features",
    headline: "Relevant features for e-commerce.",
    cards: [
      { icon: <Boxes size={24} className="text-[#2563EB]" />, title: "Inventory Management", body: "Real-time stock levels across all SKUs and warehouse zones." },
      { icon: <Navigation size={24} className="text-[#E8732A]" />, title: "Shipment Tracking", body: "Live status for every active outbound shipment across all courier partners." },
      { icon: <Route size={24} className="text-[#2563EB]" />, title: "Route Planning", body: "Optimised delivery routes for own last-mile operations." },
      { icon: <RefreshCw size={24} className="text-[#E8732A]" />, title: "Returns Processing", body: "Reverse logistics workflow from return receipt to restock." },
      { icon: <Bell size={24} className="text-[#2563EB]" />, title: "Dispatch Alerts", body: "Notifications for delays, missed pickups, and failed deliveries." },
      { icon: <BarChart2 size={24} className="text-[#E8732A]" />, title: "Fulfilment Analytics", body: "Order fulfilment rates, delivery performance, and return trends." }
    ]
  };

  const whyData = {
    tag: "Why This Platform",
    headline: "Built for e-commerce\noperations that\nneed to scale.",
    subtext: "The platform is being designed with e-commerce fulfilment challenges at the centre - not as an afterthought.",
    points: [
      { icon: <Target size={24} />, title: "Peak-load design", body: "Built for sale season volumes, not just average daily orders." },
      { icon: <RefreshCw size={24} />, title: "Returns built in", body: "Reverse logistics is part of the platform - not a separate tool." },
      { icon: <Navigation size={24} />, title: "Multi-courier visibility", body: "One view across all partners - not one tab per carrier." },
      { icon: <BarChart2 size={24} />, title: "Data without manual work", body: "Fulfilment analytics without spreadsheet compilation." }
    ]
  };

  const faqData = {
    tag: "FAQs",
    headline: "Common questions about e-commerce logistics",
    faqs: [
      { q: "Will the platform support multiple courier partner integrations?", a: "Multi-courier integration is planned. The goal is a single shipment view across all active courier partners without requiring manual updates from each." },
      { q: "Can it handle D2C brands with their own delivery fleet?", a: "Yes. The platform will support both third-party courier management and own-fleet delivery operations - including route planning for last-mile runs." },
      { q: "Does it support return management?", a: "Reverse logistics - return receipt, inspection, and restock - is planned as part of the WMS module. Specific capabilities confirmed at launch." },
      { q: "Can it scale for festive season order volumes?", a: "Peak-load performance is a design consideration from the start. The platform is being built on a cloud-native stack designed to scale with order volume." },
      { q: "Will it work for Tier 2 and Tier 3 city deliveries?", a: "Yes. Pan-India coverage - including Tier 2 and Tier 3 delivery - is central to the product design." },
      { q: "How do we register interest?", a: "Write to inquiry@healthylifelogisol.in or use the contact page." }
    ]
  };

  const ctaData = {
    tag: "Built for E-Commerce",
    headline: "Register early interest\nfor e-commerce logistics.",
    subtext: "We are speaking with D2C brands and e-commerce operators before launch.",
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

export default EcommercePage;