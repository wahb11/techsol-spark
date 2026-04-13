import { motion } from "framer-motion";
import { stagger, fadeUp, blurIn, viewport } from "@/lib/animations";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={stagger}
    className={`max-w-2xl mb-12 ${centered ? "mx-auto text-center" : ""}`}
  >
    {subtitle && (
      <motion.span
        variants={fadeUp}
        className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3 relative"
      >
        {subtitle}
        {/* Animated underline */}
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className={`absolute -bottom-1 left-0 right-0 h-px bg-accent/40 origin-left ${centered ? "left-1/4 right-1/4" : ""}`}
        />
      </motion.span>
    )}
    <motion.h2
      variants={blurIn}
      className={`text-3xl md:text-4xl font-heading ${light ? "text-primary-foreground" : "text-foreground"} mt-1`}
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p
        variants={fadeUp}
        className={`mt-4 text-base leading-relaxed ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}
      >
        {description}
      </motion.p>
    )}
  </motion.div>
);

export default SectionHeading;
