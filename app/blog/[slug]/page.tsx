import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "../../lib/blog";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Post({ params }: PageProps) {
  const { content, title, date } = getPostBySlug(params.slug);

  return (
    <div className="flex justify-center py-10">
      <div className="w-full max-w-xl">
        <Link href="/blog" className="text-blue-600 hover:underline mb-4 block">
          ← Back to all posts
        </Link>
        <article className="prose prose-slate max-w-none">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <div className="text-gray-500 mb-8">{date}</div>
          <MDXRemote source={content} />
        </article>
      </div>
    </div>
  );
}
