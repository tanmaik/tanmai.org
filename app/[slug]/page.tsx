import { getBlogPostBySlug, getAllBlogPosts } from "../../lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const BlogPostComponent = post.component;

  return (
    <div className="leading-relaxed m-0 p-0">
      <div className="w-full max-w-2xl mx-auto p-5 pt-10">
        <Link href="/" className="inline-block mb-2 text-blue-600 underline">
          ← Back Home
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="mt-2">
            {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
          </p>
        </div>

        <BlogPostComponent />
      </div>
    </div>
  );
}
