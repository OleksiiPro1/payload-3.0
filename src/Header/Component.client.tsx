'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utilities/ui'
import {
  getLocaleFromPathname,
  isSupportedLocale,
  locales,
  localizeHref,
} from '@/utilities/i18n'

const getPathForLocale = (pathname: string, targetLocale: 'de' | 'en') => {
  const segments = pathname.split('/').filter(Boolean)
  const pathWithoutLocale = isSupportedLocale(segments[0]) ? `/${segments.slice(1).join('/')}` : pathname
  const normalizedPath = pathWithoutLocale || '/'

  return localizeHref(normalizedPath, targetLocale)
}

export const HeaderClient: React.FC<{ data: any }> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { navItems, phone } = data || {}
  const pathname = usePathname() || '/'
  const locale = getLocaleFromPathname(pathname)
  const appointmentLabel = locale === 'en' ? 'Book appointment' : 'Termin vereinbaren'

  return (
    <header className="w-full bg-white px-5 pt-6 font-sans">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-[72px] items-center justify-between rounded-full bg-[#F8FCFE] border border-white/40 px-6 md:px-8 shadow-sm backdrop-blur-md">
          <Link href={localizeHref('/', locale)} className="flex items-center shrink-0">
            <span className="text-[22px] md:text-[24px] font-semibold text-[#7BA7C3]">Ortho</span>
            <span className="text-[22px] md:text-[24px] font-light text-[#7BA7C3]">Med</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems?.map((item: any, i: number) => {
              const label = item.link?.label || item.label
              const href = item.link?.url || item.url || '#'
              return (
                <Link 
                  key={i} 
                  href={localizeHref(href, locale)} 
                  className="text-[14px] xl:text-[15px] font-medium text-[#565555] no-underline transition hover:text-[#7BA7C3]"
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden md:flex items-center gap-1 rounded-full border border-[#7BA7C3]/20 bg-white/70 p-1">
              {locales.map((targetLocale) => {
                const isActive = locale === targetLocale

                return (
                  <Link
                    key={targetLocale}
                    href={getPathForLocale(pathname, targetLocale)}
                    className={cn(
                      'rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] no-underline transition',
                      isActive
                        ? 'bg-[#7BA7C3] text-white'
                        : 'text-[#7BA7C3] hover:bg-[#7BA7C3]/10',
                    )}
                  >
                    {targetLocale}
                  </Link>
                )
              })}
            </div>

            {phone && (
              <a href={`tel:${phone}`} className="hidden md:flex items-center gap-2 text-[14px] xl:text-[15px] font-medium text-[#7BA7C3] no-underline hover:opacity-70 transition">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                {phone}
              </a>
            )}

            <Link 
              href={localizeHref('/kontakt', locale)} 
              className="rounded-full border border-[#7BA7C3] px-4 py-2 md:px-6 md:py-2.5 text-[13px] md:text-[15px] font-medium text-[#7BA7C3] no-underline transition hover:bg-[#7BA7C3] hover:text-white shrink-0"
            >
              {appointmentLabel}
            </Link>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7BA7C3]/10 lg:hidden"
            >
              <div className="relative w-5 h-4">
                <span className={cn("absolute block h-0.5 w-5 bg-[#7BA7C3] transition-all duration-300", isOpen ? "top-2 rotate-45" : "top-0")} />
                <span className={cn("absolute top-1.5 block h-0.5 w-5 bg-[#7BA7C3] transition-opacity duration-300", isOpen ? "opacity-0" : "opacity-100")} />
                <span className={cn("absolute block h-0.5 w-5 bg-[#7BA7C3] transition-all duration-300", isOpen ? "top-2 -rotate-45" : "top-3")} />
              </div>
            </button>
          </div>
        </div>

        <div className={cn(
          "absolute left-5 right-5 top-[100px] overflow-hidden rounded-[32px] bg-white border border-gray-100 p-8 shadow-2xl transition-all duration-300 lg:hidden",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}>
           <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              {locales.map((targetLocale) => {
                const isActive = locale === targetLocale

                return (
                  <Link
                    key={targetLocale}
                    href={getPathForLocale(pathname, targetLocale)}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] no-underline transition',
                      isActive
                        ? 'bg-[#7BA7C3] text-white'
                        : 'border border-[#7BA7C3]/20 text-[#7BA7C3]',
                    )}
                  >
                    {targetLocale}
                  </Link>
                )
              })}
            </div>

            {navItems?.map((item: any, i: number) => (
              <Link 
                key={i} 
                href={localizeHref(item.link?.url || '#', locale)} 
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
      <div className="mb-5" />
    </header>
  )
}
