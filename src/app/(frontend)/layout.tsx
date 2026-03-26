import React from 'react'
import './globals.css'
import './styles.css'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        {children}
      </body>
    </html>
  )
}