export const dynamic = 'force-dynamic'
import React from 'react'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { cn } from '@/utilities/ui'
import { Montserrat } from 'next/font/google'
import '../globals.css'


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-montserrat',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn(montserrat.variable, 'antialiased font-sans')}>
      <InitTheme />
      <Providers>
        <main>{children}</main>
      </Providers>
    </div>
  )
}
