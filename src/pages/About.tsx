import { motion } from "framer-motion";
import { CheckCircle, Target, Eye, Heart, Award, Shield, Lightbulb, Users, Handshake, Settings } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { stagger, fadeUp, fadeLeft, fadeRight, scaleIn, viewport, viewportLazy, tapScale } from "@/lib/animations";

const values = [
  { icon: Award, title: "Technical Excellence", desc: "We bring deep expertise to every phase of every project." },
  { icon: Shield, title: "Integrity", desc: "We operate with full transparency and honest communication at every level." },
  { icon: CheckCircle, title: "Accountability", desc: "We own our projects from start to finish, with no handoffs and no gaps." },
  { icon: Lightbulb, title: "Innovation", desc: "We continually evolve our methodologies to stay ahead of industry demands." },
  { icon: Users, title: "Client Focus", desc: "Every decision we make is guided by the best interests of our clients." },
];

const differentiators = [
  { title: "Single-Source Accountability", desc: "One point of contact, one contract, one team responsible — procurement through commissioning. No coordination risk." },
  { title: "End-to-End Technical Expertise", desc: "Our team spans electrical, mechanical, instrumentation, controls, and IT — solving problems single-discipline teams often miss." },
  { title: "Proven Project Delivery", desc: "Complex system integration projects delivered on time, within budget, and to specification across industrial, commercial, and infrastructure sectors." },
  { title: "Compliance & Quality Standards", desc: "Full documentation, traceable processes, and rigorous quality control aligned with international engineering and safety standards." },
  { title: "Long-Term Partnership Mindset", desc: "Post-project support, system expansions, and ongoing technical assistance — because our goal is your system's continued success." },
  { title: "Adaptive & Industry-Agnostic", desc: "Oil & gas, manufacturing, utilities, telecommunications, or building infrastructure — we tailor our approach to your industry's demands." },
];

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
            Who We Are
          </motion.h1>
          <motion.p variants={fadeUp} className="text-primary-foreground/70 mt-4 text-lg leading-relaxed">
            TECHSOL is a professional system integration company committed to delivering technically sound,
            operationally ready solutions across industries.
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
            viewport={viewport}
            variants={stagger}
          >
            <motion.div variants={fadeLeft}>
              <SectionHeading subtitle="Our Story" title="Bridging Technology and Performance" centered={false} />
            </motion.div>
            <motion.p variants={fadeLeft} className="text-muted-foreground leading-relaxed mb-4">
              Founded on a vision to bridge the gap between technology supply and real-world operational
              performance, TECHSOL has grown into a trusted name in system integration. We understand that
              modern infrastructure demands more than individual components — it requires intelligent,
              seamlessly integrated systems that work together from day one.
            </motion.p>
            <motion.p variants={fadeLeft} className="text-muted-foreground leading-relaxed">
              Over the years, we have built a reputation for technical rigor, transparent project management,
              and an unwavering commitment to client satisfaction. Our multidisciplinary team of engineers,
              project managers, and technical specialists brings diverse expertise to every engagement —
              ensuring that each system we deliver is designed, built, tested, and commissioned to the highest standards.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div variants={scaleIn} whileHover={{ y: -6, transition: { duration: 0.3 } }} whileTap={tapScale} className="bg-primary rounded-xl p-6 text-primary-foreground relative overflow-hidden group cursor-pointer">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-colors" />
              <Target className="w-8 h-8 text-amber mb-3 relative" />
              <h3 className="font-heading text-lg mb-2 relative">Mission</h3>
              <p className="text-sm text-primary-foreground/70 relative">To deliver complete, integrated systems through meticulous planning and full-cycle accountability.</p>
            </motion.div>
            <motion.div variants={scaleIn} whileHover={{ y: -6, transition: { duration: 0.3 } }} whileTap={tapScale} className="bg-accent rounded-xl p-6 text-accent-foreground relative overflow-hidden group cursor-pointer">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors" />
              <Eye className="w-8 h-8 mb-3 relative" />
              <h3 className="font-heading text-lg mb-2 relative">Vision</h3>
              <p className="text-sm text-accent-foreground/80 relative">To be the most trusted system integration partner — recognized for engineering excellence.</p>
            </motion.div>
            <motion.div variants={fadeUp} whileHover={{ y: -6, transition: { duration: 0.3 } }} whileTap={tapScale} className="col-span-2 bg-secondary rounded-xl p-6 relative overflow-hidden group cursor-pointer">
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/10 transition-colors" />
              <Heart className="w-8 h-8 text-accent mb-3 relative" />
              <h3 className="font-heading text-lg mb-2 text-foreground relative">Core Values</h3>
              <p className="text-sm text-muted-foreground relative">Technical Excellence, Integrity, Accountability, Innovation, and Client Focus in everything we do.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <SectionHeading subtitle="Our Values" title="What Drives Us" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportLazy}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              whileTap={tapScale}
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

    {/* Why TECHSOL */}
    <section className="section-padding bg-background overflow-hidden">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <SectionHeading
            subtitle="Our Edge"
            title="Why TECHSOL"
            description="In a market full of suppliers and contractors, TECHSOL stands apart as a true system integration partner."
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportLazy}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              variants={scaleIn}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              whileTap={tapScale}
              className="bg-card rounded-xl p-6 border border-border hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-all duration-300">
                <span className="text-accent group-hover:text-accent-foreground font-heading font-bold transition-colors duration-300">{i + 1}</span>
              </div>
              <h3 className="font-heading text-foreground mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default About;
