"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 px-6 bg-darker-blue">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Access Your <span className="gradient-text">Benefits?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join hundreds of citizens who have successfully navigated government
            programs with our help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/90 text-dark-blue px-10 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center space-x-2 group"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 hover:bg-white/20 border border-white/20 px-10 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
