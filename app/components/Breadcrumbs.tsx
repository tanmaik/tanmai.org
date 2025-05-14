"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumbs() {
  const pathname = usePathname() || '';
  const segments = pathname.split('/').filter(Boolean);

  const isRoot = segments.length === 0;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 px-4 py-2">
      <div className="max-w-[42rem]  flex items-center text-sm gap-2">
        <Link
          href="/"
          className={isRoot ? undefined : "text-blue-600 underline"}
        >
          Home
        </Link>
        {segments.map((segment, index) => {
          const href = '/' + segments.slice(0, index + 1).join('/');
          const label = decodeURIComponent(segment).replace(/-/g, ' ');
          const display = label.charAt(0).toUpperCase() + label.slice(1);
          const isLast = index === segments.length - 1;
          return (
            <span key={href} className="flex items-center gap-1">
              <span className="text-gray-400">/</span>
              <span>{display}</span>
            </span>
          );
        })}
      </div>
    </nav>
  );
} 