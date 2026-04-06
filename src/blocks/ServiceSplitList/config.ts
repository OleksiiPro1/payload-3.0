import type { Block } from 'payload'

export const ServiceSplitList: Block = {
  slug: 'serviceSplitList',
  labels: {
    singular: 'Service Split List',
    plural: 'Service Split Lists',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      localized: true,
      label: 'Heading',
      required: true,
    },
    {
      name: 'body',
      type: 'textarea',
      localized: true,
      label: 'Left Column Text',
      admin: {
        description: 'Verwenden Sie eine Leerzeile, um Absätze zu trennen.',
      },
    },
    {
      name: 'items',
      type: 'array',
      localized: true,
      label: 'Right Column List',
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Item',
          required: true,
        },
      ],
    },
  ],
}
