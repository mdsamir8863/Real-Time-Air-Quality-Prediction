// components/ForecastCard.jsx
export default function ForecastCard({ forecast }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm grid grid-cols-2 sm:grid-cols-3 gap-4">
      {forecast.map((item, index) => (
        <div key={index} className="bg-blue-50 rounded-md p-3 text-center">
          <div className="text-sm font-semibold">{item.hour}</div>
          <div className="text-xl font-bold">{item.AQI}</div>
        </div>
      ))}
    </div>
  );
}
