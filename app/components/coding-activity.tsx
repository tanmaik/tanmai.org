"use client";

import { useEffect, useState } from "react";

interface TimeData {
  hours: number;
  minutes: number;
  text: string;
}

interface WakaTimeData {
  last_7_days: {
    data: Array<{
      grand_total: {
        hours: number;
        minutes: number;
        text: string;
      };
    }>;
  };
}

export default function CodingActivity() {
  const [data, setData] = useState<WakaTimeData | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/wakatime");
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 300000); // Refresh every 5 minutes

    return () => clearInterval(interval);
  }, []);

  if (error) return <div>Error loading WakaTime data.</div>;
  if (!data)
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

  // Get today's coding time (last item in the array is the most recent)
  const todayData = data.last_7_days.data[data.last_7_days.data.length - 1];

  // Calculate weekly total
  const weeklyTotal = data.last_7_days.data.reduce(
    (acc, day) => acc + day.grand_total.total_seconds,
    0
  );
  const weeklyHours = Math.floor(weeklyTotal / 3600);
  const weeklyMinutes = Math.floor((weeklyTotal % 3600) / 60);

  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-500">coding today</div>
          <div className="font-medium">
            {todayData.grand_total.hours}h {todayData.grand_total.minutes}m
          </div>
          <div className="text-sm text-gray-500">
            {weeklyHours}h {weeklyMinutes}m this week
          </div>
        </div>
      </div>
    </div>
  );
}
