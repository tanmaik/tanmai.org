export default function ImportantStuff() {
  return (
    <div className="mt-8">
      <h1 className="text-xl font-semibold">important stuff</h1>
      <hr className="mt-2" />
      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="font-medium mb-2">building</h3>

          <ul className="flex flex-row md:flex-col flex-wrap gap-4">
            <li className="w-[calc(50%-0.5rem)] md:w-full">
              <a
                href="https://gradsteps.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition-colors duration-200 group underline hover:underline decoration-black/75 hover:decoration-gray-500"
              >
                <p className="">
                  GradSteps
                  <span className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 inline-block transition-transform duration-200">
                    ↗
                  </span>
                </p>
              </a>
              <p className="text-">AI undergraduate degree planner</p>
            </li>
            <li className="w-[calc(50%-0.5rem)] md:w-full">
              <p>Pulitzer</p>
              <p className="text-">AI news</p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-2">work</h3>
          <ul className="flex flex-row md:flex-col flex-wrap gap-4">
            <li className="w-[calc(50%-0.5rem)] md:w-full">
              <p>Software Engineer Intern</p>
              <a
                href="https://lineaje.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text- underline"
              >
                Lineaje
              </a>
            </li>
            <li className="w-[calc(50%-0.5rem)] md:w-full">
              <p>Intern</p>
              <a
                href="https://cisco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text- underline"
              >
                Cisco
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-2">learning</h3>
          <ul className="flex flex-row md:flex-col flex-wrap gap-4">
            <li className="w-[calc(50%-0.5rem)] md:w-full">
              <a
                href="https://virginia.edu"
                target="_blank"
                rel="noopener noreferrer"
                className=" underline"
              >
                University of Virginia
              </a>
              <p>cs+math</p>
              <p className="text-">now &mdash; 2026</p>
            </li>
            <li className="w-[calc(50%-0.5rem)] md:w-full">
              <a
                href="https://tjhsst.fcps.edu"
                target="_blank"
                rel="noopener noreferrer"
                className=" underline"
              >
                Thomas Jefferson High School for Science and Technology
              </a>
              <p className="text-">2019 &mdash; 2023</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
