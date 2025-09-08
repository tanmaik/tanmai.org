import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dead College Theory",
};

export default function DeadCollegeTheoryPage() {
  return (
    <main>
      <div className="maincontent">
        <h1>Dead College Theory</h1>
        <p>Tanmai Kalisipudi<br />
        00/00</p>

        <p>This page is under construction.</p>

        <p><Link href="/">← Back</Link></p>
      </div>
    </main>
  );
}