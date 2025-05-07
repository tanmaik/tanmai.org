import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogClient from './BlogClient';

const postsDirectory = path.join(process.cwd(), 'app/blog/posts');

function getPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: fileName.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
      status: data.status || 'published',
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function Blog() {
  const posts = getPosts();
  return <BlogClient posts={posts} />;
}