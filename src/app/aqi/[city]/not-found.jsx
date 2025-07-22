"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      <h1 className="text-3xl font-semibold text-red-600 mb-2">City not found</h1>
      <p className="text-gray-600 mb-4">
        We couldn't retrieve AQI data for this city. Please try another one.
      </p>
      <Link href="/" className="text-blue-600 hover:underline">
        ← Go back to Home
      </Link>
    </main>
  );
}
