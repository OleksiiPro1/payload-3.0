import { LocalizedLink } from '@/components/LocalizedLink'
import { Media } from '@/components/Media'

export const RenderHero = (props: any) => {
  const { type, heading, eyebrow, description, links, media } = props ?? {}

  if (type === 'none') return null

  const showMedia = type === 'highImpact' || type === 'mediumImpact'

  const firstLink = Array.isArray(links) && links.length > 0 ? links[0] : null
  const buttonUrl = firstLink?.link?.url || '#'
  const buttonLabel = firstLink?.link?.label || 'Jetzt Beratungstermin vereinbaren'
  const buttonNewTab = Boolean(firstLink?.link?.newTab)

  const mediaAlt =
    media && typeof media === 'object' && 'alt' in media
      ? media.alt || 'Hero image'
      : 'Hero image'

  return (
    <section className="bg-white py-4 md:py-5">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 rounded-[24px] bg-[#F8FCFE] p-8 md:-mx-2 lg:-mx-4 xl:-mx-6 md:grid-cols-[minmax(0,1fr)_minmax(320px,620px)] md:p-12">
          <div className="min-w-0 max-w-[680px]">
            {heading && (
              <h1 className="text-[55px] font-medium leading-[1.1] tracking-[-0.015em] text-[#7BA7C3]">
                {heading}
              </h1>
            )}

            {eyebrow && (
              <p className="mt-4 text-[13px] font-medium uppercase tracking-[0.12em] text-[#7BA7C3]">
                {eyebrow}
              </p>
            )}

            {description && (
              <p className="mt-4 max-w-[500px] text-[18px] font-light leading-[1.8] text-[#565555]">
                {description}
              </p>
            )}

            {firstLink && (
              <div className="mt-8">
                <LocalizedLink
                  href={buttonUrl}
                  target={buttonNewTab ? '_blank' : undefined}
                  rel={buttonNewTab ? 'noopener noreferrer' : undefined}
                  className="inline-flex h-[50px] items-center justify-center rounded-full bg-[#7BA7C3] px-[30px] text-[16px] font-medium text-white no-underline transition hover:bg-[#6d99b5]"
                >
                  {buttonLabel}
                </LocalizedLink>
              </div>
            )}
          </div>

          {showMedia && (
            <div className="min-w-0 flex justify-center md:justify-end">
              {media && typeof media === 'object' ? (
                <Media
                  resource={media}
                  imgClassName="h-auto w-full max-w-[620px] rounded-[20px] object-cover"
                  priority
                />
              ) : (
                <img
                  src="/main-hero.webp"
                  alt={mediaAlt}
                  width={600}
                  height={450}
                  className="h-auto w-full max-w-[620px] rounded-[20px] object-cover"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
