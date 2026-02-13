import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const categories = ["All", "Web Development", "Graphic Design", "CCTV & Security", "Networking"];

const projects = [
  { title: "Corporate E-Commerce Platform", category: "Web Development", challenge: "Outdated legacy system with poor UX", solution: "Modern responsive web app with integrated payment gateway", outcome: "200% increase in online sales" },
  { title: "Brand Identity for FinTech Startup", category: "Graphic Design", challenge: "New startup with no visual identity", solution: "Complete brand kit including logo, business cards, and marketing collateral", outcome: "Strong brand recognition from launch" },
  { title: "Hospital Surveillance System", category: "CCTV & Security", challenge: "Large campus with blind spots in security coverage", solution: "120+ HD cameras with centralized NVR monitoring system", outcome: "100% campus coverage with 24/7 recording" },
  { title: "Office Network Infrastructure", category: "Networking", challenge: "Slow connectivity across a 3-floor office building", solution: "Structured cabling, managed switches, and enterprise Wi-Fi deployment", outcome: "10x improvement in network speed" },
  { title: "School Management System", category: "Web Development", challenge: "Manual record-keeping causing errors and delays", solution: "Custom web portal for student, teacher, and admin management", outcome: "80% reduction in administrative workload" },
  { title: "Restaurant Social Media Campaign", category: "Graphic Design", challenge: "Low engagement on social media platforms", solution: "Branded content calendar with custom graphics and promotional designs", outcome: "3x increase in social media engagement" },
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
            <motion.p variants={fadeUp} className="text-primary-foreground/70 mt-4 text-lg">A selection of projects that showcase our expertise and commitment to quality.</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background overflow-hidden">
        <div className="container">
          {/* Filter */}
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
