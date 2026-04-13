import { motion } from "framer-motion";

interface MarqueeStripProps {
  items: string[];
  speed?: number; // seconds for one full loop
  direction?: "left" | "right";
  className?: string;
}

const MarqueeStrip = ({
  items,
  speed = 28,
  direction = "left",
  className = "",
}: MarqueeStripProps) => {
  // Duplicate for seamless loop
  const doubled = [...items, ...items, ...items];

  return (
    <div className={`relative overflow-hidden py-3 ${className}`}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-current to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-current to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        className="flex items-center gap-0 whitespace-nowrap"
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-6">
            <span className="text-sm font-semibold uppercase tracking-widest">{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50 shrink-0" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeStrip;
