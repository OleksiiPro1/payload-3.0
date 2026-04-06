import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { notFound } from 'next/navigation'
import React from 'react'
import { defaultLocale } from '@/utilities/i18n'

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
    // Добавляем 'as any', чтобы убрать ошибку типизации
    locale: defaultLocale as any,
    limit: 1,
  })

  const page = result.docs[0]

  if (!page) {
    return notFound()
  }

  return (
    <article>
      {/* Здесь тоже добавляем проверку и 'as any' для безопасности */}
      <RenderHero {...(page.hero as any)} />
      <RenderBlocks blocks={page.layout as any} />
    </article>
  )
}
