import ResumeRequest from "./components/ResumeRequest";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full sm:max-w-lg p-3 space-y-2 text-sm leading-relaxed">
      <h1 className="text-xl sm:text-2xl font-bold">Tanmai Kalisipudi</h1>

      <p>
        CS &amp; Math at UVA&apos;27, TJHSST&apos;23.
      </p>

      <p>
        Interested in AI, startups, economics, and politics. <ResumeRequest />.
      </p>

      <div className="mt-3 space-y-1.5">
        <h2 className="text-lg font-bold">Work</h2>
        <p>
          <Link
            href="/twin"
            className="underline [color:#0000ee] visited:[color:#551a8b]"
          >
            Twin
          </Link>
        </p>
        <p>
          <Link
            href="/for-ai-skeptics"
            className="underline [color:#0000ee] visited:[color:#551a8b]"
          >
            For AI Skeptics
          </Link>
        </p>
      </div>
    </div>
  );
}
