"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumbs() {
  const pathname = usePathname() || '';
  const segments = pathname.split('/').filter(Boolean);

  const isRoot = segments.length === 0;

  return (
    <nav aria-label="Breadcrumb">
      <div className="flex items-center text-sm gap-1">
        <Link
          href="/"
          className={`hover:text-blue-800 transition-colors ${isRoot ? 'font-medium' : 'text-blue-600'}`}
        >
          home
        </Link>
        {segments.map((segment, index) => {
          const href = '/' + segments.slice(0, index + 1).join('/');
          const label = decodeURIComponent(segment).replace(/-/g, ' ');
          const isLast = index === segments.length - 1;
          
          return (
            <span key={href} className="flex items-center gap-1">
              <span className="text-gray-400">/</span>
              {isLast ? (
                <span className="font-medium">{label}</span>
              ) : (
                <Link 
                  href={href}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {label}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </nav>
  );
} 