"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Artist {
  name: string;
}

interface Track {
  id: string;
  name: string;
  artists: Artist[];
  album: {
    images: { url: string }[];
  };
}

interface SpotifyData {
  items: {
    track: Track;
  }[];
}

export default function RecentlyPlayed() {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/spotify/recently-played");
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);

    return () => clearInterval(interval);
  }, []);

  if (error) return <div>Error loading Spotify data.</div>;
  if (!data || data.items.length === 0)
    return (
      <div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="w-32 h-4 bg-gray-200 rounded animate-pulse" />
            <div className="w-48 h-5 bg-gray-200 rounded animate-pulse" />
            <div className="w-40 h-4 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
    );

  const recentTrack = data.items[0].track;

  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Image
            src={
              recentTrack.album.images[1]?.url ||
              recentTrack.album.images[0]?.url
            }
            alt={recentTrack.name}
            width={48}
            height={48}
            className="rounded-full animate-spin-slow"
            style={{ animationDuration: "4s" }}
          />
        </div>
        <div>
          <div className="text-sm text-gray-500">Currently listening to</div>
          <div className="font-medium">{recentTrack.name}</div>
          <div className="text-sm text-gray-500">
            {recentTrack.artists.map((artist) => artist.name).join(", ")}
          </div>
        </div>
      </div>
    </div>
  );
}
