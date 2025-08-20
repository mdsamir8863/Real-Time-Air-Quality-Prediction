// src/app/api/aqi/route.js

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");

  const openWeatherKey = process.env.OPENWEATHER_API_KEY;

  // Step 1: Get coordinates of city
  const geoRes = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${openWeatherKey}`
  );

  if (!geoRes.ok) {
    return new Response("Failed to fetch coordinates", { status: 500 });
  }

  const geoData = await geoRes.json();
  if (!geoData.length) {
    return new Response("City not found", { status: 404 });
  }

  const { lat, lon } = geoData[0];

  // Step 2: Fetch AQI
  const aqiRes = await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${openWeatherKey}`
  );

  if (!aqiRes.ok) {
    return new Response("Failed to fetch AQI data", { status: 500 });
  }

  const aqiData = await aqiRes.json();

  const transformed = {
    overall_aqi: aqiData.list[0].main.aqi,
    pm2_5: aqiData.list[0].components.pm2_5,
    pm10: aqiData.list[0].components.pm10,
    co: aqiData.list[0].components.co,
    no2: aqiData.list[0].components.no2,
    o3: aqiData.list[0].components.o3,
    so2: aqiData.list[0].components.so2,
    timestamp: aqiData.list[0].dt,
  };

  return Response.json(transformed);
}
