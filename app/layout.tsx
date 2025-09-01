import { type Metadata } from "next";
import "./globals.css";

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
      <body className="text-sm leading-relaxed">{children}</body>
    </html>
  );
}
