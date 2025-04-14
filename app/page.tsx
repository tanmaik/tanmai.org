import Link from "next/link";
import { getAllBlogPosts } from "./thoughts/posts";
import { formatDistanceToNow } from "date-fns";

export default function Home() {
  const blogPosts = getAllBlogPosts();

  return (
    <div className="leading-relaxed m-0 p-0">
      <div className="w-full max-w-2xl mx-auto p-5 pt-10">
        <h1 className="text-4xl font-bold text-center mb-4">
          Tanmai Kalisipudi
        </h1>

        <div className="mb-6">
          <p className="">
            I&apos;m currently a CS+math at The University of Virginia. I&apos;m
            very interested in AI and the future of work. For more about my
            work:{" "}
            <a
              className="text-blue-600 underline"
              target="_blank"
              href="https://github.com/tanmaik"
            >
              GitHub
            </a>
            ,{" "}
            <a
              className="text-blue-600 underline"
              target="_blank"
              href="https://www.linkedin.com/in/tanmaikalisipudi"
            >
              LinkedIn
            </a>
            ,{" "}
            <a
              className="text-blue-600 underline"
              target="_blank"
              href="mailto:tanmai.kalisipudi@gmail.com"
            >
              email
            </a>
            , and my{" "}
            <a
              className="text-blue-600 underline"
              target="_blank"
              href="https://drive.google.com/file/d/1yfiycfLNzf8jikumsP1ys43ga24byUye/view?usp=sharing"
            >
              resume
            </a>
            .
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-2">Thoughts</h2>
        <div className="space-y-4">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/thoughts/${post.slug}`}>
              <div className="flex gap-2">
                <h3 className="underline text-blue-600">{post.title}</h3>
                <p>
                  {formatDistanceToNow(new Date(post.date), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
