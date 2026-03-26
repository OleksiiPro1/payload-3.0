import Link from 'next/link'
import React from 'react'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  return (
    <footer className="mt-auto border-t border-blue-100 bg-[#F8FAFC] py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* ЛЕВО */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 no-underline group">
            <Logo />
            <span className="text-3xl font-light text-[#7BB8D9] tracking-tight group-no-underline">OrthoMed</span>
          </Link>
        </div>

        {/* ЦЕНТР (Данные из Figma) */}
        <div className="text-[14px] leading-relaxed text-slate-500">
          <p className="font-bold text-slate-800 mb-2 text-lg">OrthoMed</p>
          <p className="whitespace-pre-line mb-4">Musterstraße 1{"\n"}1234 Musterstadt</p>
          <p className="flex items-center gap-2">
            <span className="text-[#7BB8D9] font-bold">T:</span> +43 123 456 789
          </p>
          <p className="flex items-center gap-2">
            <span className="text-[#7BB8D9] font-bold">E:</span> praxis@orthomed.at
          </p>
        </div>

        {/* ПРАВО */}
        <div className="text-[14px] text-slate-500">
          <p className="font-bold text-slate-800 mb-2 text-lg">Ordinationszeiten</p>
          <div className="flex flex-col gap-1">
            {['Mo', 'Di', 'Mi', 'Do', 'Fr'].map((day) => (
              <div key={day} className="flex justify-between border-b border-blue-50 pb-1 max-w-[240px]">
                <span className="font-medium text-slate-700">{day}</span>
                <span>08:00 - 15:30</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}