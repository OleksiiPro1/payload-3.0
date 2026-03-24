import React from 'react'
import Link from 'next/link'

export const CallToActionBlock: React.FC<any> = ({ dachzeile, ueberschrift, beschreibung, link }) => {
  return (
    <section className="py-24 bg-white">
      {/* max-w-3xl (около 768px) делает текст узким и удобным для чтения */}
      <div className="mx-auto max-w-3xl px-5 text-center flex flex-col items-center">
        
        {dachzeile && (
          <p className="text-[14px] font-medium uppercase tracking-[0.2em] text-[#7BA7C3] mb-6">
            {dachzeile}
          </p>
        )}
        
        {ueberschrift && (
          <h2 className="text-[44px] font-medium text-[#444] leading-[1.2] mb-8">
            {ueberschrift}
          </h2>
        )}
        
        {beschreibung && (
          <div className="text-[19px] font-light leading-[1.8] text-[#666] mb-10 text-center">
            {/* Текст теперь будет аккуратным островком в центре */}
            {beschreibung}
          </div>
        )}

        {link?.url && (
          <Link
            href={link.url}
            className="inline-flex h-[52px] items-center justify-center rounded-full bg-[#7BA7C3] px-10 text-[16px] font-medium text-white transition-all hover:bg-[#6d99b5] hover:shadow-lg"
          >
            {link.label || 'Mehr erfahren'}
          </Link>
        )}
      </div>
    </section>
  )
}