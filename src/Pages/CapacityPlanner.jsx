import React from "react";
import ProductPageTemplate from "../templates/ProductPageTemplate";
import {
  Navigation,
  Weight,
  Clock,
  IndianRupee,
  BarChart2,
  Repeat,
  PackageOpen,
  TrendingUp,
  MapPin,
  ClipboardList,
  Truck,
  ShoppingCart,
  Factory,
  Refrigerator,
  Boxes,
  LayoutDashboard,
  Bell,
  RouteIcon
} from "lucide-react";

const CapacityPlannerPage = () => {
  // -----------------------------------------------------
  // SECTION 1: HERO DATA
  // -----------------------------------------------------
  const heroData = {
    badge: "Capacity Planner",
    badgeStyle: "bg-green-400/20 text-green-300 border-green-400/30",
    breadcrumb: "Home → Products → Capacity Planner",
    headline: "The Capacity Planner -\nevery vehicle loaded\nright, every route optimised.",
    subtext: "A standalone route and capacity planning product that will calculate optimal vehicle loads and delivery routes using real constraints - weight, volume, time windows, and Indian road geography. Designed to reduce cost per drop and improve on-time delivery rates.",
    chips: [
      { icon: <Navigation size={14} className="text-green-400" />, label: "Route Optimisation" },
      { icon: <Weight size={14} className="text-green-400" />, label: "Load Planning" },
      { icon: <Clock size={14} className="text-green-400" />, label: "Time Windows" },
      { icon: <IndianRupee size={14} className="text-green-400" />, label: "Cost Per Drop" }
    ],
    cta1: "Register Early Interest",
    cta2: "See Platform Overview",
    visual: (
      <div className="w-full max-w-md aspect-[4/5] bg-white/5 border border-white/10 rounded-3xl p-3 backdrop-blur-md shadow-2xl relative overflow-hidden group">
        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
            alt="Digital Route Map Interface" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1340]/90 via-[#0B1340]/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-white font-semibold text-lg drop-shadow-md mb-2">
              Route Planning Engine
            </div>
            <div className="flex items-center justify-between bg-white/10 border border-white/20 backdrop-blur-md rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 text-xs font-bold uppercase tracking-wide">3 Routes Active</span>
              </div>
              <span className="text-white/60 text-xs font-medium">Live Optimisation</span>
            </div>
          </div>
        </div>
      </div>
    )
  };

  // -----------------------------------------------------
  // SECTION 2: PROBLEM DATA
  // -----------------------------------------------------
  const problemData = {
    tag: "The Problem",
    headline: "Delivery routes planned by habit\ncost more than anyone realises.",
    subtext: "",
    cards: [
      {
        icon: <Repeat size={32} className="text-[#E8732A]" />,
        title: "Same route, every day",
        body: "Routes built from habit rather than data. Nobody has calculated whether a different sequence would save fuel, time, and driver overtime. Nobody has time to calculate it manually."
      },
      {
        icon: <PackageOpen size={32} className="text-[#E8732A]" />,
        title: "Half-empty vehicles",
        body: "Loads filled based on what is ready, not what maximises capacity. Half-empty trucks leave daily. The cost per delivery climbs without any single decision looking wrong."
      },
      {
        icon: <Clock size={32} className="text-[#E8732A]" />,
        title: "Missed time windows",
        body: "Customer delivery windows noted somewhere - a message, a spreadsheet. Routes not built around them. Deliveries arrive late. Complaints follow."
      },
      {
        icon: <TrendingUp size={32} className="text-[#E8732A]" />,
        title: "Rising cost per drop",
        body: "Fuel, overtime, and failed delivery attempts all rising. The cause is diffuse. The total cost per drop keeps climbing with no clear fix."
      }
    ]
  };

  // -----------------------------------------------------
  // SECTION 3: CAPABILITIES DATA
  // -----------------------------------------------------
  const capabilitiesData = {
    tag: "What's Included",
    headline: "Everything your planning\nteam will need.",
    subtext: "",
    cards: [
      {
        icon: <Navigation size={24} className="text-[#2563EB]" />,
        title: "Dynamic Route Engine",
        body: "Routes calculated using live constraints - stop density, vehicle type, road conditions, and delivery windows processed together."
      },
      {
        icon: <Weight size={24} className="text-[#E8732A]" />,
        title: "Load Optimisation",
        body: "Vehicle loads calculated against weight, volume, and item compatibility. Every vehicle leaves carrying what it should."
      },
      {
        icon: <Clock size={24} className="text-[#2563EB]" />,
        title: "Time Window Planning",
        body: "Customer delivery windows built into route sequencing from the start. Conflicts flagged before dispatch."
      },
      {
        icon: <MapPin size={24} className="text-[#E8732A]" />,
        title: "Multi-Stop Sequencing",
        body: "Stops ordered for minimum drive time and maximum on-time performance across the full route."
      },
      {
        icon: <IndianRupee size={24} className="text-[#2563EB]" />,
        title: "Cost Per Drop Tracking",
        body: "Every route tracked against actual cost - fuel, time, and vehicle. Surfaced for review and improvement."
      },
      {
        icon: <BarChart2 size={24} className="text-[#E8732A]" />,
        title: "Route Analytics",
        body: "On-time rates, load factors, cost trends - available without any manual data entry."
      }
    ]
  };

  // -----------------------------------------------------
  // SECTION 4: STEPS DATA
  // -----------------------------------------------------
  const stepsData = {
    tag: "How It Works",
    headline: "From order list to optimised\ndispatch - in minutes.",
    steps: [
      {
        icon: <ClipboardList size={24} className="text-[#E8732A]" />,
        title: "Upload Orders",
        body: "Destinations, weights, volumes, time windows."
      },
      {
        icon: <Truck size={24} className="text-[#2563EB]" />,
        title: "Set Fleet",
        body: "Available vehicles, capacities, start points."
      },
      {
        icon: <Navigation size={24} className="text-[#E8732A]" />,
        title: "Engine Calculates",
        body: "Optimal routes and loads generated automatically."
      },
      {
        icon: <Weight size={24} className="text-[#2563EB]" />,
        title: "Loads Assigned",
        body: "Each vehicle gets an optimised load plan."
      },
      {
        icon: <MapPin size={24} className="text-[#E8732A]" />,
        title: "Routes Dispatched",
        body: "Drivers receive routes on mobile. Tracking begins."
      },
      {
        icon: <BarChart2 size={24} className="text-[#2563EB]" />,
        title: "Performance Reviewed",
        body: "Actual vs planned compared. Cost per drop updated."
      }
    ]
  };

  // -----------------------------------------------------
  // SECTION 5: DEEP DIVE DATA
  // -----------------------------------------------------
  const deepDiveData = {
    blocks: [
      {
        eyebrow: "Route Optimisation",
        headline: "Routes built on\ndata, not on\nlast week's habit.",
        body: [
          "A route planned manually at 8am may be wrong by 9am. A blocked road, a new order, a vehicle running late - any change makes the original plan suboptimal. Manual replanning under time pressure produces routes that are good enough - not routes that are right.",
          "The Capacity Planner will calculate routes using live inputs every time. Stop density, vehicle capacity, road conditions, and delivery windows processed together. The plan will be generated in minutes - not hours."
        ],
        points: [
          "Routes recalculated with live constraints",
          "New orders inserted into active plans",
          "No manual spreadsheet planning required"
        ],
        visual: (
          <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
            <img 
              src="https://images.unsplash.com/photo-1569098644584-210bcd375b59?q=80&w=1200&auto=format&fit=crop" 
              alt="Dynamic Traffic and Route Calculation" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
        )
      },
      {
        eyebrow: "Load Optimisation",
        headline: "Vehicles that leave\nfull and arrive\non time.",
        body: [
          "Underfilled vehicles are a cost that compounds quietly. When loading decisions are made under time pressure - based on what is ready rather than what fits - every run carries the inefficiency of an incomplete load plan.",
          "The Capacity Planner will calculate optimal loads per vehicle against weight, volume, and item compatibility constraints. Every vehicle will be loaded to its efficient capacity. Compliance limits respected. No overloading. No wasted space."
        ],
        points: [
          "Weight and volume calculated per vehicle",
          "Item compatibility rules enforced in load plan",
          "Compliance limits respected automatically"
        ],
        visual: (
          <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
            <img 
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop" 
              alt="Optimal Loading and Vehicle Capacity" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
        )
      },
      {
        eyebrow: "Time Window Management",
        headline: "Deliveries that arrive\nwhen promised -\nnot when convenient.",
        body: [
          "A delivery window is a promise. When routes are not built around windows, late deliveries are not exceptions - they are the expected outcome of a plan that never accounted for commitments.",
          "The Capacity Planner will build delivery windows into route sequencing from the first calculation. Where windows conflict, the system will flag it before dispatch - not while the driver is already on the road."
        ],
        points: [
          "Time windows factored into route sequencing",
          "Conflicts identified and surfaced pre-dispatch",
          "At-risk deliveries visible in real time"
        ],
        visual: (
          <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
            <img 
              src="https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=1200&auto=format&fit=crop" 
              alt="Delivery Time Window Management" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
        )
      },
      {
        eyebrow: "Cost Analytics",
        headline: "Know the cost of\nevery drop, every\nroute, every week.",
        body: [
          "Most businesses know their monthly fuel bill. Very few know the cost of a delivery on a specific lane, with a specific vehicle, compared to the same lane last Tuesday. Without that data, efficiency improvements are guesswork.",
          "The Capacity Planner will track cost per drop by route, vehicle, and lane. Trends surfaced automatically. The goal is not to report last week's performance - it is to make next week's routes demonstrably cheaper."
        ],
        points: [
          "Cost per drop tracked per route and vehicle",
          "Lane efficiency compared automatically",
          "Weekly trend data shows where to improve"
        ],
        visual: (
          <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
              alt="Cost Tracking and Route Analytics" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
        )
      }
    ]
  };

  // -----------------------------------------------------
  // SECTION 6: WHO THIS IS FOR DATA
  // -----------------------------------------------------
  const audienceData = {
    tag: "Who Buys This",
    headline: "Built for operations where\ndelivery cost matters.",
    cards: [
      {
        icon: <Truck size={32} className="text-[#E8732A]" />,
        title: "Fleet Operators",
        body: "Companies running multi-vehicle, multi-stop delivery operations who need to optimise every run."
      },
      {
        icon: <ShoppingCart size={32} className="text-[#2563EB]" />,
        title: "E-Commerce & D2C",
        body: "High daily delivery volumes with customer time window commitments - where route efficiency directly affects satisfaction and cost."
      },
      {
        icon: <Factory size={32} className="text-[#E8732A]" />,
        title: "FMCG Distributors",
        body: "Wide networks, many stops per route, tight schedules driven by retail replenishment cycles."
      },
      {
        icon: <Refrigerator size={32} className="text-[#2563EB]" />,
        title: "Cold Chain Operators",
        body: "Temperature-sensitive deliveries where delays are not acceptable and planning accuracy is critical."
      },
      {
        icon: <Boxes size={32} className="text-[#E8732A]" />,
        title: "3PL Providers",
        body: "Multi-client route planning with separate cost tracking and performance reporting per client."
      }
    ]
  };

  // -----------------------------------------------------
  // SECTION 7: DASHBOARD DATA
  // -----------------------------------------------------
  const dashboardData = {
    tag: "Platform Preview",
    headline: "This is what the route\nplanning dashboard\nwill look like.",
    subtext: "An early look at the interface being designed for fleet managers and logistics planners.",
    url: "app.healthylifelogisol.in/capacity-planner",
    sidebarItems: [
      { icon: <LayoutDashboard size={14} />, label: "Dashboard" },
      { icon: <Navigation size={14} />, label: "Plan Route" },
      { icon: <RouteIcon size={14} />, label: "Active Routes" },
      { icon: <Truck size={14} />, label: "Fleet" },
      { icon: <IndianRupee size={14} />, label: "Cost Analytics" },
      { icon: <Bell size={14} />, label: "Alerts", badge: "2" },
      { icon: <BarChart2 size={14} />, label: "Reports" }
    ],
    mainContent: (
      <div className="w-full aspect-[16/9] relative overflow-hidden group rounded-xl border border-white/10">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1800&auto=format&fit=crop" 
          alt="Software Route Planning Dashboard Preview" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0B1340]/20 pointer-events-none"></div>
      </div>
    )
  };

  // -----------------------------------------------------
  // SECTION 8: FAQ DATA
  // -----------------------------------------------------
  const faqData = {
    tag: "FAQs",
    headline: "Questions about the Capacity Planner",
    faqs: [
      {
        q: "How is the Capacity Planner different from the Route Planning module?",
        a: "The Platform section explains the technical engine. The Capacity Planner is the subscribable product - the complete planning tool your team will use daily, including onboarding, support, and the cost analytics dashboard."
      },
      {
        q: "When will the Capacity Planner be available?",
        a: "In active development, not yet live. Write to inquiry@healthylifelogisol.in to be informed at launch."
      },
      {
        q: "Can it handle both local and interstate deliveries?",
        a: "Yes. The engine is being designed for both last-mile and inter-city routes, including multi-day delivery planning for long-haul operations."
      },
      {
        q: "Does it support multiple vehicle types in one fleet?",
        a: "Multi-vehicle fleet support is planned - different capacities, load types, and compliance requirements handled within the same route plan."
      },
      {
        q: "Can it connect to our order management system?",
        a: "API integration for order data import is planned. Orders will flow into the planner without manual entry. Details confirmed before launch."
      },
      {
        q: "How do we register early interest?",
        a: "Write to inquiry@healthylifelogisol.in or use the contact page. We respond within one working day."
      }
    ]
  };

  // -----------------------------------------------------
  // SECTION 9: CTA DATA
  // -----------------------------------------------------
  const ctaData = {
    tag: "Register Early Interest",
    headline: "Be among the first to use\nthe Capacity Planner.",
    subtext: "We are speaking with fleet managers and delivery operations teams before launch. If cost per drop and route efficiency are challenges you face, reach out.",
    btn1: "Register Early Interest",
    btn2: "See All Products"
  };

  return (
    
    
    <ProductPageTemplate 
      heroData={heroData}
      problemData={problemData}
      capabilitiesData={capabilitiesData}
      stepsData={stepsData}
      deepDiveData={deepDiveData}
      audienceData={audienceData}
      dashboardData={dashboardData}
      faqData={faqData}
      ctaData={ctaData}
    />
  );
};

export default CapacityPlannerPage;