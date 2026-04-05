import React from "react";
import ProductPageTemplate from "../templates/ProductPageTemplate";
import {
    Truck,
    MapPin,
    FileText,
    Bell,
    Phone,
    FileX,
    EyeOff,
    TrendingUp,
    ClipboardList,
    Navigation,
    Users,
    BarChart2,
    Package,
    Factory,
    ShieldCheck,
    Boxes,
    LayoutDashboard
} from "lucide-react";
import { Helmet } from "react-helmet";

const TMSProductPage = () => {
    // -----------------------------------------------------
    // SECTION 1: HERO DATA
    // -----------------------------------------------------
    const heroData = {
        badge: "TMS Suite",
        badgeStyle: "bg-orange-400/20 text-orange-300 border-orange-400/30",
        breadcrumb: "Home → Products → TMS Suite",
        headline: "The TMS Suite -\nbuilt for Indian\ntransport teams.",
        subtext: "A complete transport management product that will give your team end-to-end visibility over every shipment - from load planning to proof of delivery. Built for the way Indian logistics actually operates.",
        chips: [
            { icon: <Truck size={14} className="text-[#E8732A]" />, label: "End-to-End TMS" },
            { icon: <MapPin size={14} className="text-[#E8732A]" />, label: "Real-Time Tracking" },
            { icon: <FileText size={14} className="text-[#E8732A]" />, label: "Document Hub" },
            { icon: <Bell size={14} className="text-[#E8732A]" />, label: "Exception Alerts" }
        ],
        cta1: "Register Early Interest",
        cta2: "See Platform Overview",
        visual: (
            <div className="w-full max-w-md aspect-[4/5] bg-white/5 border border-white/10 rounded-3xl p-3 backdrop-blur-md shadow-2xl relative overflow-hidden group">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1664297213086-9edac5ffa4cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VHJhbnNwb3J0JTIwZmxlZXQlMjBvcGVyYXRpb25zfGVufDB8fDB8fHwwhttps://plus.unsplash.com/premium_photo-1664297213086-9edac5ffa4cf?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Transport Fleet Operations"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1340]/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white font-semibold text-lg drop-shadow-md">
                        End-to-end Fleet Visibility
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
        headline: "Transport teams are held together\nby WhatsApp groups and phone calls.",
        subtext: "",
        cards: [
            {
                icon: <Phone size={32} className="text-[#E8732A]" />,
                title: "No single source of truth",
                body: "Shipment status lives across messages, calls, and emails. When a customer asks where their order is, it takes three calls to find out."
            },
            {
                icon: <FileX size={32} className="text-[#E8732A]" />,
                title: "Documents that go missing",
                body: "LR copies and PODs scattered across inboxes and physical files. A single audit can take days of manual retrieval."
            },
            {
                icon: <EyeOff size={32} className="text-[#E8732A]" />,
                title: "Invisible freight",
                body: "Once a truck leaves, visibility ends. Status depends on the driver answering their phone - which does not always happen."
            },
            {
                icon: <TrendingUp size={32} className="text-[#E8732A]" />,
                title: "Costs with no explanation",
                body: "Monthly freight bills arrive with no lane-level breakdown. Nobody knows which routes are underperforming or why."
            }
        ]
    };

    // -----------------------------------------------------
    // SECTION 3: CAPABILITIES DATA
    // -----------------------------------------------------
    const capabilitiesData = {
        tag: "What's Included",
        headline: "Everything your transport\nteam will need.",
        subtext: "",
        cards: [
            {
                icon: <ClipboardList size={24} className="text-[#2563EB]" />,
                title: "Shipment Planning Console",
                body: "Create, schedule, and assign shipments from a single planning interface. All vendors, all routes, one screen."
            },
            {
                icon: <Navigation size={24} className="text-[#E8732A]" />,
                title: "Live Shipment Tracking",
                body: "Real-time location and status updates for every active shipment. Know where every vehicle is without making a single call."
            },
            {
                icon: <Users size={24} className="text-[#2563EB]" />,
                title: "Vendor & Fleet Directory",
                body: "Complete vendor profiles with rate cards, vehicle lists, performance scores, and full shipment history."
            },
            {
                icon: <FileText size={24} className="text-[#E8732A]" />,
                title: "Document Vault",
                body: "LR copies, e-way bills, invoices, and PODs attached to each shipment. Searchable and available for audit anytime."
            },
            {
                icon: <Bell size={24} className="text-[#2563EB]" />,
                title: "Intelligent Alerts",
                body: "Automated flags for delays, SLA breaches, and missing documents - sent to the right person at the right time."
            },
            {
                icon: <BarChart2 size={24} className="text-[#E8732A]" />,
                title: "Performance Dashboard",
                body: "On-time rates, cost per shipment, vendor scores - updated without manual data entry."
            }
        ]
    };

    // -----------------------------------------------------
    // SECTION 4: STEPS DATA
    // -----------------------------------------------------
    const stepsData = {
        tag: "How It Works",
        headline: "Planned, dispatched, delivered,\nand reported - in one flow.",
        steps: [
            {
                icon: <ClipboardList size={24} className="text-[#E8732A]" />,
                title: "Plan Shipment",
                body: "Create load, set route, assign vendor."
            },
            {
                icon: <Truck size={24} className="text-[#2563EB]" />,
                title: "Assign & Dispatch",
                body: "Vehicle confirmed, driver notified."
            },
            {
                icon: <Navigation size={24} className="text-[#E8732A]" />,
                title: "Track Live",
                body: "Real-time updates from dispatch to delivery."
            },
            {
                icon: <Bell size={24} className="text-[#2563EB]" />,
                title: "Manage Exceptions",
                body: "Alerts for delays and deviations as they happen."
            },
            {
                icon: <FileText size={24} className="text-[#E8732A]" />,
                title: "Collect POD",
                body: "Driver uploads proof of delivery on arrival."
            },
            {
                icon: <BarChart2 size={24} className="text-[#2563EB]" />,
                title: "Review Performance",
                body: "Lane and vendor scores updated automatically."
            }
        ]
    };

    // -----------------------------------------------------
    // SECTION 5: DEEP DIVE DATA
    // -----------------------------------------------------
    const deepDiveData = {
        blocks: [
            {
                eyebrow: "Vendor Management",
                headline: "Your vendor network,\nstructured and\nalways current.",
                body: [
                    "Managing transport vendors across saved contacts and email threads means no accountability when performance drops. Rate disputes have no data to refer to. Underperforming vendors continue because nobody has the numbers to make the case for change.",
                    "The TMS suite will maintain a structured vendor directory - rate cards, vehicle lists, performance scores, and full shipment history per vendor. Every procurement decision will be backed by data, not memory."
                ],
                points: [
                    "Rate card and contract storage per vendor",
                    "Vehicle and driver profiles per fleet",
                    "Performance history linked to shipments"
                ],
                visual: (
                    <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1661696478346-7a13f1731fbd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Vendor Management and Logistics Partners"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                )
            },
            {
                eyebrow: "Document Management",
                headline: "Every document\nfindable in\nseconds.",
                body: [
                    "An audit notice. A disputed invoice. A customer asking for a POD from three months ago. In most transport operations, retrieving a single document means searching through email threads, WhatsApp histories, and filing cabinets. Hours lost on a task that should take thirty seconds.",
                    "The TMS document vault will store every shipment document against the shipment it belongs to. Searchable by date, vendor, route, or shipment ID. Ready for audit without any manual preparation."
                ],
                points: [
                    "All document types supported per shipment",
                    "Searchable by shipment, vendor, or date",
                    "Audit-ready without manual retrieval"
                ],
                visual: (
                    <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
                        <img
                            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop"
                            alt="Digital Document Management"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                )
            },
            {
                eyebrow: "Exception Management",
                headline: "Problems surfaced\nbefore your\ncustomers notice.",
                body: [
                    "The most expensive logistics exceptions are the ones discovered after the fact - when the customer has already called, when the SLA is already breached, when the explanation is already owed. Reactive management of exceptions costs more than the exceptions themselves.",
                    "The TMS alert system will surface exceptions as they develop. Delays, deviations, missing documents, and SLA breach risks will trigger structured notifications - with enough context for the right person to act immediately."
                ],
                points: [
                    "Automated delay and deviation detection",
                    "SLA breach warnings before the window closes",
                    "Alerts with shipment context attached"
                ],
                visual: (
                    <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
                        <img
                            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop"
                            alt="Monitoring and Exception Alerts"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                )
            },
            {
                eyebrow: "Reporting & Analytics",
                headline: "Reports that\nupdate without\nanyone updating them.",
                body: [
                    "The month-end transport report that takes two days to compile is not a reporting problem. It is a data structure problem. When shipment data is spread across spreadsheets, messages, and physical documents, there is no way to generate a report without first collecting everything manually.",
                    "The TMS suite will maintain structured shipment data from the moment a load is created. On-time delivery rates, vendor performance, cost per lane, and SLA compliance - all available as live reports. No collection. No compilation. Just the numbers."
                ],
                points: [
                    "On-time and SLA reports without manual input",
                    "Cost per shipment and lane analysed automatically",
                    "Vendor scorecards updated per completed shipment"
                ],
                visual: (
                    <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                            alt="Real-time Reporting and Analytics Dashboard"
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
        headline: "The TMS suite is being built\nfor these teams.",
        cards: [
            {
                icon: <Truck size={32} />,
                title: "Transport & Logistics Companies",
                body: "Fleet operators and freight companies managing multi-vendor, multi-route operations who need shipment visibility at scale."
            },
            {
                icon: <Package size={32} />,
                title: "E-Commerce & D2C Brands",
                body: "Online sellers with high outbound shipment volumes who need tracking, document management, and vendor control in one place."
            },
            {
                icon: <Factory size={32} />,
                title: "Manufacturers",
                body: "Plants moving finished goods to dealers and distributors who need route tracking and vendor accountability."
            },
            {
                icon: <ShieldCheck size={32} />,
                title: "Pharma & Regulated Industries",
                body: "Businesses requiring structured documentation and audit trails for every shipment - not just tracking."
            },
            {
                icon: <Boxes size={32} />,
                title: "3PL Providers",
                body: "Third-party logistics companies managing transport for multiple clients who need separate tracking and reporting."
            }
        ]
    };

    // -----------------------------------------------------
    // SECTION 7: DASHBOARD DATA
    // -----------------------------------------------------
    const dashboardData = {
        tag: "Platform Preview",
        headline: "This is what the TMS\ndashboard will look like.",
        subtext: "An early look at the interface being designed for transport planners and operations managers.",
        url: "app.healthylifelogisol.in/tms",
        sidebarItems: [
            { icon: <LayoutDashboard size={14} />, label: "Dashboard" },
            { icon: <Truck size={14} />, label: "Shipments" },
            { icon: <Users size={14} />, label: "Vendors" },
            { icon: <FileText size={14} />, label: "Documents" },
            { icon: <Bell size={14} />, label: "Alerts", badge: "3" },
            { icon: <BarChart2 size={14} />, label: "Reports" }
        ],
        mainContent: (
            <div className="w-full aspect-[16/9] relative overflow-hidden group rounded-xl border border-white/10">
                <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1800&auto=format&fit=crop"
                    alt="Software Dashboard Preview"
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
        headline: "Questions about the TMS Suite",
        faqs: [
            {
                q: "How is the TMS Suite different from the Platform TMS module?",
                a: "The Platform section explains how the TMS works technically. The TMS Suite is the product you would subscribe to - it includes the TMS module along with onboarding, support, and access to the analytics dashboard. Think of the platform as the engine and the suite as the complete vehicle."
            },
            {
                q: "When will the TMS Suite be available?",
                a: "The platform is in active development and not yet live. Write to us at inquiry@healthylifelogisol.in to be informed at launch."
            },
            {
                q: "Is there a mobile app for drivers?",
                a: "A mobile interface for drivers - for status updates and POD upload - is being built as part of the TMS Suite. Not an afterthought. Part of the core product."
            },
            {
                q: "Can it work for inter-state shipments?",
                a: "Yes. The TMS is being designed for pan-India operations - including e-way bill management, multi-state vendor networks, and interstate route tracking."
            },
            {
                q: "Will it connect to our ERP?",
                a: "API integration with ERP systems is planned. Specific integrations will be confirmed before launch."
            },
            {
                q: "How do we register early interest?",
                a: "Write to us at inquiry@healthylifelogisol.in or use the contact page. We respond within one working day."
            }
        ]
    };

    // -----------------------------------------------------
    // SECTION 9: CTA DATA
    // -----------------------------------------------------
    const ctaData = {
        tag: "Register Early Interest",
        headline: "Be among the first\nto use the TMS Suite.",
        subtext: "We are speaking with transport teams before the product launches. If shipment visibility and vendor accountability are challenges you face, reach out.",
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

export default TMSProductPage;