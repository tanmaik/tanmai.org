"use client";

import { useEffect, useState } from "react";

interface Language {
  name: string;
  percent: number;
  color: string;
}

interface WakaTimeData {
  top_languages: {
    data: Language[];
  };
}

export default function CodingLanguages() {
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

  const topLanguages = data.top_languages.data.slice(0, 3);
  const [firstLang, ...otherLangs] = topLanguages;

  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-500">top languages</div>
          <div className="font-medium" style={{ color: firstLang.color }}>
            {firstLang.name} ({firstLang.percent.toFixed(1)}%)
          </div>
          <div className="text-sm flex gap-4">
            {otherLangs.map((lang) => (
              <div key={lang.name} style={{ color: lang.color }}>
                {lang.name} ({lang.percent.toFixed(1)}%)
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
