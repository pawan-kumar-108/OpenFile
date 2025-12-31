"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { StatCard } from "./StatCard";
import { HERO_STATS } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 relative">
      <br /><br />
      <div className="container mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0 }}
          className="flex items-center justify-center mb-6"
        >
          <span className="bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block">
            🎯 Public Good Initiative
          </span>
        </motion.div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 leading-normal">
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="block"
          >
            Navigate Government Benefits
          </motion.span>
          
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block gradient-text glow-text"
          >
            with AI-Powered Clarity
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12"
        >
          Create agent advocates that verify eligibility, interpret complex
          policies, and guide citizens with trust-backed recommendations—ending
          bureaucratic opacity that costs people vital benefits.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-primary hover:bg-primary/90 text-dark-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center space-x-2 group">
            <span>Check Eligibility</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center space-x-2">
            <Play className="w-5 h-5" />
            <span>Watch Demo</span>
          </button>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {HERO_STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <StatCard stat={stat} animated />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}