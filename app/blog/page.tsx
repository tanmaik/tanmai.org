import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

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
  
  return (
    <div className="flex flex-col">
      {/* Blog title removed as per instructions */}
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Search..."
          className="px-2 py-1 w-44 rounded bg-[#01242E] border border-[#345] text-[#ddd]"
        />
      </div>
      
      {posts.length === 0 ? (
        <p className="text-[#555] italic py-2">No posts available yet.</p>
      ) : (
        <div className="space-y-0">
          {posts.map((post) => {
            const formatDateParts = (dateString: string) => {
              const [year, month, day] = dateString.split('-');
              const dateObj = new Date(Number(year), Number(month) - 1, Number(day));
              const dayStr = String(day).padStart(2, '0');
              const monthStr = dateObj.toLocaleString('default', { month: 'short' });
              return { day: dayStr, month: monthStr, year };
            };
            
            const { day, month, year } = formatDateParts(post.date);
            
            return (
              <div key={post.slug} className="py-1">
                <div className="flex">
                  <div className="w-36 pr-2 text-[#aaa] tabular-nums">
                    {`${day} ${month}, ${year}`}
                  </div>
                  <div>
                    <Link href={`/blog/${post.slug}`} className="text-[#8BC3DD] hover:underline">
                      {post.title}
                      {post.status === 'wip' && (
                        <span className="ml-2 px-2 py-0.5 text-xs rounded bg-yellow-600/20 text-yellow-400 border border-yellow-600/50">
                          WIP
                        </span>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}