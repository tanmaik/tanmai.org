import ResumeRequest from "./components/ResumeRequest";

export default async function Home() {
  return (
    <div className="w-full sm:max-w-lg p-2 space-y-2 text-sm leading-[1.375]">
      <h1 className="text-xl sm:text-2xl font-bold">Tanmai Kalisipudi</h1>

      <p>
        I am a computer science &amp; math student at{" "}
        <a
          href="https://www.virginia.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#0000ee] visited:text-[#551a8b]"
        >
          The University of Virginia
        </a>
        , expecting to graduate in spring 2027. Previously, I attended{" "}
        <a
          href="https://tjhsst.fcps.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#0000ee] visited:text-[#551a8b]"
        >
          TJHSST
        </a>
        .
      </p>

      <p>
        My interests include AI, startups, economics, and politics.
      </p>

      <p>
        For my full professional experience, <ResumeRequest />.
      </p>
    </div>
  );
}
