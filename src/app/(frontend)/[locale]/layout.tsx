export const dynamic = 'force-dynamic'
import React from 'react'
 import { Header } from '@/Header/Component' 
 import { FooterBlock } from '@/blocks/Footer/FooterBlock'
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
  const footerData = await payload.findGlobal({
    slug: 'footer',
    draft: isEnabled,
  })
  

  return (
    <html lang="de" className={cn(montserrat.variable)} suppressHydrationWarning>
      <head><InitTheme /></head>
      <body className="antialiased font-sans">
        <Providers>
          <AdminBar adminBarProps={{ preview: isEnabled }} />
          
          
          <Header /> 
          
          <main>{children}</main>
          
           <FooterBlock {...footerData} /> 
        </Providers>
      </body>
    </html>
  )
}