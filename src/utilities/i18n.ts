export const locales = ['de', 'en'] as const

export type AppLocale = (typeof locales)[number]

export const defaultLocale: AppLocale = 'de'

export const isSupportedLocale = (value?: string | null): value is AppLocale =>
  Boolean(value && locales.includes(value as AppLocale))

export const getLocaleFromPathname = (pathname?: string | null): AppLocale => {
  if (!pathname) return defaultLocale

  const [, firstSegment] = pathname.split('/')

  return isSupportedLocale(firstSegment) ? firstSegment : defaultLocale
}

export const localizeHref = (href: string, locale: AppLocale = defaultLocale) => {
  if (!href) return href

  if (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('#')
  ) {
    return href
  }

  const normalizedHref = href.startsWith('/') ? href : `/${href}`

  if (locale === defaultLocale) return normalizedHref

  if (normalizedHref === `/${locale}` || normalizedHref.startsWith(`/${locale}/`)) {
    return normalizedHref
  }

  return `/${locale}${normalizedHref}`
}
