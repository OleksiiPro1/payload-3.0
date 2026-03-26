import React from 'react'
import { Header } from '@/Header/Component' // Проверь пути, если подчеркивает красным
import { Footer } from '@/Footer/Component'
import './globals.css'
import './styles.css'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        {/* Добавляем Header и Footer явно */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}