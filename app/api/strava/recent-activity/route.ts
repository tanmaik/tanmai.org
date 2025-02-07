export async function GET() {
  const client_id = process.env.STRAVA_CLIENT_ID!;
  const client_secret = process.env.STRAVA_CLIENT_SECRET!;
  const refresh_token = process.env.STRAVA_REFRESH_TOKEN!;

  const tokenResponse = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id,
      client_secret,
      refresh_token,
      grant_type: 'refresh_token',
    }),
  });

  const tokenData = await tokenResponse.json();
  const access_token = tokenData.access_token;

  // Now use the new access token to fetch your recent activities
  const activitiesResponse = await fetch(
    'https://www.strava.com/api/v3/athlete/activities?per_page=1',
    {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      },
    }
  );

  const activitiesData = await activitiesResponse.json();
  return new Response(JSON.stringify(activitiesData[0]), {
    headers: { "Content-Type": "application/json" },
  });
} 