import Link from 'next/link'
import { Media } from '@/components/Media'

export const ServicePageHero = (props: any) => {
  const { heading, eyebrow, description, links, media } = props ?? {}

  const firstLink = Array.isArray(links) && links.length > 0 ? links[0] : null
  const buttonUrl = firstLink?.link?.url || '#'
  const buttonLabel = firstLink?.link?.label || 'Termin vereinbaren'
  const buttonNewTab = Boolean(firstLink?.link?.newTab)

  const mediaAlt =
    media && typeof media === 'object' && 'alt' in media
      ? media.alt || 'Service page image'
      : 'Service page image'

  return (
    <section className="bg-white py-4 md:py-5">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-10 rounded-[28px] bg-[#F8FCFE] px-6 py-8 md:-mx-2 lg:-mx-4 xl:-mx-6 md:grid-cols-[minmax(0,1fr)_minmax(320px,620px)] md:px-12 md:py-12">
          <div className="min-w-0 max-w-[680px]">
            {eyebrow && (
              <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.14em] text-[#7BA7C3]">
                {eyebrow}
              </p>
            )}

            {heading && (
              <h1 className="text-[36px] font-medium leading-[1.08] tracking-[-0.02em] text-[#7BA7C3] [overflow-wrap:anywhere] md:text-[48px] lg:text-[56px]">
                {heading}
              </h1>
            )}

            {description && (
              <p className="mt-6 max-w-[560px] text-[17px] font-light leading-[1.75] text-[#565555]/80 [overflow-wrap:anywhere] md:text-[18px]">
                {description}
              </p>
            )}

            {firstLink && (
              <div className="mt-8">
                <Link
                  href={buttonUrl}
                  target={buttonNewTab ? '_blank' : undefined}
                  rel={buttonNewTab ? 'noopener noreferrer' : undefined}
                  className="inline-flex min-h-[52px] max-w-full items-center justify-center rounded-full bg-[#7BA7C3] px-6 py-3 text-center text-[16px] font-medium text-white no-underline transition hover:bg-[#6d99b5] md:px-8"
                >
                  {buttonLabel}
                </Link>
              </div>
            )}
          </div>

          <div className="min-w-0 flex justify-center md:justify-end">
            {media && typeof media === 'object' ? (
              <Media
                resource={media}
                imgClassName="h-auto w-full max-w-[620px] rounded-[24px] object-cover"
                priority
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
