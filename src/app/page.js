"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import CityCard from "./components/CityCard";
// import SearchBar from "./components/SearchBar";
import CitySearchBar from "./components/CitySearchBar";

const cities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Patna",
  "Hyderabad",
  "Kolkata",
];

export default function HomePage() {
  const [searchCity, setSearchCity] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchCity.trim()) {
      toast.error("Please enter a city name");
      return;
    }

    const city = searchCity.trim().toLowerCase();
    if (!cities.map((c) => c.toLowerCase()).includes(city)) {
      toast.error("City not found in our list");
      return;
    }

    router.push(`/aqi/${city}`);
  };

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-6">
        <HeroBanner />

        {/* 🔍 Search */}
        {/* <SearchBar /> */}
        <div className="mt-6">
          <CitySearchBar />
        </div>

        {/* 📍 City list */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            📍 Select a City
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cities.map((city) => (
              <CityCard key={city} city={city} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
