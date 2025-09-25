import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex justify-center">
      <div className="p-4 mt-8 sm:mt-16 max-w-xl">
        <h1 className="font-semibold text-2xl">Projects</h1>
        <ul className="list-disc mt-4 pl-6">
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
      </div>
    </div>
  );
}