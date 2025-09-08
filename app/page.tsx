import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="maincontent">
        <div className="mb-6">
          <h2>
            <strong>Tanmai Kalisipudi</strong>
          </h2>
        </div>

        <div className="mb-6 space-y-4">
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
              href="https://www.suitable.co"
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
            <a href="mailto:tanmai.kalisipudi@gmail.com?subject=Resume Request&body=Hi Tanmai,%0D%0A%0D%0AI would like to request a copy of your resume.%0D%0A%0D%0AThank you!">
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

        <div>
          <h3 className="mb-3">
            <strong>Writings</strong>
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <Link href="/neuralese">Neuralese</Link>
            </li>
            <li>Northern Virginia&apos;s Brain Drain Problem (Draft)</li>
            <li>Dead College Theory (Draft)</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
