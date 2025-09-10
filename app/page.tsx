import { unstable_ViewTransition as ViewTransition } from "react";

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
              I&apos;m a third year studying CS and Math at UVA. Previously, I
              graduated from TJHSST and have worked at{" "}
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
              . I founded{" "}
              <a
                href="https://gradsteps.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 dark:text-white/65 underline transition-colors hover:text-black/80 dark:hover:text-white/95"
              >
                GradSteps
              </a>
              , along with 28 other businesses (26 of which have failed).
            </p>

            <p className="font-normal text-black/70 dark:text-white/85">
              My interests include artificial intelligence, startups, economics, and
              politics.
            </p>

            <p className="font-normal text-black/70 dark:text-white/85">
              You can reach me at{" "}
              <a
                href="mailto:tanmai.kalisipudi@gmail.com?subject=Resume Request&body=Hi Tanmai,%0D%0A%0D%0AI would like to request a copy of your resume.%0D%0A%0D%0AThank you!"
                className="text-black/50 dark:text-white/65 underline transition-colors hover:text-black/80 dark:hover:text-white/95"
              >
                tanmai.kalisipudi@gmail.com
              </a>{" "}
              or find me on{" "}
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
        </div>
      </div>
    </ViewTransition>
  );
}
