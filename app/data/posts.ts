export interface BlogPost {
  id: string;
  title: string;
  date: Date;
  slug: string;
}

export const posts: BlogPost[] = [
  {
    id: "1",
    title: "Hello World",
    date: new Date("2025-08-01"),
    slug: "hello-world",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}