import React from 'react'
import { Header } from '@/Header/Component' 
import { Footer } from '@/Footer/Component' // УБЕДИСЬ, ЧТО ПУТЬ ВЕРНЫЙ
import { cn } from '@/utilities/ui'
import { Montserrat } from 'next/font/google'
import './globals.css'
import './styles.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-montserrat',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={cn(montserrat.variable, 'min-h-screen flex flex-col bg-white font-sans antialiased')}>
        {await Header()} 
        <main className="flex-grow">
          {children}
        </main>
        {await Footer()} 
      </body>
    </html>
  )
}
