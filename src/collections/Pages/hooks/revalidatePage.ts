import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'
import { defaultLocale, locales } from '@/utilities/i18n'

import type { Page } from '../../../payload-types'

export const revalidatePage: CollectionAfterChangeHook<Page> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      locales.forEach((locale) => {
        const path =
          doc.slug === 'home'
            ? locale === defaultLocale
              ? '/'
              : `/${locale}`
            : locale === defaultLocale
              ? `/${doc.slug}`
              : `/${locale}/${doc.slug}`

        payload.logger.info(`Revalidating page at path: ${path}`)
        revalidatePath(path)
      })
      revalidateTag('pages-sitemap')
    }

    // If the page was previously published, we need to revalidate the old path
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      locales.forEach((locale) => {
        const oldPath =
          previousDoc.slug === 'home'
            ? locale === defaultLocale
              ? '/'
              : `/${locale}`
            : locale === defaultLocale
              ? `/${previousDoc.slug}`
              : `/${locale}/${previousDoc.slug}`

        payload.logger.info(`Revalidating old page at path: ${oldPath}`)
        revalidatePath(oldPath)
      })
      revalidateTag('pages-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Page> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    locales.forEach((locale) => {
      const path =
        doc?.slug === 'home'
          ? locale === defaultLocale
            ? '/'
            : `/${locale}`
          : locale === defaultLocale
            ? `/${doc?.slug}`
            : `/${locale}/${doc?.slug}`

      revalidatePath(path)
    })
    revalidateTag('pages-sitemap')
  }

  return doc
}
