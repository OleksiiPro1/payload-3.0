'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { getLocaleFromPathname, localizeHref } from '@/utilities/i18n'

type Props = LinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string
  }

export const LocalizedLink = React.forwardRef<HTMLAnchorElement, Props>(
  ({ href, ...props }, ref) => {
    const pathname = usePathname()
    const locale = getLocaleFromPathname(pathname)

    return <Link ref={ref} href={localizeHref(href, locale)} {...props} />
  },
)

LocalizedLink.displayName = 'LocalizedLink'
