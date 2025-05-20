import Breadcrumbs from "../components/Breadcrumbs";

export default function Resume() {
  return (
    <section className="max-w-[42rem] mx-auto mt-10 px-4  mb-16">
      <Breadcrumbs />
      <div className="mt-4">
        <div className="flex w-full justify-between items-end mb-2 flex-col sm:flex-row">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Tanmai Kalisipudi</h2>
            <span className="text-sm">Ashburn, VA</span>
          </div>
          <div className="flex flex-col text-right mt-2 sm:mt-0 gap-1">
            <span className="text-sm">(703) 297&mdash;1353</span>
            <a href="mailto:tanmai@email.virginia.edu" className="text-sm text-blue-600 underline">tanmai@email.virginia.edu</a>
          </div>
        </div>
        <div className="mb-4 text-sm text-blue-700 flex flex-wrap gap-4">
          <a href="https://linkedin.com/in/tanmaikalisipudi" className="underline">LinkedIn</a>
          <a href="https://github.com/tanmai" className="underline">GitHub</a>
        </div>

        <h3 className="text-lg font-semibold mt-8 mb-2">Education</h3>
        <div className="mb-4">
          <div className="font-semibold">University of Virginia</div>
          <div className="text-sm italic">Computer Science &amp; Math, B.A. <span className="float-right">Aug 2024 — May 2026</span></div>
          <div className="text-sm mb-1"><span className="font-semibold">Relevant coursework:</span> Data Structures &amp; Algorithms, Artificial Intelligence and Machine Learning, Web and Mobile Development, Discrete Mathematics, Computer Organization/Systems and Assembly Language, Multivariable Calculus, Linear Algebra, Ordinary Differential Equations</div>
          <div className="text-sm mb-1"><span className="font-semibold">Awards/Distinctions:</span> Dean&apos;s List, Big Idea Competition Finalist for GradSteps, National Merit Scholar</div>
          <div className="font-semibold mt-2">Thomas Jefferson High School for Science and Technology</div>
          <div className="text-sm italic">Aug 2019 — June 2023</div>
        </div>

        <h3 className="text-lg font-semibold mt-8 mb-2">Experience</h3>
        <div className="mb-4">
          <div className="font-semibold">Software Engineering Intern | Lineaje (startup), <span className="italic">San Francisco, CA</span> <span className="float-right">Summer 2023</span></div>
          <ul className="list-disc ml-6 text-sm mb-2">
            <li>Spearheaded Lineaje&apos;s flagship <span className="italic">agentic LLM</span> product and showcased it to over 15,000 professionals at Black Hat USA 2023 in Las Vegas, NV</li>
            <li>Developed tool using <span className="font-semibold">Langchain</span> and fine-tuned <span className="font-semibold">LLMs</span> to translate English queries to scan for critical vulnerabilities in a customer&apos;s Software Bill of Materials, increasing rates of enterprise customer compliance with White House&apos;s Executive Order 14028 by 4x</li>
          </ul>
          <div className="font-semibold">Intern | Cisco Systems, <span className="italic">Research Triangle, NC</span> <span className="float-right">Summer 2022</span></div>
          <ul className="list-disc ml-6 text-sm">
            <li>Worked with in-house researchers/management to optimize shipping crate storage space in COVID-induced supply chain crisis; used <span className="font-semibold">Cisco Meraki</span> and <span className="font-semibold">Nexus Dashboard</span> in capstone project</li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold mt-8 mb-2">Projects</h3>
        <div className="mb-4">
          <div className="font-semibold"><a href="https://gradsteps.com" className="text-blue-600 underline">GradSteps</a>: Automated undergraduate degree planner <span className="float-right">2024</span></div>
          <ul className="list-disc ml-6 text-sm mb-2">
            <li>Recruited and led a team of four students to develop/market an automated undergraduate degree planner created using <span className="font-semibold">Next.js, MySQL, and Express</span>, streamlining academic planning for 1,400+ weekly active users at 2 universities</li>
            <li>Implemented <span className="font-semibold">cron jobs</span> on <span className="font-semibold">AWS EC2</span> to scrape 112 different university course catalogs using <span className="font-semibold">Puppeteer</span>, ensuring database maintained up-to-date course information</li>
          </ul>
          <div className="font-semibold">TJRides: Carpool ride-sharing platform (Uber for high school students) <span className="float-right">2023</span></div>
          <ul className="list-disc ml-6 text-sm mb-2">
            <li>Enhanced particle swarm optimization algorithm to match drivers and riders in a closed carpooling system, facilitating ~5 rides daily during peak use</li>
            <li>Deployed routing/driver-matching microservices on <span className="font-semibold">AWS Lambda</span> + <span className="font-semibold">AWS EventBridge</span>, hosted the <span className="font-semibold">React</span> front-end on <span className="font-semibold">Vercel</span>, and provisioned the <span className="font-semibold">PostgreSQL</span> database using <span className="font-semibold">AWS RDS</span></li>
          </ul>
          <div className="font-semibold">Electralert: Drowsy driving detection using temporal nodes of electroencephalography <span className="float-right">2022</span></div>
          <ul className="list-disc ml-6 text-sm">
            <li>Designed a patent-pending system utilizing a <span className="font-semibold">Recurrent Neural Network (RNN)</span> to detect drowsiness by analyzing fluctuations in the EEG&apos;s theta wave signal relative to the user&apos;s baseline</li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold mt-8 mb-2">Skills</h3>
        <div className="mb-4 text-sm">
          <span className="font-semibold">Languages and Libraries:</span> Python, Javascript, Java, C++, Go, HTML/CSS, SQL, Solidity (blockchain), React, Next.js, Express, Tensorflow, PyTorch, Keras, fast.ai, LangChain, Puppeteer, Cron, TailwindCSS<br/>
          <span className="font-semibold">Tools:</span> AWS, Azure, OpenAI, Git (w/ Github), CI/CD, Docker/Kubernetes, Pinecone, Figma, VS Code
        </div>
      </div>
    </section>
  );
}