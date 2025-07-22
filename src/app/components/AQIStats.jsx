import { FaSmog, FaCloud, FaWind, FaLeaf } from "react-icons/fa";

export default function AQIStats({ components }) {
  const stats = [
    {
      name: "PM2.5",
      value: components["PM2.5"]?.concentration,
      icon: <FaSmog className="text-xl text-gray-600" />,
    },
    {
      name: "PM10",
      value: components["PM10"]?.concentration,
      icon: <FaCloud className="text-xl text-gray-600" />,
    },
    {
      name: "O₃",
      value: components["O3"]?.concentration,
      icon: <FaLeaf className="text-xl text-gray-600" />,
    },
    {
      name: "CO",
      value: components["CO"]?.concentration,
      icon: <FaWind className="text-xl text-gray-600" />,
    },
    {
      name: "NO₂",
      value: components["NO2"]?.concentration,
      icon: <FaSmog className="text-xl text-gray-600" />,
    },
    {
      name: "SO₂",
      value: components["SO2"]?.concentration,
      icon: <FaCloud className="text-xl text-gray-600" />,
    },
  ];

  return (
    <section className="mt-10">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Air Pollutants</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              {item.icon}
              <span className="text-gray-700 font-medium">{item.name}</span>
            </div>
            <span className="text-lg font-semibold text-blue-600">
              {item.value !== undefined ? item.value : "N/A"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
