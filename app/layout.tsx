import { type Metadata } from 'next'
import './globals.css'
import Breadcrumbs from './components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Tanmai Kalisipudi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Breadcrumbs />
        {children}
      </body>
    </html>
  )
}
