export default async function Home() {
  return (
    <div className="max-w-[650px] mx-auto my-12 px-2.5">
      <h1 className="text-2xl font-normal mb-6">Tanmai Kalisipudi</h1>
      
      <p className="mb-4">
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
      
      <p className="mb-4">
        I&apos;ve been programming since I was 5. My interests include AI, startups, economics, and politics. For my professional experience, see my{' '}
        <a href="/resume" className="underline">
          resume
        </a>
        .
      </p>
    </div>
  );
}