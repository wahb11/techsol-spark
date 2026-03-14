import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Wrench, Cpu, FlaskConical, Rocket, Monitor, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { stagger, fadeUp, fadeLeft, fadeRight, scaleIn, viewport, viewportLazy, tapScale } from "@/lib/animations";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: ShoppingCart,
    title: "Procurement",
    headline: "The Right Components. The Right Source. The Right Price.",
    body: "Effective system integration begins with intelligent procurement. TECHSOL manages the full sourcing process — identifying, evaluating, and procuring equipment and components that meet your technical specifications, quality standards, and budgetary requirements.",
    capabilities: [
      "Vendor identification and qualification",
      "Technical specification review and compliance",
      "Cost benchmarking and negotiation",
      "Import/export coordination and logistics management",
      "Supply chain risk management",
    ],
  },
  {
    icon: Wrench,
    title: "Installation",
    headline: "Precision Installation. Built to Last.",
    body: "Our installation teams are trained to the highest technical standards and operate with disciplined attention to detail. From mechanical assembly to electrical and network infrastructure, TECHSOL executes installations that are safe, structured, and aligned with manufacturer specifications.",
    capabilities: [
      "Mechanical and electrical installation",
      "Control systems and instrumentation setup",
      "Network and communication infrastructure",
      "Structured cabling and panel wiring",
      "Site supervision and HSE compliance",
    ],
  },
  {
    icon: Cpu,
    title: "System Integration",
    headline: "Making Every Component Work as One.",
    body: "We bring together hardware, software, communication protocols, and control systems into a unified, fully functional whole. Our engineers are experienced in integrating systems across diverse technologies and platforms — ensuring seamless data flow, operational coherence, and optimal performance.",
    capabilities: [
      "PLC, SCADA, and DCS integration",
      "HMI and operator interface configuration",
      "Third-party system and protocol integration",
      "IT/OT convergence and network integration",
      "Custom integration design and engineering",
    ],
  },
  {
    icon: FlaskConical,
    title: "Testing",
    headline: "No Assumptions. Only Verified Performance.",
    body: "TECHSOL conducts systematic, documented testing at every level — component, subsystem, and full system — to identify and resolve any issues before they impact operations. Our testing protocols are aligned with international standards and client-specific requirements.",
    capabilities: [
      "Factory Acceptance Testing (FAT)",
      "Site Acceptance Testing (SAT)",
      "Functional and performance verification",
      "Loop checks and interlock testing",
      "Fault simulation and failure mode analysis",
      "Full test documentation and reporting",
    ],
  },
  {
    icon: Rocket,
    title: "Commissioning",
    headline: "From Installation to Full Operation — Seamlessly.",
    body: "TECHSOL's commissioning engineers ensure that every installed and integrated system is started up, calibrated, and validated under real operating conditions — with a structured handover process that gives your operations team full confidence.",
    capabilities: [
      "Pre-commissioning inspections and checks",
      "System startup and operational validation",
      "Performance tuning and calibration",
      "Operator training and knowledge transfer",
      "As-built documentation and O&M manuals",
      "Post-commissioning support",
    ],
  },
  {
    icon: Monitor,
    title: "Laptops & Systems",
    headline: "The Right Hardware for Every Requirement.",
    body: "TECHSOL supplies a wide range of laptops, desktops, workstations, and computing systems tailored to your operational and business needs. From individual units to bulk enterprise deployments, we source from leading brands and ensure every system is configured, tested, and ready to use.",
    capabilities: [
      "Laptops, desktops, and workstations supply",
      "Bulk enterprise and corporate procurement",
      "Brand selection and specification guidance",
      "Pre-delivery configuration and setup",
      "Warranty management and after-sales support",
      "Integration with existing IT infrastructure",
    ],
  },
];


const Services = () => (
  <Layout>
    <section className="bg-primary section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-[12%] w-28 h-28 border border-amber/10 rounded-full animate-float-slow" />
        <div className="absolute bottom-10 left-[8%] w-16 h-16 border border-amber/10 rounded-xl rotate-12 animate-float" />
        <div className="absolute top-1/2 right-[30%] w-3 h-3 bg-amber/20 rounded-full animate-pulse-glow" />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-2xl"
        >
          <motion.span variants={fadeUp} className="text-amber text-sm font-semibold uppercase tracking-wider inline-block">Our Services</motion.span>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-heading text-primary-foreground mt-2">
            Integrated Service Model
          </motion.h1>
          <motion.p variants={fadeUp} className="text-primary-foreground/70 mt-4 text-lg">
            Covering every phase of a system's lifecycle — from sourcing the right components to ensuring the final system is tested, verified, and fully operational.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {services.map((s, idx) => (
      <section key={s.title} className={`section-padding overflow-hidden ${idx % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={stagger}
              className={idx % 2 !== 0 ? "md:order-2" : ""}
            >
              <motion.div variants={idx % 2 === 0 ? fadeLeft : fadeRight} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-accent text-sm font-semibold uppercase tracking-wider">Service {idx + 1}</span>
              </motion.div>
              <motion.h2 variants={idx % 2 === 0 ? fadeLeft : fadeRight} className="text-3xl font-heading text-foreground mb-3">
                {s.title}
              </motion.h2>
              <motion.p variants={idx % 2 === 0 ? fadeLeft : fadeRight} className="text-accent font-semibold text-lg mb-4">
                {s.headline}
              </motion.p>
              <motion.p variants={idx % 2 === 0 ? fadeLeft : fadeRight} className="text-muted-foreground leading-relaxed">
                {s.body}
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={stagger}
              className={idx % 2 !== 0 ? "md:order-1" : ""}
            >
              <motion.h3 variants={fadeUp} className="font-heading text-foreground mb-4">Key Capabilities</motion.h3>
              <div className="space-y-3">
                {s.capabilities.map((cap) => (
                  <motion.div
                    key={cap}
                    variants={fadeUp}
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                    whileTap={tapScale}
                    className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border hover:border-accent/40 hover:shadow-md transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm">{cap}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="bg-primary section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>
      <div className="container text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading text-primary-foreground mb-4">Need a Custom Solution?</motion.h2>
          <motion.p variants={fadeUp} className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Every project is unique. Let's discuss how TECHSOL can deliver a tailored integration solution for your requirements.
          </motion.p>
          <motion.div variants={scaleIn}>
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-amber-dark font-semibold px-10 glow-amber group">
                Get in Touch <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Services;
