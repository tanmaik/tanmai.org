import Link from "next/link";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Neuralese",
};

export default function NeuralePage() {
  return (
    <main>
      <div className="maincontent">
        <h1>Neuralese</h1>
        <p>Tanmai Kalisipudi<br />
        00/00</p>

        <p>This page is under construction.</p>

        <p><Link href="/">← Back</Link></p>
      </div>
    </main>
  );
}