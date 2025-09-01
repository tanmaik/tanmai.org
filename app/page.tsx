import ResumeRequest from "./components/ResumeRequest";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function Home() {
  return (
    <ViewTransition>
      <div className="flex justify-center p-4 pt-16">
        <div className="w-full max-w-lg space-y-8">
          <div className="space-y-2">
            <ViewTransition name="page-title">
              <h1>Tanmai Kalisipudi</h1>
            </ViewTransition>

            <p>CS &amp; Math at UVA&apos;27, TJHSST&apos;23.</p>

            <p>
              Interested in AI, startups, economics, and politics.{" "}
              <ResumeRequest />.
            </p>
          </div>

          <div className="space-y-4">
            <h2>Library</h2>

            <hr className="border-gray-200" />

            <div className="space-y-3">
              <Link href="/neuralese" className="block no-underline">
                <div className="flex justify-between items-center p-2 -mx-2 rounded hover:bg-gray-50 transition-colors cursor-pointer">
                  <h3>Neuralese</h3>
                  <div className="flex items-center gap-4 text-xs opacity-50">
                    <span>AI</span>
                    <span>00/00</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ViewTransition>
  );
}
