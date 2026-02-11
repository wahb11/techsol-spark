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

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }
    // Build mailto
    const subject = encodeURIComponent(`Inquiry: ${form.service || "General"} — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:Sales@techsol.com.pk?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email client...", description: "Your inquiry is being prepared." });
  };

  return (
    <Layout>
      <section className="bg-primary section-padding">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="text-amber text-sm font-semibold uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-heading text-primary-foreground mt-2">Let's Build Something Great</h1>
            <p className="text-primary-foreground/70 mt-4 text-lg">
              Have a project in mind? Get in touch and let's discuss how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <Mail className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-heading text-foreground mb-1">Email Us</h3>
                <a href="mailto:Sales@techsol.com.pk" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Sales@techsol.com.pk
                </a>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <MapPin className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-heading text-foreground mb-1">Visit Us</h3>
                <p className="text-muted-foreground text-sm">Office#24, A-15, NASTP Rawalpindi</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <Phone className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-heading text-foreground mb-1">Call Us</h3>
                <p className="text-muted-foreground text-sm">Contact us via email for phone details</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 border border-border space-y-5">
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
                <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-amber-dark font-semibold w-full sm:w-auto px-10">
                  <Send className="w-4 h-4 mr-2" /> Send Inquiry
                </Button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-xl overflow-hidden border border-border h-80">
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
