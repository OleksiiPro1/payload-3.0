import Link from 'next/link'
import React from 'react'
import { getCachedGlobal } from '@/utilities/getGlobals'

type FooterData = {
  address?: string | null
  phone?: string | null
  email?: string | null
  openingHours?:
    | {
        day?: string | null
        hours?: string | null
        id?: string | null
      }[]
    | null
}

export async function Footer() {
  const footer = (await getCachedGlobal('footer', 1)()) as FooterData

  const address = footer?.address || 'Musterstraße 1\n1234 Musterstadt'
  const phone = footer?.phone || '+43 123 456 789'
  const email = footer?.email || 'praxis@orthomed.at'
  const openingHours = footer?.openingHours?.length
    ? footer.openingHours
    : [
        { day: 'Mo', hours: '08:00 - 15:10' },
        { day: 'Di', hours: '08:00 - 15:30' },
        { day: 'Mi', hours: '08:00 - 15:30' },
        { day: 'Do', hours: '08:00 - 15:30' },
        { day: 'Fr', hours: '08:00 - 15:30' },
      ]

  const phoneHref = `tel:${phone.replace(/\s+/g, '')}`

  return (
    <footer
      className="mt-16 bg-white"
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1560px',
          paddingLeft: '32px',
          paddingRight: '32px',
          
        }}
      >
        <div className="rounded-[24px] bg-[#F3F8FB] px-6 py-8 md:px-10 md:py-10" >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
            <div className="flex items-start">
              <Link href="/" className="inline-flex items-center no-underline">
                <span className="text-[42px] font-light leading-none tracking-tight text-[#84BDD9] md:text-[50px]">
                  OrthoMed
                </span>
              </Link>
            </div>

            <div className="text-[13px] leading-[1.9] text-[#8A94A6]">
              <p className="mb-3 text-[14px] font-semibold text-[#4C5563]">OrthoMed</p>
              <p className="whitespace-pre-line">{address}</p>

              <div className="mt-4 space-y-2">
                <p>
                  <span className="mr-2 text-[#8FC3E0]">T:</span>
                  <Link href={phoneHref} className="hover:text-[#84BDD9]">
                    {phone}
                  </Link>
                </p>

                <p>
                  <span className="mr-2 text-[#8FC3E0]">E:</span>
                  <a href={`mailto:${email}`} className="hover:text-[#84BDD9]">
                    {email}
                  </a>
                </p>
              </div>
            </div>

            <div className="text-[13px] leading-[1.9] text-[#8A94A6]">
              <p className="mb-3 text-[14px] font-semibold text-[#4C5563]">
                Ordinationszeiten
              </p>

              <div className="space-y-1">
                {openingHours.map((item, index) => (
                  <div
                    key={item?.id || `${item?.day || 'day'}-${index}`}
                    className="grid grid-cols-[36px_1fr] gap-4 border-b border-[#E4EEF4] pb-1"
                  >
                    <span>{item?.day || ''}</span>
                    <span>{item?.hours || ''}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-[#E4EEF4] pt-4 text-[10px] text-[#A1AAB8]">
            <span>© 2026 Dr. Lorem Ipsum</span>

            <Link
              href="/impressum"
              className="uppercase tracking-[0.16em] hover:text-[#84BDD9]"
            >
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}