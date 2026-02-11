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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const Services = () => (
  <Layout>
    <section className="bg-primary section-padding">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <span className="text-amber text-sm font-semibold uppercase tracking-wider">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-heading text-primary-foreground mt-2">
            Comprehensive Tech Solutions
          </h1>
          <p className="text-primary-foreground/70 mt-4 text-lg">
            From software development to physical security, we cover all your technology needs under one roof.
          </p>
        </motion.div>
      </div>
    </section>

    {categories.map((cat, catIdx) => (
      <section key={cat.name} className={`section-padding ${catIdx % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
        <div className="container">
          <SectionHeading subtitle={`Category ${catIdx + 1}`} title={cat.name} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {cat.services.map((s, i) => (
              <motion.div
                key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-heading mb-2 text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <Link to="/contact" className="text-accent text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Inquire Now <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="bg-primary section-padding">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-heading text-primary-foreground mb-4">Need a Custom Solution?</h2>
        <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
          Don't see exactly what you need? We create tailored technology packages for every business.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-amber-dark font-semibold px-10">
            Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Services;
