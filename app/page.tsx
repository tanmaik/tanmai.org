import Socials from "./components/socials";
import ImportantStuff from "./components/important-stuff";
import Writing from "./components/writing";

export default function Home() {
  return (
    <div>
      <div className="flex items-end justify-between">
        <p className="font-semibold text-2xl">
          hi, i&apos;m <span className="font-bold">tanmai kalisipudi</span>
        </p>
        <Socials />
      </div>
      <hr className="my-3" />

      <p className="">
        currently, im a cs+math major at the university of virginia. i am mainly
        interested in ai, startups, economics, and politics.
      </p>

      <ImportantStuff />
      <Writing />
    </div>
  );
}
