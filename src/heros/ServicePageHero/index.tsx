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
    <section className="bg-white py-6 md:py-10">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-10 rounded-[28px] bg-[#F8FCFE] px-8 py-10 md:grid-cols-2 md:px-12 md:py-14">
          <div className="max-w-[620px]">
            {eyebrow && (
              <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.14em] text-[#7BA7C3]">
                {eyebrow}
              </p>
            )}

            {heading && (
              <h1 className="text-[42px] font-medium leading-[1.08] tracking-[-0.02em] text-[#565555] md:text-[56px]">
                {heading}
              </h1>
            )}

            {description && (
              <p className="mt-6 max-w-[560px] text-[18px] font-light leading-[1.75] text-[#565555]/80">
                {description}
              </p>
            )}

            {firstLink && (
              <div className="mt-8">
                <Link
                  href={buttonUrl}
                  target={buttonNewTab ? '_blank' : undefined}
                  rel={buttonNewTab ? 'noopener noreferrer' : undefined}
                  className="inline-flex h-[52px] items-center justify-center rounded-full bg-[#7BA7C3] px-8 text-[16px] font-medium text-white no-underline transition hover:bg-[#6d99b5]"
                >
                  {buttonLabel}
                </Link>
              </div>
            )}
          </div>

          <div className="flex justify-center md:justify-end">
            {media && typeof media === 'object' ? (
              <Media
                resource={media}
                imgClassName="h-auto w-full max-w-[560px] rounded-[24px] object-cover"
                priority
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
