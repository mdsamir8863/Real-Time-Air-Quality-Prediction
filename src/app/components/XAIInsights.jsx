"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { Card } from "./ui/card";

export default function XAIInsights({ reasons }) {
  // Dummy chart data for each reason (you can map real weights if available)
  const chartData = reasons.map((reason, index) => ({
    name: reason,
    impact: Math.floor(Math.random() * 100) + 20, // Dummy impact value
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 mt-8 rounded-2xl shadow bg-gradient-to-br from-purple-50 to-indigo-100">
        <h3 className="text-xl font-semibold mb-4 text-indigo-800">🔍 XAI Insights</h3>
        <p className="mb-6 text-gray-700">Here are key contributing factors to current air quality:</p>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="impact" fill="#6366F1" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </motion.div>
  );
}
