import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "tanmai kalisipudi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#01242E]">
        <div className="flex flex-col items-center min-h-screen w-full">
          <header className="mt-8 mb-2 w-full max-w-3xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl font-bold mb-2 text-[#EEE]">Tanmai's website</h1>
            <nav className="mb-6">
              <Link href="/" className="mr-4 text-[#8BC3DD] hover:underline">Home</Link>
              <Link href="/blog" className="mr-4 text-[#8BC3DD] hover:underline">Blog</Link>
              <Link href="/ai-mode" className="text-[#8BC3DD] hover:underline">AI Mode</Link>
            </nav>
          </header>
          <main className="w-full max-w-3xl mx-auto flex-1 text-[#ddd] px-4 sm:px-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
