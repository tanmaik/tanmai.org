import Breadcrumbs from "./components/Breadcrumbs";


export default async function Home() {
  return (
    <section className="max-w-[42rem] mx-auto mt-10 px-4 mb-16">
      <Breadcrumbs />
      <header className="mt-4">
        <h1 className="text-3xl font-extrabold mb-4">Tanmai Kalisipudi</h1>
      </header>
      <article className="space-y-4">
        <p>
          I am a computer science &amp; math student at{' '}
          <a
            href="https://www.virginia.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            The University of Virginia
          </a>
          , expecting to graduate in spring 2027. Previously, I attended{' '}
          <a
            href="https://tjhsst.fcps.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            TJHSST
          </a>
          .
        </p>
        <p>
          I&apos;ve been programming since I was 5. My interests include AI, startups, economics, and politics. For my professional experience, see my{' '}
          <a href="/resume" className="text-blue-600 underline">
            resume
          </a>
          .
        </p>
      </article>
      
    
    </section>
  );
}