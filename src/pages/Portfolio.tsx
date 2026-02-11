import { useState } from "react";
import { motion } from "framer-motion";
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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="bg-primary section-padding">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="text-amber text-sm font-semibold uppercase tracking-wider">Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-heading text-primary-foreground mt-2">Our Work Speaks</h1>
            <p className="text-primary-foreground/70 mt-4 text-lg">A selection of projects that showcase our expertise and commitment to quality.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="h-40 bg-primary flex items-center justify-center">
                  <ExternalLink className="w-10 h-10 text-amber opacity-50 group-hover:opacity-100 transition-opacity" />
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
