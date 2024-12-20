import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "WSB Carwash",
  description: "Best carwash on Wonosobo",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
