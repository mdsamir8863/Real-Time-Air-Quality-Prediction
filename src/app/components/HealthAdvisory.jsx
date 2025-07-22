// components/HealthAdvisory.jsx
"use client";
import { FaSmile, FaMeh, FaFrown, FaSkull } from "react-icons/fa";

export default function HealthAdvisory({ category }) {
  const advisoryData = {
    Good: {
      icon: <FaSmile className="text-green-600 text-2xl" />,
      emoji: "😊",
      bg: "bg-green-100",
      message:
        "Air quality is excellent. No health risks. You can enjoy outdoor activities freely!",
    },
    Moderate: {
      icon: <FaMeh className="text-yellow-600 text-2xl" />,
      emoji: "😐",
      bg: "bg-yellow-100",
      message:
        "Air quality is acceptable. People with sensitivities should limit intense outdoor activity.",
    },
    "Unhealthy for Sensitive Groups": {
      icon: <FaMeh className="text-orange-500 text-2xl" />,
      emoji: "😷",
      bg: "bg-orange-100",
      message:
        "Sensitive groups (like children, elderly, or people with asthma) should reduce prolonged or heavy outdoor exertion.",
    },
    Unhealthy: {
      icon: <FaFrown className="text-red-600 text-2xl" />,
      emoji: "🤒",
      bg: "bg-red-100",
      message:
        "Everyone may experience health effects. Reduce outdoor activity. Sensitive individuals should stay indoors.",
    },
    "Very Unhealthy": {
      icon: <FaFrown className="text-purple-600 text-2xl" />,
      emoji: "🤢",
      bg: "bg-purple-100",
      message:
        "Serious health effects possible for everyone. Avoid going outside and keep windows closed.",
    },
    Hazardous: {
      icon: <FaSkull className="text-black text-2xl" />,
      emoji: "☠️",
      bg: "bg-black text-white",
      message:
        "Emergency conditions. Everyone is at risk. Avoid all outdoor exposure. Stay indoors and use air purifiers or N95 masks.",
    },
  };

  const { icon, emoji, bg, message } = advisoryData[category] || {};

  return (
    <div className={`mt-10 p-6 rounded-xl shadow-sm ${bg}`}>
      <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
        {icon} Health Advisory {emoji}
      </h3>
      <p className="leading-relaxed">{message}</p>
    </div>
  );
}
