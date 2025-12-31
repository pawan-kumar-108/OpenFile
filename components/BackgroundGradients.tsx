"use client";

import { motion } from "framer-motion";

export function BackgroundGradients() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large gradient blob - top right */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, rgba(0, 212, 255, 0) 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [100, 200, 50, 100],
          y: [-200, -100, -250, -200],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ x: 100, y: -200 }}
      />

      {/* Medium gradient blob - left side */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 163, 204, 0.12) 0%, rgba(0, 163, 204, 0) 70%)",
          filter: "blur(90px)",
        }}
        animate={{
          x: [-150, -50, -200, -150],
          y: [300, 400, 250, 300],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ x: -150, y: 300 }}
      />

      {/* Small gradient blob - center */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 180, 220, 0.1) 0%, rgba(0, 180, 220, 0) 70%)",
          filter: "blur(70px)",
        }}
        animate={{
          x: [400, 500, 350, 400],
          y: [200, 100, 250, 200],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ x: 400, y: 200 }}
      />

      {/* Extra blob - bottom right */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 200, 255, 0.08) 0%, rgba(0, 200, 255, 0) 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [600, 700, 550, 600],
          y: [600, 700, 550, 600],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ x: 600, y: 600 }}
      />

      {/* Accent blob - top left */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 230, 255, 0.1) 0%, rgba(0, 230, 255, 0) 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [-100, 0, -150, -100],
          y: [100, 50, 150, 100],
          scale: [1, 1.2, 0.85, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ x: -100, y: 100 }}
      />
    </div>
  );
}