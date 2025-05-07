'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  date: string;
  status: string;
}

interface BlogClientProps {
  posts: Post[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPosts = useMemo(
    () =>
      posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm, posts]
  );

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 w-44 rounded bg-[#01242E] border border-[#345] text-[#ddd]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {searchTerm && (
        <p className="text-[#aaa] italic mb-2">Searching for "{searchTerm}"</p>
      )}
      {filteredPosts.length === 0 ? (
        <p className="text-[#555] italic py-2">
          {searchTerm
            ? `No posts matching "${searchTerm}".`
            : 'No posts available yet.'}
        </p>
      ) : (
        <div className="space-y-0">
          {filteredPosts.map((post) => {
            const [year, month, day] = post.date.split('-');
            const dateObj = new Date(
              Number(year),
              Number(month) - 1,
              Number(day)
            );
            const dayStr = String(day).padStart(2, '0');
            const monthStr = dateObj.toLocaleString('default', {
              month: 'short',
            });

            return (
              <div key={post.slug} className="py-1">
                <div className="flex">
                  <div className="w-36 pr-2 text-[#aaa] tabular-nums">
                    {`${dayStr} ${monthStr}, ${year}`}
                  </div>
                  <div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[#8BC3DD] hover:underline"
                    >
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