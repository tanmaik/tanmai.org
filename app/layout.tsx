import { type Metadata } from "next";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

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
      <body className="text-sm leading-relaxed pb-16 bg-white dark:bg-gray-900 transition-colors">
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
