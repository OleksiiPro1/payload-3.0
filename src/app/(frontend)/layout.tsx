import React from 'react'
import { Header } from '@/Header/Component' 
import { Footer } from '@/Footer/Component' // УБЕДИСЬ, ЧТО ПУТЬ ВЕРНЫЙ
import './globals.css'
import './styles.css'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col bg-white">
        {await Header()} 
        <main className="flex-grow">
          {children}
        </main>
        {await Footer()} 
      </body>
    </html>
  )
}
