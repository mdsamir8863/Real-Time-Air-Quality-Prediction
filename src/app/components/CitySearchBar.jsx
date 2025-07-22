"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch, FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";
import Loading from "../aqi/[city]/loading";

const popularCities = [
  "Delhi", "Mumbai", "Bangalore", "Kolkata", "Chennai", "Hyderabad",
  "Pune", "Ahmedabad", "Patna", "Jaipur", "Rampur", "Darbhanga"
];

export default function CitySearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      toast.error("Please enter a city name");
      return;
    }

    router.push(`/aqi/${query.trim()}`);
    setQuery("");
  };

  const suggestions = popularCities.filter(city =>
    city.toLowerCase().startsWith(query.toLowerCase()) && query !== ""
  );

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <input
          type="text"
          placeholder="Search city (e.g. Delhi)..."
          className="w-full p-3 pr-10 border rounded-full shadow-sm focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="absolute right-3 text-gray-500">
         {Loading ? <FaSpinner className="animate-spin" /> : <FaSearch />}
        </button>
      </form>

      {/* Autocomplete suggestions */}
      {suggestions.length > 0 && (
        <ul className="mt-2 bg-white border rounded shadow-md absolute w-[90%] md:w-[50%] z-10">
          {suggestions.map((city) => (
            <li
              key={city}
              className="px-4 py-2 w-full cursor-pointer hover:bg-gray-100"
              onClick={() => {
                router.push(`/aqi/${city}`);
                setQuery("");
              }}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
