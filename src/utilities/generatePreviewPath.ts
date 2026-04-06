import { PayloadRequest, CollectionSlug } from 'payload'
import { AppLocale, defaultLocale, isSupportedLocale } from './i18n'

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  posts: '/posts',
  pages: '',
}

type Props = {
  collection: keyof typeof collectionPrefixMap
  locale?: AppLocale | string | null
  slug: string
  req: PayloadRequest
}

export const generatePreviewPath = ({ collection, locale, slug }: Props) => {
  // Allow empty strings, e.g. for the homepage
  if (slug === undefined || slug === null) {
    return null
  }

  // Encode to support slugs with special characters
  const activeLocale = isSupportedLocale(locale) ? locale : defaultLocale
  const encodedSlug = encodeURIComponent(slug)
  const localizedPath =
    activeLocale === defaultLocale
      ? `${collectionPrefixMap[collection]}/${encodedSlug}`
      : `/${activeLocale}${collectionPrefixMap[collection]}/${encodedSlug}`

  const encodedParams = new URLSearchParams({
    slug: encodedSlug,
    collection,
    path: localizedPath,
    previewSecret: process.env.PREVIEW_SECRET || '',
  })

  const url = `/next/preview?${encodedParams.toString()}`

  return url
}
