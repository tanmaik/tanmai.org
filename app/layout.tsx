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
      <body className={favorit.className}>{children}</body>
    </html>
  );
}
