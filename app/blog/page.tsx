import Link from "next/link";
import { getAllPosts } from "../lib/blog";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">blog</h1>
        <Link href="/" className="underline">
          <p> home</p>
        </Link>
      </div>
      <hr className="my-3" />
      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block hover:underline"
          >
            <h2 className="font-medium">{post.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{post.date}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
