"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { type JSX, useMemo } from "react";

export type TextShimmerProps = {
  children: string | React.ReactNode;
  as?: React.ElementType;
  className?: string;
  duration?: number;
  spread?: number;
};

function TextShimmerComponent({
  children,
  as: Component = "p",
  className,
  duration = 2,
  spread = 2,
}: TextShimmerProps) {
  // Extract text content from ReactNode if needed
  const textContent = typeof children === "string" 
    ? children 
    : React.isValidElement(children) || Array.isArray(children)
    ? String(children)
    : children != null 
    ? String(children)
    : "";

  const dynamicSpread = useMemo(() => {
    return textContent.length * spread;
  }, [textContent, spread]);

  // For framer-motion v11, we'll wrap the component content in a motion.span
  // The Component will be used as a wrapper
  const content = (
    <motion.span
      className={cn(
        "relative inline-block bg-[length:250%_100%,auto] bg-clip-text",
        "text-transparent [--base-color:#a1a1aa] [--base-gradient-color:#000]",
        "[background-repeat:no-repeat,padding-box] [--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]",
        "dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff] dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]",
        className,
      )}
      initial={{ backgroundPosition: "100% center" }}
      animate={{ backgroundPosition: "0% center" }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration,
        ease: "linear",
      }}
      style={
        {
          "--spread": `${dynamicSpread}px`,
          backgroundImage: `var(--bg), linear-gradient(var(--base-color), var(--base-color))`,
        } as React.CSSProperties
      }
    >
      {typeof children === "string" ? children : textContent}
    </motion.span>
  );

  // If Component is not a span, wrap it
  if (Component === "span" || Component === "p" || typeof Component === "string") {
    return content;
  }

  return <Component className={className}>{content}</Component>;
}

export const TextShimmer = React.memo(TextShimmerComponent);

