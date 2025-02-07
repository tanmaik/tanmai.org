import Link from "next/link";
import { getLatestPosts } from "../lib/blog";

export default function Writing() {
  const latestPosts = getLatestPosts(3);
  return (
    <div className="mt-8">
      <h1 className="text-xl font-semibold">writing</h1>
      <hr className="my-3" />
      <div>
        {latestPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        ))}
      </div>
      <Link href="/blog" className="">
        view all posts →
      </Link>
    </div>
  );
}
