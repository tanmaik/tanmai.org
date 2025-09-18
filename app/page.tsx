import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center ">
      <div className="p-4 mt-8 sm:mt-16 max-w-xl">
        <h1 className="font-semibold">Tanmai Kalisipudi</h1>
        <div className="mt-4">
          <p>
            Hi, I&apos;m Tanmai! I&apos;m 20 years old and grew up in Northern
            Virginia. I&apos;m currently studying math and CS at the University
            of Virginia, and previously graduated from Thomas Jefferson High
            School.
          </p>
          <p className="mt-2">
            My passions include AI, startups, finance, government, and running.
            I&apos;ve worked at{" "}
            <Link
              href="https://www.cisco.com"
              className="text-blue-600 visited:text-purple-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cisco
            </Link>
            ,{" "}
            <Link
              href="https://lineaje.com"
              className="text-blue-600 visited:text-purple-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lineaje
            </Link>
            , and{" "}
            <Link
              href="https://www.suitable.co"
              className="text-blue-600 visited:text-purple-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Suitable
            </Link>
            , and also created several businesses of my own.
          </p>
          <p className="mt-2">
            Reach me at my{" "}
            <Link
              href="mailto:tanmaikalisipudi@gmail.com"
              className="text-blue-600 visited:text-purple-800 underline"
            >
              email
            </Link>{" "}
            or find me on{" "}
            <Link
              href="https://github.com/tanmaik"
              className="text-blue-600 visited:text-purple-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            {", "}
            <Link
              href="https://www.linkedin.com/in/tanmaikalisipudi/"
              className="text-blue-600 visited:text-purple-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            {", "}
            <Link
              href="https://huggingface.co/tanmaik"
              className="text-blue-600 visited:text-purple-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              HuggingFace
            </Link>
            {", or "}
            <Link
              href="https://x.com/nottanmai"
              className="text-blue-600 visited:text-purple-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </Link>
            .
          </p>
        </div>
        <p className="mt-3">In the past, I&apos;ve:</p>
        <ul className="list-disc mt-2 pl-6 ">
          <li>
            Sold AI-powered{" "}
            <Link
              href="https://gradsteps.com"
              className="text-blue-600 visited:text-purple-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              degree planning software
            </Link>{" "}
            to the University of Pittsburgh
          </li>
          <li>
            Built{" "}
            <Link
              href="https://govey.org"
              className="text-blue-600 visited:text-purple-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI agents
            </Link>{" "}
            that accelerate deal flow for defense contractors
          </li>
          <li>
            Designed electroencephalography goggles that yell at sleepy drivers
          </li>
          <li>
            Created a platform for my high school to help students organize
            carpools
          </li>
          <li>Organized 500+ hours of math and physics tutoring</li>
          <li>
            Ran investing webinars during the pandemic retail investing boom
          </li>
          <li>
            Founded a{" "}
            <Link
              href="https://www.nest4us.org"
              className="text-blue-600 visited:text-purple-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              nonprofit
            </Link>{" "}
            teaching kids to care for their environment
          </li>
          <li>Ran a sub 3:45 marathon and sub 5 minute mile</li>
          <li>Came runner up in my 4th grade spelling bee</li>
        </ul>
        <p className="mt-3">
          Currently, I&apos;m exploring reinforcement learning in LLMs. I will be sharing my findings in technical writings and on my{" "}
            <Link
              href="https://youtube.com/@tkalisipudi"
              className="text-blue-600 visited:text-purple-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </Link>
            .
        </p>
      </div>
    </div>
  );
}
