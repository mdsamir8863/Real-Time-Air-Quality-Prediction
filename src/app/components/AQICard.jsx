import { FaHeartbeat } from "react-icons/fa";

function getAQICategory(aqi) {
  if (aqi <= 50) return { label: "Good", color: "bg-green-500" };
  if (aqi <= 100) return { label: "Moderate", color: "bg-yellow-400" };
  if (aqi <= 150) return { label: "Unhealthy for Sensitive Groups", color: "bg-orange-400" };
  if (aqi <= 200) return { label: "Unhealthy", color: "bg-red-500" };
  if (aqi <= 300) return { label: "Very Unhealthy", color: "bg-purple-600" };
  return { label: "Hazardous", color: "bg-maroon-700" };
}

export default function AQICard({ aqi }) {
  const { label, color } = getAQICategory(aqi);

  return (
    <div className={`rounded-xl p-6 text-white shadow-lg ${color}`}>
      <div className="flex items-center space-x-4">
        <FaHeartbeat className="text-4xl" />
        <div>
          <h2 className="text-xl font-semibold">AQI: {aqi}</h2>
          <p className="text-sm">{label}</p>
        </div>
      </div>
    </div>
  );
}
