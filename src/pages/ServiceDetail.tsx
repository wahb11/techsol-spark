import { useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { tapScale, vp, vpCard, EASE } from "@/lib/animations";
import { getServiceBySlug, servicesData } from "@/data/services";

const E = EASE;

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate  = useNavigate();
  const heroRef   = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const capsRef   = useRef<HTMLDivElement>(null);

  const service = getServiceBySlug(slug ?? "");

  const { scrollYProgress: heroSY } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY       = useTransform(heroSY, [0, 1], [0, 120]);
  const heroOpacity = useTransform(heroSY, [0, 0.7], [1, 0]);
  const heroScale   = useTransform(heroSY, [0, 1], [1, 1.08]);

  const { scrollYProgress: ovSY } = useScroll({ target: overviewRef, offset: ["start end", "end start"] });
  const ovBlobY = useTransform(ovSY, [0, 1], [-30, 30]);

  const { scrollYProgress: capsSY } = useScroll({ target: capsRef, offset: ["start end", "end start"] });
  const capsBgY = useTransform(capsSY, [0, 1], [-20, 20]);

  if (!service) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
          <h1 className="text-3xl font-heading">Service not found</h1>
          <Button onClick={() => navigate("/services")}>Back to Services</Button>
        </div>
      </Layout>
    );
  }

  const Icon = service.icon;
  const related = servicesData.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <Layout>
      {/* ════════════ HERO ════════════ */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4" />
        </motion.div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-[12%] w-20 h-20 border border-amber/15 rounded-2xl rotate-12 animate-float" />
          <div className="absolute bottom-20 right-[28%] w-12 h-12 border border-amber/10 rounded-full animate-float-slow" />
          <div className="absolute top-[45%] left-[6%] w-16 h-16 border border-primary-foreground/10 rounded-xl -rotate-6 animate-float-slow" />
          <div className="absolute top-28 left-[38%] w-2.5 h-2.5 bg-amber/30 rounded-full animate-pulse-glow" />
          <div className="absolute bottom-32 right-[42%] w-2 h-2 bg-amber/40 rounded-full animate-pulse-glow" style={{ animationDelay: "1.8s" }} />
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="container relative z-10 py-14 md:py-24">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-primary-foreground/50 text-sm mb-8">
            <motion.span initial={{ opacity:0, x:-16 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.5, ease:E }}>
              <Link to="/services" className="hover:text-amber transition-colors flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" /> Services
              </Link>
            </motion.span>
            <motion.span initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.4, delay:0.1 }}>
              <ChevronRight className="w-3.5 h-3.5" />
            </motion.span>
            <motion.span initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.4, delay:0.18 }} className="text-amber">
              {service.title}
            </motion.span>
          </div>

          <div className="max-w-2xl">
            <motion.div initial={{ opacity:0, scale:0.85, rotate:-6 }} animate={{ opacity:1, scale:1, rotate:0 }} transition={{ duration:0.6, ease:E, delay:0.1 }}
              className="inline-flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center backdrop-blur-sm">
                <Icon className="w-7 h-7 text-amber" />
              </div>
              <span className="text-amber text-sm font-semibold uppercase tracking-widest border border-amber/30 rounded-full px-3 py-1 bg-amber/10 backdrop-blur-sm">
                Our Services
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity:0, filter:"blur(12px)", scale:1.04 }} animate={{ opacity:1, filter:"blur(0px)", scale:1 }} transition={{ duration:0.85, ease:E, delay:0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground leading-tight mb-4">
              {service.title}
            </motion.h1>
            <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.65, ease:E, delay:0.38 }}
              className="text-xl text-accent font-semibold mb-4">{service.headline}
            </motion.p>
            <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.65, ease:E, delay:0.48 }}
              className="text-primary-foreground/70 text-lg leading-relaxed">{service.shortDesc}
            </motion.p>
            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, ease:E, delay:0.58 }}
              className="flex flex-wrap gap-4 mt-8">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-amber-dark font-semibold text-base px-8 glow-amber group">
                  Get a Quote <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline-white" className="font-semibold text-base px-8">
                  All Services
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

      {/* ════════════ STATS ════════════ */}
      <section className="bg-background pt-2 pb-0">
        <div className="container">
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {service.highlights.map((h, i) => (
              <motion.div key={h.label}
                initial={{ opacity:0, scale:0.8, y:20 }} whileInView={{ opacity:1, scale:1, y:0 }} viewport={vpCard}
                transition={{ duration:0.55, ease:E, delay: i * 0.1 }}
                whileTap={tapScale}
                className="bg-accent rounded-xl p-3 md:p-5 text-center shadow-lg shadow-accent/20">
                <div className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-accent-foreground">{h.stat}</div>
                <div className="text-xs text-accent-foreground/70 mt-1 leading-tight">{h.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ OVERVIEW ════════════ */}
      <section ref={overviewRef} className="section-padding bg-background overflow-hidden relative">
        <motion.div style={{ y: ovBlobY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/4 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-56 h-56 bg-accent/3 rounded-full blur-2xl" />
        </motion.div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* Left */}
            <div>
              <motion.span initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.55, ease:E }}
                className="text-accent text-sm font-semibold uppercase tracking-widest">Overview
              </motion.span>
              <motion.div initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={vp} transition={{ duration:0.6, delay:0.1 }}
                className="h-px w-14 bg-accent/50 mt-2 mb-4 origin-left" />
              <motion.h2 initial={{ opacity:0, filter:"blur(8px)", scale:1.02 }} whileInView={{ opacity:1, filter:"blur(0px)", scale:1 }} viewport={vp} transition={{ duration:0.7, ease:E, delay:0.1 }}
                className="text-3xl md:text-4xl font-heading text-foreground mb-5">What We Deliver
              </motion.h2>
              <motion.p initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.6, ease:E, delay:0.2 }}
                className="text-muted-foreground leading-relaxed mb-6">{service.body}
              </motion.p>
              <div className="space-y-3">
                {service.capabilities.slice(0, 3).map((cap, i) => (
                  <motion.div key={cap}
                    initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={vpCard}
                    transition={{ duration:0.55, ease:E, delay: 0.25 + i * 0.09 }}
                    className="flex items-center gap-3 text-sm text-foreground">
                    <motion.div whileHover={{ scale:1.25, rotate:10 }} transition={{ duration:0.2 }}>
                      <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    </motion.div>
                    {cap}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right icon card */}
            <motion.div initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }} viewport={vp} transition={{ duration:0.7, ease:E, delay:0.15 }} className="relative">
              <motion.div initial={{ scaleY:0 }} whileInView={{ scaleY:1 }} viewport={vp} transition={{ duration:0.7, ease:E, delay:0.25 }}
                className="absolute -left-4 top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent to-transparent origin-top hidden md:block" />
              <div className="bg-primary rounded-3xl p-10 relative overflow-hidden">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-scale-breathe" />
                <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-accent/5 rounded-full blur-xl" />
                <motion.div
                  initial={{ scale:0.8, opacity:0, rotate:-10 }} whileInView={{ scale:1, opacity:1, rotate:0 }} viewport={vp}
                  transition={{ type:"spring", stiffness:100, damping:12, delay:0.3 }}
                  className="w-24 h-24 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 border border-accent/30">
                  <Icon className="w-12 h-12 text-amber" />
                </motion.div>
                <motion.h3 initial={{ opacity:0, x:16 }} whileInView={{ opacity:1, x:0 }} viewport={vp} transition={{ duration:0.5, ease:E, delay:0.4 }}
                  className="text-2xl font-heading text-primary-foreground mb-3 relative">{service.title}
                </motion.h3>
                <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={vp} transition={{ duration:0.5, delay:0.5 }}
                  className="text-accent font-semibold relative mb-4">{service.headline}
                </motion.p>
                <motion.div initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={vp} transition={{ duration:0.6, delay:0.55 }}
                  className="w-12 h-0.5 bg-accent/40 mb-4 origin-left" />
                <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={vp} transition={{ duration:0.5, delay:0.6 }}
                  className="text-primary-foreground/65 text-sm leading-relaxed relative">
                  Delivered end-to-end by TECHSOL — with full accountability and technical excellence at every step.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════ CAPABILITIES ════════════ */}
      <section ref={capsRef} className="section-padding bg-secondary overflow-hidden relative">
        <motion.div style={{ y: capsBgY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-accent/4 rounded-full blur-3xl" />
        </motion.div>
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <motion.span initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.55, ease:E }}
              className="text-accent text-sm font-semibold uppercase tracking-widest block mb-3">What's Included
            </motion.span>
            <motion.h2 initial={{ opacity:0, filter:"blur(8px)", scale:1.02 }} whileInView={{ opacity:1, filter:"blur(0px)", scale:1 }} viewport={vp} transition={{ duration:0.7, ease:E, delay:0.08 }}
              className="text-3xl md:text-4xl font-heading text-foreground mb-2">Key Capabilities
            </motion.h2>
            <motion.div initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={vp} transition={{ duration:0.7, delay:0.18 }}
              className="h-px w-24 bg-accent/50 mx-auto mt-4 origin-center" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.capabilities.map((cap, i) => (
              <motion.div key={cap}
                initial={{ opacity:0, scale:0.88, y:20 }} whileInView={{ opacity:1, scale:1, y:0 }} viewport={vpCard}
                transition={{ duration:0.55, ease:E, delay: i * 0.07 }}
                whileHover={{ y:-6, scale:1.02, transition:{ duration:0.22 } }} whileTap={tapScale}
                className="bg-card rounded-xl p-5 border border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-all duration-300 mt-0.5">
                  <span className="text-accent group-hover:text-accent-foreground font-heading font-bold text-sm transition-colors">{i + 1}</span>
                </div>
                <p className="text-foreground text-sm font-medium leading-relaxed">{cap}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ PROCESS ════════════ */}
      <section className="section-padding bg-background overflow-hidden">
        <div className="container">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.55, ease:E }}
              className="text-accent text-sm font-semibold uppercase tracking-widest block mb-3">How We Work
            </motion.span>
            <motion.h2 initial={{ opacity:0, filter:"blur(8px)", scale:1.02 }} whileInView={{ opacity:1, filter:"blur(0px)", scale:1 }} viewport={vp} transition={{ duration:0.7, ease:E, delay:0.08 }}
              className="text-3xl md:text-4xl font-heading text-foreground">Our Process
            </motion.h2>
            <motion.div initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={vp} transition={{ duration:0.7, delay:0.18 }}
              className="h-px w-24 bg-accent/50 mx-auto mt-4 origin-center" />
          </div>

          <div className="relative max-w-3xl mx-auto">
            <motion.div
              initial={{ scaleY:0 }} whileInView={{ scaleY:1 }} viewport={vp}
              transition={{ duration:1.4, ease:"easeInOut", delay:0.2 }}
              className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent hidden sm:block origin-top"
            />
            <div className="space-y-5 md:space-y-8">
              {service.process.map((step, i) => (
                <motion.div key={step.step}
                  initial={{ opacity:0, x:-32 }} whileInView={{ opacity:1, x:0 }} viewport={vpCard}
                  transition={{ duration:0.6, ease:E, delay: i * 0.1 }}
                  whileHover={{ x:6, transition:{ duration:0.2 } }}
                  className="flex gap-4 md:gap-6 items-start">
                  <motion.div
                    initial={{ scale:0, opacity:0 }} whileInView={{ scale:1, opacity:1 }} viewport={vpCard}
                    transition={{ type:"spring", stiffness:200, damping:15, delay:0.05 + i * 0.1 }}
                    className="w-12 h-12 rounded-full bg-accent text-accent-foreground font-heading font-bold text-lg flex items-center justify-center shrink-0 shadow-lg shadow-accent/30 z-10 relative">
                    {step.step}
                  </motion.div>
                  <motion.div
                    initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={vpCard}
                    transition={{ duration:0.5, delay:0.1 + i * 0.1 }}
                    className="bg-card rounded-xl p-5 border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex-1">
                    <h3 className="font-heading text-foreground mb-1.5">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ RELATED ════════════ */}
      <section className="section-padding bg-secondary overflow-hidden">
        <div className="container">
          <div className="text-center mb-10">
            <motion.span initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.55, ease:E }}
              className="text-accent text-sm font-semibold uppercase tracking-widest block mb-2">Explore More
            </motion.span>
            <motion.h2 initial={{ opacity:0, filter:"blur(8px)", scale:1.02 }} whileInView={{ opacity:1, filter:"blur(0px)", scale:1 }} viewport={vp} transition={{ duration:0.65, ease:E, delay:0.08 }}
              className="text-2xl md:text-3xl font-heading text-foreground">Related Services
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {related.map((rel, i) => {
              const RelIcon = rel.icon;
              return (
                <motion.div key={rel.slug}
                  initial={{ opacity:0, y:30, scale:0.9 }} whileInView={{ opacity:1, y:0, scale:1 }} viewport={vpCard}
                  transition={{ duration:0.55, ease:E, delay: i * 0.1 }}
                  whileHover={{ y:-8, transition:{ duration:0.25 } }} whileTap={tapScale}>
                  <Link to={`/services/${rel.slug}`}
                    className="block bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group h-full">
                    <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                      <RelIcon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading text-foreground mb-2 group-hover:text-accent transition-colors duration-300">{rel.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{rel.shortDesc}</p>
                    <div className="flex items-center text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more <ArrowRight className="ml-1 w-3.5 h-3.5" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="bg-primary section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[8%] w-28 h-28 border border-amber/10 rounded-full animate-float-slow" />
          <div className="absolute bottom-10 right-[10%] w-16 h-16 border border-amber/10 rounded-2xl rotate-45 animate-float" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-scale-breathe" />
        </div>
        <div className="container text-center relative z-10">
          <motion.h2 initial={{ opacity:0, filter:"blur(8px)", scale:1.02 }} whileInView={{ opacity:1, filter:"blur(0px)", scale:1 }} viewport={vp} transition={{ duration:0.7, ease:E }}
            className="text-3xl md:text-4xl font-heading text-primary-foreground mb-4">
            Ready to Get Started with {service.title}?
          </motion.h2>
          <motion.p initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.6, ease:E, delay:0.1 }}
            className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Let's discuss your project requirements. Our team will assess your needs and propose the right solution.
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
                Browse All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
