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
      <body className="leading-[1.4] text-base px-4 sm:px-2.5 my-6 sm:my-12 mx-auto max-w-2xl text-black bg-white">
        <div className="max-w-xl mx-auto my-4 mt-8 sm:mt-[70px]">
          {children}
        </div>
      </body>
    </html>
  );
}
