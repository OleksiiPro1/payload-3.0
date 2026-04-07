import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { ServicePageHero } from '@/heros/ServicePageHero'
import { notFound } from 'next/navigation'
import { defaultLocale, isSupportedLocale } from '@/utilities/i18n'

export default async function Page({ 
  params: paramsPromise,
}: {
  params: Promise<{ locale?: string }>
}) {
  const { locale: localeOrSlug } = await paramsPromise
  const activeLocale = isSupportedLocale(localeOrSlug) ? localeOrSlug : defaultLocale
  const slug = !localeOrSlug || isSupportedLocale(localeOrSlug) ? 'home' : localeOrSlug
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    locale: activeLocale as any,
    fallbackLocale: defaultLocale as any,
    where: {
      slug: { equals: slug },
    },
    limit: 1,
  })

  const page = result.docs[0]

  if (!page) return notFound()

  const HeroComponent = slug === 'home' ? RenderHero : ServicePageHero

  return (
    <article>
      <HeroComponent {...(page.hero as any)} />
      <RenderBlocks blocks={page.layout} />
    </article>
  )
}

