import React from 'react'
import { Montserrat } from 'next/font/google'
import './globals.css'
import './styles.css'
import { Header } from '@/Header/Component'
import { Footer } from '@/Footer/Component'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata = {
  description: 'OrthoMed - Ваша стоматологическая клиника',
  title: 'OrthoMed',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={montserrat.variable} suppressHydrationWarning>
      <body className="bg-white text-black antialiased font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}