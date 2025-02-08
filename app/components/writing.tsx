import Link from "next/link";
import { getLatestPosts } from "../lib/blog";

export default function Writing() {
  const latestPosts = getLatestPosts(3);
  return (
    <div className="mt-8">
      <div className="flex justify-between items-end">
        <h1 className="text-xl font-semibold">recent posts</h1>
        <Link
          href="/blog"
          className="underline hover:text-gray-500 transition-colors duration-200"
        >
          view all
        </Link>
      </div>

      <hr className="my-3" />
      <div className="flex flex-col gap-1">
        {latestPosts.map((post) => (
          <div key={post.slug} className="flex justify-between items-center">
            <Link
              href={`/blog/${post.slug}`}
              className="underline hover:text-gray-500 transition-colors duration-200"
            >
              {post.title}
            </Link>
            <p className="text-gray-500">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
