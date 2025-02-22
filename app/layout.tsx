import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import localFont from "next/font/local";

const favorit = localFont({
  src: "./fonts/Favorit.ttf",
});

export const metadata: Metadata = {
  title: "tanmai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={favorit.className}>
        <main className="flex justify-center underline-offset-2 py-10">
          <div className="w-full max-w-2xl px-4">{children}</div>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
