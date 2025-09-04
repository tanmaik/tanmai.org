import { unstable_ViewTransition as ViewTransition } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <ViewTransition>
      <div className="flex justify-center p-4 pt-16 animate-fade-in">
        <div className="w-full max-w-lg space-y-8">
          <div className="space-y-2">
            <ViewTransition name="page-title">
              <h1 className="font-medium text-black/85">Tanmai Kalisipudi</h1>
            </ViewTransition>

            <p className="font-normal text-black/70">
              I&apos;m currently a third year studying CS and Math @ UVA.
              Previously, I&apos;ve worked at{" "}
              <a
                href="https://cisco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 underline transition-colors hover:text-black/80"
              >
                Cisco
              </a>
              ,{" "}
              <a
                href="https://lineaje.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 underline transition-colors hover:text-black/80"
              >
                Lineaje
              </a>
              , and{" "}
              <a
                href="https://suitable.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 underline transition-colors hover:text-black/80"
              >
                Suitable
              </a>
              , founded{" "}
              <a
                href="https://gradsteps.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 underline transition-colors hover:text-black/80"
              >
                GradSteps
              </a>
              , and graduated from TJHSST.
            </p>

            <p className="font-normal text-black/70">
              I&apos;m particularly interested in artificial intelligence,
              startups, economics, and politics.
            </p>

            <p className="font-normal text-black/70">
              <a
                href="mailto:tanmai.kalisipudi@gmail.com?subject=Resume Request&body=Hi Tanmai,%0D%0A%0D%0AI would like to request a copy of your resume.%0D%0A%0D%0AThank you!"
                className="text-black/50 underline transition-colors hover:text-black/80"
              >
                Email me
              </a>{" "}
              to get my resume or view my{" "}
              <a
                href="https://github.com/tanmaik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 underline transition-colors hover:text-black/80"
              >
                Github
              </a>{" "}
              or{" "}
              <a
                href="https://linkedin.com/in/tanmaikalisipudi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 underline transition-colors hover:text-black/80"
              >
                Linkedin
              </a>
              .
            </p>
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="font-medium text-black/85">Library</h2>

            <hr className="border-gray-200" />

            <div className="space-y-3">
              <Link
                href="/neuralese"
                className="flex justify-between items-center p-2 -mx-2 rounded hover:bg-black/5 transition-colors"
              >
                <h3 className="font-medium text-black/85">Neuralese</h3>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-xs text-black/50">AI</span>
                  <span className="text-xs text-black/50">01/04/25</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ViewTransition>
  );
}
