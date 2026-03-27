'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/utilities/ui'

export const HeaderClient: React.FC<{ data: any }> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { navItems, phone } = data || {}

  return (
    // Изменили fixed на sticky и добавили pt-6, чтобы был отступ от верха экрана
    <header className="sticky top-0 z-[100] w-full bg-white pt-6 px-5 font-sans">
      <div className="mx-auto max-w-7xl">
        
        {/* ГЛАВНАЯ КАПСУЛА */}
        <div className="flex h-[72px] items-center justify-between rounded-full bg-[#F8FCFE] border border-white/40 px-6 md:px-8 shadow-sm backdrop-blur-md">
          
          {/* Логотип */}
          <Link href="/" className="flex items-center shrink-0">
            <span className="text-[22px] md:text-[24px] font-semibold text-[#7BA7C3]">Ortho</span>
            <span className="text-[22px] md:text-[24px] font-light text-[#7BA7C3]">Med</span>
          </Link>

          {/* ДЕСКТОПНОЕ МЕНЮ */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems?.map((item: any, i: number) => {
              // Исправляем получение ссылки из Payload
              const label = item.link?.label || item.label;
              const href = item.link?.url || item.url || '#';
              return (
                <Link 
                  key={i} 
                  href={href} 
                  className="text-[14px] xl:text-[15px] font-medium text-[#565555] no-underline transition hover:text-[#7BA7C3]"
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* ПРАВАЯ ЧАСТЬ */}
          <div className="flex items-center gap-3 md:gap-6">
            
            {/* ТЕЛЕФОН - Убрал hidden xl:block, теперь он виден от планшета (md:flex) */}
            {phone && (
              <a href={`tel:${phone}`} className="hidden md:flex items-center gap-2 text-[14px] xl:text-[15px] font-medium text-[#7BA7C3] no-underline hover:opacity-70 transition">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                {phone}
              </a>
            )}

            {/* Кнопка записи */}
            <Link 
              href="/kontakt" 
              className="rounded-full border border-[#7BA7C3] px-4 py-2 md:px-6 md:py-2.5 text-[13px] md:text-[15px] font-medium text-[#7BA7C3] no-underline transition hover:bg-[#7BA7C3] hover:text-white shrink-0"
            >
              Termin <span className="hidden sm:inline">vereinbaren</span>
            </Link>

            {/* БУРГЕР */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7BA7C3]/10 lg:hidden"
            >
              {/* Иконка бургера */}
              <div className="relative w-5 h-4">
                <span className={cn("absolute block h-0.5 w-5 bg-[#7BA7C3] transition-all duration-300", isOpen ? "top-2 rotate-45" : "top-0")} />
                <span className={cn("absolute top-1.5 block h-0.5 w-5 bg-[#7BA7C3] transition-opacity duration-300", isOpen ? "opacity-0" : "opacity-100")} />
                <span className={cn("absolute block h-0.5 w-5 bg-[#7BA7C3] transition-all duration-300", isOpen ? "top-2 -rotate-45" : "top-3")} />
              </div>
            </button>
          </div>
        </div>

        {/* МОБИЛЬНОЕ МЕНЮ */}
        <div className={cn(
          "absolute top-[100px] left-5 right-5 overflow-hidden rounded-[32px] bg-white border border-gray-100 p-8 shadow-2xl transition-all duration-300 lg:hidden",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}>
           <div className="flex flex-col gap-6">
            {navItems?.map((item: any, i: number) => (
              <Link 
                key={i} 
                href={item.link?.url || '#'} 
                onClick={() => setIsOpen(false)}
                className="text-[18px] font-medium text-[#565555] no-underline"
              >
                {item.link?.label}
              </Link>
            ))}
            {phone && (
              <>
                <hr className="border-gray-100" />
                <a href={`tel:${phone}`} className="text-[20px] font-semibold text-[#7BA7C3] no-underline">{phone}</a>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Добавляем пустой div под sticky хедером, чтобы контент не "прыгал", или просто используем mb-10 */}
      <div className="mb-5" />
    </header>
  )
}
