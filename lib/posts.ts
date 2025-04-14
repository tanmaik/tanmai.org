import { FC } from 'react';
import Robbers from '../app/components/writing/robbers';

export interface BlogPost {
  id: string;
  title: string;
  component: FC;
  date: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'robbers',
    title: 'Robbers',
    component: Robbers,
    date: '2025-04-14',
    slug: 'robbers'
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
} 