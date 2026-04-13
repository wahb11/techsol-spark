import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, Phone, Send, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { tapScale, vp, vpCard, EASE } from "@/lib/animations";

const E = EASE;

const serviceOptions = [
  "Procurement", "Installation", "System Integration",
  "Testing", "Commissioning", "Laptops & Systems",
  "Full Project Scope", "Other",
];

const contactCards = [
  { icon: Mail,   title: "Email Us",       content: "sales@techsol.com.pk",                    href: "mailto:sales@techsol.com.pk" },
  { icon: Phone,  title: "Call Us",        content: "+92 42 37871299",                          href: "tel:+924237871299" },
  { icon: MapPin, title: "Visit Us",       content: "1023-Nizam Block, Allama Iqbal Town, Lahore" },
  { icon: Clock,  title: "Business Hours", content: "Mon–Fri: 8 AM – 6 PM\nSat: 9 AM – 1 PM" },
];

const Contact = () => {
  const { toast } = useToast();
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name:"", company:"", email:"", phone:"", service:"", message:"" });

  const { scrollYProgress: heroSY } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY       = useTransform(heroSY, [0, 1], [0, 110]);
  const heroOpacity = useTransform(heroSY, [0, 0.75], [1, 0]);
  const heroScale   = useTransform(heroSY, [0, 1], [1, 1.07]);

  const { scrollYProgress: formSY } = useScroll({ target: formRef, offset: ["start end", "end start"] });
  const formBlobY = useTransform(formSY, [0, 1], [-25, 25]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title:"Please fill in required fields", variant:"destructive" }); return;
    }
    const to      = "sales@techsol.com.pk";
    const subject = `Inquiry: ${form.service || "General"} — ${form.name}${form.company ? ` (${form.company})` : ""}`;
    const body    = `Name: ${form.name}\nCompany: ${form.company || "N/A"}\nEmail: ${form.email}\nPhone: ${form.phone || "N/A"}\nProject Type: ${form.service || "General"}\n\nMessage:\n${form.message}`;
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank");
    toast({ title:"Gmail opened in a new tab!", description:"Just hit Send to submit your inquiry." });
    setForm({ name:"", company:"", email:"", phone:"", service:"", message:"" });
  };

  return (
    <Layout>
      {/* ════════════ HERO ════════════ */}
      <section ref={heroRef} className="bg-primary section-padding relative overflow-hidden min-h-[58vh] flex items-center">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-[10%] w-[350px] h-[350px] bg-accent/5 rounded-full blur-2xl" />
        </motion.div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-[12%] w-28 h-28 border border-amber/10 rounded-full animate-float-slow" />
          <div className="absolute bottom-10 left-[8%] w-16 h-16 border border-amber/10 rounded-xl rotate-12 animate-float" />
          <div className="absolute top-1/2 right-[28%] w-3 h-3 bg-amber/25 rounded-full animate-pulse-glow" />
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="container relative z-10">
          <div className="max-w-2xl">
            <motion.span initial={{ opacity:0, y:20, scale:0.9 }} animate={{ opacity:1, y:0, scale:1 }} transition={{ duration:0.6, ease:E }}
              className="text-amber text-sm font-semibold uppercase tracking-widest inline-block border border-amber/30 rounded-full px-3 py-1 bg-amber/10 backdrop-blur-sm mb-6">
              Contact Us
            </motion.span>
            <motion.h1 initial={{ opacity:0, filter:"blur(12px)", scale:1.04 }} animate={{ opacity:1, filter:"blur(0px)", scale:1 }} transition={{ duration:0.85, ease:E, delay:0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground leading-tight">
              Let's Build Something Together
            </motion.h1>
            <motion.p initial={{ opacity:0, y:22 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.65, ease:E, delay:0.32 }}
              className="text-primary-foreground/70 mt-5 text-lg leading-relaxed max-w-xl">
              Have a project in mind? Our team is ready to listen, assess, and propose the right solution.
            </motion.p>
            {/* Quick-contact pills */}
            <div className="flex flex-wrap gap-3 mt-7">
              {[
                { icon: Mail,  text:"sales@techsol.com.pk", href:"mailto:sales@techsol.com.pk", delay:0.46 },
                { icon: Phone, text:"+92 42 37871299",       href:"tel:+924237871299",           delay:0.54 },
              ].map((c) => (
                <motion.a key={c.text} href={c.href}
                  initial={{ opacity:0, scale:0.88 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.5, ease:E, delay:c.delay }}
                  whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
                  className="flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-2 text-primary-foreground/80 hover:text-amber hover:border-amber/40 transition-colors text-sm backdrop-blur-sm">
                  <c.icon className="w-3.5 h-3.5" />{c.text}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L60 54C120 48 240 36 360 30C480 24 600 24 720 30C840 36 960 48 1080 48C1200 48 1320 36 1380 30L1440 24V60H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* ════════════ MAIN SECTION ════════════ */}
      <section ref={formRef} className="section-padding bg-background overflow-hidden relative">
        <motion.div style={{ y: formBlobY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/4 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-60 h-60 bg-accent/3 rounded-full blur-2xl" />
        </motion.div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Contact cards */}
            <div className="space-y-4">
              <motion.h2 initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={vp} transition={{ duration:0.6, ease:E }}
                className="text-xl font-heading text-foreground mb-6">Get in Touch
              </motion.h2>
              {contactCards.map((item, i) => (
                <motion.div key={item.title + i}
                  initial={{ opacity:0, x:-28 }} whileInView={{ opacity:1, x:0 }} viewport={vpCard}
                  transition={{ duration:0.6, ease:E, delay: i * 0.09 }}
                  whileHover={{ x:8, scale:1.02, transition:{ duration:0.2 } }} whileTap={tapScale}
                  className="bg-card rounded-xl p-5 border border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group flex items-start gap-4">
                  <motion.div whileHover={{ rotate:15, scale:1.1 }} transition={{ duration:0.3 }}
                    className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-all duration-300">
                    <item.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </motion.div>
                  <div>
                    <h3 className="font-heading text-foreground text-sm mb-0.5">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-muted-foreground hover:text-accent transition-colors text-xs leading-relaxed">{item.content}</a>
                    ) : (
                      <p className="text-muted-foreground text-xs whitespace-pre-line leading-relaxed">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
              <motion.div initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={vp} transition={{ duration:0.7, delay:0.3 }}
                className="h-px bg-gradient-to-r from-accent to-transparent origin-left" />
              <motion.p initial={{ opacity:0, y:8 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.5, delay:0.45 }}
                className="text-xs text-muted-foreground italic">Procure · Install · Integrate · Test · Commission · Deliver.
              </motion.p>
            </div>

            {/* Form */}
            <motion.div initial={{ opacity:0, scale:0.96, y:24 }} whileInView={{ opacity:1, scale:1, y:0 }} viewport={vp} transition={{ duration:0.65, ease:E, delay:0.1 }}
              className="lg:col-span-2">
              <form onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:shadow-xl hover:border-accent/20 transition-all duration-300 space-y-5">

                <motion.h2 initial={{ opacity:0, y:-10 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.5, ease:E }}
                  className="text-xl font-heading text-foreground mb-4">Send Us a Message
                </motion.h2>

                {/* Name + Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { id:"name",    label:"Full Name *",   type:"text",  placeholder:"Your full name",   maxLength:100  },
                    { id:"company", label:"Company Name",  type:"text",  placeholder:"Your company",     maxLength:100  },
                  ].map((f, i) => (
                    <motion.div key={f.id}
                      initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={vpCard}
                      transition={{ duration:0.55, ease:E, delay: i * 0.07 }}>
                      <label className="text-xs font-semibold text-foreground mb-1.5 block uppercase tracking-wide">{f.label}</label>
                      <Input type={f.type} value={(form as Record<string,string>)[f.id]}
                        onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                        placeholder={f.placeholder} maxLength={f.maxLength}
                        className="transition-all duration-200 focus:shadow-md focus:shadow-accent/10" />
                    </motion.div>
                  ))}
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { id:"email", label:"Email Address *", type:"email", placeholder:"your@email.com",    maxLength:255 },
                    { id:"phone", label:"Phone Number",    type:"text",  placeholder:"Your phone number", maxLength:20  },
                  ].map((f, i) => (
                    <motion.div key={f.id}
                      initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={vpCard}
                      transition={{ duration:0.55, ease:E, delay: 0.14 + i * 0.07 }}>
                      <label className="text-xs font-semibold text-foreground mb-1.5 block uppercase tracking-wide">{f.label}</label>
                      <Input type={f.type} value={(form as Record<string,string>)[f.id]}
                        onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                        placeholder={f.placeholder} maxLength={f.maxLength}
                        className="transition-all duration-200 focus:shadow-md focus:shadow-accent/10" />
                    </motion.div>
                  ))}
                </div>

                {/* Service */}
                <motion.div initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={vpCard} transition={{ duration:0.55, ease:E, delay:0.28 }}>
                  <label className="text-xs font-semibold text-foreground mb-1.5 block uppercase tracking-wide">Project Type / Industry</label>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-foreground">
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={vpCard} transition={{ duration:0.55, ease:E, delay:0.35 }}>
                  <label className="text-xs font-semibold text-foreground mb-1.5 block uppercase tracking-wide">Message / Project Brief *</label>
                  <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project requirements..." rows={5} maxLength={2000}
                    className="transition-all duration-200 focus:shadow-md focus:shadow-accent/10 resize-none" />
                  <p className="text-right text-xs text-muted-foreground mt-1">{form.message.length}/2000</p>
                </motion.div>

                {/* Submit */}
                <motion.div initial={{ opacity:0, scale:0.92 }} whileInView={{ opacity:1, scale:1 }} viewport={vpCard} transition={{ duration:0.5, ease:E, delay:0.42 }}>
                  <Button type="submit" size="lg"
                    className="bg-accent text-accent-foreground hover:bg-amber-dark font-semibold w-full sm:w-auto px-10 glow-amber group">
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-0.5 transition-transform" />
                    Submit Inquiry
                    <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
