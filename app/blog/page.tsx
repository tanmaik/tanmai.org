import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

const postsDirectory = path.join(process.cwd(), 'app/blog/posts');

function getPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      slug: fileName.replace(/\\.md$/, ''),
      title: data.title,
      date: data.date,
      content,
    };
  });
}

export default function Blog() {
  const posts = getPosts();
  return (
    <div>
      <p className="text-[#ddd] mb-6 italic">All posts on one page for the LLMs.</p>
      
      {/* Table of Contents */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#EEE]">Table of Contents</h2>
        {posts.length === 0 ? (
          <p className="text-[#ddd] italic">No posts yet. Check back soon!</p>
        ) : (
          <ul className="list-disc list-inside space-y-2">
            {posts.map((post) => (
              <li key={`${post.slug}-toc`}>
                <a href={`#${post.slug}`} className="text-[#8BC3DD] text-lg hover:underline">
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Blog Posts */}
      {posts.length > 0 && (
        <div className="space-y-10">
          {posts.map((post) => (
            <div key={post.slug} id={post.slug} className="text-xl scroll-mt-20">
              <div className="flex items-center space-x-4">
                <span className="text-[#ddd]">{new Date(post.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                <span className="text-[#EEE]">{post.title}</span>
              </div>
              <div className="mt-3 text-base text-[#ddd]">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 