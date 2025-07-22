"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import AQIOverview from "@/app/components/AQIOverview";
import AQIStats from "@/app/components/AQIStats";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import AQIChart from "@/app/components/AQIChart";
import HealthAdvisory from "@/app/components/HealthAdvisory";
import NotFound from "./not-found";

export default function CityAQIPage() {
  const { city } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAQI = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.api-ninjas.com/v1/airquality?city=${city}`,
        {
          headers: {
            "X-Api-Key": process.env.NEXT_PUBLIC_API_NINJAS_KEY,
          },
        }
      );

      if (!res.ok) throw new Error("Failed to fetch AQI");

      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch AQI data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) fetchAQI();
  }, [city]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-80">
        <FaSpinner className="animate-spin text-3xl text-blue-500" />
      </div>
    );
  }

  if (!data || !data.overall_aqi) {
    notFound();
  }

  const aqi = data.overall_aqi;
  const category =
    aqi <= 50
      ? "Good"
      : aqi <= 100
      ? "Moderate"
      : aqi <= 150
      ? "Unhealthy for Sensitive Groups"
      : aqi <= 200
      ? "Unhealthy"
      : aqi <= 300
      ? "Very Unhealthy"
      : "Hazardous";

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <AQIOverview
        city={city}
        aqi={aqi}
        category={category}
        timestamp={new Date().toLocaleString()}
      />
      <AQIStats components={data} />

      <div className="w-full flex flex-col items-center md:flex-row justify-between">
        <AQIChart aqi={aqi} />
        <HealthAdvisory category={category} />
      </div>
    </main>
  );
}
