import ResumeRequest from "./components/ResumeRequest";

export default async function Home() {
  return (
    <div className="w-full sm:max-w-[500px] p-2">
      <h1 className="text-xl sm:text-2xl font-bold mb-2">Tanmai Kalisipudi</h1>
      
      <p className="mb-2">
        I am a computer science &amp; math student at{' '}
        <a
          href="https://www.virginia.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          The University of Virginia
        </a>
        , expecting to graduate in spring 2027. Previously, I attended{' '}
        <a
          href="https://tjhsst.fcps.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          TJHSST
        </a>
        .
      </p>
      
      <p className="mb-2">
        My interests include AI, startups, economics, and politics.
      </p>
      
      <p className="mb-2">
        For my full professional experience,{' '}
        <ResumeRequest />
        .
      </p>
      
    </div>
  );
}