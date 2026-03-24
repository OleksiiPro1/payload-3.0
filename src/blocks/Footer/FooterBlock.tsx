import React from 'react'
import Link from 'next/link'

export const FooterBlock: React.FC<any> = (props) => {
  // Вытаскиваем данные. Если данных нет, используем пустые значения, чтобы не упало
  const { 
    logoText = 'OrthoMed', 
    address = '', 
    phone = '', 
    email = '', 
    openingHours = [], 
    copyright = '© 2026 Dr. Lorem Ipsum' 
  } = props

  return (
    <footer className="bg-white pt-10 pb-10 px-5">
      <div className="mx-auto max-w-7xl">
        
        {/* ГОЛУБАЯ КАРТОЧКА */}
        <div className="bg-[#F8FCFE] rounded-[40px] p-12 md:p-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* ЛЕВАЯ ЧАСТЬ: ЛОГОТИП */}
          <div className="lg:col-span-5">
            <h2 className="text-[50px] md:text-[70px] font-medium text-[#7BA7C3]/40 leading-none tracking-tight">
              {logoText}
            </h2>
          </div>

          {/* СРЕДНЯЯ ЧАСТЬ: КОНТАКТЫ */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="font-bold text-[#565555] text-[16px] border-b border-[#7BA7C3] inline-block self-start pb-1">
              OrthoMed
            </h4>
            
            <div className="flex flex-col gap-5 text-[#565555]/70 text-[15px]">
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-[#7BA7C3] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <p className="whitespace-pre-line leading-relaxed">{address}</p>
              </div>

              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-[#7BA7C3] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <p>{phone}</p>
              </div>

              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-[#7BA7C3] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <p>{email}</p>
              </div>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: ВРЕМЯ РАБОТЫ */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-[#565555] text-[16px] mb-6">Ordinationszeiten</h4>
            <div className="flex flex-col gap-3">
              {openingHours?.map((item: any, i: number) => (
                <div key={i} className="flex justify-between text-[#565555]/70 text-[15px] border-b border-gray-100 pb-1">
                  <span className="font-medium w-10">{item.day}</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COPYRIGHT & LINKS */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-[13px] text-gray-400 px-4">
          <p>{copyright}</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/impressum" className="hover:text-[#7BA7C3] transition">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-[#7BA7C3] transition">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}