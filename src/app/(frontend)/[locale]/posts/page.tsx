import type { Metadata } from 'next'
import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { notFound } from 'next/navigation'
import { defaultLocale, isSupportedLocale } from '@/utilities/i18n'

// ГОВОРИМ NEXT.JS НЕ СОБИРАТЬ ЭТУ СТРАНИЦУ ЗАРАНЕЕ
export const dynamic = 'force-dynamic'
export const revalidate = 600

type Args = {
  params: Promise<{
    pageNumber: string
    locale: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { pageNumber, locale } = await paramsPromise
  const activeLocale = isSupportedLocale(locale) ? locale : defaultLocale
  const payload = await getPayload({ config: configPromise })

  const sanitizedPageNumber = parseInt(pageNumber)

  // Если номер страницы некорректный — показываем 404
  if (isNaN(sanitizedPageNumber)) return notFound()

  // Запрос данных (сработает только когда сайт уже запущен)
  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    page: sanitizedPageNumber,
    locale: activeLocale as any,
    overrideAccess: false,
  })

  // Если постов нет на этой странице — 404
  if (!posts.docs || posts.docs.length === 0) return notFound()

  const title = activeLocale === 'en' ? 'Posts' : 'Beiträge'
  const singularLabel = activeLocale === 'en' ? 'Post' : 'Beitrag'
  const pluralLabel = activeLocale === 'en' ? 'Posts' : 'Beiträge'
  const zeroLabel = activeLocale === 'en' ? 'No posts found.' : 'Keine Beiträge gefunden.'

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>{title}</h1>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collection="posts"
          collectionLabels={{
            singular: singularLabel,
            plural: pluralLabel,
          }}
          currentPage={posts.page}
          limit={12}
          totalDocs={posts.totalDocs}
          zeroLabel={zeroLabel}
          summaryLabel={({ indexStart, indexEnd, totalDocs, singular, plural }) =>
            activeLocale === 'en'
              ? `Showing ${indexStart}${indexStart > 0 ? ` - ${indexEnd}` : ''} of ${totalDocs} ${
                  totalDocs > 1 ? plural : singular
                }`
              : `Zeige ${indexStart}${indexStart > 0 ? ` - ${indexEnd}` : ''} von ${totalDocs} ${
                  totalDocs > 1 ? plural : singular
                }`
          }
        />
      </div>

      <CollectionArchive posts={posts.docs} />

      <div className="container">
        {posts.totalPages > 1 && posts.page && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )}
      </div>
    </div>
  )
}

// ЭТА ФУНКЦИЯ БОЛЬШЕ НЕ ТРОГАЕТ БАЗУ ПРИ СБОРКЕ
export async function generateStaticParams() {
  return []
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Posts`,
  }
}


/* export const dynamic = 'force-dynamic'
import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Posts</h1>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collection="posts"
          currentPage={posts.page}
          limit={12}
          totalDocs={posts.totalDocs}
        />
      </div>

      <CollectionArchive posts={posts.docs} />

      <div className="container">
        {posts.totalPages > 1 && posts.page && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Posts`,
  }
}
*/
