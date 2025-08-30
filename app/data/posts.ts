export interface BlogPost {
  id: string;
  title: string;
  date: Date;
  slug: string;
}

export const posts: BlogPost[] = [];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}