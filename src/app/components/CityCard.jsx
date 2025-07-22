"use client";
import { motion } from "framer-motion";
import { FaCity } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function CityCard({ city }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/aqi/${city.toLowerCase()}`);
  };

  return (
    <motion.div
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="cursor-pointer border p-4 rounded-xl shadow hover:shadow-lg transition bg-white hover:bg-gray-50"
    >
      <div className="flex items-center space-x-3">
        <FaCity className="text-blue-600 text-xl" />
        <h3 className="text-lg font-semibold text-gray-800">{city}</h3>
      </div>
    </motion.div>
  );
}
