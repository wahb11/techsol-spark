import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight, CheckCircle, Zap, Clock, Handshake,
  ShieldCheck, TrendingUp, Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import MarqueeStrip from "@/components/MarqueeStrip";
import heroBg from "@/assets/hero-bg.jpg";
import { tapScale } from "@/lib/animations";
import { servicesData } from "@/data/services";

/* ─── shared viewport config (loose trigger, re-fires on scroll up) ─── */
const vp = { once: false, amount: 0.07 } as const;
const vpCard = { once: false, amount: 0.04 } as const;

/* ─── reusable inline variants ────────────────────────────────────────── */
const fadeUp   = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } } };
const fadeLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } } };
const fadeRight= { hidden: { opacity: 0, x: 40  }, visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } } };
const scaleIn  = { hidden: { opacity: 0, scale: 0.82 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } } };
const blurIn   = { hidden: { opacity: 0, filter: "blur(10px)", scale: 1.04 }, visible: { opacity: 1, filter: "blur(0px)", scale: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } } };

/* helper — staggers a list of identical items */
const delay = (d: number) => ({ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: d } } });
const delayL = (d: number) => ({ ...fadeLeft, visible: { ...fadeLeft.visible, transition: { ...fadeLeft.visible.transition, delay: d } } });
const delayR = (d: number) => ({ ...fadeRight, visible: { ...fadeRight.visible, transition: { ...fadeRight.visible.transition, delay: d } } });
const delayS = (d: number) => ({ ...scaleIn, visible: { ...scaleIn.visible, transition: { ...scaleIn.visible.transition, delay: d } } });

/* ─── data ──────────────────────────────────────────────────────────── */
const stats = [
  { value: "500+", label: "Successful Projects", icon: Zap },
  { value: "15+",  label: "Years Experience",    icon: Clock },
  { value: "100%", label: "Accountability",       icon: ShieldCheck },
  { value: "50+",  label: "Trusted Partners",     icon: Handshake },
];

const whyUs = [
  { icon: ShieldCheck, title: "Single-Source Accountability", desc: "One contract, one team — procurement through commissioning with no coordination gaps." },
  { icon: TrendingUp,  title: "Proven Delivery Track Record", desc: "500+ complex projects delivered on time, on budget, across industrial and commercial sectors." },
  { icon: Star,        title: "Cross-Discipline Engineering", desc: "Electrical, mechanical, controls, IT/OT — all under one roof for seamless integration." },
  { icon: Handshake,   title: "Long-Term Partnership",        desc: "Post-project support, expansions, and ongoing technical assistance built into every engagement." },
];

