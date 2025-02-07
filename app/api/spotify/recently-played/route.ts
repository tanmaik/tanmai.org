
export async function GET() {
  const client_id = process.env.SPOTIFY_CLIENT_ID!;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN!;

  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(`${client_id}:${client_secret}`).toString('base64'),
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  const tokenData = await tokenResponse.json();
  const access_token = tokenData.access_token;


  const recentlyPlayedResponse = await fetch(
    'https://api.spotify.com/v1/me/player/recently-played?limit=5',
    {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      },
    }
  );

  const recentlyPlayedData = await recentlyPlayedResponse.json();
  return new Response(JSON.stringify(recentlyPlayedData), {
    headers: { "Content-Type": "application/json" },
  });
}
