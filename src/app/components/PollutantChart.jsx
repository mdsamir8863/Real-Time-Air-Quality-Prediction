import { GiDustCloud } from "react-icons/gi";
import { WiHumidity, WiThermometer } from "react-icons/wi";
import { MdOutlineCo2 } from "react-icons/md";

const pollutantIcons = {
  PM2_5: <GiDustCloud size={24} />,
  PM10: <GiDustCloud size={24} />,
  CO2: <MdOutlineCo2 size={24} />,
  Temperature: <WiThermometer size={24} />,
  Humidity: <WiHumidity size={24} />,
};

export default function PollutantCard({ name, value }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-xl bg-white shadow">
      <div className="flex items-center gap-3">
        {pollutantIcons[name]}
        <span className="font-medium">{name}</span>
      </div>
      <span className="text-gray-700">{value}</span>
    </div>
  );
}
