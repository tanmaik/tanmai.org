export default function Home() {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full max-w-xl">
        <p className="font-bold text-2xl">tanmai kalisipudi</p>
        <p>tanmai.kalisipudi@gmail.com</p>

        <div className="flex gap-1 items-center">
          <a
            className="underline"
            href="https://x.com/nottanmai"
            target="_blank"
            rel="noopener noreferrer"
          >
            x
          </a>
          <a
            className="underline"
            href="https://github.com/tanmaik"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            className="underline"
            href="https://linkedin.com/in/tanmaikalisipudi"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
