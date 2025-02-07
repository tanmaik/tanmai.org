import Link from "next/link";
import Socials from "./components/socials";
import { getLatestPosts } from "./lib/blog";

export default function Home() {
  const latestPosts = getLatestPosts(3);

  return (
    <>
      <div className="mt-10">
        <p className="font-bold text-2xl">hi, i&apos;m tanmai</p>
        <Socials />
      </div>
      <p className="mt-4">
        <span className="font-bold">currently</span>, im a cs+math major at the
        university of virginia. i am interested in ai, startups, economics, and
        politics.
      </p>

      <div className="mt-8">
        <h2 className="font-semibold text-lg">writing</h2>
        <div className="">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block text-blue-700 underline"
            >
              {post.title}
            </Link>
          ))}
        </div>
        <Link href="/blog" className="">
          view all posts →
        </Link>
      </div>
    </>
  );
}
