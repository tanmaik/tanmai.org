import Socials from "./components/socials";

export default function Home() {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full max-w-xl">
        <p className="font-semibold">Tanmai Kalisipudi</p>
        <Socials />
        <p className="mt-2">
          i&apos;m a cs+math major at the university of virginia.
        </p>
      </div>
    </div>
  );
}
