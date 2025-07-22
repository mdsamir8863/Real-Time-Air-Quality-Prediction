// components/AQIChart.jsx
"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";

Chart.register(ArcElement, Tooltip);

export default function AQIChart({ aqi }) {
  const data = {
    labels: ["AQI", "Remaining"],
    datasets: [
      {
        data: [aqi, 500 - aqi],
        backgroundColor: ["#f97316", "#e5e7eb"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="max-w-xs mx-auto my-8">
      <Doughnut data={data} />
      <p className="text-center mt-2 text-gray-700 font-medium">AQI Level</p>
    </div>
  );
}
