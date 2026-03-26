import React from 'react'
import { Header } from '@/Header/Component' 
import { Footer } from '@/Footer/Component'
import './globals.css'
import './styles.css'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Вызываем компоненты правильно
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        {/* Ждем загрузки хедера */}
        {await Header()} 
        
        <main className="flex-grow">
          {children}
        </main>

        {/* Ждем загрузки футера */}
        {await Footer()} 
      </body>
    </html>
  )
}