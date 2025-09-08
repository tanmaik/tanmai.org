import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Neuralese",
};

export default function NeuralePage() {
  return (
    <ViewTransition>
      <div className="container">
        <div className="space-y">
          <Link href="/">Home</Link>

          <div>
            <h1>Neuralese</h1>
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
