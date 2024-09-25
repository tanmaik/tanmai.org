export default function Home() {
  return (
    <div className="flex justify-center ">
      <div className="max-w-lg px-4 py-20">
        <h1 className=" text-5xl sm:text-6xl font-bold text-black">
          tanmai kalisipudi
        </h1>
        <p className="mt-4 font-sans">
          just setting up my{" "}
          <a href="https://x.com/nottanmai" className="underline">
            twttr
          </a>
          . if you are so inclined...
          <br />
          <span className="font-mono block sm:hidden">
            0x8f4af13a9c9bcfcaf00
            <br />
            46eb9a8858b3f17661686
          </span>
          <span className="font-mono hidden sm:block">
            0x8f4af13a9c9bcfcaf0046eb9a8858b3f17661686
          </span>
        </p>

        <p className="mt-4">
          founder of{" "}
          <a href="https://perceptron.so" className="underline">
            perceptron
          </a>
          . also made an academic planning platform called{" "}
          <a href="https://gradsteps.com" className="underline">
            gradsteps
          </a>
          . studying computer science and math at{" "}
          <span className="font-serif bg-gradient-to-r from-blue-700 to-orange-700 text-transparent bg-clip-text">
            The University of Virginia
          </span>
          .
        </p>
        <p className="mt-4">
          {" "}
          previously interned at cisco (@ triangle, nc) and a startup called
          lineaje (@ bay area).
        </p>

        <p className="mt-4 font-mono font-bold">
          do lots of random stuff too (also my{" "}
          <a href="https://github.com/tanmaik" className="underline">
            github
          </a>{" "}
          ):
        </p>
        <ul className="list-disc font-mono list-inside mt-2 ml-4 space-y-1 ">
          <li>
            api endpoint that where you can get your currently playing spotify
            track (about to start)
          </li>
          <li>
            responds to your email like you and sends you texts when
            something&apos;s important (soon)
          </li>
          <li>
            ml model that predicts what where you are going to move your cursor
          </li>
          <li>tjrides: uber but for my high school and free</li>
        </ul>
        <h1 className="mt-4 font-bold text-xl font-sans ">reach out</h1>
        <p className="mt-2 font-sans">
          my personal email is tanmai.kalisipudi@gmail.com. i also have a work
          email that is tanmai@perceptron.so. my phone number is 7032971353.{" "}
          <span className="font-serif">
            we can also schedule{" "}
            <a href="https://cal.com/tanmai/15min" className="underline">
              a call on google meet
            </a>
            .
          </span>
        </p>
      </div>
    </div>
  );
}
