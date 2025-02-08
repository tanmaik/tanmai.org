import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col items-end justify-end">
        <Link
          className="underline hover:text-gray-500 transition-colors duration-200"
          href="/blog"
        >
          blog
        </Link>
        <a
          className="underline hover:text-gray-500 transition-colors duration-200 "
          href="mailto:tanmai.kalisipudi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          contact
        </a>
      </div>
      <div className="flex flex-col items-end">
        <a
          className="underline hover:text-gray-500 transition-colors duration-200 group"
          href="https://x.com/nottanmai"
          target="_blank"
          rel="noopener noreferrer"
        >
          x
          <span className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 inline-block transition-transform duration-200">
            ↗
          </span>
        </a>
        <a
          className="underline hover:text-gray-500 transition-colors duration-200 group"
          href="https://github.com/tanmaik"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
          <span className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 inline-block transition-transform duration-200">
            ↗
          </span>
        </a>
        <a
          className="underline hover:text-gray-500 transition-colors duration-200 group"
          href="https://linkedin.com/in/tanmaikalisipudi"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
          <span className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 inline-block transition-transform duration-200">
            ↗
          </span>
        </a>
      </div>
    </div>
  );
}
