"use client";

import { motion } from "framer-motion";
import { TextEffect } from "./TextEffect";
import { StatCard } from "./StatCard";
import { CHALLENGE_STATS } from "@/lib/constants";

export function ChallengeSection() {
  return (
    <section className="py-20 px-6 bg-darker-blue">
      <div className="container mx-auto max-w-5xl">
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
            The Challenge
          </TextEffect>
          <TextEffect
            preset="fade-in-blur"
            per="word"
            as="p"
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            delay={0.1}
            speedReveal={1.5}
          >
            Citizens often struggle with complex government policies, eligibility
            requirements, and bureaucratic processes. This prevents them from
            accessing vital benefits and support they are entitled to, leading to
            frustration and unmet needs.
          </TextEffect>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {CHALLENGE_STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="stat-card p-8 rounded-2xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                  className="text-primary text-5xl font-bold mb-4"
                >
                  {stat.value}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.25, duration: 0.4 }}
                  className="text-xl font-semibold mb-2"
                >
                  {stat.label}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                  className="text-gray-400"
                >
                  {stat.id === "miss-benefits"
                    ? "Of eligible citizens don't claim benefits due to complex processes"
                    : "Time spent navigating bureaucracy for a single benefit application"}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
