import Image from 'next/image'
import Link from 'next/link'

export const RenderHero = (props: any) => {
  const { type, heading, eyebrow, description, links, media } = props ?? {}

  if (type === 'none') return null

  const showMedia = type === 'highImpact' || type === 'mediumImpact'

  const firstLink = Array.isArray(links) && links.length > 0 ? links[0] : null
  const buttonUrl = firstLink?.link?.url || '#'
  const buttonLabel = firstLink?.link?.label || 'Jetzt Beratungstermin vereinbaren'
  const buttonNewTab = Boolean(firstLink?.link?.newTab)

  const mediaUrl =
    media && typeof media === 'object' && 'url' in media
      ? media.url || '/main-hero.webp'
      : '/main-hero.webp'

  const mediaAlt =
    media && typeof media === 'object' && 'alt' in media
      ? media.alt || 'Hero image'
      : 'Hero image'

  return (
    <section className="bg-white py-5">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 rounded-[24px] bg-[#F8FCFE] p-8 md:grid-cols-2 md:p-12">
          <div className="max-w-[620px]">
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
                <Link
                  href={buttonUrl}
                  target={buttonNewTab ? '_blank' : undefined}
                  rel={buttonNewTab ? 'noopener noreferrer' : undefined}
                  className="inline-flex h-[50px] items-center justify-center rounded-full bg-[#7BA7C3] px-[30px] text-[16px] font-medium text-white transition hover:bg-[#6d99b5]"
                >
                  {buttonLabel}
                </Link>
              </div>
            )}
          </div>

          {showMedia && (
            <div className="flex justify-center md:justify-end">
              <Image
                src={mediaUrl}
                alt={mediaAlt}
                width={600}
                height={450}
                className="h-auto w-full max-w-[560px] rounded-[20px] object-cover"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}