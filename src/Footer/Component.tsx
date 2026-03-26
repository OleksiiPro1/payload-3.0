import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import type { Footer as FooterType } from '@/payload-types'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  // Пробуем достать данные. Если 'de' не сработает, попробуем без локали.
  const footerData: FooterType = await getCachedGlobal('footer', 'de' as any)()

  // Если данных в базе НЕТ (пусто в админке), используем пустой массив, чтобы не упало
  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white text-slate-900">
      <div className="container py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between items-center md:items-start">
          
          {/* Твой Логотип */}
          <Link href="/">
            <Logo />
            <span className="text-xl font-bold ml-2">OrthoMed</span>
          </Link>

          {/* Твои Ссылки из админки */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <nav className="flex gap-6">
              {navItems.map(({ link }, i) => (
                <CMSLink key={i} {...link} className="hover:text-blue-600 transition-colors" />
              ))}
            </nav>
            <ThemeSelector />
          </div>

        </div>
        
        {/* Копирайт (чтобы точно видеть, что это ТВОЙ футер) */}
        <div className="mt-8 pt-8 border-t border-slate-100 text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} OrthoMed. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  )
}