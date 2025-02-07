import Link from "next/link";
import { getAllPosts } from "../lib/blog";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="flex justify-center py-10">
      <div className="w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-8">Blog Posts</h1>
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-xl font-medium">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <p className="text-sm text-gray-500 mt-2">{post.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
