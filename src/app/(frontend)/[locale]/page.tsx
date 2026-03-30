import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { ServicePageHero } from '@/heros/ServicePageHero'
import { notFound } from 'next/navigation'

const defaultLocale = 'de'

export default async function Page({
  params: paramsPromise,
}: {
  params: Promise<{ locale?: string }>
}) {
  const { locale } = await paramsPromise
  const slug = !locale || locale === defaultLocale ? 'home' : locale
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
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
