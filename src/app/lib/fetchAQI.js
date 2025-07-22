export async function fetchAQI(city) {
  const res = await fetch(`https://api.api-ninjas.com/v1/airquality?city=${city}`, {
    headers: {
      "X-Api-Key": process.env.NEXT_PUBLIC_AQI_API_KEY,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch AQI data");
  }

  return res.json();
}
