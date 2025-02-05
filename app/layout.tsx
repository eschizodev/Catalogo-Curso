import type { Metadata } from "next"
import { poppins } from "./fonts"
import "./globals.css"
import type React from "react" // Import React

export const metadata: Metadata = {
  title: "Cátalogo de Cursos",
  description: "Explore nossa vasta coleção de cursos online",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

