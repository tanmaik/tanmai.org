import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';

const postsDirectory = path.join(process.cwd(), 'app/blog/posts');

// Generate static params for all posts
export function generateStaticParams() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(postsDirectory, `${slug}.md`);
  
  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    notFound();
  }
  
  // Read and parse the file
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const isWip = data.status === 'wip';
  
  // Format the date for display
  const [year, month, day] = data.date.split('-');
  const dateObj = new Date(Number(year), Number(month) - 1, Number(day));
  const formattedDate = `${day.padStart(2, '0')} ${dateObj.toLocaleString('default', { month: 'short' })}, ${year}`;
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#EEE] mb-2">{data.title}</h1>
      <div className="text-sm text-[#aaa] mb-6">{formattedDate}</div>
      
      {isWip ? (
        <div className="bg-yellow-900/20 border border-yellow-600/50 p-4 rounded-md text-[#ddd]">
          <p className="text-yellow-400 mb-2">🚧 This article is currently a work-in-progress.</p>
          <p>
            If you'd like early access to my thoughts or have feedback, feel free to{' '}
            <a href="mailto:tanmai.kalisipudi@gmail.com" className="text-[#8BC3DD] hover:underline">contact me</a>.
          </p>
        </div>
      ) : (
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown
            components={{
              h1: (props) => <h1 className="text-2xl font-bold text-[#EEE] my-4" {...props} />,
              h2: (props) => <h2 className="text-xl font-bold text-[#EEE] my-4" {...props} />,
              h3: (props) => <h3 className="text-lg font-bold text-[#EEE] my-3" {...props} />,
              p: (props) => <p className="text-[#ddd] my-4 leading-relaxed" {...props} />,
              a: (props) => <a className="text-[#8BC3DD] hover:underline" {...props} />,
              ul: (props) => <ul className="list-disc list-inside my-4" {...props} />,
              ol: (props) => <ol className="list-decimal list-inside my-4" {...props} />,
              li: (props) => <li className="text-[#ddd] my-1" {...props} />,
              blockquote: (props) => <blockquote className="border-l-4 border-[#345] pl-4 py-1 my-4 italic" {...props} />,
              code: (props) => <code className="bg-[#001822] px-1 py-0.5 rounded text-[0.9em]" {...props} />,
              pre: (props) => <pre className="bg-[#001822] p-4 rounded-md overflow-x-auto my-4" {...props} />
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      )}
      

     
    </div>
  );
} 