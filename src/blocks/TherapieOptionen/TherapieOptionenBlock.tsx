import React from 'react'
import Link from 'next/link'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export const TherapieOptionenBlock: React.FC<any> = ({ 
  eyebrow, 
  heading, 
  description, 
  options 
}) => {
  return (
    <section className="bg-white px-5 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        
        {/* ШАПКА СЕКЦИИ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-start">
          <div>
            {eyebrow && (
              <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-[#7BA7C3]">
                {eyebrow}
              </span>
            )}
            {heading && (
              <h2 className="mt-4 text-[42px] font-semibold leading-[1.1] text-[#565555]">
                {heading}
              </h2>
              
            )}
          </div>
          <div>
            {description && (
              <p className="text-[16px] font-light leading-[1.7] text-[#565555]/70 lg:pt-10">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* КАРТОЧКИ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {options?.map((option: any, index: number) => (
            <Link 
              href={option.link || '#'} 
              key={index}
              className="group relative flex flex-col justify-between rounded-[32px] bg-[#F8FCFE] p-10 h-[380px] transition-all hover:shadow-lg border border-transparent hover:border-[#7BA7C3]/20"
            >
              {/* Иконка */}
              <div className="w-16 h-16 relative">
                {option.icon?.url && (
                  <img 
                    src={getMediaUrl(option.icon.url, option.icon.updatedAt)} 
                    alt="icon" 
                    className="h-16 w-16 object-contain text-[#565555]"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </div>

              {/* Текст и стрелка */}
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-[32px] font-semibold text-[#565555]">
                    {option.title}
                  </h3>
                  <p className="mt-2 text-[16px] text-[#565555]/60">
                    {option.subTitle}
                  </p>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#7BA7C3]/60 text-white transition-all group-hover:bg-[#7BA7C3] group-hover:scale-110">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
