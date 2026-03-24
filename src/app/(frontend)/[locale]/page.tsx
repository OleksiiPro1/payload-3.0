import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero' // 1. ДОБАВЛЯЕМ ИМПОРТ
import { notFound } from 'next/navigation'

export default async function Page({ params: paramsPromise }: { params: Promise<{ slug?: string }> }) {
  const { slug = 'home' } = await paramsPromise
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

  return (
    <article>
      {/* 2. ДОБАВЛЯЕМ ВЫЗОВ HERO ПЕРЕД БЛОКАМИ */}
      <RenderHero {...(page.hero as any)} />
      
      {/* Контент под героем */}
      <RenderBlocks blocks={page.layout} />
    </article>
  )
}