"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TextEffect } from "./TextEffect";
import { StatCard } from "./StatCard";
import { IMPACT_STATS, TESTIMONIALS } from "@/lib/constants";

export function ImpactSection() {
  return (
    <section id="impact" className="py-20 px-6">
      <div className="container mx-auto">
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
            Making Real Impact
          </TextEffect>
          <TextEffect
            preset="fade-in-blur"
            per="word"
            as="p"
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            delay={0.1}
            speedReveal={1.5}
          >
            Every day, we're helping citizens navigate the complex world of
            government benefits
          </TextEffect>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {IMPACT_STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <div className="stat-card p-8 rounded-2xl text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.2, type: "spring", stiffness: 200 }}
                  className="text-primary text-4xl font-bold mb-2"
                >
                  {stat.value}
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.25, duration: 0.4 }}
                  className="text-gray-400"
                >
                  {stat.label}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        {TESTIMONIALS.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="stat-card p-10 rounded-2xl max-w-4xl mx-auto"
          >
            <div className="flex items-start space-x-4">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="bg-primary/20 p-4 rounded-full flex-shrink-0"
              >
                <Quote className="w-8 h-8 text-primary" />
              </motion.div>
              <div>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                  className="text-lg text-gray-300 mb-4 italic"
                >
                  "{testimonial.quote}"
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="font-semibold"
                >
                  {testimonial.author}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                  className="text-sm text-gray-400"
                >
                  {testimonial.role}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
