import Link from "next/link";
import Socials from "./components/socials";
import { getLatestPosts } from "./lib/blog";

export default function Home() {
  const latestPosts = getLatestPosts(3);

  return (
    <div className="flex justify-center py-10">
      <div className="w-full max-w-xl">
        <div className="flex flex-col items-center pb-4 border-b">
          <p className="font-semibold">tanmai kalisipudi</p>
          <Socials />
        </div>
        <p className="mt-2">
          I&apos;m a cs+math major at the university of virginia.
        </p>

        <div className="mt-8">
          <h2 className="font-semibold">Thoughts</h2>
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
          <Link
            href="/blog"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            View all posts →
          </Link>
        </div>
      </div>
    </div>
  );
}
