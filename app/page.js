export default function Home() {
  return (
    <div className="p-4">
      <h1 className="font-bold">tanmai</h1>
      <p>
        find me on{" "}
        <a
          href="https://www.linkedin.com/in/tanmaikalisipudi"
          className="underline"
        >
          linkedin
        </a>{" "}
        /{" "}
        <a href="https://github.com/tanmaik" className="underline">
          github
        </a>{" "}
        /{" "}
        <a href="https://x.com/nottanmai" className="underline">
          x
        </a>
      </p>
      <p>
        or email{" "}
        <a href="mailto:tanmai.kalisipudi@gmail.com" className="underline">
          tanmai.kalisipudi@gmail.com
        </a>
      </p>
      <p className="mt-2 flex flex-col">
        <a
          className="underline font-semibold"
          href="https://buy.stripe.com/00g15MbGEfeTdP2bIK"
        >
          buy my ai product
        </a>
        <a className=" cursor-not-allowed font-semibold text-gray-500">
          browse addons
        </a>
      </p>
    </div>
  );
}
