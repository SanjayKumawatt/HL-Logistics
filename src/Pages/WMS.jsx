import React from "react";
import ProductPageTemplate from "../templates/ProductPageTemplate";
import {
    Warehouse,
    Boxes,
    ScanLine,
    RefreshCw,
    BellRing,
    ClipboardX,
    AlertOctagon,
    TrendingDown,
    Clock,
    ArrowDownToLine,
    BarChart2,
    PackageCheck,
    PackageOpen,
    ShoppingCart,
    Factory,
    Pill,
    Store,
    LayoutDashboard
} from "lucide-react";
import { Helmet } from "react-helmet";

const WMSProductPage = () => {
    // -----------------------------------------------------
    // SECTION 1: HERO DATA
    // -----------------------------------------------------
    const heroData = {
        badge: "WMS Suite",
        badgeStyle: "bg-blue-400/20 text-blue-300 border-blue-400/30",
        breadcrumb: "Home → Products → WMS Suite",
        headline: "The WMS Suite -\nbuilt for warehouse\nteams that need accuracy.",
        subtext: "A complete warehouse management product that will give your team real-time inventory visibility, guided picking, and automated cycle counts - without relying on spreadsheets, memory, or experienced staff carrying location maps in their heads.",
        chips: [
            { icon: <Boxes size={14} className="text-blue-300" />, label: "Live Inventory" },
            { icon: <ScanLine size={14} className="text-blue-300" />, label: "Guided Picking" },
            { icon: <RefreshCw size={14} className="text-blue-300" />, label: "Cycle Counts" },
            { icon: <BellRing size={14} className="text-blue-300" />, label: "Reorder Alerts" }
        ],
        cta1: "Register Early Interest",
        cta2: "See Platform Overview",
        visual: (
            <div className="w-full max-w-md aspect-[4/5] bg-white/5 border border-white/10 rounded-3xl p-3 backdrop-blur-md shadow-2xl relative overflow-hidden group">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1749857000879-43e728fde488?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Modern Logistics Warehouse Overview"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1340]/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white font-semibold text-lg drop-shadow-md">
                        Live Warehouse Overview
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
        headline: "Warehouse errors accumulate\nquietly - until they don't.",
        subtext: "",
        cards: [
            {
                icon: <ClipboardX size={32} className="text-[#E8732A]" />,
                title: "Inventory that lives in heads",
                body: "When bin locations are known only to long-serving staff, every departure takes institutional knowledge with it. New staff make errors. Productivity drops."
            },
            {
                icon: <AlertOctagon size={32} className="text-[#E8732A]" />,
                title: "Picking errors that become returns",
                body: "Wrong items picked because the picking list was printed before the last update. Returns traced back to warehouse errors that nobody caught in time."
            },
            {
                icon: <TrendingDown size={32} className="text-[#E8732A]" />,
                title: "Stock-outs with no warning",
                body: "Fast-moving items run out because reorder points live in a spreadsheet that nobody updates. The system did not know. Nobody told it."
            },
            {
                icon: <Clock size={32} className="text-[#E8732A]" />,
                title: "Counts that cost a day",
                body: "Full stock counts require halting operations. So they happen quarterly - if at all. Discrepancies accumulate between counts."
            }
        ]
    };

    // -----------------------------------------------------
    // SECTION 3: CAPABILITIES DATA
    // -----------------------------------------------------
    const capabilitiesData = {
        tag: "What's Included",
        headline: "Everything your warehouse\nteam will need.",
        subtext: "",
        cards: [
            {
                icon: <Boxes size={24} className="text-[#2563EB]" />,
                title: "Live Inventory Dashboard",
                body: "Real-time stock levels across every bin, rack, and zone. Every movement updates inventory instantly."
            },
            {
                icon: <ArrowDownToLine size={24} className="text-[#E8732A]" />,
                title: "Intelligent Putaway",
                body: "Bin assignments based on SKU velocity, weight, and zone rules. Staff directed to the right location."
            },
            {
                icon: <ScanLine size={24} className="text-[#2563EB]" />,
                title: "Guided Picking",
                body: "Pick sequences optimised by warehouse route. Every team member follows the most efficient path."
            },
            {
                icon: <RefreshCw size={24} className="text-[#E8732A]" />,
                title: "Rolling Cycle Counts",
                body: "Continuous counts without halting operations. Discrepancies surfaced immediately."
            },
            {
                icon: <BellRing size={24} className="text-[#2563EB]" />,
                title: "Reorder Threshold Alerts",
                body: "Stock drops below defined level - alert triggered before the shelf runs empty."
            },
            {
                icon: <BarChart2 size={24} className="text-[#E8732A]" />,
                title: "Warehouse Analytics",
                body: "Throughput, picking accuracy, zone utilisation - without manual data collection."
            }
        ]
    };

    // -----------------------------------------------------
    // SECTION 4: STEPS DATA
    // -----------------------------------------------------
    const stepsData = {
        tag: "How It Works",
        headline: "Inbound to outbound -\nfully tracked, fully guided.",
        steps: [
            {
                icon: <PackageCheck size={24} className="text-[#E8732A]" />,
                title: "Receive Goods",
                body: "Inbound stock logged against purchase orders."
            },
            {
                icon: <ArrowDownToLine size={24} className="text-[#2563EB]" />,
                title: "Putaway",
                body: "System directs to optimal bin location."
            },
            {
                icon: <Boxes size={24} className="text-[#E8732A]" />,
                title: "Inventory Live",
                body: "Stock levels update across all zones in real time."
            },
            {
                icon: <ScanLine size={24} className="text-[#2563EB]" />,
                title: "Pick Order",
                body: "Optimised pick list generated per order."
            },
            {
                icon: <PackageOpen size={24} className="text-[#E8732A]" />,
                title: "Pack & Dispatch",
                body: "Verified and released for delivery."
            },
            {
                icon: <RefreshCw size={24} className="text-[#2563EB]" />,
                title: "Cycle Count",
                body: "Automated verification without disrupting operations."
            }
        ]
    };

    // -----------------------------------------------------
    // SECTION 5: DEEP DIVE DATA
    // -----------------------------------------------------
    const deepDiveData = {
        blocks: [
            {
                eyebrow: "Inventory Tracking",
                headline: "Every SKU.\nEvery bin.\nAlways current.",
                body: [
                    "Inventory accuracy in a manual warehouse depends entirely on staff remembering to update the spreadsheet - and updating it correctly. When someone forgets, or enters the wrong quantity, the data becomes a source of errors rather than a source of truth.",
                    "The WMS Suite will maintain a live inventory record that updates with every movement. Inbound, putaway, picking, dispatch - each action reflected instantly. The system will always know what is where. Staff will not need to."
                ],
                points: [
                    "Live updates on every inbound and outbound movement",
                    "Bin-level location for every active SKU",
                    "Searchable by product name, SKU, or bin"
                ],
                visual: (
                    <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
                        <img
                            src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop"
                            alt="Live Inventory Tracking Racks"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                )
            },
            {
                eyebrow: "Putaway & Picking",
                headline: "The right item.\nThe right bin.\nEvery pick.",
                body: [
                    "Picking errors in a high-volume warehouse are not the result of careless staff. They are the result of unclear instructions, outdated lists, and bin assignments that were sensible six months ago but have never been reviewed since. The system is the problem - not the people.",
                    "The WMS Suite will generate picking lists optimised by route inside the warehouse. Staff will follow the most efficient sequence - from the first item to the last. New team members will be as effective as experienced ones from day one."
                ],
                points: [
                    "Pick sequences optimised by warehouse route",
                    "Putaway rules based on SKU velocity and zone",
                    "Consistent performance regardless of experience"
                ],
                visual: (
                    <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
                        <img
                            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop"
                            alt="Guided Picking in Warehouse"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                )
            },
            {
                eyebrow: "Cycle Count Automation",
                headline: "Counts that run\nwithout stopping\nanything.",
                body: [
                    "The quarterly full count is a ritual that costs a full day of operations and tells you where discrepancies were - not where they are now. By the time the count is done, the data is already aging.",
                    "The WMS Suite will enable rolling cycle counts that run continuously, zone by zone. Discrepancies flagged in real time. Audit trails maintained automatically. No full-count shutdowns. No quarterly surprises."
                ],
                points: [
                    "Continuous counts across zones without halt",
                    "Real-time discrepancy flagging and resolution",
                    "Full audit trail maintained automatically"
                ],
                visual: (
                    <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
                        <img
                            src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1200&auto=format&fit=crop"
                            alt="Automated Warehouse Scanning"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#0B1340]/10 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                )
            },
            {
                eyebrow: "Reorder & Analytics",
                headline: "Stock-outs that\nnever happen\nbecause the system saw them coming.",
                body: [
                    "Reorder decisions based on instinct lead to two consistent problems: over-ordering slow-moving items that tie up capital, and running out of fast-moving items at the worst possible moment. Both are avoidable - if the system carries the signal.",
                    "The WMS Suite will track stock against defined thresholds. Alerts triggered before the shelf runs empty. Analytics will show which SKUs need threshold adjustments - and which zones are underutilised. The goal is a warehouse that manages itself at the operational level."
                ],
                points: [
                    "Reorder alerts triggered before stock runs out",
                    "Analytics identify slow movers and dead stock",
                    "Zone utilisation tracked and optimised over time"
                ],
                visual: (
                    <div className="w-full max-w-lg aspect-[4/3] rounded-3xl shadow-lg border border-[#E0E7FF] overflow-hidden group relative">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                            alt="Warehouse Analytics and Insights"
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
        headline: "The WMS Suite is being\nbuilt for these operations.",
        cards: [
            {
                icon: <Warehouse size={32} className="text-[#E8732A]" />,
                title: "3PL Warehouse Operators",
                body: "Multi-client inventory management with separate tracking and reporting per client - in one system."
            },
            {
                icon: <ShoppingCart size={32} className="text-[#2563EB]" />,
                title: "E-Commerce Fulfilment",
                body: "High SKU count, fast order turnaround, and returns - requiring real-time inventory accuracy throughout."
            },
            {
                icon: <Factory size={32} className="text-[#E8732A]" />,
                title: "Manufacturing Plants",
                body: "Raw material inbound, WIP, and finished goods managed through one warehouse interface."
            },
            {
                icon: <Pill size={32} className="text-[#2563EB]" />,
                title: "Pharma & Healthcare",
                body: "Batch tracking, expiry management, and temperature-zone compliance in the warehouse workflow."
            },
            {
                icon: <Store size={32} className="text-[#E8732A]" />,
                title: "Retail Distribution Centres",
                body: "Multi-SKU fulfilment with replenishment planning and slow-mover identification."
            }
        ]
    };

    // -----------------------------------------------------
    // SECTION 7: DASHBOARD DATA
    // -----------------------------------------------------
    const dashboardData = {
        tag: "Platform Preview",
        headline: "This is what the WMS\ndashboard will look like.",
        subtext: "An early look at the warehouse management interface being designed for warehouse managers and operations teams.",
        url: "app.healthylifelogisol.in/wms",
        sidebarItems: [
            { icon: <LayoutDashboard size={14} />, label: "Dashboard" },
            { icon: <Boxes size={14} />, label: "Inventory" },
            { icon: <ArrowDownToLine size={14} />, label: "Putaway" },
            { icon: <ScanLine size={14} />, label: "Picking" },
            { icon: <RefreshCw size={14} />, label: "Cycle Count" },
            { icon: <BellRing size={14} />, label: "Alerts", badge: "3" },
            { icon: <BarChart2 size={14} />, label: "Reports" }
        ],
        mainContent: (
            <div className="w-full aspect-[16/9] relative overflow-hidden group rounded-xl border border-white/10">
                <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1800&auto=format&fit=crop"
                    alt="WMS Dashboard Interface"
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
        headline: "Questions about the WMS Suite",
        faqs: [
            {
                q: "How is the WMS Suite different from the Platform WMS module?",
                a: "The Platform section explains the technical workings of the WMS. The WMS Suite is the subscribable product - including onboarding, support, and the full analytics dashboard."
            },
            {
                q: "When will the WMS Suite be available?",
                a: "In active development, not yet live. Write to inquiry@healthylifelogisol.in to be informed at launch."
            },
            {
                q: "Can it handle multiple warehouse locations?",
                a: "Multi-location support is in the product scope. Inventory across more than one facility managed from a single interface."
            },
            {
                q: "Does it support barcode scanning?",
                a: "Barcode-based scanning is planned for the mobile interface used by warehouse staff for putaway and picking."
            },
            {
                q: "Can it integrate with our ERP?",
                a: "API integration with ERP and procurement systems is planned. Specific integrations confirmed before launch."
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
        headline: "Be among the first\nto use the WMS Suite.",
        subtext: "We are speaking with warehouse operators before the product launches. If inventory accuracy and operational efficiency are challenges you face, reach out.",
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

export default WMSProductPage;