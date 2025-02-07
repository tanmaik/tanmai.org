import "./globals.css";
import type { Metadata } from "next";

import localFont from "next/font/local";

const favorit = localFont({
  src: "./fonts/Favorit.ttf",
});

export const metadata: Metadata = {
  title: "tanmai's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={favorit.className}>
        <main className="flex justify-center">
          <div className="w-full max-w-xl px-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
