import { LocalizedLink } from '@/components/LocalizedLink'
import React from 'react'

const splitParagraphs = (value?: string | null) =>
  value
    ?.split(/\n{2,}/)
    .map((item) => item.trim())
    .filter(Boolean) || []

export const ServiceTextSectionBlock: React.FC<any> = ({
  eyebrow,
  heading,
  body,
  listHeading,
  listItems,
  button,
}) => {
  const paragraphs = splitParagraphs(body)
  const normalizedListItems =
    listItems?.map((item: { text?: string | null }) => item?.text?.trim()).filter(Boolean) || []

  return (
    <section className="bg-white px-5 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-[860px]">
        {eyebrow && (
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#7BA7C3]">
            {eyebrow}
          </p>
        )}

        {heading && (
          <h2 className="text-[34px] font-medium leading-[1.18] text-[#565555] md:text-[46px]">
            {heading}
          </h2>
        )}

        {paragraphs.length > 0 && (
          <div className="mt-6 space-y-4">
            {paragraphs.map((paragraph, index) => (
              <p
                key={`${paragraph.slice(0, 24)}-${index}`}
                className="max-w-[860px] text-[17px] font-light leading-[1.8] text-[#565555]/75"
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {listHeading && (
          <p className="mt-6 text-[17px] font-medium leading-[1.7] text-[#565555]">{listHeading}</p>
        )}

        {normalizedListItems.length > 0 && (
          <ul className="mt-4 space-y-3 text-[17px] font-light leading-[1.8] text-[#565555]/75">
            {normalizedListItems.map((item: string, index: number) => (
              <li key={`${item.slice(0, 24)}-${index}`} className="relative pl-5">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[0.72em] h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-[#7BA7C3]"
                />
                {item}
              </li>
            ))}
          </ul>
        )}

        {button?.label && (
          <div className="mt-10">
            <LocalizedLink
              href={button.url || '#'}
              className="inline-flex h-[54px] items-center justify-center rounded-full bg-[#7BA7C3] px-8 text-[15px] font-medium text-white no-underline transition hover:bg-[#6d99b5]"
            >
              {button.label}
            </LocalizedLink>
          </div>
        )}
        </div>
      </div>
    </section>
  )
}
