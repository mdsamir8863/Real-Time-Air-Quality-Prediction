import { FaCity, FaClock } from "react-icons/fa";

const getAQIStyle = (aqi) => {
  if (aqi <= 50) return { label: "Good", bg: "bg-green-500", text: "text-white" };
  if (aqi <= 100) return { label: "Moderate", bg: "bg-yellow-400", text: "text-black" };
  if (aqi <= 150) return { label: "Unhealthy for Sensitive Groups", bg: "bg-orange-400", text: "text-white" };
  if (aqi <= 200) return { label: "Unhealthy", bg: "bg-red-500", text: "text-white" };
  if (aqi <= 300) return { label: "Very Unhealthy", bg: "bg-purple-700", text: "text-white" };
  return { label: "Hazardous", bg: "bg-rose-900", text: "text-white" };
};

export default function AQIOverview({ city, aqi, category, timestamp }) {
  const { bg, text } = getAQIStyle(aqi);

  return (
    <div className={`rounded-xl shadow-lg p-6 mb-8 ${bg} ${text}`}>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <FaCity /> {city.charAt(0).toUpperCase() + city.slice(1)}
          </h2>
          <p className="text-sm mt-1 flex items-center gap-2">
            <FaClock /> Last updated: {timestamp}
          </p>
        </div>

        <div className="text-center">
          <p className="text-lg">Overall AQI</p>
          <h3 className="text-5xl font-bold">{aqi}</h3>
          <p className="text-md mt-2 italic">{category}</p>
        </div>
      </div>
    </div>
  );
}












// "use client";
// import { FaCity } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Card } from "./ui/card";

// export default function AQIOverview({ city, aqi, category, timestamp }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Card className="p-6 bg-gradient-to-r from-green-100 to-yellow-100 rounded-2xl shadow">
//         <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
//           <FaCity /> {city}
//         </h2>
//         <p className="text-lg mt-2">AQI: <strong>{aqi}</strong> ({category})</p>
//         <p className="text-sm text-gray-500">Last updated: {new Date(timestamp).toLocaleString()}</p>
//       </Card>
//     </motion.div>
//   );
// }



