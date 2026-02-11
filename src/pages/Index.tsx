import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Monitor, Palette, Shield, Network, Server, Code, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Code, title: "Web & App Development", desc: "Custom websites, web apps, and mobile solutions built with cutting-edge technologies." },
  { icon: Palette, title: "Graphic Design", desc: "Brand identity, UI/UX design, marketing materials that captivate your audience." },
  { icon: Shield, title: "CCTV & Security", desc: "Comprehensive surveillance and security systems for homes and businesses." },
  { icon: Network, title: "Networking Solutions", desc: "Enterprise networking, structured cabling, and wireless infrastructure setup." },
  { icon: Server, title: "IT Infrastructure", desc: "Server setup, cloud migration, and complete IT infrastructure management." },
  { icon: Monitor, title: "IT Consultation", desc: "Expert guidance to align your technology strategy with business goals." },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "8+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-amber font-semibold text-sm mb-6 border border-accent/30">
              Your Trusted Technology Partner
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground leading-tight">
              Innovative <span className="text-amber">Tech Solutions</span> for Your Business
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/75 leading-relaxed max-w-xl">
              From web development to security systems, we deliver end-to-end technology
              solutions that drive growth and protect your business.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-amber-dark font-semibold text-base px-8">
                  Get Your Solution
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8">
                  Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent">
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground">{stat.value}</div>
                <div className="text-sm text-accent-foreground/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <SectionHeading subtitle="Who We Are" title="Technology Solutions You Can Trust" centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-6">
                TECHSOL is a leading technology solutions provider based in Rawalpindi, Pakistan.
                We specialize in delivering comprehensive IT services including web development,
                graphic design, CCTV installations, networking, and IT infrastructure management.
              </p>
              <ul className="space-y-3 mb-8">
                {["Certified & experienced IT professionals", "End-to-end project delivery", "24/7 dedicated support", "Competitive pricing"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button className="bg-primary text-primary-foreground hover:bg-navy-light">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
              className="bg-primary rounded-2xl p-10 text-primary-foreground"
            >
              <h3 className="text-2xl font-heading mb-4">Our Mission</h3>
              <p className="text-primary-foreground/75 leading-relaxed mb-6">
                To empower businesses with reliable, innovative technology solutions that enhance
                efficiency, security, and growth—while delivering exceptional customer care.
              </p>
              <h3 className="text-2xl font-heading mb-4">Our Vision</h3>
              <p className="text-primary-foreground/75 leading-relaxed">
                To be Pakistan's most trusted technology partner, recognized for quality,
                innovation, and customer-centric service delivery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <SectionHeading
            subtitle="What We Do"
            title="Our Core Services"
            description="We offer a complete range of technology solutions tailored to meet your business needs."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-heading mb-2 text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button className="bg-primary text-primary-foreground hover:bg-navy-light">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl md:text-4xl font-heading text-primary-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Let's discuss how TECHSOL can help you achieve your technology goals.
              Get in touch for a free consultation.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-amber-dark font-semibold text-base px-10">
                Contact Us Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
