import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  CheckCircle, Target, Eye, Heart, Award, Shield,
  Lightbulb, Users, ArrowRight, TrendingUp, Globe, Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { tapScale, vp, vpCard, EASE } from "@/lib/animations";

const E = EASE;

const values = [
  { icon: Award,       title: "Technical Excellence", desc: "We bring deep expertise to every phase of every project." },
  { icon: Shield,      title: "Integrity",            desc: "We operate with full transparency and honest communication at every level." },
  { icon: CheckCircle, title: "Accountability",       desc: "We own our projects from start to finish, with no handoffs and no gaps." },
  { icon: Lightbulb,   title: "Innovation",           desc: "We continually evolve our methodologies to stay ahead of industry demands." },
  { icon: Users,       title: "Client Focus",         desc: "Every decision we make is guided by the best interests of our clients." },
];

const differentiators = [
  { icon: Layers,      title: "Single-Source Accountability",   desc: "One point of contact, one contract, one team — procurement through commissioning. No coordination risk." },
  { icon: TrendingUp,  title: "End-to-End Technical Expertise", desc: "Our team spans electrical, mechanical, instrumentation, controls, and IT — solving problems single-discipline teams miss." },
  { icon: CheckCircle, title: "Proven Project Delivery",        desc: "Complex integration projects delivered on time, within budget, across industrial, commercial, and infrastructure sectors." },
  { icon: Shield,      title: "Compliance & Quality",          desc: "Full documentation, traceable processes, and rigorous QC aligned with international engineering and safety standards." },
  { icon: Heart,       title: "Long-Term Partnership",         desc: "Post-project support, expansions, and ongoing technical assistance built into every engagement." },
  { icon: Globe,       title: "Adaptive & Industry-Agnostic",  desc: "Oil & gas, manufacturing, utilities, telecom, or building infrastructure — we tailor our approach to your sector." },
];

const milestones = [
  { year: "2009", event: "TECHSOL founded with a focus on system integration" },
  { year: "2012", event: "First major industrial PLC/SCADA project delivered" },
  { year: "2016", event: "Expanded into procurement and logistics services" },
  { year: "2019", event: "500+ projects milestone reached across Pakistan" },
  { year: "2022", event: "IT/OT convergence practice established" },
  { year: "2024", event: "Full-spectrum commissioning capability added" },
];

