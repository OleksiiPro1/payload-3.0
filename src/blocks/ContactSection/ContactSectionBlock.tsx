import React from 'react'
import { LocalizedLink } from '@/components/LocalizedLink'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export const ContactSectionBlock: React.FC<any> = ({ 
  media, 
  eyebrow, 
  heading, 
  subtext, 
  primaryButtonLabel, 
  primaryButtonLink, 
  phoneLabel 
}) => {
  const imageUrl =
    media && typeof media === 'object' ? getMediaUrl(media.url, media.updatedAt) : ''
  const imageAlt =
    media && typeof media === 'object' && 'alt' in media ? media.alt || 'Interior' : 'Interior'
  
  return (
    <section className="bg-white px-5 py-10 md:py-12">
      <div className="mx-auto max-w-7xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20">
          
          {/* ИЗОБРАЖЕНИЕ (СЛЕВА) */}
          <div className="relative h-[300px] md:h-[450px] w-full">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={imageAlt}
                className="h-full w-full rounded-[32px] object-cover"
                loading="eager"
                decoding="async"
              />
            )}
          </div>

          {/* ТЕКСТОВАЯ ЧАСТЬ (СПРАВА) */}
          <div className="flex flex-col items-start">
            {eyebrow && (
              <span className="text-[14px] font-medium text-[#7BA7C3] tracking-wide mb-2">
                {eyebrow}
              </span>
            )}
            
            {heading && (
              <h2 className="mb-4 text-[34px] font-medium leading-[1.18] tracking-[-0.02em] text-[#565555] md:text-[46px]">
                {heading}
              </h2>
            )}

            {subtext && (
              <p className="text-[13px] font-medium text-[#7BA7C3] uppercase tracking-[0.1em] mb-10">
                {subtext}
              </p>
            )}

            {/* ГРУППА КНОПОК */}
            <div className="flex flex-wrap items-center gap-4">
              {primaryButtonLabel && (
                <LocalizedLink 
                  href={primaryButtonLink || '#'}
                  className="bg-[#7BA7C3]/80 hover:bg-[#7BA7C3] text-white px-8 h-[54px] flex items-center justify-center rounded-full transition-all text-[15px] font-medium shadow-sm"
                >
                  {primaryButtonLabel}
                </LocalizedLink>
              )}

              {phoneLabel && (
                <LocalizedLink 
                  href={`tel:${phoneLabel.replace(/\s+/g, '')}`}
                  className="border border-[#7BA7C3]/40 hover:border-[#7BA7C3] text-[#7BA7C3] px-8 h-[54px] flex items-center justify-center rounded-full transition-all text-[15px] font-medium gap-3 group"
                >
                  {/* Иконка трубки (SVG) */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-12">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  {phoneLabel}
                </LocalizedLink>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
