import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center ">
      <div className="max-w-sm px-4  mt-20">
        <h1 className="mt-24 text-2xl font-bold text-black">
          tanmai kalisipudi
        </h1>

        <p className="mt-4">
          founder of{" "}
          <a href="https://perceptron.so" className="underline">
            perceptron
          </a>
          . also made an academic planning platform called{" "}
          <a href="https://gradsteps.com" className="underline">
            gradsteps
          </a>
          . attending the university of virginia.
        </p>
        <p className="mt-4">
          {" "}
          interned at cisco (@ triangle, nc) and a startup called lineaje (@ bay
          area).
        </p>
      </div>
    </div>
  );
}
