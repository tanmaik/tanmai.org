import ResumeRequest from "./components/ResumeRequest";
import { posts } from "./data/posts";
import Link from "next/link";

export default function Home() {
  const sortedPosts = [...posts].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  return (
    <div className="w-full sm:max-w-lg p-3 space-y-2 text-sm leading-relaxed">
      <h1 className="text-xl sm:text-2xl font-bold">Tanmai Kalisipudi</h1>

      <p>
        CS &amp; Math at{" "}
        <a
          href="https://www.virginia.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline [color:#0000ee] visited:[color:#551a8b]"
        >
          UVA&apos;27
        </a>
        ,{" "}
        <a
          href="https://tjhsst.fcps.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline [color:#0000ee] visited:[color:#551a8b]"
        >
          TJHSST&apos;23
        </a>
        .
      </p>

      <p>
        Interested in AI, startups, economics, and politics. <ResumeRequest />.
      </p>

      <div className="mt-3 space-y-1.5">
        <h2 className="text-lg font-bold">Writing</h2>
        {sortedPosts.map((post) => (
          <p key={post.id}>
            <Link
              href={`/writing/${post.slug}`}
              className="underline [color:#0000ee] visited:[color:#551a8b]"
            >
              {post.title}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
}
