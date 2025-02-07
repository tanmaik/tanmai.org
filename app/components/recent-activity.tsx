"use client";

import { useEffect, useState } from "react";

interface StravaActivity {
  name: string;
  type: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  average_speed: number;
  start_date: string;
}

export default function RecentActivity() {
  const [activity, setActivity] = useState<StravaActivity | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/strava/recent-activity");
        const json = await response.json();
        setActivity(json);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 300000); // Refresh every 5 minutes

    return () => clearInterval(interval);
  }, []);

  if (error) return <div>Error loading Strava data.</div>;
  if (!activity)
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

  // Convert meters to miles
  const miles = (activity.distance * 0.000621371).toFixed(2);

  // Convert seconds to minutes and format time
  const minutes = Math.floor(activity.moving_time / 60);
  const seconds = activity.moving_time % 60;
  const timeStr = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  // Calculate pace (minutes per mile)
  const paceSeconds = activity.moving_time / (activity.distance * 0.000621371);
  const paceMins = Math.floor(paceSeconds / 60);
  const paceSecs = Math.floor(paceSeconds % 60);
  const paceStr = `${paceMins}:${paceSecs.toString().padStart(2, "0")}`;

  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Latest activity</div>
          <div className="font-medium">{activity.name}</div>
          <div className="text-sm text-gray-500">
            {miles} miles • {timeStr} • {paceStr}/mi
          </div>
        </div>
      </div>
    </div>
  );
}
