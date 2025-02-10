// app/api/wakatime/route.ts

export async function GET() {
  const last_7_days = await fetch(
    "https://wakatime.com/share/@8e737674-8b4f-4aec-9538-3123992bc9f9/887952c2-2e2e-4606-97c3-fb954b1b52bf.json"
  );
  const top_languages = await fetch(
    "https://wakatime.com/share/@8e737674-8b4f-4aec-9538-3123992bc9f9/1195d25a-ecbc-4ff5-8eb3-772817da06e1.json"
  );

  const last_7_days_data = await last_7_days.json();
  const top_languages_data = await top_languages.json();

  return new Response(
    JSON.stringify({
      last_7_days: last_7_days_data,
      top_languages: top_languages_data,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
