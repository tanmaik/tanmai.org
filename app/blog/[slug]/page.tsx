import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "../../lib/blog";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const components = {};

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { content, title, date } = await getPostBySlug(slug);

  return (
    <>
      <Link
        href="/blog"
        className="underline hover:text-gray-500 transition-colors duration-200 mb-4 block"
      >
        ← Back to all posts
      </Link>
      <article className="prose prose-slate max-w-none">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div className="text-gray-500 mb-8">{date}</div>
        <MDXRemote source={content} components={components} />
      </article>
    </>
  );
}
