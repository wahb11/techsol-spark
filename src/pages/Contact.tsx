import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const serviceOptions = [
  "Web Development",
  "Graphic Design",
  "CCTV & Security",
  "Networking",
  "IT Infrastructure",
  "IT Consultation",
  "Other",
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }
    const subject = encodeURIComponent(`Inquiry: ${form.service || "General"} — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:Sales@techsol.com.pk?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email client...", description: "Your inquiry is being prepared." });
  };

  return (
    <Layout>
      <section className="bg-primary section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-[12%] w-28 h-28 border border-amber/10 rounded-full animate-float-slow" />
          <div className="absolute bottom-10 left-[8%] w-16 h-16 border border-amber/10 rounded-xl rotate-12 animate-float" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.span variants={fadeUp} className="text-amber text-sm font-semibold uppercase tracking-wider inline-block">Contact Us</motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-heading text-primary-foreground mt-2">Let's Build Something Great</motion.h1>
            <motion.p variants={fadeUp} className="text-primary-foreground/70 mt-4 text-lg">
              Have a project in mind? Get in touch and let's discuss how we can help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="space-y-6"
            >
              {[
                { icon: Mail, title: "Email Us", content: "Sales@techsol.com.pk", href: "mailto:Sales@techsol.com.pk" },
                { icon: MapPin, title: "Visit Us", content: "Office#24, A-15, NASTP Rawalpindi" },
                { icon: Phone, title: "Call Us", content: "Contact us via email for phone details" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeLeft}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="bg-card rounded-xl p-6 border border-border hover:border-accent/40 hover:shadow-md transition-all duration-300 group"
                >
                  <item.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading text-foreground mb-1">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{item.content}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={scaleIn}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 border border-border space-y-5 hover:shadow-lg transition-shadow duration-300">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Name *</label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Email *</label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      maxLength={255}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Phone</label>
                    <Input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="Your phone number"
                      maxLength={20}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Service of Interest</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-foreground"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Message *</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={5}
                    maxLength={1000}
                  />
                </div>
                <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-amber-dark font-semibold w-full sm:w-auto px-10 glow-amber group">
                  <Send className="w-4 h-4 mr-2" /> Send Inquiry
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="mt-12 rounded-xl overflow-hidden border border-border h-80 hover:shadow-lg transition-shadow duration-300"
          >
            <iframe
              title="TECHSOL Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.5!2d73.0479!3d33.5651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMzJzU0LjQiTiA3M8KwMDInNTIuNCJF!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
