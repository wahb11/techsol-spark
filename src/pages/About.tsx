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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-primary section-padding">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <span className="text-amber text-sm font-semibold uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl md:text-5xl font-heading text-primary-foreground mt-2">
            Your Technology Partner Since Day One
          </h1>
          <p className="text-primary-foreground/70 mt-4 text-lg leading-relaxed">
            TECHSOL is a Rawalpindi-based technology company delivering end-to-end IT solutions
            to businesses across Pakistan.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading subtitle="Our Story" title="Built on Trust, Driven by Innovation" centered={false} />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded with a vision to bridge the technology gap for businesses in Pakistan, TECHSOL
              has grown from a small IT services provider into a comprehensive technology solutions company.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of certified professionals brings expertise across web development, graphic design,
              security systems, networking, and IT infrastructure. We've successfully delivered 150+
              projects for clients across diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary rounded-xl p-6 text-primary-foreground">
              <Target className="w-8 h-8 text-amber mb-3" />
              <h3 className="font-heading text-lg mb-2">Mission</h3>
              <p className="text-sm text-primary-foreground/70">Empower businesses with reliable, innovative technology solutions.</p>
            </div>
            <div className="bg-accent rounded-xl p-6 text-accent-foreground">
              <Eye className="w-8 h-8 mb-3" />
              <h3 className="font-heading text-lg mb-2">Vision</h3>
              <p className="text-sm text-accent-foreground/80">Be Pakistan's most trusted technology partner.</p>
            </div>
            <div className="col-span-2 bg-secondary rounded-xl p-6">
              <Heart className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-heading text-lg mb-2 text-foreground">Core Values</h3>
              <p className="text-sm text-muted-foreground">Integrity, Innovation, Excellence, and Customer-First approach in everything we do.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-secondary">
      <div className="container">
        <SectionHeading subtitle="Why TECHSOL" title="What Sets Us Apart" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="bg-card rounded-xl p-6 border border-border text-center"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Differentiators */}
    <section className="section-padding bg-background">
      <div className="container max-w-3xl">
        <SectionHeading subtitle="Advantages" title="Why Businesses Choose TECHSOL" />
        <div className="space-y-4">
          {[
            "Comprehensive service portfolio — from software to hardware",
            "Local team with deep understanding of Pakistan's business landscape",
            "Transparent pricing with no hidden costs",
            "Post-project support and maintenance included",
            "Proven track record with 150+ successful projects",
            "Certified professionals with industry expertise",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
              <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
