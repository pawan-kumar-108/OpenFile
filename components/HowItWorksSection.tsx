"use client";

import { motion } from "framer-motion";
import { TextEffect } from "./TextEffect";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-darker-blue">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <TextEffect
            preset="fade-in-blur"
            per="word"
            as="h2"
            className="text-4xl md:text-5xl font-bold mb-6"
            delay={0}
            speedReveal={1.2}
          >
            How It Works
          </TextEffect>
          <TextEffect
            preset="fade-in-blur"
            per="word"
            as="p"
            className="text-xl text-gray-300"
            delay={0.1}
            speedReveal={1.5}
          >
            Simple, transparent, and effective
          </TextEffect>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, x: 4 }}
              className="flex flex-col md:flex-row items-start gap-8"
            >
              <div className="stat-card p-8 rounded-2xl flex-1 w-full">
                <div className="flex items-center space-x-4 mb-4">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                    className="bg-primary text-dark-blue w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0"
                  >
                    {step.id}
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.25, duration: 0.4 }}
                    className="text-2xl font-bold"
                  >
                    {step.title}
                  </motion.h3>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                  className="text-gray-400 md:ml-16"
                >
                  {step.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
