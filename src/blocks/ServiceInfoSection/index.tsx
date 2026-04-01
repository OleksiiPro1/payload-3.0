import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getMediaUrl } from '@/utilities/getMediaUrl'

const splitParagraphs = (value?: string | null) =>
  value
    ?.split(/\n{2,}/)
    .map((item) => item.trim())
    .filter(Boolean) || []

export const ServiceInfoSectionBlock: React.FC<any> = ({
  eyebrow,
  introHeading,
  introDescription,
  reasonHeading,
  reasonBody,
  mainImage,
  doctorCard,
  primaryButtonLabel,
  primaryButtonLink,
  openingHoursHeading,
  openingHours,
  contactHeading,
  address,
  phone,
  email,
}) => {
  const introParagraphs = splitParagraphs(introDescription)
  const reasonParagraphs = splitParagraphs(reasonBody)
  const mainImageURL =
    mainImage && typeof mainImage === 'object'
      ? getMediaUrl(mainImage.url, mainImage.updatedAt)
      : ''
  const mainImageAlt =
    mainImage && typeof mainImage === 'object' && 'alt' in mainImage
      ? mainImage.alt || 'Service image'
      : 'Service image'
  const doctorImageURL =
    doctorCard?.image && typeof doctorCard.image === 'object'
      ? getMediaUrl(doctorCard.image.url, doctorCard.image.updatedAt)
      : ''
  const doctorImageAlt =
    doctorCard?.image && typeof doctorCard.image === 'object' && 'alt' in doctorCard.image
      ? doctorCard.image.alt || 'Doctor image'
      : 'Doctor image'
  const addressLines =
    address
      ?.split('\n')
      .map((line: string) => line.trim())
      .filter(Boolean) || []

  const phoneHref = phone ? `tel:${phone.replace(/\s+/g, '')}` : null
  const emailHref = email ? `mailto:${email}` : null

  return (
    <section className="bg-white px-5 py-10 md:py-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
        <div>
          {eyebrow && (
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#7BA7C3]">
              {eyebrow}
            </p>
          )}

          {introHeading && (
            <h2 className="max-w-[780px] text-[34px] font-medium leading-[1.18] text-[#565555] md:text-[48px]">
              {introHeading}
            </h2>
          )}

          {introParagraphs.length > 0 && (
            <div className="mt-8 space-y-4">
              {introParagraphs.map((paragraph, index) => (
                <p
                  key={`${paragraph.slice(0, 24)}-${index}`}
                  className="max-w-[820px] text-[17px] font-light leading-[1.8] text-[#565555]/75"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          <div className="mt-10 overflow-hidden rounded-[28px] bg-[#F8FCFE]">
            <div className="relative h-[320px] w-full md:h-[420px]">
              {mainImageURL ? (
                <Image
                  fill
                  src={mainImageURL}
                  alt={mainImageAlt}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  priority
                  unoptimized
                />
              ) : null}
            </div>
          </div>

          {reasonHeading && (
            <h3 className="mt-12 text-[32px] font-medium leading-[1.2] text-[#565555] md:text-[42px]">
              {reasonHeading}
            </h3>
          )}

          {reasonParagraphs.length > 0 && (
            <div className="mt-6 space-y-4">
              {reasonParagraphs.map((paragraph, index) => (
                <p
                  key={`${paragraph.slice(0, 24)}-${index}`}
                  className="max-w-[820px] text-[17px] font-light leading-[1.8] text-[#565555]/75"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>

        <aside className="space-y-8">
          <div className="rounded-[28px] bg-[#F8FCFE] p-8 text-center">
            <div className="relative mx-auto mb-5 h-[96px] w-[96px] overflow-hidden rounded-full">
              {doctorImageURL ? (
                <img
                  src={doctorImageURL}
                  alt={doctorImageAlt}
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              ) : null}
            </div>

            {doctorCard?.name && (
              <h4 className="text-[24px] font-medium leading-[1.25] text-[#565555]">
                {doctorCard.name}
              </h4>
            )}

            {doctorCard?.specialty && (
              <p className="mt-2 text-[14px] font-medium text-[#565555]/80">
                {doctorCard.specialty}
              </p>
            )}

            {doctorCard?.subtitle && (
              <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[#7BA7C3]">
                {doctorCard.subtitle}
              </p>
            )}

            {doctorCard?.description && (
              <p className="mt-5 text-[14px] font-light leading-[1.7] text-[#565555]/70">
                {doctorCard.description}
              </p>
            )}

            {doctorCard?.linkLabel && (
              <div className="mt-4">
                <Link
                  href={doctorCard.linkUrl || '#'}
                  className="text-[13px] font-medium text-[#7BA7C3] no-underline hover:opacity-70"
                >
                  {doctorCard.linkLabel}
                </Link>
              </div>
            )}
          </div>

          {primaryButtonLabel && (
            <Link
              href={primaryButtonLink || '#'}
              className="flex h-[56px] w-full items-center justify-center rounded-full bg-[#7BA7C3] px-8 text-center text-[16px] font-medium text-white no-underline transition hover:bg-[#6d99b5]"
            >
              {primaryButtonLabel}
            </Link>
          )}

          <div className="space-y-4">
            {openingHoursHeading && (
              <h5 className="text-[20px] font-medium text-[#565555]">{openingHoursHeading}</h5>
            )}

            {openingHours?.length ? (
              <div className="space-y-2">
                {openingHours.map((item: any, index: number) => (
                  <div
                    key={item?.id || `${item?.day || 'day'}-${index}`}
                    className="grid grid-cols-[28px_1fr] gap-4 text-[14px] font-light text-[#565555]/75"
                  >
                    <span>{item?.day}</span>
                    <span>{item?.hours}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="space-y-4">
            {contactHeading && (
              <h5 className="text-[20px] font-medium text-[#565555]">{contactHeading}</h5>
            )}

            {addressLines.length > 0 && (
              <div className="flex gap-3 text-[14px] font-light leading-[1.7] text-[#565555]/75">
                <span className="mt-[2px] text-[#7BA7C3]">Strasse:</span>
                <div>
                  {addressLines.map((line: string, index: number) => (
                    <p key={`${line}-${index}`} className="m-0">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {phoneHref && (
              <Link
                href={phoneHref}
                className="flex items-center gap-3 text-[14px] font-light text-[#565555]/75 no-underline hover:text-[#7BA7C3]"
              >
                <span className="text-[#7BA7C3]">Phone:</span>
                <span>{phone}</span>
              </Link>
            )}

            {emailHref && (
              <Link
                href={emailHref}
                className="flex items-center gap-3 text-[14px] font-light text-[#565555]/75 no-underline hover:text-[#7BA7C3]"
              >
                <span className="text-[#7BA7C3]">Email:</span>
                <span>{email}</span>
              </Link>
            )}
          </div>
        </aside>
      </div>
    </section>
  )
}
