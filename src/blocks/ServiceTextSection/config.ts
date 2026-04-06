import type { Block } from 'payload'

export const ServiceTextSection: Block = {
  slug: 'serviceTextSection',
  labels: {
    singular: 'Service Text Section',
    plural: 'Service Text Sections',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      localized: true,
      label: 'Eyebrow',
      defaultValue: 'IHR SPEZIALIST FÜR ORTHOPÄDIE',
    },
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
      label: 'Text',
      admin: {
        description: 'Verwenden Sie eine Leerzeile, um Absätze zu trennen.',
      },
    },
    {
      name: 'listHeading',
      type: 'text',
      localized: true,
      label: 'List Heading',
    },
    {
      name: 'listItems',
      type: 'array',
      localized: true,
      label: 'List Items',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Item',
          required: true,
        },
      ],
    },
    {
      name: 'button',
      type: 'group',
      localized: true,
      label: 'Button',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Button Label',
        },
        {
          name: 'url',
          type: 'text',
          label: 'Button URL',
          defaultValue: '#',
        },
      ],
    },
  ],
}
