import Link from "next/link";
import Socials from "./components/socials";
import { getLatestPosts } from "./lib/blog";

function ImportantStuff() {
  return (
    <div className="mt-8">
      <h1 className="text-xl font-semibold">important stuff</h1>
      <hr className="mt-4" />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="font-medium mb-2">building</h3>

          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="https://gradsteps.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition-colors duration-200 group underline hover:underline decoration-black/75 hover:decoration-gray-500"
              >
                <p className="">
                  GradSteps
                  <span className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 inline-block transition-transform duration-200">
                    ↗
                  </span>
                </p>
              </a>
              <p className="text-sm">AI undergraduate degree planner</p>
            </li>
            <li>
              <p>Pulitzer</p>
              <p className="text-sm">AI news</p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-2">work</h3>
          <ul className="flex flex-col gap-4">
            <li>
              <p>Software Engineer Intern</p>
              <a
                href="https://lineaje.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline"
              >
                Lineaje
              </a>
            </li>
            <li>
              <p>Intern</p>
              <a
                href="https://cisco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline"
              >
                Cisco
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">learning</h3>
          <p className="mt-2">
            University of Virginia
            <br />
            BS Computer Science & Mathematics
            <br />
            Expected 2025
          </p>
        </div>
      </div>
    </div>
  );
}

function Writing() {
  const latestPosts = getLatestPosts(3);
  return (
    <div className="mt-8">
      <h1 className="text-xl font-semibold">writing</h1>
      <hr className="mt-4" />
      <div className="mt-4">
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
export default function Home() {
  return (
    <div>
      <div className="flex items-end justify-between">
        <p className="font-semibold text-2xl">
          hi, i&apos;m <span className="font-bold">tanmai</span>
        </p>
        <Socials />
      </div>
      <hr className="mt-4" />

      <p className="mt-4">
        <span className="font-bold">currently</span>, im a cs+math major at the
        university of virginia. i am interested in ai, startups, economics, and
        politics.
      </p>

      <ImportantStuff />
      <Writing />
    </div>
  );
}
