import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import type { Footer as FooterType } from '@/payload-types'
import { Logo } from '@/components/Logo/Logo'
import { CMSLink } from '@/components/Link'

export async function Footer() {
  // Тянем данные из глобала 'footer' для немецкого языка
  const footerData: FooterType = await getCachedGlobal('footer', 'de' as any)()
  
  // Достаем наши будущие поля (если их нет в базе, будут пустые массивы/строки)
  const navItems = footerData?.navItems || []
  const contactInfo = (footerData as any)?.contactInfo || {}
  const openingHours = (footerData as any)?.openingHours || []

  return (
    <footer className="mt-auto border-t border-blue-200 bg-white text-slate-600">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* 1. КОЛОНКА: Логотип и ссылки (Nav Items) */}
        <div className="flex flex-col gap-6">
          <Link href="/">
            <Logo />
          </Link>
          <nav className="flex flex-col gap-2">
            {navItems.map(({ link }, i) => (
              <CMSLink key={i} {...link} className="hover:text-blue-500 transition-colors" />
            ))}
          </nav>
        </div>

        {/* 2. КОЛОНКА: Контакты из Админки */}
        <div className="flex flex-col gap-4 text-sm">
          <h3 className="font-bold text-slate-900">OrthoMed</h3>
          {/* Эти данные потекут из админки, когда ты создашь поля */}
          <p className="whitespace-pre-line">{contactInfo.address || 'Musterstraße 1\n1234 Musterstadt'}</p>
          <p>{contactInfo.phone || '+43 123 456 789'}</p>
          <p>{contactInfo.email || 'praxis@orthomed.at'}</p>
        </div>

        {/* 3. КОЛОНКА: Часы работы из Админки */}
        <div className="flex flex-col gap-4 text-sm">
          <h3 className="font-bold text-slate-900">Ordinationszeiten</h3>
          <div className="grid grid-cols-1 gap-y-2">
            {openingHours.length > 0 ? (
              openingHours.map((item: any, i: number) => (
                <div key={i} className="flex justify-between border-b border-slate-50 pb-1">
                  <span className="font-medium">{item.day}</span>
                  <span>{item.hours}</span>
                </div>
              ))
            ) : (
              // Заглушка, пока ты не заполнил админку
              <p className="text-slate-400 italic">Данные не заполнены в админке</p>
            )}
          </div>
        </div>

      </div>

      <div className="border-t border-slate-100 py-6">
        <div className="container text-xs text-slate-400 flex justify-between items-center">
          <span>© {new Date().getFullYear()} OrthoMed. Alle Rechte vorbehalten.</span>
        </div>
      </div>
    </footer>
  )
}