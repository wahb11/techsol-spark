import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Facebook, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img src={logo} alt="TECHSOL" className="h-14 w-auto mb-4 bg-card rounded p-1" />
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Professional system integration company delivering end-to-end solutions — from procurement to commissioning — with precision and accountability.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-heading mb-4 text-amber">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-primary-foreground/70 hover:text-amber transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-heading mb-4 text-amber">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Procurement</li>
            <li>Installation</li>
            <li>System Integration</li>
            <li>Testing</li>
            <li>Commissioning</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-heading mb-4 text-amber">Contact Us</h4>
          <div className="space-y-3 text-sm">
            <a href="mailto:info@techsol.com" className="flex items-start gap-2 text-primary-foreground/70 hover:text-amber transition-colors">
              <Mail className="w-4 h-4 mt-0.5 shrink-0" />
              info@techsol.com
            </a>
            <div className="flex items-start gap-2 text-primary-foreground/70">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              Office#24, A-15, NASTP Rawalpindi
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            {[Facebook, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-navy-light flex items-center justify-center hover:bg-accent transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-navy-light">
      <div className="container py-4 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} TECHSOL. All rights reserved. — Procure. Install. Integrate. Test. Commission. Deliver.
      </div>
    </div>
  </footer>
);

export default Footer;
