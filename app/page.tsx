import Socials from "./components/nav";
import ImportantStuff from "./components/important-stuff";
import Writing from "./components/writing";
import RecentlyPlayed from "./components/recently-played";
import RecentActivity from "./components/recent-activity";
import LocationFlipper from "./components/location-flipper";

export default function Home() {
  return (
    <div>
      <div className="flex items-end justify-between">
        <div>
          <LocationFlipper />
          <p className="font-semibold text-2xl">
            hi, i&apos;m <span className="font-bold">tanmai kalisipudi</span>
          </p>
        </div>
        <Socials />
      </div>
      <hr className="my-3" />

      <p>
        currently, im a cs+math major at the university of virginia. i am mainly
        interested in ai, startups, economics, and politics.
      </p>

      <p className="mt-2">
        some more stuff ive been up to recently: attempting a sub-3hr marathon,
        learning how to play the piano, and dabbling in design / writing. i plan
        to share more about these things here.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <RecentlyPlayed />
        <RecentActivity />
      </div>
      <ImportantStuff />
      <Writing />
    </div>
  );
}
