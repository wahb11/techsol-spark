/**
 * Shared Framer Motion animation variants
 * Designed to work great on both desktop and mobile:
 *  - Smaller offsets to prevent overflow on small screens
 *  - viewport uses `amount` (fraction visible) instead of pixel margins
 *  - Snappy spring-based transitions
 */

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10 } },
};

export const staggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

/** Horizontal slide — uses reduced x so it doesn't overflow on narrow screens */
export const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/**
 * Standard viewport config — triggers as soon as 8% of element is visible.
 * Works reliably on all screen sizes including small phones.
 */
export const viewport = { once: true, amount: 0.08 } as const;

/** For small cards / grid items where you want a slightly earlier trigger */
export const viewportLazy = { once: true, amount: 0.05 } as const;

/** Shared whileTap for touch feedback on interactive cards */
export const tapScale = { scale: 0.97 } as const;
