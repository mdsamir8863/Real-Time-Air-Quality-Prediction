// export async function fetchAQI(city) {
//   const res = await fetch(`https://api.api-ninjas.com/v1/airquality?city=${city}`, {
//     headers: {
//       "X-Api-Key": process.env.NEXT_PUBLIC_AQI_API_KEY,
//     },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch AQI data");
//   }

//   return res.json();
// }


export async function fetchAQI(city) {
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  // Step 1: Get coordinates
  const geoRes = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
  );

  if (!geoRes.ok) {
    throw new Error("Failed to fetch city coordinates");
  }

  const geoData = await geoRes.json();

  // ❌ FIX: Handle case where city is not found
  if (!geoData || geoData.length === 0) {
    throw new Error("City not found");
  }

  const { lat, lon } = geoData[0];

  // Step 2: Get AQI data
  const aqiRes = await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
  );

  if (!aqiRes.ok) {
    throw new Error("Failed to fetch AQI data");
  }

  const aqiData = await aqiRes.json();
  const result = aqiData.list[0];

  // Step 3: Return in the format your UI expects
  return {
    overall_aqi: result.main.aqi, // 1 (Good) to 5 (Hazardous)
    pollutants: {
      pm2_5: result.components.pm2_5,
      pm10: result.components.pm10,
      co: result.components.co,
      no2: result.components.no2,
      o3: result.components.o3,
      so2: result.components.so2,
    },
    timestamp: result.dt,
  };
}
