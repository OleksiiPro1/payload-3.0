import React from 'react'

const splitParagraphs = (value?: string | null) =>
  value
    ?.split(/\n{2,}/)
    .map((item) => item.trim())
    .filter(Boolean) || []

export const ServiceFAQBlock: React.FC<any> = ({ eyebrow, heading, items }) => {
  const normalizedItems =
    items?.filter((item: { question?: string | null; answer?: string | null }) => {
      return item?.question?.trim() && item?.answer?.trim()
    }) || []

  return (
    <section className="bg-white px-5 py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
        <div className="lg:pt-1">
          {eyebrow && (
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#7BA7C3]">
              {eyebrow}
            </p>
          )}

          {heading && (
            <h2 className="max-w-[220px] text-[34px] font-medium leading-[1.16] text-[#565555] md:text-[42px]">
              {heading}
            </h2>
          )}
        </div>

        <div className="space-y-4">
          {normalizedItems.map(
            (
              item: { id?: string; question?: string | null; answer?: string | null },
              index: number,
            ) => {
              const paragraphs = splitParagraphs(item.answer)

              return (
                <details
                  key={item.id || `${item.question}-${index}`}
                  className="group rounded-[24px] bg-[#F8FCFE] px-6 py-5"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[22px] font-medium leading-[1.35] text-[#565555] [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <span className="mt-1 shrink-0 text-[28px] font-light leading-none text-[#7BA7C3] group-open:hidden">
                      +
                    </span>
                    <span className="mt-1 hidden shrink-0 text-[28px] font-light leading-none text-[#7BA7C3] group-open:block">
                      −
                    </span>
                  </summary>

                  {paragraphs.length > 0 && (
                    <div className="mt-5 max-w-[620px] space-y-3">
                      {paragraphs.map((paragraph, paragraphIndex) => (
                        <p
                          key={`${paragraph.slice(0, 24)}-${paragraphIndex}`}
                          className="text-[16px] font-light leading-[1.8] text-[#565555]/75"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </details>
              )
            },
          )}
        </div>
      </div>
    </section>
  )
}
