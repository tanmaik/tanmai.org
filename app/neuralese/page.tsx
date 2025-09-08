import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Neuralese",
};

export default function NeuralePage() {
  return (
    <ViewTransition>
      <main>
        <div className="maincontent">
          <h1>Neuralese</h1>
          <p>Tanmai Kalisipudi<br />
          00/00</p>

          <ViewTransition update="none">
            <p>This page is under construction.</p>
          </ViewTransition>

          <p><Link href="/">← Back</Link></p>
        </div>
      </main>
    </ViewTransition>
  );
}