/* ─── component ─────────────────────────────────────────────────────── */
const Index = () => {
  const heroRef    = useRef<HTMLDivElement>(null);
  const aboutRef   = useRef<HTMLDivElement>(null);
  const servicesRef= useRef<HTMLDivElement>(null);
  const whyRef     = useRef<HTMLDivElement>(null);

  /* hero parallax */
  const { scrollYProgress: heroSY } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY       = useTransform(heroSY, [0, 1], [0, 160]);
  const heroOpacity = useTransform(heroSY, [0, 0.75], [1, 0]);
  const heroScale   = useTransform(heroSY, [0, 1], [1, 1.12]);

  /* about section parallax */
  const { scrollYProgress: aboutSY } = useScroll({ target: aboutRef, offset: ["start end", "end start"] });
  const aboutBlobY = useTransform(aboutSY, [0, 1], [-40, 40]);

  /* services section parallax */
  const { scrollYProgress: servicesSY } = useScroll({ target: servicesRef, offset: ["start end", "end start"] });
  const servicesBgY = useTransform(servicesSY, [0, 1], [-30, 30]);

  /* why us section parallax */
  const { scrollYProgress: whySY } = useScroll({ target: whyRef, offset: ["start end", "end start"] });
  const whyBlobY = useTransform(whySY, [0, 1], [30, -30]);

  return (
    <Layout>

      {/* ════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Parallax background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})`, y: heroY, scale: heroScale }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/92 via-primary/82 to-navy-dark/92" />

        {/* Floating shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[15%] w-24 h-24 border border-amber/20 rounded-2xl rotate-12 animate-float" />
          <div className="absolute bottom-32 right-[25%] w-16 h-16 border border-amber/15 rounded-full animate-float-slow" />
          <div className="absolute top-[40%] left-[8%] w-20 h-20 border border-primary-foreground/10 rounded-xl -rotate-6 animate-float-slow" />
          <div className="absolute bottom-20 left-[15%] w-12 h-12 bg-amber/10 rounded-lg rotate-45 animate-float" />
          <div className="absolute top-32 left-[40%] w-3 h-3 bg-amber/30 rounded-full animate-pulse-glow" />
          <div className="absolute bottom-40 right-[40%] w-2 h-2 bg-amber/40 rounded-full animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-[60%] right-[8%] w-6 h-6 bg-accent/15 rounded-lg rotate-12 animate-float" style={{ animationDelay: "0.8s" }} />
          <div className="absolute top-[25%] left-[30%] w-1.5 h-1.5 bg-amber/50 rounded-full animate-pulse-glow" style={{ animationDelay: "0.4s" }} />
        </div>

        {/* Content */}
        <motion.div style={{ opacity: heroOpacity }} className="container relative z-10 py-14 md:py-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex flex-wrap gap-1.5 px-3 py-1.5 rounded-full bg-accent/20 text-amber font-semibold text-xs mb-6 border border-accent/30 backdrop-blur-sm"
            >
              <span>System Integration</span>
              <span className="opacity-40">·</span>
              <span>Procurement</span>
              <span className="opacity-40">·</span>
              <span>Installation</span>
              <span className="opacity-40">·</span>
              <span>Commissioning</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, filter: "blur(12px)", scale: 1.04 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground leading-tight"
            >
              Engineering the Future.{" "}
              <span className="text-gradient">Integrating Today.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              className="mt-5 text-base md:text-lg text-primary-foreground/75 leading-relaxed max-w-xl"
            >
              End-to-end system integration solutions — from procurement to commissioning — delivered
              with precision, expertise, and accountability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="flex flex-wrap gap-3 mt-7"
            >
              <Link to="/services">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-amber-dark font-semibold px-6 md:px-8 glow-amber group">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline-white" className="font-semibold px-6 md:px-8">
                  Get a Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0 80L48 74.7C96 69 192 59 288 53.3C384 48 480 48 576 53.3C672 59 768 69 864 69.3C960 69 1056 59 1152 53.3C1248 48 1344 48 1392 48L1440 48V80H0Z" fill="hsl(var(--accent))" />
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          STATS
      ════════════════════════════════════════════════════════ */}
      <section className="bg-accent relative">
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={vpCard}
                variants={delayS(i * 0.09)}
                whileTap={tapScale}
                className="group"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-accent-foreground/60 group-hover:text-accent-foreground transition-colors" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground">{stat.value}</div>
                <div className="text-sm text-accent-foreground/70 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          MARQUEE 1
      ════════════════════════════════════════════════════════ */}
      <div className="bg-primary/95 text-amber/70 border-y border-amber/10 overflow-hidden">
        <MarqueeStrip
          items={["System Integration", "Procurement", "Installation", "Testing", "Commissioning", "Laptops & Systems", "End-to-End Solutions", "Engineering Excellence"]}
          speed={30}
          direction="left"
        />
      </div>

      {/* ════════════════════════════════════════════════════════
          ABOUT PREVIEW
      ════════════════════════════════════════════════════════ */}
      <section ref={aboutRef} className="section-padding bg-background overflow-hidden relative">
        {/* Parallax blob */}
        <motion.div style={{ y: aboutBlobY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/4 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-60 h-60 bg-accent/3 rounded-full blur-2xl" />
        </motion.div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <div>
              {/* Label */}
              <motion.span
                initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp}
                className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3"
              >
                Who We Are
              </motion.span>
              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={vp}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="h-px w-16 bg-accent mb-5 origin-left"
              />
              <motion.h2
                initial="hidden" whileInView="visible" viewport={vp} variants={blurIn}
                className="text-3xl md:text-4xl font-heading text-foreground mb-5"
              >
                Complete System Integration Partner
              </motion.h2>
              <motion.p
                initial="hidden" whileInView="visible" viewport={vp} variants={delay(0.05)}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                At TECHSOL, we don't just supply components — we build complete, fully operational systems.
                Whether you're launching a new facility, upgrading critical infrastructure, or scaling your
                operations, TECHSOL brings together the technical depth and project management excellence
                to deliver integrated systems that perform from day one.
              </motion.p>

              <div className="space-y-3 mb-8">
                {[
                  "Single-source accountability from procurement to commissioning",
                  "Cross-functional engineering expertise",
                  "Structured project delivery with full documentation",
                  "Long-term partnership and post-project support",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial="hidden" whileInView="visible" viewport={vpCard}
                    variants={delayL(i * 0.1)}
                    className="flex items-center gap-3 text-sm text-foreground group"
                  >
                    <motion.div whileHover={{ scale: 1.25, rotate: 10 }} transition={{ duration: 0.2 }}>
                      <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    </motion.div>
                    {item}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial="hidden" whileInView="visible" viewport={vp} variants={delay(0.2)}
              >
                <Link to="/about">
                  <Button className="bg-primary text-primary-foreground hover:bg-navy-light group">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right — Mission/Vision card */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={vp} variants={fadeRight}
              className="relative"
            >
              {/* Animated draw-line accent */}
              <motion.div
                initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={vp}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="absolute -left-4 top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent to-transparent origin-top hidden md:block"
              />
              <div className="bg-primary rounded-2xl p-10 text-primary-foreground relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-accent/10 rounded-full blur-2xl animate-scale-breathe" />
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-accent/5 rounded-full blur-xl" />

                <motion.h3
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-2xl font-heading mb-4 relative"
                >
                  Our Mission
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-primary-foreground/75 leading-relaxed mb-6 relative"
                >
                  To deliver complete, integrated systems that empower our clients' operations — through
                  meticulous planning, expert execution, and full-cycle project accountability.
                </motion.p>

                <motion.div
                  initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={vp}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="w-16 h-0.5 bg-accent/40 mb-6 origin-left"
                />

                <motion.h3
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}
                  transition={{ duration: 0.5, delay: 0.55 }}
                  className="text-2xl font-heading mb-4 relative"
                >
                  Our Vision
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
                  transition={{ duration: 0.5, delay: 0.65 }}
                  className="text-primary-foreground/75 leading-relaxed relative"
                >
                  To be the most trusted system integration partner across industries — recognized for
                  engineering excellence, reliability, and the seamless delivery of complex systems.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SERVICES PREVIEW
      ════════════════════════════════════════════════════════ */}
      <section ref={servicesRef} className="section-padding bg-secondary overflow-hidden relative">
        {/* Parallax bg */}
        <motion.div style={{ y: servicesBgY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent/4 rounded-full blur-3xl" />
        </motion.div>

        <div className="container relative z-10">
          {/* Section heading — each element individually animated */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <motion.span
              initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp}
              className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3"
            >
              What We Do
            </motion.span>
            <motion.h2
              initial="hidden" whileInView="visible" viewport={vp} variants={blurIn}
              className="text-3xl md:text-4xl font-heading text-foreground mt-1"
            >
              Our Core Services
            </motion.h2>
            <motion.p
              initial="hidden" whileInView="visible" viewport={vp} variants={delay(0.1)}
              className="mt-4 text-base text-muted-foreground leading-relaxed"
            >
              A fully integrated service model covering every phase of a system's lifecycle.
              Click any service to learn more.
            </motion.p>
            {/* Animated divider */}
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={vp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px w-24 bg-accent/50 mx-auto mt-6 origin-center"
            />
          </div>

          {/* Service cards — each animated independently */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial="hidden"
                  whileInView="visible"
                  viewport={vpCard}
                  variants={delayS(i * 0.08)}
                  whileHover={{ y: -12, transition: { duration: 0.25 } }}
                  whileTap={tapScale}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="block bg-card rounded-2xl p-6 border border-border hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 group h-full"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                        <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                      </div>
                      <span className="text-muted-foreground/25 font-heading text-3xl font-bold leading-none select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-heading mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.shortDesc}</p>
                    <div className="mt-4 flex items-center text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={vp} variants={delay(0.1)}
            className="text-center mt-10"
          >
            <Link to="/services">
              <Button className="bg-primary text-primary-foreground hover:bg-navy-light group">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          MARQUEE 2
      ════════════════════════════════════════════════════════ */}
      <div className="bg-accent/10 text-accent/60 border-y border-accent/15 overflow-hidden">
        <MarqueeStrip
          items={["500+ Projects", "15+ Years", "100% Accountability", "Zero HSE Incidents", "First-Pass Testing", "On-Time Delivery", "Trusted Partners", "Full Documentation"]}
          speed={24}
          direction="right"
        />
      </div>

      {/* ════════════════════════════════════════════════════════
          WHY TECHSOL
      ════════════════════════════════════════════════════════ */}
      <section ref={whyRef} className="section-padding bg-background overflow-hidden relative">
        <motion.div style={{ y: whyBlobY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/4 rounded-full blur-3xl" />
        </motion.div>

        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <motion.span
              initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp}
              className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3"
            >
              Our Edge
            </motion.span>
            <motion.h2
              initial="hidden" whileInView="visible" viewport={vp} variants={blurIn}
              className="text-3xl md:text-4xl font-heading text-foreground mt-1"
            >
              Why Choose TECHSOL
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={vp}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="h-px w-24 bg-accent/50 mx-auto mt-6 origin-center"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyUs.map((w, i) => {
              const Icon = w.icon;
              const variant = i % 2 === 0 ? delayL(i * 0.1) : delayR(i * 0.1);
              return (
                <motion.div
                  key={w.title}
                  initial="hidden" whileInView="visible" viewport={vpCard}
                  variants={variant}
                  whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.22 } }}
                  whileTap={tapScale}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group flex gap-5 items-start"
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.25 }}
                    className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </motion.div>
                  <div>
                    <h3 className="font-heading text-foreground mb-1.5 group-hover:text-accent transition-colors duration-300">{w.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          TESTIMONIAL
      ════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary overflow-hidden">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={vp}
            transition={{ duration: 0.5 }}
            className="text-accent text-7xl font-heading mb-4 leading-none select-none"
          >
            "
          </motion.div>
          <motion.blockquote
            initial="hidden" whileInView="visible" viewport={vp} variants={blurIn}
            className="text-lg md:text-xl text-foreground leading-relaxed italic mb-6"
          >
            TECHSOL took full ownership of our project from day one. Their team handled everything —
            procurement, installation, testing — and handed over a fully operational system ahead of
            schedule. They are the integration partner we didn't know we needed.
          </motion.blockquote>
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={vp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="h-px w-16 bg-accent/40 mx-auto mb-4 origin-center"
          />
          <motion.p
            initial="hidden" whileInView="visible" viewport={vp} variants={delay(0.15)}
            className="text-muted-foreground text-sm font-medium"
          >
            — Operations Director, Industrial Client
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          CTA
      ════════════════════════════════════════════════════════ */}
      <section className="bg-primary section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[10%] w-32 h-32 border border-amber/10 rounded-full animate-float-slow" />
          <div className="absolute bottom-10 right-[10%] w-20 h-20 border border-amber/10 rounded-2xl rotate-45 animate-float" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-scale-breathe" />
        </div>

        <div className="container text-center relative z-10">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={vp} variants={blurIn}
            className="text-3xl md:text-4xl font-heading text-primary-foreground mb-4"
          >
            Ready to Build Something Together?
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={vp} variants={delay(0.1)}
            className="text-primary-foreground/70 max-w-xl mx-auto mb-8"
          >
            Have a project in mind? Our team is ready to listen, assess, and propose the right
            solution for your requirements.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={vp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-amber-dark font-semibold text-base px-10 glow-amber group">
                Contact Us Today
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
