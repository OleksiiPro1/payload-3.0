import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export const AboutSectionBlock: React.FC<any> = ({ 
  // Данные доктора
  eyebrow, 
  heading, 
  description, 
  doctorMedia, 
  doctorButtonLabel, 
  doctorButtonLink,
  // Данные карточек
  cardTitleEyebrow,
  cardTitleHeading,
  cardOptions
}) => {
  const doctorImageUrl =
    doctorMedia && typeof doctorMedia === 'object'
      ? getMediaUrl(doctorMedia.url, doctorMedia.updatedAt)
      : ''
  const doctorImageAlt = doctorMedia?.alt || 'Doctor image'

  return (
    <section className="bg-white py-16 px-5">
      <div className="mx-auto max-w-7xl relative overflow-hidden rounded-[32px] bg-[#F8FCFE] p-12 md:p-16 lg:p-20 ">
        
        {/* === БЛОК 1: ДОКТОР (Сверху) === */}
        <div className="grid items-center gap-12 lg:grid-cols-2 mb-20 border-[#565555]/10">
          
          {/* ТЕКСТОВАЯ ЧАСТЬ */}
          <div className="order-2 lg:order-1">
            {eyebrow && (
              <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-[#7BA7C3]">
                {eyebrow}
              </span>
            )}

            {heading && (
              <h2 className="mt-4 text-[38px] md:text-[46px] font-semibold leading-[1.1] text-[#565555] uppercase">
                {heading}
              </h2>
            )}

            {description && (
              <p className="mt-8 whitespace-pre-line text-[16px] md:text-[18px] font-light leading-[1.7] text-[#565555]/80">
                {description}
              </p>
            )}

            {doctorButtonLabel && (
              <div className="mt-10">
                <Link
                  href={doctorButtonLink || '#'}
                  className="inline-flex h-[54px] items-center justify-center rounded-full bg-[#7BA7C3]/70 px-8 text-[16px] font-medium text-white transition hover:bg-[#7BA7C3] shadow-sm"
                >
                  {doctorButtonLabel}
                </Link>
              </div>
            )}
          </div>

          {/* ИЗОБРАЖЕНИЕ ДОКТОРА */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative h-[350px] w-full max-w-[500px] md:h-[450px]">
              {doctorImageUrl && (
                <Image
                  src={doctorImageUrl}
                  alt={doctorImageAlt}
                  fill
                  className="rounded-[24px] object-cover object-center shadow-md"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              )}
            </div>
          </div>
        </div>

        {/* === БЛОК 2: ТЕРАПИЯ ОПЦИИ (Снизу) === */}
        <div>
          {/* ШАПКА КАРТОЧЕК */}
          

          {/* КАРТОЧКИ (Сетка из 2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cardOptions?.map((option: any, index: number) => (
              <Link 
                href={option.link || '#'} 
                key={index}
                className="group relative flex flex-col justify-between rounded-[32px] bg-white p-10 h-[380px] transition-all hover:shadow-xl border border-gray-100 hover:border-[#7BA7C3]/10"
              >
                {/* Иконка */}
                <div className="w-16 h-16 relative">
                  {option.icon?.url && (
                    <Image 
                      src={getMediaUrl(option.icon.url, option.icon.updatedAt)} 
                      alt="icon" 
                      width={64} 
                      height={64} 
                      className="object-contain text-[#565555]"
                      unoptimized
                    />
                  )}
                </div>

                {/* Текст и стрелка */}
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h4 className="text-[32px] font-semibold text-[#565555] leading-tight max-w-[80%]">
                      {option.title}
                    </h4>
                    <p className="mt-2 text-[16px] text-[#565555]/60 max-w-[90%]">
                      {option.subTitle}
                    </p>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#7BA7C3]/60 text-white transition-all group-hover:bg-[#7BA7C3] group-hover:scale-110 shadow-sm flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
