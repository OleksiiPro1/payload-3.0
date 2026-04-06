import type { Block } from 'payload'

export const AboutSection: Block = {
  slug: 'aboutSection',
  labels: {
    singular: 'Doctor & Therapy Options',
    plural: 'Doctor & Therapy Options',
  },
  fields: [
    // ПОЛЯ ДОКТОРА (Шапка) 
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
      label: 'Doctor Name (Heading)',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      label: 'Doctor Description',
      admin: {
        description: 'Verwenden Sie Enter, um Absätze zu trennen.',
      },
    },
    {
      name: 'doctorMedia', 
      type: 'upload',
      relationTo: 'media',
      label: 'Doctor Portrait Image',
      required: true,
    },
    {
      name: 'doctorButtonLabel',
      type: 'text',
      localized: true,
      label: 'Doctor Button Label',
    },
    {
      name: 'doctorButtonLink',
      type: 'text',
      localized: true,
      label: 'Doctor Button Link',
      defaultValue: '#',
    },


    {
      name: 'cardOptions',
      type: 'array',
      localized: true,
      label: 'Therapy Option Cards',
      minRows: 2,
      maxRows: 2, 
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Card Titel',
          required: true,
        },
        {
          name: 'subTitle',
          type: 'text',
          label: 'Card Subtitle (описание)',
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Icon (SVG)',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: 'Card Link-URL',
          defaultValue: '#',
        },
      ],
    },
  ],
}
