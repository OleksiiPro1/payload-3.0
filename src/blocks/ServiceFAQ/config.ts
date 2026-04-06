import type { Block } from 'payload'

export const ServiceFAQ: Block = {
  slug: 'serviceFAQ',
  labels: {
    singular: 'Service FAQ',
    plural: 'Service FAQs',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      localized: true,
      label: 'Eyebrow',
      defaultValue: 'Häufig gestellte Fragen',
    },
    {
      name: 'heading',
      type: 'text',
      localized: true,
      label: 'Heading',
      required: true,
      defaultValue: 'Häufig gestellte Fragen',
    },
    {
      name: 'items',
      type: 'array',
      localized: true,
      label: 'Questions',
      minRows: 1,
      fields: [
        {
          name: 'question',
          type: 'text',
          label: 'Question',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          label: 'Answer',
          required: true,
          admin: {
            description: 'Verwenden Sie eine Leerzeile, um Absätze zu trennen.',
          },
        },
      ],
    },
  ],
}
