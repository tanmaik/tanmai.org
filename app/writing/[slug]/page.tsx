import { notFound } from "next/navigation";
import { getPostBySlug } from "@/app/data/posts";
import dynamic from "next/dynamic";
import Link from "next/link";

const componentMap: Record<string, React.ComponentType> = {
  "hello-world": dynamic(() => import("@/app/components/posts/HelloWorld")),
};

function getRelativeTime(date: Date): string {
  const now = new Date();
  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return "today";
  if (diffDays === 1) return "yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? 's' : ''} ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? 's' : ''} ago`;
  return `${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) > 1 ? 's' : ''} ago`;
}

export default function WritingPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  const PostContent = componentMap[post.slug];
  
  if (!PostContent) {
    notFound();
  }
  
  return (
    <div className="w-full sm:max-w-lg p-2 space-y-2 text-sm leading-[1.375]">
      <Link href="/" className="underline [color:#0000ee] visited:[color:#551a8b]">
        ← Back
      </Link>
      
      <h1 className="text-xl sm:text-2xl font-bold mt-4">{post.title}</h1>
      <p className="text-gray-600">{getRelativeTime(post.date)}</p>
      
      <div className="mt-4">
        <PostContent />
      </div>
    </div>
  );
}