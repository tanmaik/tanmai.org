import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function BitterLessonPage() {
  return (
    <ViewTransition>
      <div className="flex justify-center p-4 pt-16 animate-fade-in">
        <div className="w-full max-w-lg space-y-6">
          <div className="space-y-8">
            <Link
              href="/"
              className="inline-block no-underline text-black/65 hover:text-black/80"
            >
              Home
            </Link>

            <div className="space-y-0">
              <h1 className="font-medium text-black/85">Neuralese</h1>
              <p className="font-normal text-black/50">01/04/25</p>
            </div>
          </div>

          <ViewTransition update="none">
            <article className="space-y-4 font-normal">
              This page is under construction.
            </article>
          </ViewTransition>
        </div>
      </div>
    </ViewTransition>
  );
}
