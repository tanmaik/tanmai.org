export default function Home() {
  return (
    <>
      <main className="flex items-center justify-center">
        <div className="w-full px-4 max-w-xl">
          <h1 className="text-2xl font-bold mt-14">tanmai kalisipudi</h1>

          <p className="mt-4">
            i&apos;m currently a CS+math at The University of Virginia. i&apos;m
            very interested in AI and the future of work.
          </p>
          <p className="mt-2">
            for more about my work:{" "}
            <a
              className="text-blue-600 underline"
              target="_blank"
              href="https://github.com/tanmaik"
            >
              GitHub
            </a>
            ,{" "}
            <a
              className="text-blue-600 underline"
              target="_blank"
              href="https://www.linkedin.com/in/tanmaikalisipudi"
            >
              LinkedIn
            </a>
            ,{" "}
            <a
              className="text-blue-600 underline"
              target="_blank"
              href="mailto:tanmai.kalisipudi@gmail.com"
            >
              email
            </a>
            , and my{" "}
            <a
              className="text-blue-600 underline"
              target="_blank"
              href="https://drive.google.com/file/d/1yfiycfLNzf8jikumsP1ys43ga24byUye/view?usp=sharing"
            >
              resume
            </a>
            .
          </p>
        </div>
      </main>
    </>
  );
}
