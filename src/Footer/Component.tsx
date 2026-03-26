import Link from 'next/link'
import React from 'react'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  return (
    <footer className="mt-auto border-t border-blue-100 bg-white py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* ЛЕВО: Логотип */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="text-3xl font-light text-[#7BB8D9] tracking-tight">OrthoMed</span>
          </Link>
        </div>

        {/* ЦЕНТР: Контакты (СТАТИЧНО ИЗ FIGMA) */}
        <div className="text-[14px] leading-relaxed text-slate-500">
          <p className="font-bold text-slate-800 mb-2 text-lg">OrthoMed</p>
          <p className="whitespace-pre-line mb-4">Musterstraße 1{"\n"}1234 Musterstadt</p>
          <p className="flex items-center gap-2">
            <span className="text-[#7BB8D9]">T:</span> +43 123 456 789
          </p>
          <p className="flex items-center gap-2">
            <span className="text-[#7BB8D9]">E:</span> praxis@orthomed.at
          </p>
        </div>

        {/* ПРАВО: Часы работы (СТАТИЧНО ИЗ FIGMA) */}
        <div className="text-[14px] text-slate-500">
          <p className="font-bold text-slate-800 mb-2 text-lg">Ordinationszeiten</p>
          <div className="flex flex-col gap-1">
            {[
              { day: 'Mo', hours: '08:00 - 15:30' },
              { day: 'Di', hours: '08:00 - 15:30' },
              { day: 'Mi', hours: '08:00 - 15:30' },
              { day: 'Do', hours: '08:00 - 15:30' },
              { day: 'Fr', hours: '08:00 - 15:30' }
            ].map((item, i) => (
              <div key={i} className="flex justify-between border-b border-slate-50 pb-1 max-w-[240px]">
                <span className="font-medium text-slate-700">{item.day}</span>
                <span>{item.hours}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="container mt-12 pt-6 border-t border-slate-100 text-[11px] text-slate-400">
        © {new Date().getFullYear()} OrthoMed. Alle Rechte vorbehalten.
      </div>
    </footer>
  )
}