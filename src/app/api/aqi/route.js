export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");

  const apiKey = process.env.API_NINJAS_KEY; 

  const res = await fetch(`https://api.api-ninjas.com/v1/airquality?city=${city}`, {
    headers: { "X-Api-Key": apiKey },
  });

  if (!res.ok) {
    return new Response("Failed to fetch AQI", { status: 500 });
  }

  const data = await res.json();
  return Response.json(data);
}
