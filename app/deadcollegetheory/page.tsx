import { type Metadata } from "next";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

export const metadata: Metadata = {
  title: "Dead College Theory",
};

export default function DeadCollegeTheoryPage() {
  return (
    <ViewTransition>
      <div className="container">
        <div className="space-y">
          <Link href="/">Home</Link>

          <div>
            <h1>Dead College Theory</h1>
            <p className="text-muted small-text">00/00</p>
          </div>
        </div>

        <ViewTransition update="none">
          <article>
            This page is under construction.
          </article>
        </ViewTransition>
      </div>
    </ViewTransition>
  );
}
