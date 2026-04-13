import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { tapScale, vp, vpCard, EASE } from "@/lib/animations";
import { servicesData } from "@/data/services";

const E = EASE;

const Services = () => {
  const heroRef  = useRef<HTMLDivElement>(null);
  const gridRef  = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroSY } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY       = useTransform(heroSY, [0, 1], [0, 120]);
  const heroOpacity = useTransform(heroSY, [0, 0.75], [1, 0]);
  const heroScale   = useTransform(heroSY, [0, 1], [1, 1.08]);

  const { scrollYProgress: gridSY } = useScroll({ target: gridRef, offset: ["start end", "end start"] });
  const gridBlobY = useTransform(gridSY, [0, 1], [-30, 30]);

  return (
    <Layout>
      {/* ════════════ HERO ════════════ */}
      <section ref={heroRef} className="bg-primary section-padding relative overflow-hidden min-h-[60vh] flex items-center">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-[8%] w-[350px] h-[350px] bg-accent/5 rounded-full blur-2xl" />
        </motion.div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-[12%] w-28 h-28 border border-amber/10 rounded-full animate-float-slow" />
          <div className="absolute bottom-10 left-[8%] w-16 h-16 border border-amber/10 rounded-xl rotate-12 animate-float" />
          <div className="absolute top-1/2 right-[30%] w-3 h-3 bg-amber/20 rounded-full animate-pulse-glow" />
          <div className="absolute bottom-1/3 left-[40%] w-2 h-2 bg-amber/30 rounded-full animate-pulse-glow" style={{ animationDelay: "1.2s" }} />
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="container relative z-10">
          <div className="max-w-2xl">
            <motion.span initial={{ opacity:0, y:20, scale:0.9 }} animate={{ opacity:1, y:0, scale:1 }} transition={{ duration:0.6, ease:E }}
              className="text-amber text-sm font-semibold uppercase tracking-widest inline-block border border-amber/30 rounded-full px-3 py-1 bg-amber/10 backdrop-blur-sm mb-5">
              Our Services
            </motion.span>
            <motion.h1 initial={{ opacity:0, filter:"blur(10px)", scale:1.04 }} animate={{ opacity:1, filter:"blur(0px)", scale:1 }} transition={{ duration:0.8, ease:E, delay:0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground mt-2 leading-tight">
              Integrated Service<br />Model
            </motion.h1>
            <motion.p initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.65, ease:E, delay:0.3 }}
              className="text-primary-foreground/70 mt-4 text-lg leading-relaxed">
              Covering every phase of a system's lifecycle — from sourcing the right components to ensuring
              the final system is tested, verified, and fully operational.
            </motion.p>
            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, ease:E, delay:0.45 }} className="mt-6">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-amber-dark font-semibold px-8 glow-amber group">
                  Discuss Your Project <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L60 54C120 48 240 36 360 30C480 24 600 24 720 30C840 36 960 48 1080 48C1200 48 1320 36 1380 30L1440 24V60H0Z" fill="hsl(var(--secondary))" />
          </svg>
        </div>
      </section>

      {/* ════════════ SERVICE CARDS GRID ════════════ */}
      <section ref={gridRef} className="section-padding bg-secondary overflow-hidden relative">
        <motion.div style={{ y: gridBlobY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-80 bg-accent/4 rounded-full blur-3xl" />
        </motion.div>

        <div className="container relative z-10">
          {/* Heading */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <motion.span initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.6, ease:E }}
              className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              All Services
            </motion.span>
            <motion.h2 initial={{ opacity:0, filter:"blur(8px)", scale:1.03 }} whileInView={{ opacity:1, filter:"blur(0px)", scale:1 }} viewport={vp} transition={{ duration:0.7, ease:E, delay:0.08 }}
              className="text-3xl md:text-4xl font-heading text-foreground mt-1">
              Everything We Offer
            </motion.h2>
            <motion.p initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.6, ease:E, delay:0.16 }}
              className="mt-4 text-base text-muted-foreground">
              Click any service to explore its full scope, capabilities, and delivery process.
            </motion.p>
            <motion.div initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={vp} transition={{ duration:0.7, delay:0.25 }}
              className="h-px w-24 bg-accent/50 mx-auto mt-5 origin-center" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.slug}
                  initial={{ opacity:0, scale:0.85, y:24 }} whileInView={{ opacity:1, scale:1, y:0 }} viewport={vpCard}
                  transition={{ duration:0.55, ease:E, delay: i * 0.08 }}
                  whileHover={{ y:-12, transition:{ duration:0.25 } }} whileTap={tapScale}>
                  <Link to={`/services/${service.slug}`}
                    className="block bg-card rounded-2xl p-6 border border-border hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 group h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                        <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                      </div>
                      <span className="text-muted-foreground/30 font-heading text-4xl font-bold leading-none select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-heading text-foreground mb-2 group-hover:text-accent transition-colors duration-300">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.shortDesc}</p>
                    <ul className="space-y-1.5 mb-5">
                      {service.capabilities.slice(0, 3).map((cap) => (
                        <li key={cap} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1 h-1 rounded-full bg-accent shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-accent text-sm font-semibold">
                      Explore Service <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1.5 duration-300" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════ HOW WE DELIVER ════════════ */}
      <section className="section-padding bg-background overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-64 bg-accent/3 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <motion.span initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.55, ease:E }}
              className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Approach
            </motion.span>
            <motion.h2 initial={{ opacity:0, filter:"blur(8px)", scale:1.02 }} whileInView={{ opacity:1, filter:"blur(0px)", scale:1 }} viewport={vp} transition={{ duration:0.7, ease:E, delay:0.08 }}
              className="text-3xl md:text-4xl font-heading text-foreground">
              From Procurement to Commissioning
            </motion.h2>
            <motion.p initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.6, ease:E, delay:0.16 }}
              className="mt-4 text-muted-foreground">
              Every service we offer fits into a single, accountable delivery model — one team, one contract, full ownership.
            </motion.p>
            <motion.div initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={vp} transition={{ duration:0.7, delay:0.24 }}
              className="h-px w-24 bg-accent/50 mx-auto mt-5 origin-center" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step:"01", title:"Source",     desc:"We identify and procure the right components, equipment, and materials — fully vetted and cost-benchmarked." },
              { step:"02", title:"Build",      desc:"Mechanical assembly, electrical installation, and structured cabling done by our in-house engineering team." },
              { step:"03", title:"Integrate",  desc:"PLC/SCADA, IT/OT, and multi-vendor systems unified into a single, seamless control architecture." },
              { step:"04", title:"Commission", desc:"End-to-end testing, SAT, and operator training — we don't hand over until the system performs." },
            ].map((s, i) => (
              <motion.div key={s.step}
                initial={{ opacity:0, y:28, scale:0.9 }} whileInView={{ opacity:1, y:0, scale:1 }} viewport={vpCard}
                transition={{ duration:0.55, ease:E, delay: i * 0.09 }}
                whileHover={{ y:-8, transition:{ duration:0.22 } }} whileTap={tapScale}
                className="bg-card rounded-2xl p-6 border border-border hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group text-center">
                <motion.div whileHover={{ scale:1.1, rotate:5 }} transition={{ duration:0.25 }}
                  className="text-4xl font-heading font-bold text-accent/20 group-hover:text-accent/40 transition-colors mb-3 select-none">
                  {s.step}
                </motion.div>
                <h3 className="font-heading text-foreground text-lg mb-2 group-hover:text-accent transition-colors duration-300">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="bg-primary section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-scale-breathe" />
          <div className="absolute top-10 right-[15%] w-24 h-24 border border-amber/10 rounded-2xl rotate-12 animate-float" />
          <div className="absolute bottom-10 left-[12%] w-16 h-16 border border-amber/10 rounded-full animate-float-slow" />
        </div>
        <div className="container text-center relative z-10">
          <motion.h2 initial={{ opacity:0, filter:"blur(8px)", scale:1.02 }} whileInView={{ opacity:1, filter:"blur(0px)", scale:1 }} viewport={vp} transition={{ duration:0.7, ease:E }}
            className="text-3xl md:text-4xl font-heading text-primary-foreground mb-4">
            Need a Custom Solution?
          </motion.h2>
          <motion.p initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.6, ease:E, delay:0.1 }}
            className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Every project is unique. Let's discuss how TECHSOL can deliver a tailored integration solution for your requirements.
          </motion.p>
          <motion.div initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }} viewport={vp} transition={{ duration:0.55, ease:E, delay:0.2 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-amber-dark font-semibold px-10 glow-amber group">
                Get in Touch <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
