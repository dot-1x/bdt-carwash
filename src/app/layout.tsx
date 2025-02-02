import type { Metadata } from "next"
import "./globals.css"
import Script from "next/script"

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
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></Script>
      </body>
    </html>
  )
}
