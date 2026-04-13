import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ExternalLink, ArrowRight, Zap, Clock, CheckCircle, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { tapScale, vp, vpCard, EASE } from "@/lib/animations";

const E = EASE;

const categories = ["All", "System Integration", "Installation", "Procurement", "Commissioning"];

const projects = [
  { title:"Industrial Plant Control System",        category:"System Integration", tag:"Industrial",    challenge:"Legacy control systems with no centralized monitoring",                          solution:"Full PLC/SCADA integration with HMI operator interfaces and remote monitoring",             outcome:"40% reduction in downtime with real-time visibility" },
  { title:"Commercial Building Infrastructure",     category:"Installation",       tag:"Commercial",    challenge:"New 5-story office complex requiring complete electrical and network setup",       solution:"Structured cabling, panel wiring, access control, and communication infrastructure",        outcome:"Delivered ahead of schedule with full HSE compliance" },
  { title:"Manufacturing Equipment Procurement",    category:"Procurement",        tag:"Manufacturing", challenge:"Sourcing specialized machinery across multiple international vendors",              solution:"Vendor qualification, cost benchmarking, and logistics coordination across 8 countries",    outcome:"15% cost savings with zero supply chain delays" },
  { title:"Water Treatment Facility Commissioning", category:"Commissioning",      tag:"Utilities",     challenge:"Complex multi-system startup with strict regulatory requirements",                 solution:"Phased pre-commissioning, SAT, performance validation, and operator training",              outcome:"First-pass certification with full documentation handover" },
  { title:"Telecom Network Integration",            category:"System Integration", tag:"Telecom",       challenge:"Multiple vendor equipment requiring unified management",                           solution:"IT/OT convergence, protocol integration, and custom network architecture",                  outcome:"Seamless data flow across 200+ endpoints" },
  { title:"Power Substation Installation",          category:"Installation",       tag:"Energy",        challenge:"Greenfield substation requiring precision mechanical and electrical work",          solution:"Complete mechanical assembly, control systems setup, and structured cabling",               outcome:"Operational within 6 months with zero safety incidents" },
];

