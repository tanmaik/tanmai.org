export default function Home() {
  return (
    <div
      className="flex justify-center "
      style={{ fontFamily: "Times New Roman, serif" }}
    >
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
            My passions include startups, AI, finance, government, and running.
            I&apos;ve worked at{" "}
            <a
              href="https://www.cisco.com"
              className="text-blue-600 visited:text-purple-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cisco
            </a>
            ,{" "}
            <a
              href="https://lineaje.com"
              className="text-blue-600 visited:text-purple-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lineaje
            </a>
            , and{" "}
            <a
              href="https://www.suitable.co"
              className="text-blue-600 visited:text-purple-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Suitable
            </a>
            , and also created several businesses of my own.
          </p>
        </div>
        <p className="mt-4">Some extracurriculars: </p>
        <ul className="list-disc mt-2 pl-6 ">
          <li>
            Sold AI-powered{" "}
            <a
              href="https://gradsteps.com"
              className="text-blue-600 visited:text-purple-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              degree planning software
            </a>{" "}
            to the University of Pittsburgh
          </li>
          <li>
            Built{" "}
            <a
              href="https://govey.org"
              className="text-blue-600 visited:text-purple-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI agents
            </a>{" "}
            that accelerate deal flow for defense contractors
          </li>
          <li>
            Designed electroencephalography goggles to yell at sleepy drivers
          </li>
          <li>
            Created a platform to help students from my{" "}
            <a
              href="https://tjhsst.fcps.edu"
              className="text-blue-600 visited:text-purple-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              high school
            </a>{" "}
            organize carpools
          </li>

          <li>
            Organized 500+ hours of math and physics lessons in my private
            tutoring business
          </li>
          <li>Hosted financial literacy webinars for high schoolers</li>
          <li>
            Founded a{" "}
            <a
              href="https://www.nest4us.org"
              className="text-blue-600 visited:text-purple-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              nonprofit
            </a>{" "}
            to teach young people to care for their local environment
          </li>
          <li>Ran sub-3:45 marathon and a sub-5:00 minute mile</li>
          <li>(Somehow) attained a third-degree black belt in taekwondo</li>
          <li>Been buying $META since 2022</li>
        </ul>
      </div>
    </div>
  );
}
