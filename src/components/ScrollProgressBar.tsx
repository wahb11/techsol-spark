import { useScroll, motion, useSpring } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-accent z-[200] origin-left pointer-events-none"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgressBar;
