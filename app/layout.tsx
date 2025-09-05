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
      <head>
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-navbutton-color" content="#000000" />
      </head>
      <body className="text-sm leading-relaxed pb-16 bg-white dark:bg-black/95 transition-colors">
        {children}
      </body>
    </html>
  );
}
