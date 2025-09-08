import { unstable_ViewTransition as ViewTransition } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <ViewTransition>
      <div className="container">
        <div className="space-y">
          <ViewTransition name="page-title">
            <h1>Tanmai Kalisipudi</h1>
          </ViewTransition>

          <p>
            I&apos;m currently in my third year studying CS and Math @ UVA.
            Previously, I&apos;ve worked at{" "}
            <a
              href="https://cisco.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cisco
            </a>
            ,{" "}
            <a
              href="https://lineaje.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lineaje
            </a>
            , and{" "}
            <a
              href="https://suitable.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              Suitable
            </a>
            , founded{" "}
            <a
              href="https://gradsteps.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GradSteps
            </a>
            , and graduated from TJHSST.
          </p>

          <p>
            I&apos;m particularly interested in artificial intelligence,
            startups, economics, and politics.
          </p>

          <p>
            <a
              href="mailto:tanmai.kalisipudi@gmail.com?subject=Resume Request&body=Hi Tanmai,%0D%0A%0D%0AI would like to request a copy of your resume.%0D%0A%0D%0AThank you!"
            >
              Email me
            </a>{" "}
            for my resume or find me on{" "}
            <a
              href="https://github.com/tanmaik"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            ,{" "}
            <a
              href="https://linkedin.com/in/tanmaikalisipudi"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            , and{" "}
            <a
              href="https://huggingface.co/tanmaik"
              target="_blank"
              rel="noopener noreferrer"
            >
              HuggingFace
            </a>
            .
          </p>
        </div>

        <div className="space-y">
          <h2>Library</h2>

          <div className="library-item">
            <h3>
              Northern Virginia&apos;s Brain Drain Problem
              <span className="draft-badge">DRAFT</span>
            </h3>
            <div className="library-meta">
              <span>Politics</span> • <span>00/00</span>
            </div>
          </div>

          <div className="library-item">
            <h3>
              Dead College Theory
              <span className="draft-badge">DRAFT</span>
            </h3>
            <div className="library-meta">
              <span>Education</span> • <span>00/00</span>
            </div>
          </div>

          <Link href="/neuralese" className="library-item">
            <h3>Neuralese</h3>
            <div className="library-meta">
              <span>AI</span> • <span>00/00</span>
            </div>
          </Link>
        </div>
      </div>
    </ViewTransition>
  );
}
