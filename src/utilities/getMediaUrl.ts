import { getClientSideURL } from '@/utilities/getURL'

/**
 * Processes media resource URL to ensure proper formatting
 * @param url The original URL from the resource
 * @param cacheTag Optional cache tag to append to the URL
 * @returns Properly formatted URL with cache tag if provided
 */
export const getMediaUrl = (url: string | null | undefined, cacheTag?: string | null): string => {
  if (!url) return ''

  const normalizedCacheTag = cacheTag && cacheTag !== '' ? encodeURIComponent(cacheTag) : null
  const separator = url.includes('?') ? '&' : '?'
  const withCacheTag = normalizedCacheTag ? `${url}${separator}updatedAt=${normalizedCacheTag}` : url

  // Check if URL already has http/https protocol
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return withCacheTag
  }

  // Otherwise prepend client-side URL
  const baseUrl = getClientSideURL()
  return `${baseUrl}${withCacheTag}`
}
