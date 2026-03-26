import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import type { Footer as FooterType } from '@/payload-types'
import { Logo } from '@/components/Logo/Logo'
import { CMSLink } from '@/components/Link'

export async function Footer() {
  const footerData: FooterType = await getCachedGlobal('footer', 'de' as any)()

  return (
    <footer className="mt-auto border-t border-blue-100 bg-white py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* ЛЕВО: Логотип и Название */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="text-3xl font-light text-[#7BB8D9] tracking-tight">OrthoMed</span>
          </Link>
        </div>

        {/* ЦЕНТР: Контакты из админки */}
        <div className="text-[14px] leading-relaxed text-slate-500">
  <p className="font-bold text-slate-800 mb-2 text-lg">OrthoMed</p>
  <p className="whitespace-pre-line mb-4">{(footerData as any)?.address}</p>
  <p className="flex items-center gap-2">
    <span className="text-[#7BB8D9]">T:</span> {(footerData as any)?.phone}
  </p>
  <p className="flex items-center gap-2">
    <span className="text-[#7BB8D9]">E:</span> {(footerData as any)?.email}
  </p>
</div>

{/* ПРАВО: Часы работы */}
<div className="text-[14px] text-slate-500">
  <p className="font-bold text-slate-800 mb-2 text-lg">Ordinationszeiten</p>
  <div className="flex flex-col gap-1">
    {(footerData as any)?.openingHours?.map((item: any, i: number) => (
      <div key={i} className="flex justify-between border-b border-slate-50 pb-1 max-w-[240px]">
        <span className="font-medium text-slate-700">{item.day}</span>
        <span>{item.hours}</span>
      </div>
    ))}
  </div>
</div>

      </div>

      {/* Нижняя панелька */}
      <div className="container mt-12 pt-6 border-t border-slate-100 text-[11px] text-slate-400">
        © {new Date().getFullYear()} OrthoMed. Alle Rechte vorbehalten.
      </div>
    </footer>
  )
}