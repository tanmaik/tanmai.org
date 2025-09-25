"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center border-b">
      <div className="flex space-x-8 p-4">
        <Link
          href="/"
          className={`font-medium ${
            pathname === "/" ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={`font-medium ${
            pathname === "/projects" ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Projects
        </Link>
      </div>
    </nav>
  );
}