const highlights = [
  { value:"500+", label:"Projects Delivered", icon:Zap },
  { value:"15+",  label:"Years Experience",   icon:Clock },
  { value:"100%", label:"On-Time Delivery",   icon:CheckCircle },
  { value:"50+",  label:"Clients Served",     icon:Handshake },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const { scrollYProgress: heroSY } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY       = useTransform(heroSY, [0, 1], [0, 110]);
  const heroOpacity = useTransform(heroSY, [0, 0.75], [1, 0]);
  const heroScale   = useTransform(heroSY, [0, 1], [1, 1.07]);

  const { scrollYProgress: gridSY } = useScroll({ target: gridRef, offset: ["start end", "end start"] });
  const gridBlobY = useTransform(gridSY, [0, 1], [-25, 25]);

  return (
    <Layout>
      {/* ════════════ HERO ════════════ */}
      <section ref={heroRef} className="bg-primary section-padding relative overflow-hidden min-h-[58vh] flex items-center">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-2xl" />
        </motion.div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-12 right-[15%] w-24 h-24 border border-amber/10 rounded-2xl rotate-12 animate-float" />
          <div className="absolute bottom-8 left-[10%] w-16 h-16 border border-amber/10 rounded-full animate-float-slow" />
          <div className="absolute top-1/2 right-[35%] w-3 h-3 bg-amber/25 rounded-full animate-pulse-glow" />
          <div className="absolute top-1/3 left-[30%] w-2 h-2 bg-amber/35 rounded-full animate-pulse-glow" style={{ animationDelay: "0.8s" }} />
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="container relative z-10">
          <div className="max-w-2xl">
            <motion.span initial={{ opacity:0, y:20, scale:0.9 }} animate={{ opacity:1, y:0, scale:1 }} transition={{ duration:0.6, ease:E }}
              className="text-amber text-sm font-semibold uppercase tracking-widest inline-block border border-amber/30 rounded-full px-3 py-1 bg-amber/10 backdrop-blur-sm mb-6">
              Our Portfolio
            </motion.span>
            <motion.h1 initial={{ opacity:0, filter:"blur(12px)", scale:1.04 }} animate={{ opacity:1, filter:"blur(0px)", scale:1 }} transition={{ duration:0.85, ease:E, delay:0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground leading-tight">
              Our Work Speaks
            </motion.h1>
            <motion.p initial={{ opacity:0, y:22 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.65, ease:E, delay:0.32 }}
              className="text-primary-foreground/70 mt-5 text-lg leading-relaxed max-w-xl">
              A selection of projects that showcase our system integration expertise and commitment to delivering
              operational excellence.
            </motion.p>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L60 54C120 48 240 36 360 30C480 24 600 24 720 30C840 36 960 48 1080 48C1200 48 1320 36 1380 30L1440 24V60H0Z" fill="hsl(var(--accent))" />
          </svg>
        </div>
      </section>

      {/* ════════════ STATS ════════════ */}
      <section className="bg-accent">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {highlights.map((h, i) => (
              <motion.div key={h.label}
                initial={{ opacity:0, scale:0.82, y:18 }} whileInView={{ opacity:1, scale:1, y:0 }} viewport={vpCard}
                transition={{ duration:0.55, ease:E, delay: i * 0.09 }}
                whileTap={tapScale} className="group">
                <h.icon className="w-5 h-5 mx-auto mb-1.5 text-accent-foreground/60 group-hover:text-accent-foreground transition-colors" />
                <div className="text-2xl md:text-3xl font-heading font-bold text-accent-foreground">{h.value}</div>
                <div className="text-xs text-accent-foreground/70 mt-0.5">{h.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ PROJECTS ════════════ */}
      <section ref={gridRef} className="section-padding bg-background overflow-hidden relative">
        <motion.div style={{ y: gridBlobY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-80 bg-accent/3 rounded-full blur-3xl" />
        </motion.div>
        <div className="container relative z-10">
          {/* Heading */}
          <div className="max-w-2xl mx-auto text-center mb-10">
            <motion.span initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.55, ease:E }}
              className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">Case Studies
            </motion.span>
            <motion.h2 initial={{ opacity:0, filter:"blur(8px)", scale:1.02 }} whileInView={{ opacity:1, filter:"blur(0px)", scale:1 }} viewport={vp} transition={{ duration:0.7, ease:E, delay:0.08 }}
              className="text-3xl md:text-4xl font-heading text-foreground">Selected Projects
            </motion.h2>
            <motion.p initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.6, ease:E, delay:0.16 }}
              className="mt-4 text-base text-muted-foreground">Real results from complex system integration engagements.
            </motion.p>
            <motion.div initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={vp} transition={{ duration:0.7, delay:0.24 }}
              className="h-px w-24 bg-accent/50 mx-auto mt-5 origin-center" />
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((cat, i) => (
              <motion.button key={cat}
                initial={{ opacity:0, scale:0.88 }} whileInView={{ opacity:1, scale:1 }} viewport={vpCard}
                transition={{ duration:0.45, ease:E, delay: i * 0.06 }}
                onClick={() => setFilter(cat)}
                whileTap={{ scale:0.92 }} whileHover={{ scale:1.05 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25 scale-105"
                    : "bg-secondary text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}>
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Count */}
          <motion.p key={filter} initial={{ opacity:0, y:-8 }} animate={{ opacity:1, y:0 }}
            className="text-center text-sm text-muted-foreground mb-8">
            Showing <span className="font-semibold text-accent">{filtered.length}</span> project{filtered.length !== 1 ? "s" : ""}
            {filter !== "All" ? ` in ${filter}` : ""}
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div key={filter}
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:16, transition:{ duration:0.18 } }}
              transition={{ duration:0.35 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <motion.div key={project.title}
                  initial={{ opacity:0, scale:0.88, y:28 }} whileInView={{ opacity:1, scale:1, y:0 }} viewport={vpCard}
                  transition={{ duration:0.55, ease:E, delay: i * 0.07 }}
                  whileHover={{ y:-10, transition:{ duration:0.25 } }} whileTap={tapScale}
                  layout
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-accent/8 hover:border-accent/40 transition-all duration-300 group">
                  {/* Card header */}
                  <div className="h-36 md:h-44 bg-primary relative overflow-hidden flex items-center justify-center">
                    <motion.div className="absolute inset-0 bg-gradient-to-br from-primary via-navy-dark to-primary" whileHover={{ scale:1.05 }} transition={{ duration:0.4 }} />
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-amber/30 rounded-full animate-pulse-glow" />
                      <div className="absolute bottom-4 right-5 w-2 h-2 bg-amber/20 rounded-full animate-pulse-glow" style={{ animationDelay:"1s" }} />
                    </div>
                    <div className="relative z-10 text-center">
                      <motion.div initial={{ scale:0.8, opacity:0.5 }} whileHover={{ scale:1.15, opacity:1 }} transition={{ duration:0.3 }}>
                        <ExternalLink className="w-10 h-10 text-amber mx-auto mb-2" />
                      </motion.div>
                      <span className="text-primary-foreground/50 text-xs font-heading">{project.tag}</span>
                    </div>
                    <div className="absolute top-3 right-3 bg-accent/90 text-accent-foreground text-xs font-semibold px-2 py-1 rounded-full">
                      {project.category}
                    </div>
                    {/* Hover outcome overlay */}
                    <motion.div initial={{ y:"100%" }} whileHover={{ y:0 }} transition={{ duration:0.3, ease:[0.22,1,0.36,1] }}
                      className="absolute inset-0 bg-accent/95 flex items-center justify-center p-4">
                      <p className="text-accent-foreground text-sm font-medium text-center leading-relaxed">{project.outcome}</p>
                    </motion.div>
                  </div>
                  {/* Card body */}
                  <div className="p-5">
                    <h3 className="font-heading text-lg text-foreground mb-3 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                    <div className="space-y-2">
                      <div>
                        <span className="font-semibold text-foreground text-xs uppercase tracking-wide">Challenge</span>
                        <p className="text-muted-foreground mt-0.5 text-xs leading-relaxed">{project.challenge}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground text-xs uppercase tracking-wide">Solution</span>
                        <p className="text-muted-foreground mt-0.5 text-xs leading-relaxed">{project.solution}</p>
                      </div>
                      <div className="pt-2 border-t border-border">
                        <span className="font-semibold text-accent text-xs uppercase tracking-wide">Outcome</span>
                        <p className="text-muted-foreground mt-0.5 text-xs leading-relaxed">{project.outcome}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="bg-primary section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-scale-breathe" />
          <div className="absolute top-10 right-[12%] w-20 h-20 border border-amber/10 rounded-full animate-float-slow" />
          <div className="absolute bottom-10 left-[10%] w-14 h-14 border border-amber/10 rounded-xl rotate-12 animate-float" />
        </div>
        <div className="container text-center relative z-10">
          <motion.h2 initial={{ opacity:0, filter:"blur(8px)", scale:1.02 }} whileInView={{ opacity:1, filter:"blur(0px)", scale:1 }} viewport={vp} transition={{ duration:0.7, ease:E }}
            className="text-3xl md:text-4xl font-heading text-primary-foreground mb-4">Have a Project in Mind?
          </motion.h2>
          <motion.p initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.6, ease:E, delay:0.1 }}
            className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Tell us about your requirements and we'll propose a tailored integration solution.
          </motion.p>
          <motion.div initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }} viewport={vp} transition={{ duration:0.55, ease:E, delay:0.2 }}
            className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-amber-dark font-semibold px-10 glow-amber group">
                Start a Conversation <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline-white" className="font-semibold px-8">
                Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
