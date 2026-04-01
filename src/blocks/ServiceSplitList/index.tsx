import React from 'react'

const splitParagraphs = (value?: string | null) =>
  value
    ?.split(/\n{2,}/)
    .map((item) => item.trim())
    .filter(Boolean) || []

export const ServiceSplitListBlock: React.FC<any> = ({ heading, body, items }) => {
  const paragraphs = splitParagraphs(body)
  const normalizedItems =
    items?.map((item: { text?: string | null }) => item?.text?.trim()).filter(Boolean) || []

  return (
    <section className="bg-white px-5 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
          <div className="max-w-[420px]">
            {heading && (
              <h2 className="text-[34px] font-medium leading-[1.18] tracking-[-0.02em] text-[#565555] md:text-[46px]">
                {heading}
              </h2>
            )}

            {paragraphs.length > 0 && (
              <div className="mt-6 space-y-4">
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={`${paragraph.slice(0, 24)}-${index}`}
                    className="text-[16px] font-light leading-[1.8] text-[#565555]/75"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-[24px] bg-[#F8FCFE] px-6 py-6 md:px-8 md:py-7">
            <ul className="space-y-4 text-[16px] font-light leading-[1.8] text-[#565555]/75">
              {normalizedItems.map((item: string, index: number) => (
                <li key={`${item.slice(0, 24)}-${index}`} className="relative pl-5">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[0.8em] h-[4px] w-[4px] -translate-y-1/2 rounded-full bg-[#565555]/55"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
