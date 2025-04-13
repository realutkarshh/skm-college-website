import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./ClientLayout"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "S.K.M. College of Nursing & Paramedical",
  description:
    "S.K.M. College of Nursing & Paramedical - Shaping compassionate healthcare professionals through quality education, practical training, and ethical values.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ClientLayout>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ClientLayout>
      </body>
    </html>
  )
}


import './globals.css'