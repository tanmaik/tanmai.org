export default function Home() {
  return (
    <>
      <main className="flex items-center justify-center">
        <div className="w-full px-4 max-w-xl">
          <h1 className="text-2xl font-bold mt-8">hey i&apos;m tanmai</h1>
          <p className="mt-4">
            currently, im a cs+math major at the university of virginia. i am
            mainly interested in ai, startups, economics, and politics.
          </p>
          <h2 className="text-xl font-bold mt-8">previously</h2>
          <p className="mt-4">
            i was a software engineering intern at lineaje where i spearheaded
            their flagship agentic llm product and developed tools using
            langchain and fine-tuned llms to improve enterprise customer
            compliance.
          </p>
          <p className="mt-4">
            before that, i interned at cisco systems where i worked on
            optimizing shipping crate storage during the covid supply chain
            crisis using cisco meraki and nexus dashboard.
          </p>
          <p className="mt-4">
            i&apos;ve also worked on several projects including gradsteps (an
            automated degree planner), tjrides (a carpool platform for high
            school students), and electralert (a drowsy driving detection system
            using eeg). these projects involved technologies like aws, react,
            next.js, and machine learning.
          </p>
        </div>
      </main>
    </>
  );
}
