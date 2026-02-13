import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Palette, Shield, Network, Server, Monitor, Smartphone, Database, Wifi, Camera, HardDrive, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const categories = [
  {
    name: "Software Solutions",
    services: [
      { icon: Code, title: "Web Development", desc: "Custom websites, e-commerce platforms, and web applications using modern frameworks and technologies." },
      { icon: Smartphone, title: "App Development", desc: "Native and cross-platform mobile applications for iOS and Android devices." },
      { icon: Palette, title: "Graphic Design", desc: "Logo design, brand identity, UI/UX design, marketing materials, and social media graphics." },
      { icon: Database, title: "Software Solutions", desc: "Custom ERP, CRM, and business management software tailored to your needs." },
    ],
  },
  {
    name: "IT Infrastructure",
    services: [
      { icon: Server, title: "Server Management", desc: "Server setup, configuration, maintenance, and cloud migration services." },
      { icon: Network, title: "Networking", desc: "Enterprise networking, structured cabling, router/switch configuration, and LAN/WAN setup." },
      { icon: Wifi, title: "Wireless Solutions", desc: "Wi-Fi network design, access point installation, and wireless coverage optimization." },
      { icon: HardDrive, title: "Hardware Supply", desc: "IT hardware procurement, computer assembly, and equipment supply for businesses." },
    ],
  },
  {
    name: "Security Solutions",
    services: [
      { icon: Camera, title: "CCTV Installation", desc: "HD surveillance cameras, DVR/NVR systems, remote monitoring, and complete security solutions." },
      { icon: Shield, title: "Access Control", desc: "Biometric systems, card readers, visitor management, and building security integration." },
      { icon: Monitor, title: "IT Security", desc: "Firewall setup, antivirus deployment, data backup, and cybersecurity consulting." },
    ],
  },
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
            Comprehensive Tech Solutions
          </motion.h1>
          <motion.p variants={fadeUp} className="text-primary-foreground/70 mt-4 text-lg">
            From software development to physical security, we cover all your technology needs under one roof.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {categories.map((cat, catIdx) => (
      <section key={cat.name} className={`section-padding overflow-hidden ${catIdx % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <SectionHeading subtitle={`Category ${catIdx + 1}`} title={cat.name} />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {cat.services.map((s) => (
              <motion.div
                key={s.title}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                  <s.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-heading mb-2 text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <Link to="/contact" className="text-accent text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all group/link">
                  Inquire Now <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
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
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading text-primary-foreground mb-4">Need a Custom Solution?</motion.h2>
          <motion.p variants={fadeUp} className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Don't see exactly what you need? We create tailored technology packages for every business.
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
