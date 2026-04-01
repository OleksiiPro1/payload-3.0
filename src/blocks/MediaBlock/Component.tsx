import type { StaticImageData } from 'next/image'

import { cn } from '@/utilities/ui'
import React from 'react'

import type { MediaBlock as MediaBlockProps } from '@/payload-types'

import { Media } from '../../components/Media'

type Props = MediaBlockProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
}

export const MediaBlock: React.FC<Props> = (props) => {
  const { className, imgClassName, media, staticImage } = props

  return (
    <section className={cn('bg-white px-5 py-10 md:py-12', className)}>
      <div className="mx-auto max-w-7xl">
        {(media || staticImage) && (
          <Media
            resource={media}
            src={staticImage}
            imgClassName={cn('h-auto w-full rounded-[28px] object-cover', imgClassName)}
          />
        )}
      </div>
    </section>
  )
}