const About = () => {
  const heroRef   = useRef<HTMLDivElement>(null);
  const storyRef  = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const diffRef   = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroSY } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY       = useTransform(heroSY, [0, 1], [0, 120]);
  const heroOpacity = useTransform(heroSY, [0, 0.75], [1, 0]);
  const heroScale   = useTransform(heroSY, [0, 1], [1, 1.08]);

  const { scrollYProgress: storySY } = useScroll({ target: storyRef, offset: ["start end", "end start"] });
  const storyBlobY = useTransform(storySY, [0, 1], [-35, 35]);

  const { scrollYProgress: valuesSY } = useScroll({ target: valuesRef, offset: ["start end", "end start"] });
  const valuesBgX = useTransform(valuesSY, [0, 1], [-20, 20]);

  const { scrollYProgress: diffSY } = useScroll({ target: diffRef, offset: ["start end", "end start"] });
  const diffBlobY = useTransform(diffSY, [0, 1], [25, -25]);

  return (
    <Layout>
      {/* ════════════ HERO ════════════ */}
      <section ref={heroRef} className="bg-primary section-padding relative overflow-hidden min-h-[60vh] flex items-center">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-accent/5 rounded-full blur-2xl translate-y-1/3" />
        </motion.div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-[10%] w-32 h-32 border border-amber/10 rounded-full animate-float-slow" />
          <div className="absolute bottom-10 left-[5%] w-20 h-20 border border-amber/10 rounded-2xl rotate-45 animate-float" />
          <div className="absolute top-1/2 right-[25%] w-3 h-3 bg-amber/25 rounded-full animate-pulse-glow" />
          <div className="absolute top-1/3 left-[20%] w-2 h-2 bg-amber/35 rounded-full animate-pulse-glow" style={{ animationDelay: "1s" }} />
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="container relative z-10">
          <div className="max-w-2xl">
            <motion.span initial={{ opacity:0, y:20, scale:0.9 }} animate={{ opacity:1, y:0, scale:1 }} transition={{ duration:0.6, ease:E }}
              className="text-amber text-sm font-semibold uppercase tracking-widest inline-block border border-amber/30 rounded-full px-3 py-1 bg-amber/10 backdrop-blur-sm mb-6">
              About TECHSOL
            </motion.span>
            <motion.h1 initial={{ opacity:0, filter:"blur(12px)", scale:1.04 }} animate={{ opacity:1, filter:"blur(0px)", scale:1 }} transition={{ duration:0.85, ease:E, delay:0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground leading-tight mt-2">
              Who We Are
            </motion.h1>
            <motion.p initial={{ opacity:0, y:22 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.65, ease:E, delay:0.32 }}
              className="text-primary-foreground/70 mt-5 text-lg leading-relaxed max-w-xl">
              TECHSOL is a professional system integration company committed to delivering technically sound,
              operationally ready solutions across industries.
            </motion.p>
            <motion.div initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, ease:E, delay:0.48 }} className="flex flex-wrap gap-4 mt-8">
              <Link to="/services">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-amber-dark font-semibold px-8 glow-amber group">
                  Our Services <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline-white" className="font-semibold px-8">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L60 54C120 48 240 36 360 30C480 24 600 24 720 30C840 36 960 48 1080 48C1200 48 1320 36 1380 30L1440 24V60H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* ════════════ STORY ════════════ */}
      <section ref={storyRef} className="section-padding bg-background overflow-hidden relative">
        <motion.div style={{ y: storyBlobY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/4 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-60 h-60 bg-accent/3 rounded-full blur-2xl" />
        </motion.div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <motion.span initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.55, ease:E }}
                className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Story
              </motion.span>
              <motion.div initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={vp} transition={{ duration:0.6, delay:0.1 }}
                className="h-px w-16 bg-accent/50 mb-4 origin-left" />
              <motion.h2 initial={{ opacity:0, filter:"blur(8px)", scale:1.02 }} whileInView={{ opacity:1, filter:"blur(0px)", scale:1 }} viewport={vp} transition={{ duration:0.7, ease:E, delay:0.1 }}
                className="text-3xl md:text-4xl font-heading text-foreground mb-5">Bridging Technology and Performance
              </motion.h2>
              <motion.p initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.6, ease:E, delay:0.18 }}
                className="text-muted-foreground leading-relaxed mb-4">
                Founded on a vision to bridge the gap between technology supply and real-world operational
                performance, TECHSOL has grown into a trusted name in system integration.
              </motion.p>
              <motion.p initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.6, ease:E, delay:0.26 }}
                className="text-muted-foreground leading-relaxed">
                Our multidisciplinary team of engineers, project managers, and technical specialists brings diverse
                expertise to every engagement — ensuring each system is designed, built, tested, and commissioned
                to the highest standards.
              </motion.p>
              <motion.div initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={vp} transition={{ duration:0.7, delay:0.35 }}
                className="h-px bg-gradient-to-r from-accent to-transparent mt-8 mb-8 origin-left" />
              <div className="grid grid-cols-3 gap-4">
                {[{ stat:"15+", label:"Years" }, { stat:"500+", label:"Projects" }, { stat:"50+", label:"Partners" }].map((f, i) => (
                  <motion.div key={f.label}
                    initial={{ opacity:0, scale:0.82, y:18 }} whileInView={{ opacity:1, scale:1, y:0 }} viewport={vpCard}
                    transition={{ duration:0.55, ease:E, delay:0.38 + i * 0.08 }}
                    whileTap={tapScale}
                    className="text-center p-3 rounded-xl bg-secondary border border-border">
                    <div className="text-2xl font-heading font-bold text-accent">{f.stat}</div>
                    <div className="text-xs text-muted-foreground mt-1">{f.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { variant: "primary", Icon: Target, title: "Mission", text: "To deliver complete, integrated systems through meticulous planning and full-cycle accountability.", idx: 0 },
                { variant: "accent",  Icon: Eye,    title: "Vision",  text: "To be the most trusted system integration partner — recognized for engineering excellence.", idx: 1 },
              ].map(({ variant, Icon, title, text, idx }) => (
                <motion.div key={title}
                  initial={{ opacity:0, scale:0.82, rotate: idx === 0 ? -6 : 6 }} whileInView={{ opacity:1, scale:1, rotate:0 }} viewport={vpCard}
                  transition={{ duration:0.65, ease:E, delay:0.1 + idx * 0.1 }}
                  whileHover={{ y:-6, scale:1.02, transition:{ duration:0.22 } }} whileTap={tapScale}
                  className={`${variant === "accent" ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"} rounded-2xl p-4 md:p-6 relative overflow-hidden group cursor-pointer`}>
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-colors" />
                  <motion.div whileHover={{ scale:1.15, rotate:10 }} transition={{ duration:0.25 }}>
                    <Icon className="w-8 h-8 mb-3 relative opacity-90" />
                  </motion.div>
                  <h3 className="font-heading text-lg mb-2 relative">{title}</h3>
                  <p className="text-sm opacity-75 relative leading-relaxed">{text}</p>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={vpCard}
                transition={{ duration:0.6, ease:E, delay:0.3 }}
                whileHover={{ y:-6, scale:1.01, transition:{ duration:0.22 } }} whileTap={tapScale}
                className="col-span-2 bg-secondary rounded-2xl p-4 md:p-6 relative overflow-hidden group cursor-pointer border border-border">
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/10 transition-colors" />
                <motion.div whileHover={{ scale:1.15, rotate:10 }} transition={{ duration:0.25 }}>
                  <Heart className="w-8 h-8 text-accent mb-3 relative" />
                </motion.div>
                <h3 className="font-heading text-lg mb-2 text-foreground relative">Core Values</h3>
                <p className="text-sm text-muted-foreground relative">Technical Excellence, Integrity, Accountability, Innovation, and Client Focus in everything we do.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ TIMELINE ════════════ */}
      <section className="section-padding bg-secondary overflow-hidden">
        <div className="container">
          <div className="text-center mb-12">
            <motion.span initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.55, ease:E }}
              className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Journey
            </motion.span>
            <motion.h2 initial={{ opacity:0, filter:"blur(8px)", scale:1.02 }} whileInView={{ opacity:1, filter:"blur(0px)", scale:1 }} viewport={vp} transition={{ duration:0.7, ease:E, delay:0.08 }}
              className="text-3xl md:text-4xl font-heading text-foreground">Milestones That Define Us
            </motion.h2>
            <motion.div initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={vp} transition={{ duration:0.7, delay:0.18 }}
              className="h-px w-24 bg-accent/50 mx-auto mt-5 origin-center" />
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Mobile */}
            <div className="md:hidden space-y-4">
              {milestones.map((m, i) => (
                <motion.div key={m.year}
                  initial={{ opacity:0, x:-28 }} whileInView={{ opacity:1, x:0 }} viewport={vpCard}
                  transition={{ duration:0.55, ease:E, delay: i * 0.08 }}
                  className="flex items-start gap-4">
                  <motion.div
                    initial={{ scale:0, opacity:0 }} whileInView={{ scale:1, opacity:1 }} viewport={vpCard}
                    transition={{ type:"spring", stiffness:200, damping:15, delay:0.05 + i * 0.08 }}
                    className="shrink-0 w-14 h-14 rounded-full bg-accent text-accent-foreground font-heading font-bold flex items-center justify-center shadow-lg shadow-accent/25 text-xs">
                    {m.year}
                  </motion.div>
                  <div className="flex-1 bg-card rounded-xl p-4 border border-border hover:border-accent/40 transition-all duration-300">
                    <p className="text-foreground text-sm font-medium leading-relaxed">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop 3-col grid */}
            <div className="hidden md:block relative">
              <motion.div
                initial={{ scaleY:0 }} whileInView={{ scaleY:1 }} viewport={vp}
                transition={{ duration:1.4, ease:"easeInOut", delay:0.15 }}
                className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent via-accent/60 to-accent/10 origin-top"
              />
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <div key={m.year} className="grid grid-cols-[1fr_5rem_1fr] items-center gap-4">
                    {i % 2 === 0 ? (
                      <motion.div
                        initial={{ opacity:0, x:-28 }} whileInView={{ opacity:1, x:0 }} viewport={vpCard}
                        transition={{ duration:0.6, ease:E, delay: i * 0.07 }}
                        className="flex justify-end">
                        <motion.div whileHover={{ scale:1.03, x:-4, transition:{ duration:0.2 } }}
                          className="bg-card rounded-xl p-4 border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 max-w-xs text-right">
                          <p className="text-foreground text-sm font-medium leading-relaxed">{m.event}</p>
                        </motion.div>
                      </motion.div>
                    ) : <div />}
                    <div className="flex justify-center z-10 relative">
                      <motion.div
                        initial={{ scale:0, opacity:0 }} whileInView={{ scale:1, opacity:1 }} viewport={vpCard}
                        transition={{ type:"spring", stiffness:200, damping:14, delay:0.05 + i * 0.07 }}
                        className="w-14 h-14 rounded-full bg-accent text-accent-foreground font-heading font-bold flex items-center justify-center shadow-lg shadow-accent/30 text-xs">
                        {m.year}
                      </motion.div>
                    </div>
                    {i % 2 !== 0 ? (
                      <motion.div
                        initial={{ opacity:0, x:28 }} whileInView={{ opacity:1, x:0 }} viewport={vpCard}
                        transition={{ duration:0.6, ease:E, delay: i * 0.07 }}
                        className="flex justify-start">
                        <motion.div whileHover={{ scale:1.03, x:4, transition:{ duration:0.2 } }}
                          className="bg-card rounded-xl p-4 border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 max-w-xs">
                          <p className="text-foreground text-sm font-medium leading-relaxed">{m.event}</p>
                        </motion.div>
                      </motion.div>
                    ) : <div />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ VALUES ════════════ */}
      <section ref={valuesRef} className="section-padding bg-background overflow-hidden relative">
        <motion.div style={{ x: valuesBgX }} className="absolute inset-y-0 left-0 right-0 pointer-events-none">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-40 bg-gradient-to-r from-accent/3 via-accent/5 to-accent/3 blur-3xl" />
        </motion.div>
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <motion.span initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.55, ease:E }}
              className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Values
            </motion.span>
            <motion.h2 initial={{ opacity:0, filter:"blur(8px)", scale:1.02 }} whileInView={{ opacity:1, filter:"blur(0px)", scale:1 }} viewport={vp} transition={{ duration:0.7, ease:E, delay:0.08 }}
              className="text-3xl md:text-4xl font-heading text-foreground">What Drives Us
            </motion.h2>
            <motion.div initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={vp} transition={{ duration:0.7, delay:0.18 }}
              className="h-px w-24 bg-accent/50 mx-auto mt-5 origin-center" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity:0, scale:0.82, y:24 }} whileInView={{ opacity:1, scale:1, y:0 }} viewport={vpCard}
                transition={{ duration:0.55, ease:E, delay: i * 0.09 }}
                whileHover={{ y:-10, scale:1.03, transition:{ duration:0.22 } }} whileTap={tapScale}
                className="bg-card rounded-2xl p-6 border border-border text-center hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/8 transition-all duration-300 group">
                <motion.div whileHover={{ rotate:[0,-10,10,0], transition:{ duration:0.5 } }}
                  className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                  <v.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </motion.div>
                <h3 className="font-heading text-foreground mb-2 text-sm">{v.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ DIFFERENTIATORS ════════════ */}
      <section ref={diffRef} className="section-padding bg-secondary overflow-hidden relative">
        <motion.div style={{ y: diffBlobY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/4 rounded-full blur-3xl" />
        </motion.div>
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <motion.span initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.55, ease:E }}
              className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Edge
            </motion.span>
            <motion.h2 initial={{ opacity:0, filter:"blur(8px)", scale:1.02 }} whileInView={{ opacity:1, filter:"blur(0px)", scale:1 }} viewport={vp} transition={{ duration:0.7, ease:E, delay:0.08 }}
              className="text-3xl md:text-4xl font-heading text-foreground">Why TECHSOL
            </motion.h2>
            <motion.p initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.6, ease:E, delay:0.16 }}
              className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
              In a market full of suppliers and contractors, TECHSOL stands apart as a true integration partner.
            </motion.p>
            <motion.div initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={vp} transition={{ duration:0.7, delay:0.24 }}
              className="h-px w-24 bg-accent/50 mx-auto mt-5 origin-center" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {differentiators.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.div key={d.title}
                  initial={{ opacity:0, x: i % 2 === 0 ? -28 : 28, y:16 }} whileInView={{ opacity:1, x:0, y:0 }} viewport={vpCard}
                  transition={{ duration:0.6, ease:E, delay: i * 0.08 }}
                  whileHover={{ y:-8, transition:{ duration:0.22 } }} whileTap={tapScale}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300 group">
                  <motion.div whileHover={{ rotate:360, transition:{ duration:0.5 } }}
                    className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-all duration-300">
                    <Icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </motion.div>
                  <h3 className="font-heading text-foreground mb-2 text-sm">{d.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{d.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="bg-primary section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-scale-breathe" />
          <div className="absolute top-10 right-[15%] w-20 h-20 border border-amber/10 rounded-full animate-float-slow" />
          <div className="absolute bottom-10 left-[12%] w-14 h-14 border border-amber/10 rounded-xl rotate-12 animate-float" />
        </div>
        <div className="container text-center relative z-10">
          <motion.h2 initial={{ opacity:0, filter:"blur(8px)", scale:1.02 }} whileInView={{ opacity:1, filter:"blur(0px)", scale:1 }} viewport={vp} transition={{ duration:0.7, ease:E }}
            className="text-3xl md:text-4xl font-heading text-primary-foreground mb-4">Ready to Partner with TECHSOL?
          </motion.h2>
          <motion.p initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.6, ease:E, delay:0.1 }}
            className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Let's discuss how we can deliver your next integration project — from procurement to commissioning.
          </motion.p>
          <motion.div initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }} viewport={vp} transition={{ duration:0.55, ease:E, delay:0.2 }}
            className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-amber-dark font-semibold px-10 glow-amber group">
                Contact Us Today <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline-white" className="font-semibold px-8">
                View Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
