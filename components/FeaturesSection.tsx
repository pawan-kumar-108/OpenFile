"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";
import { TextEffect } from "./TextEffect";
import { FEATURES } from "@/lib/constants";

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <TextEffect
              preset="fade-in-blur"
              per="word"
              as="span"
              delay={0}
              speedReveal={1.2}
            >
              Your AI
            </TextEffect>
            {" "}
            <motion.span
              className="gradient-text inline-block"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Advocate
            </motion.span>
          </h2>
          <TextEffect
            preset="fade-in-blur"
            per="word"
            as="p"
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            delay={0.1}
            speedReveal={1.5}
          >
            Powered by advanced AI, Policy Navigator breaks down barriers between
            citizens and the benefits they deserve.
          </TextEffect>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
