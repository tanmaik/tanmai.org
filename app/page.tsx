"use client";

import ResumeRequest from "./components/ResumeRequest";
import { posts } from "./data/posts";
import { useState } from "react";
import dynamic from "next/dynamic";

const componentMap: Record<string, any> = {
  "hello-world": dynamic(() => import("./components/posts/HelloWorld")),
};

function getRelativeTime(date: Date): string {
  const now = new Date();
  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return "today";
  if (diffDays === 1) return "yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? 's' : ''} ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? 's' : ''} ago`;
  return `${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) > 1 ? 's' : ''} ago`;
}

export default function Home() {
  const sortedPosts = [...posts].sort((a, b) => b.date.getTime() - a.date.getTime());
  const [expandedPost, setExpandedPost] = useState<string | null>(null);
  return (
    <div className="w-full sm:max-w-lg p-2 space-y-2 text-sm leading-[1.375]">
      <h1 className="text-xl sm:text-2xl font-bold">Tanmai Kalisipudi</h1>

      <p>
        I am a computer science &amp; math student at{" "}
        <a
          href="https://www.virginia.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline [color:#0000ee] visited:[color:#551a8b]"
        >
          The University of Virginia
        </a>
        , expecting to graduate in spring 2027. Previously, I attended{" "}
        <a
          href="https://tjhsst.fcps.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline [color:#0000ee] visited:[color:#551a8b]"
        >
          TJHSST
        </a>
        .
      </p>

      <p>
        My interests include AI, startups, economics, and politics.
      </p>

      <p>
        For my full professional experience, <ResumeRequest />.
      </p>

      <div className="mt-4 space-y-2">
        <h2 className="text-lg font-bold">Writing</h2>
        {sortedPosts.map((post) => {
          const PostContent = componentMap[post.slug];
          const isExpanded = expandedPost === post.id;
          
          return (
            <div key={post.id}>
              <p>
                <button
                  onClick={() => setExpandedPost(isExpanded ? null : post.id)}
                  className="underline [color:#0000ee] visited:[color:#551a8b] text-left cursor-pointer"
                >
                  {post.title} ({getRelativeTime(post.date)}) {isExpanded ? "↑" : "↓"}
                </button>
              </p>
              {isExpanded && PostContent && (
                <div className="ml-4 mt-2">
                  <PostContent />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
