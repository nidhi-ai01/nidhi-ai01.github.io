import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scale = {
  hidden: {
    opacity: 0,
    scale: .95,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};