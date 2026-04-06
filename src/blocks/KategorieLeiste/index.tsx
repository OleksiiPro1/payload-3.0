import React from 'react'
import { LocalizedLink } from '@/components/LocalizedLink'

import { cn } from '@/utilities/ui'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export const KategorieLeisteBlock: React.FC<any> = ({ ueberschrift, kategorien }) => {
  const displayedKategorien = kategorien?.slice(0, 8)
  const shouldCenterLastCard =
    Array.isArray(displayedKategorien) &&
    displayedKategorien.length > 0 &&
    displayedKategorien.length % 4 === 1

  return (
    <section className="bg-white px-5 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        {ueberschrift && (
          <h2 className="mb-8 text-[34px] font-medium leading-[1.18] tracking-[-0.02em] text-[#565555] md:text-[46px]">
            {ueberschrift}
          </h2>
        )}

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {displayedKategorien?.map((kategorie: any, index: number) => {
            const hasIcon = kategorie.icon?.url
            const customBgColor = kategorie.backgroundColor || '#F8FCFE'
            const isLastCenteredCard = shouldCenterLastCard && index === displayedKategorien.length - 1

            return (
              <LocalizedLink
                href={kategorie.link || '#'}
                key={index}
                className={cn(
                  'group flex min-h-[72px] items-center justify-between gap-4 rounded-[20px] px-5 py-4 no-underline transition-all hover:shadow-md',
                  isLastCenteredCard && 'xl:col-start-2',
                )}
                style={{ backgroundColor: customBgColor }}
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                    {hasIcon ? (
                      <img
                        src={getMediaUrl(kategorie.icon.url, kategorie.icon.updatedAt)}
                        alt={`${kategorie.titel} icon`}
                        className="h-5 w-5 object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : null}
                  </div>

                  <span className="truncate text-[17px] font-medium text-[#565555]">
                    {kategorie.titel}
                  </span>
                </div>

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7BA7C3] text-white transition group-hover:scale-105">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </LocalizedLink>
            )
          })}
        </div>
      </div>
    </section>
  )
}
