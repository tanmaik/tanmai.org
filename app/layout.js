import "./globals.css";

export const metadata = {
  title: "tanmai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
