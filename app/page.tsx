import { unstable_ViewTransition as ViewTransition } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <ViewTransition>
      <div className="flex justify-center p-4 pt-8 sm:pt-16">
        <div className="w-full max-w-lg space-y-8">
          <div className="space-y-2">
            <ViewTransition name="page-title">
              <h1 className="font-medium text-black/85 dark:text-white/95">
                Tanmai Kalisipudi
              </h1>
            </ViewTransition>

            <p className="font-normal text-black/70 dark:text-white/85">
              I&apos;m currently in my third year studying CS and Math @ UVA.
              Previously, I&apos;ve worked at{" "}
              <a
                href="https://cisco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 dark:text-white/65 underline transition-colors hover:text-black/80 dark:hover:text-white/95"
              >
                Cisco
              </a>
              ,{" "}
              <a
                href="https://lineaje.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 dark:text-white/65 underline transition-colors hover:text-black/80 dark:hover:text-white/95"
              >
                Lineaje
              </a>
              , and{" "}
              <a
                href="https://suitable.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 dark:text-white/65 underline transition-colors hover:text-black/80 dark:hover:text-white/95"
              >
                Suitable
              </a>
              , founded{" "}
              <a
                href="https://gradsteps.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 dark:text-white/65 underline transition-colors hover:text-black/80 dark:hover:text-white/95"
              >
                GradSteps
              </a>
              , and graduated from TJHSST.
            </p>

            <p className="font-normal text-black/70 dark:text-white/85">
              Interests include artificial intelligence, startups, economics,
              and politics. I&apos;ve started 85 businesses and have failed at
              83.
            </p>

            <p className="font-normal text-black/70 dark:text-white/85">
              <a
                href="mailto:tanmai.kalisipudi@gmail.com?subject=Resume Request&body=Hi Tanmai,%0D%0A%0D%0AI would like to request a copy of your resume.%0D%0A%0D%0AThank you!"
                className="text-black/50 dark:text-white/65 underline transition-colors hover:text-black/80 dark:hover:text-white/95"
              >
                Email me
              </a>{" "}
              for my resume or find me on{" "}
              <a
                href="https://github.com/tanmaik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 dark:text-white/65 underline transition-colors hover:text-black/80 dark:hover:text-white/95"
              >
                GitHub
              </a>
              ,{" "}
              <a
                href="https://linkedin.com/in/tanmaikalisipudi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 dark:text-white/65 underline transition-colors hover:text-black/80 dark:hover:text-white/95"
              >
                LinkedIn
              </a>
              , and{" "}
              <a
                href="https://huggingface.co/tanmaik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 dark:text-white/65 underline transition-colors hover:text-black/80 dark:hover:text-white/95"
              >
                HuggingFace
              </a>
              .
            </p>
          </div>

          <div className="space-y-3 mt-10">
            <h2 className="font-medium text-black/85 dark:text-white/95">
              Library
            </h2>

            <hr className="border-black/10 dark:border-white/10" />

            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 px-2 -mx-2 rounded opacity-60 cursor-default gap-1 sm:gap-0">
                <h3 className="font-medium text-black/85 dark:text-white/95">
                  Northern Virginia&apos;s Brain Drain Problem
                  <span className="ml-2 text-xs bg-black/10 dark:bg-white/10 text-black/60 dark:text-white/60 px-1.5 py-0.5 rounded">
                    DRAFT
                  </span>
                </h3>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-xs text-black/50 dark:text-white/65">
                    Politics
                  </span>
                  <span className="text-xs text-black/50 dark:text-white/65">
                    00/00
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 px-2 -mx-2 rounded opacity-60 cursor-default gap-1 sm:gap-0">
                <h3 className="font-medium text-black/85 dark:text-white/95">
                  Dead College Theory
                  <span className="ml-2 text-xs bg-black/10 dark:bg-white/10 text-black/60 dark:text-white/60 px-1.5 py-0.5 rounded">
                    DRAFT
                  </span>
                </h3>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-xs text-black/50 dark:text-white/65">
                    Education
                  </span>
                  <span className="text-xs text-black/50 dark:text-white/65">
                    00/00
                  </span>
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 px-2 -mx-2 rounded opacity-60 cursor-default gap-1 sm:gap-0"
              >
                <h3 className="font-medium text-black/85 dark:text-white/95">
                  Neuralese
                  <span className="ml-2 text-xs bg-black/10 dark:bg-white/10 text-black/60 dark:text-white/60 px-1.5 py-0.5 rounded">
                    DRAFT
                  </span>
                </h3>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-xs text-black/50 dark:text-white/65">
                    AI
                  </span>
                  <span className="text-xs text-black/50 dark:text-white/65">
                    00/00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ViewTransition>
  );
}
