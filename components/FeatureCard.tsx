"use client";

import { motion } from "framer-motion";
import { Feature } from "@/types";
import { FileText, CheckCircle, Search, UserPlus } from "lucide-react";

const iconMap = {
  FileText,
  CheckCircle,
  Search,
  UserPlus,
};

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = iconMap[feature.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="stat-card p-8 rounded-2xl card-hover group"
    >
      <motion.div
        className="feature-icon-bg p-4 rounded-xl w-fit mb-6"
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {Icon && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Icon className="w-10 h-10 text-primary" />
          </motion.div>
        )}
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-2xl font-bold mb-4"
      >
        {feature.title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-gray-400"
      >
        {feature.description}
      </motion.p>
    </motion.div>
  );
}
