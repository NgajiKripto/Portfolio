"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom" | "left" | "right";
  onAnimationComplete?: () => void;
  className?: string;
}

export function BlurText({
  text,
  delay = 0,
  animateBy = "words",
  direction = "top",
  onAnimationComplete,
  className,
}: BlurTextProps) {
  const items = animateBy === "words" ? text.split(" ") : text.split("");

  const getInitialPosition = () => {
    switch (direction) {
      case "top":
        return { y: 20 };
      case "bottom":
        return { y: -20 };
      case "left":
        return { x: 20 };
      case "right":
        return { x: -20 };
      default:
        return { y: 20 };
    }
  };

  const variants = {
    hidden: { filter: "blur(10px)", opacity: 0, ...getInitialPosition() },
    visible: { filter: "blur(0px)", opacity: 1, y: 0, x: 0 },
  };

  return (
    <span className={cn(className)}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            delay: (delay || 0) / 1000 + i * 0.05,
            duration: 0.6,
            ease: "easeOut",
          }}
          onAnimationComplete={
            i === items.length - 1 ? onAnimationComplete : undefined
          }
          className="inline-block"
        >
          {item}
          {animateBy === "words" ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
}