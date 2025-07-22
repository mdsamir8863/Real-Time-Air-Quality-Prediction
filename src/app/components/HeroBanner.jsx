// app/components/HeroBanner.jsx
import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 p-8 rounded-xl text-center shadow-sm">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          🌍 Real-Time Air Quality Monitoring
        </h1>
        <p className="mt-3 text-gray-600">
          Check current AQI, pollutants, and get insights into city-level air
          quality.
        </p>
      </section>
    </motion.div>
  );
}
