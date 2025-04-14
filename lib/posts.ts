import { FC } from 'react';
import CollegeAI from '../components/writing/college-ai';

export interface BlogPost {
  id: string;
  title: string;
  component: FC;
  date: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'college-student-ai-age',
    title: 'What to Do as a College Student in the AI Age',
    component: CollegeAI,
    date: '2025-04-14',
    slug: 'college-student-ai-age'
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
} 