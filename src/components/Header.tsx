import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, Mail, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Home",      path: "/" },
  { label: "About",     path: "/about" },
  { label: "Services",  path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact",   path: "/contact" },
];

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0, transition: { duration: 0.25, ease: "easeIn" as const } },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

const mobileItemVariants = {
  hidden:  { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { scrollY } = useScroll();
  const headerShadow = useTransform(scrollY, [0, 60], [0, 1]);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 20));
    return unsub;
  }, [scrollY]);

  // close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card shadow-lg shadow-primary/10 border-b border-border"
          : "bg-card/98 backdrop-blur-md border-b border-border/60"
      }`}
    >
      {/* Top bar */}
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="bg-primary text-primary-foreground"
      >
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-4">
            <motion.a
              href="mailto:sales@techsol.com.pk"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-1.5 hover:text-amber transition-colors text-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">sales@techsol.com.pk</span>
            </motion.a>
            <span className="hidden md:flex items-center gap-1.5 text-xs text-primary-foreground/70">
              <MapPin className="w-3.5 h-3.5" />
              1023-Nizam Block, Allama Iqbal Town, Lahore
            </span>
          </div>
          <span className="hidden lg:inline text-primary-foreground/50 text-xs">
            System Integration | Procurement | Installation | Commissioning
          </span>
        </div>
      </motion.div>

      {/* Main nav */}
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link to="/" className="flex items-center gap-2">
            <motion.img
              src={logo}
              alt="TECHSOL Logo"
              className="h-12 w-auto"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
            />
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
          className="hidden md:flex items-center gap-1"
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path ||
              (link.path !== "/" && location.pathname.startsWith(link.path));
            return (
              <motion.div
                key={link.path}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                }}
              >
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors group ${
                    isActive ? "text-accent font-semibold" : "text-foreground hover:text-accent"
                  }`}
                >
                  {link.label}
                  {/* Animated underline */}
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute bottom-0.5 left-2 right-2 h-0.5 bg-accent rounded-full ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                </Link>
              </motion.div>
            );
          })}

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
            }}
          >
            <Link to="/contact">
              <Button className="ml-3 bg-accent text-accent-foreground hover:bg-amber-dark font-semibold group">
                Get a Consultation
              </Button>
            </Link>
          </motion.div>
        </motion.nav>

        {/* Mobile toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 text-foreground rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            key="mobile-nav"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden border-t border-border bg-card overflow-hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
              className="px-4 pb-4 pt-2"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div key={link.path} variants={mobileItemVariants}>
                    <Link
                      to={link.path}
                      className={`flex items-center justify-between py-3 text-sm font-medium border-b border-border last:border-0 ${
                        isActive ? "text-accent" : "text-foreground hover:text-accent"
                      } transition-colors`}
                    >
                      {link.label}
                      {isActive && <motion.div layoutId="mobile-active" className="w-1.5 h-1.5 rounded-full bg-accent" />}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div variants={mobileItemVariants} className="mt-3">
                <Link to="/contact">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-amber-dark">
                    Get a Consultation
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
