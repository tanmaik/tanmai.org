import { type Metadata } from "next";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

export const metadata: Metadata = {
  title: "Dead College Theory",
};

export default function DeadCollegeTheoryPage() {
  return (
    <ViewTransition>
      <main>
        <div className="maincontent">
          <h1>Dead College Theory</h1>
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