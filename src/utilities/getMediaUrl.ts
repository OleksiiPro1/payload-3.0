const encodeMediaURL = (url: string): string => {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    const parsedURL = new URL(url)
    parsedURL.pathname = parsedURL.pathname
      .split('/')
      .map((segment) => encodeURIComponent(decodeURIComponent(segment)))
      .join('/')
    return parsedURL.toString()
  }

  const [path, query = ''] = url.split('?')
  const encodedPath = path
    .split('/')
    .map((segment) => encodeURIComponent(decodeURIComponent(segment)))
    .join('/')

  return query ? `${encodedPath}?${query}` : encodedPath
}

/**
 * Processes media resource URL to ensure proper formatting
 * @param url The original URL from the resource
 * @param cacheTag Optional cache tag to append to the URL
 * @returns Properly formatted URL with cache tag if provided
 */
export const getMediaUrl = (url: string | null | undefined, cacheTag?: string | null): string => {
  if (!url) return ''

  const normalizedURL = encodeMediaURL(url)
  const normalizedCacheTag = cacheTag && cacheTag !== '' ? encodeURIComponent(cacheTag) : null
  const separator = normalizedURL.includes('?') ? '&' : '?'
  const withCacheTag = normalizedCacheTag
    ? `${normalizedURL}${separator}updatedAt=${normalizedCacheTag}`
    : normalizedURL

  // Check if URL already has http/https protocol
  if (normalizedURL.startsWith('http://') || normalizedURL.startsWith('https://')) {
    return withCacheTag
  }

  // Keep same-origin media URLs relative so they work on any device/domain.
  return withCacheTag
}
