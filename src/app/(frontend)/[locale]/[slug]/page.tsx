export const dynamic = 'force-dynamic'
import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import React, { cache } from 'react'
import { homeStatic } from '@/endpoints/seed/home-static'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { ServicePageHero } from '@/heros/ServicePageHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { defaultLocale, isSupportedLocale } from '@/utilities/i18n'

/**
 * Генерируем статические параметры для всех страниц из базы данных.
 * Это ускоряет работу сайта, создавая HTML файлы заранее.
 */
/* export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params
} */

type Args = {
  params: Promise<{
    slug?: string
    locale: string // Добавили поддержку локали
  }>
}

/**
 * ОСНОВНОЙ КОМПОНЕНТ СТРАНИЦЫ
 */
export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = 'home', locale } = await paramsPromise
  const activeLocale = isSupportedLocale(locale) ? locale : defaultLocale
  const decodedSlug = decodeURIComponent(slug)
  const url = '/' + (activeLocale !== defaultLocale ? `${activeLocale}/` : '') + decodedSlug

  // Запрашиваем данные страницы из Payload
  const page = await queryPageBySlug({
    slug: decodedSlug,
    locale: activeLocale,
  })

  // Если страницы нет в БД, но это главная — используем статический сид (заглушку)
  let displayPage = page
  if (!displayPage && slug === 'home') {
    displayPage = homeStatic as any
  }

  // Если страницы всё равно нет — возвращаем обычный 404
  if (!displayPage) {
    return notFound()
  }

  const { hero, layout } = displayPage
  const HeroComponent = decodedSlug === 'home' ? RenderHero : ServicePageHero

  return (
    <article className="pt-1 pb-24">
      <PageClient />

      {/* Включаем Live Preview, если активен режим черновика */}
      {draft && <LivePreviewListener />}

      {/* Рендерим Hero (верхняя часть) */}
      <HeroComponent {...(hero as any)} />

      {/* Рендерим массив блоков (контентная часть) */}
      <RenderBlocks blocks={layout} />
    </article>
  )
}

/**
 * Генерируем метаданные (SEO) для страницы
 */
export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = 'home', locale } = await paramsPromise
  const activeLocale = isSupportedLocale(locale) ? locale : defaultLocale
  const decodedSlug = decodeURIComponent(slug)
  
  const page = await queryPageBySlug({
    slug: decodedSlug,
    locale: activeLocale,
  })

  return generateMeta({ doc: page })
}

/**
 * Функция запроса данных с использованием кеширования Next.js
 */
const queryPageBySlug = cache(async ({ slug, locale }: { slug: string; locale: string }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    locale: locale as any, // Передаем локаль в запрос к БД
    fallbackLocale: defaultLocale as any,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
