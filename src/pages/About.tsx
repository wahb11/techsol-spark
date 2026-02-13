import { motion } from "framer-motion";
import { CheckCircle, Target, Eye, Heart, Users, Award, Clock, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Award, title: "Quality", desc: "We deliver excellence in every project, no matter the size." },
  { icon: Users, title: "Client-Centric", desc: "Your success is our success. We prioritize your goals." },
  { icon: Zap, title: "Innovation", desc: "We stay ahead with the latest technologies and trends." },
  { icon: Clock, title: "Reliability", desc: "On-time delivery and 24/7 support you can count on." },
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

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-primary section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-[10%] w-32 h-32 border border-amber/10 rounded-full animate-float-slow" />
        <div className="absolute bottom-10 left-[5%] w-20 h-20 border border-amber/10 rounded-2xl rotate-45 animate-float" />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-2xl"
        >
          <motion.span variants={fadeUp} className="text-amber text-sm font-semibold uppercase tracking-wider inline-block">About Us</motion.span>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-heading text-primary-foreground mt-2">
            Your Technology Partner Since Day One
          </motion.h1>
          <motion.p variants={fadeUp} className="text-primary-foreground/70 mt-4 text-lg leading-relaxed">
            TECHSOL is a Rawalpindi-based technology company delivering end-to-end IT solutions
            to businesses across Pakistan.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Story */}
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
              <SectionHeading subtitle="Our Story" title="Built on Trust, Driven by Innovation" centered={false} />
            </motion.div>
            <motion.p variants={fadeLeft} className="text-muted-foreground leading-relaxed mb-4">
              Founded with a vision to bridge the technology gap for businesses in Pakistan, TECHSOL
              has grown from a small IT services provider into a comprehensive technology solutions company.
            </motion.p>
            <motion.p variants={fadeLeft} className="text-muted-foreground leading-relaxed">
              Our team of certified professionals brings expertise across web development, graphic design,
              security systems, networking, and IT infrastructure. We've successfully delivered 150+
              projects for clients across diverse industries.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div variants={scaleIn} whileHover={{ y: -6, transition: { duration: 0.3 } }} className="bg-primary rounded-xl p-6 text-primary-foreground relative overflow-hidden group">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-colors" />
              <Target className="w-8 h-8 text-amber mb-3 relative" />
              <h3 className="font-heading text-lg mb-2 relative">Mission</h3>
              <p className="text-sm text-primary-foreground/70 relative">Empower businesses with reliable, innovative technology solutions.</p>
            </motion.div>
            <motion.div variants={scaleIn} whileHover={{ y: -6, transition: { duration: 0.3 } }} className="bg-accent rounded-xl p-6 text-accent-foreground relative overflow-hidden group">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors" />
              <Eye className="w-8 h-8 mb-3 relative" />
              <h3 className="font-heading text-lg mb-2 relative">Vision</h3>
              <p className="text-sm text-accent-foreground/80 relative">Be Pakistan's most trusted technology partner.</p>
            </motion.div>
            <motion.div variants={fadeUp} whileHover={{ y: -6, transition: { duration: 0.3 } }} className="col-span-2 bg-secondary rounded-xl p-6 relative overflow-hidden group">
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/10 transition-colors" />
              <Heart className="w-8 h-8 text-accent mb-3 relative" />
              <h3 className="font-heading text-lg mb-2 text-foreground relative">Core Values</h3>
              <p className="text-sm text-muted-foreground relative">Integrity, Innovation, Excellence, and Customer-First approach in everything we do.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionHeading subtitle="Why TECHSOL" title="What Sets Us Apart" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card rounded-xl p-6 border border-border text-center hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                <v.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Differentiators */}
    <section className="section-padding bg-background overflow-hidden">
      <div className="container max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionHeading subtitle="Advantages" title="Why Businesses Choose TECHSOL" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="space-y-4"
        >
          {[
            "Comprehensive service portfolio — from software to hardware",
            "Local team with deep understanding of Pakistan's business landscape",
            "Transparent pricing with no hidden costs",
            "Post-project support and maintenance included",
            "Proven track record with 150+ successful projects",
            "Certified professionals with industry expertise",
          ].map((item) => (
            <motion.div
              key={item}
              variants={fadeLeft}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
              className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border hover:border-accent/40 hover:shadow-md transition-all duration-300 cursor-default"
            >
              <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <span className="text-foreground text-sm">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default About;
