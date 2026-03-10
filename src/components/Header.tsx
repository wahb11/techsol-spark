import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-4">
            <a href="mailto:info@techsol.com" className="flex items-center gap-1.5 hover:text-amber transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">info@techsol.com</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Office#24, A-15, NASTP Rawalpindi
            </span>
          </div>
          <span className="hidden lg:inline text-primary-foreground/60 text-xs">
            System Integration | Procurement | Installation | Commissioning
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="TECHSOL Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-accent font-semibold"
                  : "text-foreground hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button className="ml-3 bg-accent text-accent-foreground hover:bg-amber-dark font-semibold">
              Get a Consultation
            </Button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-card px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-border last:border-0 ${
                location.pathname === link.path ? "text-accent" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            <Button className="w-full mt-3 bg-accent text-accent-foreground hover:bg-amber-dark">
              Get a Consultation
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
