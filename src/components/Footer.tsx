import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
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
            <li>Laptops &amp; Systems</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-heading mb-4 text-amber">Contact Us</h4>
          <div className="space-y-3 text-sm">
            <a href="mailto:sales@techsol.com.pk" className="flex items-start gap-2 text-primary-foreground/70 hover:text-amber transition-colors">
              <Mail className="w-4 h-4 mt-0.5 shrink-0" />
              sales@techsol.com.pk
            </a>
            <a href="tel:+924237871299" className="flex items-start gap-2 text-primary-foreground/70 hover:text-amber transition-colors">
              <Phone className="w-4 h-4 mt-0.5 shrink-0" />
              +92 42 37871299
            </a>
            <div className="flex items-start gap-2 text-primary-foreground/70">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              Office#24, A-15, NASTP Rawalpindi
            </div>
            <div className="flex items-start gap-2 text-primary-foreground/70">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              1023-Nizam Block, Allama Iqbal Town, Lahore
            </div>
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
