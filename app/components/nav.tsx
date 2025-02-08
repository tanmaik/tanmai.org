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
          className="group"
          href="https://x.com/nottanmai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="underline hover:text-gray-500 transition-colors duration-200">x</span>
          <span className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 inline-block transition-transform duration-200 hidden sm:inline no-underline">
            ↗
          </span>
        </a>
        <a
          className="group"
          href="https://github.com/tanmaik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="underline hover:text-gray-500 transition-colors duration-200">github</span>
          <span className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 inline-block transition-transform duration-200 hidden sm:inline no-underline">
            ↗
          </span>
        </a>
        <a
          className="group"
          href="https://linkedin.com/in/tanmaikalisipudi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="underline hover:text-gray-500 transition-colors duration-200">linkedin</span>
          <span className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 inline-block transition-transform duration-200 hidden sm:inline no-underline">
            ↗
          </span>
        </a>
      </div>
    </div>
  );
}
