import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const iowaOldStyle = localFont({
  src: [
    {
      path: "../public/fonts/bitstream-iowan-old-style-bt-586c36a8d7712.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/bitstream-iowan-old-style-italic-bt-586c3740dc396.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/bitstream-iowan-old-style-bold-bt-586c371d8d669.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/bitstream-iowan-old-style-bold-italic-bt-586c37701cb62.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/bitstream-iowan-old-style-black-bt-586c36e930225.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/bitstream-iowan-old-style-black-italic-bt-586c378f12ca1.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-iowa-old-style",
});

export const metadata: Metadata = {
  title: "Tanmai Kalisipudi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${iowaOldStyle.variable}`}>{children}</body>
    </html>
  );
}
