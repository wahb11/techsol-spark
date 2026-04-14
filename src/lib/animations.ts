/**
 * Shared Framer Motion animation variants
 * - once: false → animations replay every time element enters viewport (including scroll up)
 * - Spring physics for natural feel
 * - Reduced offsets to prevent overflow on small screens
 */

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10, delayChildren: 0.05 } },
};

export const staggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.02 } },
};

export const staggerSlow = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 14 },
  },
};

export const springUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 90, damping: 14 },
  },
};

export const rotateIn = {
  hidden: { opacity: 0, scale: 0.8, rotate: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export const blurIn = {
  hidden: { opacity: 0, filter: "blur(12px)", scale: 1.04 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/** Page-level transition — used by Layout's <motion.main> */
/**
 * Page transition strategy:
 *  - EXITING page fades out (200ms)
 *  - ENTERING page starts at full opacity (1) immediately
 *
 * Why initial must be opacity:1, NOT opacity:0:
 * Even with duration:0, Framer Motion renders one frame at the `initial`
 * value before transitioning to `animate`. If initial is opacity:0,
 * IntersectionObserver fires during that invisible frame and marks all
 * in-viewport elements as "already processed". Their whileInView animations
 * complete invisibly, so the user sees no animations on the first scroll-down.
 * Starting at opacity:1 eliminates this invisible frame entirely.
 *
 * The hero section and individual element entrance animations still provide
 * the visual "page arriving" effect.
 */
export const pageVariants = {
  initial: { opacity: 1 },             // new page is immediately visible
  animate: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" as const },
  },
};

/**
 * viewport: once: false → re-animates every time element enters viewport,
 * including when scrolling back up from the bottom.
 */
export const viewport = { once: false, amount: 0.1 } as const;
export const viewportLazy = { once: false, amount: 0.06 } as const;
/** once: true for elements you only want to animate on first appearance (e.g. counters) */
export const viewportOnce = { once: true, amount: 0.1 } as const;

export const tapScale = { scale: 0.97 } as const;

/**
 * Reliable direct-whileInView viewports.
 * once: false → animations replay every time an element enters the viewport,
 * including when scrolling back up.
 * Low amount threshold ensures elements trigger as soon as a tiny sliver
 * enters the viewport.
 */
export const vp     = { once: false, amount: 0.08 } as const;
export const vpCard = { once: false, amount: 0.04 } as const;

/** Shared bezier ease */
export const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
