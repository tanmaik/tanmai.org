import Link from "next/link";

export default function TwinPage() {
  return (
    <div className="w-full sm:max-w-lg p-3 space-y-2 text-sm leading-relaxed">
      <Link
        href="/"
        className="underline [color:#0000ee] visited:[color:#551a8b]"
      >
        ← Back
      </Link>

      <h1 className="text-xl sm:text-2xl font-bold mt-3">Twin</h1>

      <article className="mt-3">
        <p>
          Coming soon...
        </p>
      </article>
    </div>
  );
}