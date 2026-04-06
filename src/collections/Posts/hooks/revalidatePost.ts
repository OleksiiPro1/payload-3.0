import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'
import { defaultLocale, locales } from '@/utilities/i18n'

import type { Post } from '../../../payload-types'

export const revalidatePost: CollectionAfterChangeHook<Post> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      locales.forEach((locale) => {
        const path =
          locale === defaultLocale ? `/posts/${doc.slug}` : `/${locale}/posts/${doc.slug}`

        payload.logger.info(`Revalidating post at path: ${path}`)
        revalidatePath(path)
      })
      revalidateTag('posts-sitemap')
    }

    // If the post was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      locales.forEach((locale) => {
        const oldPath =
          locale === defaultLocale ? `/posts/${previousDoc.slug}` : `/${locale}/posts/${previousDoc.slug}`

        payload.logger.info(`Revalidating old post at path: ${oldPath}`)
        revalidatePath(oldPath)
      })
      revalidateTag('posts-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Post> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    locales.forEach((locale) => {
      const path = locale === defaultLocale ? `/posts/${doc?.slug}` : `/${locale}/posts/${doc?.slug}`

      revalidatePath(path)
    })
    revalidateTag('posts-sitemap')
  }

  return doc
}
