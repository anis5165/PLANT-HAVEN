import "./globals.css"
import "./global-animations.css"

import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Qkart - Premium Plants for Your Home",
  description:
    "Discover our curated collection of premium plants and trees to transform your space into a lush paradise.",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
