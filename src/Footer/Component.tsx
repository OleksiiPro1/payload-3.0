import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer as FooterType } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  /* ИСПРАВЛЕНИЕ: Вместо 1 передаем 'de', 
     чтобы Payload понял, какой язык подгружать для главной страницы 
  */
  const footerData: FooterType = await getCachedGlobal('footer', 'de' as any)()

  const navItems = footerData?.navItems || []

  return (
   <footer className="mt-auto border-t border-border bg-white text-black">
     <div className="container py-8 flex flex-col gap-8 md:flex-row md:justify-between items-center md:items-start">
        <Link className="flex items-center" href="/">
          <Logo />
        </Link>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return (
                <CMSLink 
                  className="text-white hover:opacity-80 transition-opacity" 
                  key={i} 
                  {...link} 
                />
              )
            })}
          </nav>
        </div>
      </div>
    </footer>
  ) 
}