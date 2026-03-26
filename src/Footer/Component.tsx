import Link from 'next/link'
import React from 'react'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  return (
    <footer className="mt-auto border-t border-[#E2E8F0] bg-[#F8FAFC]/50 py-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
        
        {/* ЛЕВО: Чистый логотип без подчеркиваний */}
        <div className="flex items-center">
          <Link href="/" className="no-underline flex items-center gap-2 group">
            <Logo />
            <span className="text-2xl font-light text-[#7BB8D9] tracking-tight group-hover:no-underline">OrthoMed</span>
          </Link>
        </div>

        {/* ЦЕНТР: Контакты (Шрифт 12px-13px как в Figma) */}
        <div className="text-[13px] leading-relaxed text-[#64748B]">
          <p className="font-medium text-[#1E293B] mb-3">OrthoMed</p>
          <p className="whitespace-pre-line mb-4">Musterstraße 1{"\n"}1234 Musterstadt</p>
          <div className="space-y-1">
            <p className="flex items-center gap-3">
              <span className="text-[#7BB8D9] w-3">T:</span> +43 123 456 789
            </p>
            <p className="flex items-center gap-3">
              <span className="text-[#7BB8D9] w-3">E:</span> praxis@orthomed.at
            </p>
          </div>
        </div>

        {/* ПРАВО: Часы работы (Аккуратная таблица) */}
        <div className="text-[13px] text-[#64748B]">
          <p className="font-medium text-[#1E293B] mb-3">Ordinationszeiten</p>
          <div className="flex flex-col gap-1.5">
            {[
              { d: 'Mo', h: '08:00 - 15:30' },
              { d: 'Di', h: '08:00 - 15:30' },
              { d: 'Mi', h: '08:00 - 15:30' },
              { d: 'Do', h: '08:00 - 15:30' },
              { d: 'Fr', h: '08:00 - 15:30' }
            ].map((item, i) => (
              <div key={i} className="flex justify-between border-b border-[#F1F5F9] pb-1 max-w-[200px]">
                <span className="text-[#94A3B8]">{item.d}</span>
                <span className="text-right tracking-tight">{item.h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Нижняя тонкая линия с копирайтом */}
      <div className="container mt-16 pt-6 border-t border-[#F1F5F9] text-[10px] text-[#94A3B8] flex justify-between uppercase tracking-widest">
        <span>© 2026 Dr. Lorem Ipsum</span>
        <span className="cursor-pointer hover:text-[#7BB8D9]">Impressum</span>
      </div>
    </footer>
  )
}