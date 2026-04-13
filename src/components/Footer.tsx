import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { stagger, fadeUp, fadeLeft, scaleIn, viewport, viewportLazy } from "@/lib/animations";
import { servicesData } from "@/data/services";

const navLinks = ["Home", "About", "Services", "Portfolio", "Contact"];

const Footer = () => (
  <footer className="bg-primary text-primary-foreground relative overflow-hidden">
    {/* Subtle background blobs */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/3 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />
    </div>

    <div className="container section-padding relative z-10">
      {/* Animated top divider line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="h-px bg-gradient-to-r from-transparent via-amber/40 to-transparent mb-12 origin-center"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportLazy}
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {/* Brand column */}
        <motion.div variants={fadeLeft} className="lg:col-span-1">
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
            <img src={logo} alt="TECHSOL" className="h-14 w-auto mb-5 bg-card rounded-lg p-1.5" />
          </motion.div>
          <p className="text-primary-foreground/65 text-sm leading-relaxed mb-5">
            Professional system integration company delivering end-to-end solutions — from procurement to commissioning — with precision and accountability.
          </p>
          {/* Contact quick links */}
          <div className="space-y-2">
            {[
              { icon: Mail, text: "sales@techsol.com.pk", href: "mailto:sales@techsol.com.pk" },
              { icon: Phone, text: "+92 42 37871299", href: "tel:+924237871299" },
            ].map((c) => (
              <motion.a
                key={c.text}
                href={c.href}
                whileHover={{ x: 4, color: "#f59e0b" }}
                className="flex items-center gap-2 text-primary-foreground/60 hover:text-amber transition-colors text-xs"
              >
                <c.icon className="w-3.5 h-3.5 shrink-0" />
                {c.text}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeUp}>
          <h4 className="text-base font-heading mb-5 text-amber flex items-center gap-2">
            Quick Links
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 h-px bg-amber/20 origin-left"
            />
          </h4>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportLazy}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            className="space-y-2"
          >
            {navLinks.map((item) => (
              <motion.li
                key={item}
                variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
              >
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-primary-foreground/65 hover:text-amber transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {item}
                  </Link>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={fadeUp}>
          <h4 className="text-base font-heading mb-5 text-amber flex items-center gap-2">
            Services
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex-1 h-px bg-amber/20 origin-left"
            />
          </h4>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportLazy}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            className="space-y-2"
          >
            {servicesData.map((s) => (
              <motion.li
                key={s.slug}
                variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
              >
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-primary-foreground/65 hover:text-amber transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {s.title}
                  </Link>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Addresses */}
        <motion.div variants={fadeUp}>
          <h4 className="text-base font-heading mb-5 text-amber flex items-center gap-2">
            Our Offices
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-1 h-px bg-amber/20 origin-left"
            />
          </h4>
          <div className="space-y-4">
            {[
              { city: "Rawalpindi", addr: "Office#24, A-15, NASTP" },
              { city: "Lahore", addr: "1023-Nizam Block, Allama Iqbal Town" },
            ].map((loc) => (
              <motion.div
                key={loc.city}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-2.5 text-primary-foreground/65 text-sm"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-amber/60" />
                <div>
                  <span className="text-primary-foreground/80 font-medium text-xs uppercase tracking-wide block mb-0.5">{loc.city}</span>
                  {loc.addr}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/45"
      >
        <span>© {new Date().getFullYear()} TECHSOL. All rights reserved.</span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2 }}
          className="text-primary-foreground/35 italic"
        >
          Procure · Install · Integrate · Test · Commission · Deliver
        </motion.span>
      </motion.div>
    </div>
  </footer>
);

export default Footer;
