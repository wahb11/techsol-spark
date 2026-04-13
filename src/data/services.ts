import { ShoppingCart, Wrench, Cpu, FlaskConical, Rocket, Monitor, type LucideIcon } from "lucide-react";

export interface ServiceProcess {
  step: number;
  title: string;
  desc: string;
}

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  headline: string;
  shortDesc: string;
  body: string;
  capabilities: string[];
  process: ServiceProcess[];
  highlights: { stat: string; label: string }[];
  accent: string; // tailwind bg gradient class
}

export const servicesData: ServiceData[] = [
  {
    slug: "procurement",
    icon: ShoppingCart,
    title: "Procurement",
    headline: "The Right Components. The Right Source. The Right Price.",
    shortDesc: "Intelligent sourcing, vendor qualification, and supply chain management for the right components at the right price.",
    body: "Effective system integration begins with intelligent procurement. TECHSOL manages the full sourcing process — identifying, evaluating, and procuring equipment and components that meet your technical specifications, quality standards, and budgetary requirements. Our global vendor network and deep industry relationships ensure access to the right products at competitive pricing, with full traceability from order to delivery.",
    capabilities: [
      "Vendor identification and qualification",
      "Technical specification review and compliance",
      "Cost benchmarking and negotiation",
      "Import/export coordination and logistics management",
      "Supply chain risk management",
      "Purchase order tracking and expediting",
    ],
    process: [
      { step: 1, title: "Requirements Analysis", desc: "Deep dive into technical specs, quantity, timeline, and budget constraints." },
      { step: 2, title: "Vendor Sourcing", desc: "Identify and qualify vendors from our global network of trusted suppliers." },
      { step: 3, title: "Evaluation & Negotiation", desc: "Compare proposals, negotiate pricing, and verify compliance." },
      { step: 4, title: "Order & Logistics", desc: "Manage purchase orders, import/export, and last-mile delivery." },
      { step: 5, title: "Quality Verification", desc: "Inspect received goods and confirm against specifications before integration." },
    ],
    highlights: [
      { stat: "500+", label: "Vendors Qualified" },
      { stat: "30%", label: "Avg. Cost Savings" },
      { stat: "100%", label: "Spec Compliance" },
    ],
    accent: "from-blue-700 to-primary",
  },
  {
    slug: "installation",
    icon: Wrench,
    title: "Installation",
    headline: "Precision Installation. Built to Last.",
    shortDesc: "Precision mechanical, electrical, and network infrastructure installation built to the highest technical standards.",
    body: "Our installation teams are trained to the highest technical standards and operate with disciplined attention to detail. From mechanical assembly to electrical and network infrastructure, TECHSOL executes installations that are safe, structured, and aligned with manufacturer specifications. Every installation is documented, inspected, and signed off before the next phase begins.",
    capabilities: [
      "Mechanical and electrical installation",
      "Control systems and instrumentation setup",
      "Network and communication infrastructure",
      "Structured cabling and panel wiring",
      "Site supervision and HSE compliance",
      "Progress reporting and documentation",
    ],
    process: [
      { step: 1, title: "Site Survey", desc: "Assess site conditions, access requirements, and identify preparation needs." },
      { step: 2, title: "Installation Planning", desc: "Develop detailed method statements, risk assessments, and work schedules." },
      { step: 3, title: "Mobilization", desc: "Deploy equipment, materials, and personnel to site on schedule." },
      { step: 4, title: "Execution", desc: "Carry out mechanical, electrical, and network installation with continuous QC." },
      { step: 5, title: "Inspection & Sign-off", desc: "Final walkthrough, punch list closure, and formal handover to testing team." },
    ],
    highlights: [
      { stat: "200+", label: "Sites Installed" },
      { stat: "Zero", label: "HSE Incidents" },
      { stat: "98%", label: "On-Time Delivery" },
    ],
    accent: "from-orange-600 to-amber-500",
  },
  {
    slug: "system-integration",
    icon: Cpu,
    title: "System Integration",
    headline: "Making Every Component Work as One.",
    shortDesc: "Bringing together hardware, software, and control systems into a unified, fully functional whole.",
    body: "We bring together hardware, software, communication protocols, and control systems into a unified, fully functional whole. Our engineers are experienced in integrating systems across diverse technologies and platforms — ensuring seamless data flow, operational coherence, and optimal performance. From PLC-SCADA integration to IT/OT convergence, we design and engineer solutions that eliminate silos and deliver operational clarity.",
    capabilities: [
      "PLC, SCADA, and DCS integration",
      "HMI and operator interface configuration",
      "Third-party system and protocol integration",
      "IT/OT convergence and network integration",
      "Custom integration design and engineering",
      "Data pipeline and historian setup",
    ],
    process: [
      { step: 1, title: "System Architecture Design", desc: "Map all subsystems, protocols, and data flows into a unified architecture." },
      { step: 2, title: "Interface Engineering", desc: "Design and build communication bridges between disparate systems." },
      { step: 3, title: "Software Configuration", desc: "Configure PLCs, SCADA, HMIs, and middleware for target performance." },
      { step: 4, title: "Integration Testing", desc: "Validate data flow, control logic, and system interoperability end-to-end." },
      { step: 5, title: "Optimization & Handover", desc: "Fine-tune performance, document the architecture, and train operators." },
    ],
    highlights: [
      { stat: "50+", label: "Technologies Integrated" },
      { stat: "15+", label: "Years of Expertise" },
      { stat: "100%", label: "System Uptime SLA" },
    ],
    accent: "from-violet-700 to-purple-600",
  },
  {
    slug: "testing",
    icon: FlaskConical,
    title: "Testing",
    headline: "No Assumptions. Only Verified Performance.",
    shortDesc: "Systematic FAT and SAT testing at every level — component, subsystem, and full system verification.",
    body: "TECHSOL conducts systematic, documented testing at every level — component, subsystem, and full system — to identify and resolve any issues before they impact operations. Our testing protocols are aligned with international standards and client-specific requirements, providing full traceability and confidence in every delivered system.",
    capabilities: [
      "Factory Acceptance Testing (FAT)",
      "Site Acceptance Testing (SAT)",
      "Functional and performance verification",
      "Loop checks and interlock testing",
      "Fault simulation and failure mode analysis",
      "Full test documentation and reporting",
    ],
    process: [
      { step: 1, title: "Test Planning", desc: "Define test scope, acceptance criteria, and documentation requirements." },
      { step: 2, title: "FAT — Factory Testing", desc: "Test individual components and subsystems before delivery to site." },
      { step: 3, title: "SAT — Site Testing", desc: "Verify complete system performance under real site conditions." },
      { step: 4, title: "Punch List Resolution", desc: "Identify, track, and close all defects before system acceptance." },
      { step: 5, title: "Test Reports & Certification", desc: "Deliver comprehensive test records and signed acceptance documentation." },
    ],
    highlights: [
      { stat: "100%", label: "Documented Testing" },
      { stat: "Zero", label: "Post-Handover Defects" },
      { stat: "ISO", label: "Aligned Protocols" },
    ],
    accent: "from-teal-600 to-cyan-500",
  },
  {
    slug: "commissioning",
    icon: Rocket,
    title: "Commissioning",
    headline: "From Installation to Full Operation — Seamlessly.",
    shortDesc: "Startup, calibration, validation, and structured handover so your system performs from day one.",
    body: "TECHSOL's commissioning engineers ensure that every installed and integrated system is started up, calibrated, and validated under real operating conditions — with a structured handover process that gives your operations team full confidence. We don't leave until the system is running, documented, and your team is fully trained.",
    capabilities: [
      "Pre-commissioning inspections and checks",
      "System startup and operational validation",
      "Performance tuning and calibration",
      "Operator training and knowledge transfer",
      "As-built documentation and O&M manuals",
      "Post-commissioning support",
    ],
    process: [
      { step: 1, title: "Pre-Commissioning Checks", desc: "Verify all installations are complete and ready for startup." },
      { step: 2, title: "System Startup", desc: "Controlled initial startup with real-time monitoring and logging." },
      { step: 3, title: "Calibration & Tuning", desc: "Calibrate instruments, tune control loops, and optimize performance." },
      { step: 4, title: "Performance Validation", desc: "Confirm system meets all specified operational requirements." },
      { step: 5, title: "Handover & Training", desc: "Transfer knowledge, deliver documentation, and provide ongoing support." },
    ],
    highlights: [
      { stat: "100+", label: "Systems Commissioned" },
      { stat: "On-Time", label: "Every Handover" },
      { stat: "24/7", label: "Post-Comm Support" },
    ],
    accent: "from-rose-600 to-pink-500",
  },
  {
    slug: "laptops-systems",
    icon: Monitor,
    title: "Laptops & Systems",
    headline: "The Right Hardware for Every Requirement.",
    shortDesc: "Supply of laptops, desktops, and workstations — from individual units to bulk enterprise deployments, configured and ready to use.",
    body: "TECHSOL supplies a wide range of laptops, desktops, workstations, and computing systems tailored to your operational and business needs. From individual units to bulk enterprise deployments, we source from leading brands and ensure every system is configured, tested, and ready to use straight out of the box. We handle procurement, configuration, and integration with your existing infrastructure.",
    capabilities: [
      "Laptops, desktops, and workstations supply",
      "Bulk enterprise and corporate procurement",
      "Brand selection and specification guidance",
      "Pre-delivery configuration and setup",
      "Warranty management and after-sales support",
      "Integration with existing IT infrastructure",
    ],
    process: [
      { step: 1, title: "Requirement Assessment", desc: "Understand computing needs, performance specs, and budget parameters." },
      { step: 2, title: "Brand & Spec Selection", desc: "Recommend optimal hardware configurations from leading manufacturers." },
      { step: 3, title: "Procurement & Sourcing", desc: "Source systems through authorized channels with full warranty coverage." },
      { step: 4, title: "Pre-Delivery Configuration", desc: "Image, configure, and test every unit before dispatch." },
      { step: 5, title: "Deployment & Support", desc: "Deliver, set up, and provide ongoing warranty and technical support." },
    ],
    highlights: [
      { stat: "1000+", label: "Units Deployed" },
      { stat: "10+", label: "Brands Available" },
      { stat: "Full", label: "Warranty Coverage" },
    ],
    accent: "from-emerald-600 to-green-500",
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  servicesData.find((s) => s.slug === slug);
