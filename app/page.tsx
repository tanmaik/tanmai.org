import ResumeRequest from "./components/ResumeRequest";

export default async function Home() {
  return (
    <div className="max-w-[650px] mx-auto my-8 sm:my-12 px-4 sm:px-6">
      <h1 className="text-xl sm:text-2xl font-bold mt-8 sm:mt-16 mb-4 sm:mb-6">Tanmai Kalisipudi</h1>
      
      <p className="mb-3 sm:mb-4">
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
      
      <p className="mb-3 sm:mb-4">
        My interests include AI, startups, economics, and politics.
      </p>
      
      <p className="mb-3 sm:mb-4">
        For my full professional experience,{' '}
        <ResumeRequest />
        .
      </p>
      
    </div>
  );
}