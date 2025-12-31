"use client";

import { motion } from "framer-motion";
import { Statistic } from "@/types";
import {
  FileText,
  Users,
  DollarSign,
  AlertCircle,
  Clock,
  TrendingUp,
  Star,
  Zap,
} from "lucide-react";

const iconMap = {
  FileText,
  Users,
  DollarSign,
  AlertCircle,
  Clock,
  TrendingUp,
  Star,
  Zap,
};

interface StatCardProps {
  stat: Statistic;
  animated?: boolean;
  large?: boolean;
}

export function StatCard({ stat, animated = false, large = false }: StatCardProps) {
  const Icon = iconMap[stat.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05, y: -4 }}
      className={`stat-card p-6 rounded-2xl card-hover ${
        animated ? "animate-float" : ""
      }`}
    >
      <div className="flex items-center space-x-4 mb-4">
        {Icon && (
          <motion.div
            className="feature-icon-bg p-4 rounded-xl"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Icon className="w-8 h-8 text-primary" />
          </motion.div>
        )}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className={`${large ? "text-4xl" : "text-2xl"} font-bold`}
        >
          {stat.value}
        </motion.h3>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-gray-400"
      >
        {stat.label}
      </motion.p>
    </motion.div>
  );
}
