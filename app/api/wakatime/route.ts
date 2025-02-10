// app/api/wakatime/route.ts

export async function GET() {
  const response = await fetch(
    "https://wakatime.com/share/@8e737674-8b4f-4aec-9538-3123992bc9f9/887952c2-2e2e-4606-97c3-fb954b1b52bf.json"
  );

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
