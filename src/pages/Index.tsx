import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, Wrench, Cpu, FlaskConical, Rocket, ArrowRight, CheckCircle, Zap, Users, Clock, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: ShoppingCart, title: "Procurement", desc: "Intelligent sourcing, vendor qualification, and supply chain management for the right components at the right price." },
  { icon: Wrench, title: "Installation", desc: "Precision mechanical, electrical, and network infrastructure installation built to the highest technical standards." },
  { icon: Cpu, title: "System Integration", desc: "Bringing together hardware, software, and control systems into a unified, fully functional whole." },
  { icon: FlaskConical, title: "Testing", desc: "Systematic FAT and SAT testing at every level — component, subsystem, and full system verification." },
  { icon: Rocket, title: "Commissioning", desc: "Startup, calibration, validation, and structured handover so your system performs from day one." },
];

const stats = [
  { value: "500+", label: "Successful Projects", icon: Zap },
  { value: "15+", label: "Years Experience", icon: Clock },
  { value: "100%", label: "End-to-End Accountability", icon: CheckCircle },
  { value: "50+", label: "Trusted Partners", icon: Handshake },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <Layout>
      {/* Hero with Parallax */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})`, y: heroY, scale: heroScale }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-navy-dark/90" />

        {/* Floating geometric elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[15%] w-24 h-24 border border-amber/20 rounded-2xl rotate-12 animate-float" />
          <div className="absolute bottom-32 right-[25%] w-16 h-16 border border-amber/15 rounded-full animate-float-slow" />
          <div className="absolute top-[40%] left-[8%] w-20 h-20 border border-primary-foreground/10 rounded-xl -rotate-6 animate-float-slow" />
          <div className="absolute bottom-20 left-[15%] w-12 h-12 bg-amber/10 rounded-lg rotate-45 animate-float" />
          <div className="absolute top-32 left-[40%] w-3 h-3 bg-amber/30 rounded-full animate-pulse-glow" />
          <div className="absolute bottom-40 right-[40%] w-2 h-2 bg-amber/40 rounded-full animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="container relative z-10 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block px-3 py-1.5 rounded-full bg-accent/20 text-amber font-semibold text-xs sm:text-sm mb-6 border border-accent/30 backdrop-blur-sm text-center leading-relaxed"
            >
              System Integration | Procurement | Installation | Commissioning
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground leading-tight"
            >
              Engineering the Future. <span className="text-gradient">Integrating Today.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg text-primary-foreground/75 leading-relaxed max-w-xl"
            >
              End-to-end system integration solutions — from procurement to commissioning — delivered with precision, expertise, and accountability.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-8">
              <Link to="/services">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-amber-dark font-semibold text-base px-8 glow-amber group">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="bg-primary-foreground text-primary font-semibold text-base px-8 hover:bg-primary-foreground/90">
                  Get a Consultation
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0 80L48 74.7C96 69 192 59 288 53.3C384 48 480 48 576 53.3C672 59 768 69 864 69.3C960 69 1056 59 1152 53.3C1248 48 1344 48 1392 48L1440 48V80H0Z" fill="hsl(var(--accent))" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent relative">
        <div className="container py-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={scaleIn} className="group">
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-accent-foreground/60 group-hover:text-accent-foreground transition-colors" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground">{stat.value}</div>
                <div className="text-sm text-accent-foreground/70 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.div variants={fadeLeft}>
                <SectionHeading subtitle="Who We Are" title="Complete System Integration Partner" centered={false} />
              </motion.div>
              <motion.p variants={fadeLeft} className="text-muted-foreground leading-relaxed mb-6">
                At TECHSOL, we don't just supply components — we build complete, fully operational systems.
                Whether you're launching a new facility, upgrading critical infrastructure, or scaling your
                operations, TECHSOL brings together the technical depth and project management excellence
                to deliver integrated systems that perform from day one.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-3 mb-8">
                {[
                  "Single-source accountability from procurement to commissioning",
                  "Cross-functional engineering expertise",
                  "Structured project delivery with full documentation",
                  "Long-term partnership and post-project support",
                ].map((item) => (
                  <motion.li key={item} variants={fadeLeft} className="flex items-center gap-3 text-sm text-foreground group">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp}>
                <Link to="/about">
                  <Button className="bg-primary text-primary-foreground hover:bg-navy-light group">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeRight}
              className="relative"
            >
              <div className="bg-primary rounded-2xl p-10 text-primary-foreground relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-accent/5 rounded-full blur-xl" />

                <h3 className="text-2xl font-heading mb-4 relative">Our Mission</h3>
                <p className="text-primary-foreground/75 leading-relaxed mb-6 relative">
                  To deliver complete, integrated systems that empower our clients' operations — through
                  meticulous planning, expert execution, and full-cycle project accountability.
                </p>
                <div className="w-16 h-0.5 bg-accent/40 mb-6" />
                <h3 className="text-2xl font-heading mb-4 relative">Our Vision</h3>
                <p className="text-primary-foreground/75 leading-relaxed relative">
                  To be the most trusted system integration partner across industries — recognized for
                  engineering excellence, reliability, and the seamless delivery of complex systems.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-secondary overflow-hidden">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <SectionHeading
              subtitle="What We Do"
              title="Our Core Services"
              description="A fully integrated service model covering every phase of a system's lifecycle."
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-heading mb-2 text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                <div className="mt-4 flex items-center text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ArrowRight className="ml-1 w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
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

      {/* Testimonial */}
      <section className="section-padding bg-background overflow-hidden">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-accent text-5xl font-heading mb-6">"</motion.div>
            <motion.blockquote variants={fadeUp} className="text-lg md:text-xl text-foreground leading-relaxed italic mb-6">
              TECHSOL took full ownership of our project from day one. Their team handled everything — procurement, installation, testing — and handed over a fully operational system ahead of schedule. They are the integration partner we didn't know we needed.
            </motion.blockquote>
            <motion.p variants={fadeUp} className="text-muted-foreground text-sm">
              — Operations Director, Industrial Client
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[10%] w-32 h-32 border border-amber/10 rounded-full animate-float-slow" />
          <div className="absolute bottom-10 right-[10%] w-20 h-20 border border-amber/10 rounded-2xl rotate-45 animate-float" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading text-primary-foreground mb-4">
              Ready to Build Something Together?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Have a project in mind? Our team is ready to listen, assess, and propose the right solution for your requirements.
            </motion.p>
            <motion.div variants={scaleIn}>
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-amber-dark font-semibold text-base px-10 glow-amber group">
                  Contact Us Today
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
