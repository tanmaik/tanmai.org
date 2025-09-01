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
              <h1 className="font-medium text-black/85">Tanmai Kalisipudi</h1>
            </ViewTransition>

            <p className="font-normal text-black/50 ">
              CS &amp; Math at UVA&apos;27, TJHSST&apos;23.
            </p>

            <p className="font-normal text-black/50">
              Interested in AI, startups, economics, and politics.{" "}
              <ResumeRequest />.
            </p>
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="font-medium text-black/85">Library</h2>

            <hr className="border-gray-200" />

            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 -mx-2 rounded opacity-50 cursor-not-allowed">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-black/40">Neuralese</h3>
                  <span className="text-xs text-black/20 bg-black/5 px-2 py-0.5 rounded">DRAFT</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-xs text-black/20">AI</span>
                  <span className="text-xs text-black/20">00/00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ViewTransition>
  );
}
