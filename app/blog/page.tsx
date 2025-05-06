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
            {posts.map((post) => {
              // Parse date string as local date components
              const [year, month, day] = post.date.split('-').map(Number);
              const localDate = new Date(year, month - 1, day);
              return (
                <li key={`${post.slug}-toc`}>
                  <a href={`#${post.slug}`} className="text-[#8BC3DD] text-lg hover:underline">
                    {post.title}
                  </a>
                  <span className="text-[#ddd] ml-2 text-sm">
                    ({localDate.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })})
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Blog Posts */}
      {posts.length > 0 && (
        <div className="space-y-10">
          {posts.map((post) => {
            // Parse date string as local date components
            const [year, month, day] = post.date.split('-').map(Number);
            const localDate = new Date(year, month - 1, day);
            return (
              <div key={post.slug} id={post.slug} className="text-xl scroll-mt-20">
                <div className="flex flex-col items-start space-y-1">
                  <span className="text-[#ddd] text-xs">{localDate.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                  <span className="text-[#EEE]">{post.title}</span>
                </div>
                <div className="mt-4 markdown-content">
                  <ReactMarkdown components={{
                    h1: ({node, ...props}) => <h1 className="text-2xl font-bold text-[#EEE] my-4" {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-xl font-bold text-[#EEE] my-3" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-lg font-bold text-[#EEE] my-2" {...props} />,
                    p: ({node, ...props}) => <p className="text-base text-[#ddd] my-2" {...props} />
                  }}>
                    {post.content}
                  </ReactMarkdown>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
} 