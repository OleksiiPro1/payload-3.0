export const dynamic = 'force-dynamic'
import React from 'react'
 import { Header } from '@/Header/Component' 
 import { Footer } from '@/Footer/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { AdminBar } from '@/components/AdminBar'
import { draftMode } from 'next/headers'
import { cn } from '@/utilities/ui'
import { Montserrat } from 'next/font/google'
import { getPayload } from 'payload' 
import config from '@/payload.config' 
import '../globals.css'


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-montserrat',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  const payload = await getPayload({ config })
  let footerData = null

  try {
    footerData = await payload.findGlobal({
      slug: 'footer',
      draft: isEnabled,
    })
  } catch {
    footerData = null
  }

  return (
    <div className={cn(montserrat.variable, 'antialiased font-sans')}>
      <InitTheme />
      <Providers>
        <AdminBar adminBarProps={{ preview: isEnabled }} />
        <Header />
        {children}
        <Footer />
      </Providers>
    </div>
  )
}
