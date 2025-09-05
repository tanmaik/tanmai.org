import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Northern Virginia's Brain Drain Problem",
};

export default function NovaBrainDrainPage() {
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
                Northern Virginia&apos;s Brain Drain Problem
                <span className="ml-2 text-xs bg-black/10 dark:bg-white/10 text-black/60 dark:text-white/60 px-1.5 py-0.5 rounded">
                  DRAFT
                </span>
              </h1>
              <p className="font-normal text-black/50 dark:text-white/65">
                00/00
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
