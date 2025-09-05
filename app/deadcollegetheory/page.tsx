import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function RIPCollegePage() {
  return (
    <ViewTransition>
      <div className="flex justify-center p-4 pt-8 sm:pt-16 animate-fade-in">
        <div className="w-full max-w-lg space-y-6">
          <div className="space-y-8">
            <Link
              href="/"
              className="inline-block no-underline text-black/65 dark:text-white/65 hover:text-black/80 dark:hover:text-white/80"
            >
              Home
            </Link>

            <div className="space-y-0">
              <h1 className="font-medium text-black/85 dark:text-white/95">
                Hollow College
              </h1>
              <p className="font-normal text-black/50 dark:text-white/65">
                01/04/25
              </p>
            </div>
          </div>

          <ViewTransition update="none">
            <article className="space-y-4 font-normal text-black/70 dark:text-white/85">
              This page is under construction.
            </article>
          </ViewTransition>
        </div>
      </div>
    </ViewTransition>
  );
}
