import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const categories = ["All", "System Integration", "Installation", "Procurement", "Commissioning"];

const projects = [
  { title: "Industrial Plant Control System", category: "System Integration", challenge: "Legacy control systems with no centralized monitoring", solution: "Full PLC/SCADA integration with HMI operator interfaces and remote monitoring", outcome: "40% reduction in downtime with real-time visibility" },
  { title: "Commercial Building Infrastructure", category: "Installation", challenge: "New 5-story office complex requiring complete electrical and network setup", solution: "Structured cabling, panel wiring, access control, and communication infrastructure", outcome: "Delivered ahead of schedule with full HSE compliance" },
  { title: "Manufacturing Equipment Procurement", category: "Procurement", challenge: "Sourcing specialized machinery across multiple international vendors", solution: "Vendor qualification, cost benchmarking, and logistics coordination across 8 countries", outcome: "15% cost savings with zero supply chain delays" },
  { title: "Water Treatment Facility Commissioning", category: "Commissioning", challenge: "Complex multi-system startup with strict regulatory requirements", solution: "Phased pre-commissioning, SAT, performance validation, and operator training", outcome: "First-pass certification with full documentation handover" },
  { title: "Telecom Network Integration", category: "System Integration", challenge: "Multiple vendor equipment requiring unified management", solution: "IT/OT convergence, protocol integration, and custom network architecture", outcome: "Seamless data flow across 200+ endpoints" },
  { title: "Power Substation Installation", category: "Installation", challenge: "Greenfield substation requiring precision mechanical and electrical work", solution: "Complete mechanical assembly, control systems setup, and structured cabling", outcome: "Operational within 6 months with zero safety incidents" },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="bg-primary section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-12 right-[15%] w-24 h-24 border border-amber/10 rounded-2xl rotate-12 animate-float" />
          <div className="absolute bottom-8 left-[10%] w-16 h-16 border border-amber/10 rounded-full animate-float-slow" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.span variants={fadeUp} className="text-amber text-sm font-semibold uppercase tracking-wider inline-block">Portfolio</motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-heading text-primary-foreground mt-2">Our Work Speaks</motion.h1>
            <motion.p variants={fadeUp} className="text-primary-foreground/70 mt-4 text-lg">A selection of projects that showcase our system integration expertise and commitment to delivering operational excellence.</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background overflow-hidden">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-wrap gap-2 justify-center mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                    : "bg-secondary text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  variants={scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  layout
                  className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:shadow-accent/5 hover:border-accent/40 transition-all duration-300 group"
                >
                  <div className="h-40 bg-primary relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy-dark to-primary opacity-80" />
                    <ExternalLink className="w-10 h-10 text-amber opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 relative z-10" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{project.category}</span>
                    <h3 className="font-heading text-lg text-foreground mt-1 mb-3">{project.title}</h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-semibold text-foreground">Challenge:</span> <span className="text-muted-foreground">{project.challenge}</span></p>
                      <p><span className="font-semibold text-foreground">Solution:</span> <span className="text-muted-foreground">{project.solution}</span></p>
                      <p><span className="font-semibold text-accent">Outcome:</span> <span className="text-muted-foreground">{project.outcome}</span></p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
