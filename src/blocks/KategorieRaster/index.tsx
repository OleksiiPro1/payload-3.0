import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/utilities/ui'

export const KategorieRasterBlock: React.FC<any> = ({ ueberschrift, kategorien }) => {
  const displayedKategorien = kategorien?.slice(0, 9)
  const shouldCenterLastCard =
    Array.isArray(displayedKategorien) && displayedKategorien.length > 0 && displayedKategorien.length % 3 === 1

  return (
    <section className="bg-white pb-20 pt-16 px-5"> 
      <div className="mx-auto max-w-7xl">
        {ueberschrift && (
          <h2 className="text-[36px] md:text-[48px] font-semibold text-[#565555] mb-12 leading-tight tracking-tight">
            {ueberschrift}
          </h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[290px]">
          {displayedKategorien?.map((kategorie: any, index: number) => {
            const hasImage = kategorie.bild?.url
            const hasIcon = kategorie.icon?.url
            
            // Если в админке пусто, используем стандартный светлый цвет
            const customBgColor = kategorie.backgroundColor || '#F8FCFE'
            const isLastCenteredCard = shouldCenterLastCard && index === displayedKategorien.length - 1
            
            return (
              <Link 
                href={kategorie.link || '#'} 
                key={index}
                className={cn(
                  'group relative flex flex-col overflow-hidden rounded-[32px] p-8 transition-all hover:shadow-xl',
                  isLastCenteredCard && 'lg:col-start-2',
                )}
                style={{ 
                  backgroundColor: !hasImage ? customBgColor : 'transparent' 
                }}
              >
                {/* 1. ФОНОВОЕ ИЗОБРАЖЕНИЕ */}
                {hasImage && (
                  <>
                    <Image
                      src={kategorie.bild.url}
                      alt={kategorie.titel}
                      fill
                      className="object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Мягкий градиент для читаемости текста на любом фото */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-[1]" />
                  </>
                )}

                {/* 2. КОНТЕНТ КАРТОЧКИ */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  
                  {/* ИКОНКА */}
                  <div className="w-12 h-12 relative transition-transform duration-500 group-hover:-translate-y-1">
                    {hasIcon && (
                      <Image 
                        src={kategorie.icon.url} 
                        alt="icon" 
                        width={48} 
                        height={48} 
                        // Иконка белая, если есть фото, иначе — оригинал
                        className={`object-contain ${hasImage ? 'brightness-0 invert' : ''}`} 
                      />
                    )}
                  </div>

                  {/* ТИТУЛ И КНОПКА */}
                  <div className="flex items-end justify-between gap-4">
                    <h3 className={`text-[24px] font-semibold leading-tight max-w-[70%] 
                      ${hasImage ? 'text-white' : 'text-[#565555]'}`}>
                      {kategorie.titel}
                    </h3>

                    {/* Кнопка-стрелка */}
                    <div className={`relative flex h-11 w-11 items-center justify-center rounded-full transition-all flex-shrink-0
                      ${hasImage 
                        ? 'bg-white text-[#7BA7C3]' 
                        : 'bg-[#7BA7C3] text-white'
                      } group-hover:scale-110 shadow-sm`}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
