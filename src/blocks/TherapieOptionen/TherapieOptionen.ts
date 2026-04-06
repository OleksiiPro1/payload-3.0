import type { Block } from 'payload'

export const TherapieOptionen: Block = {
  slug: 'therapieOptionen',
  labels: {
    singular: 'Therapie-Optionen',
    plural: 'Therapie-Optionen',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      localized: true,
      label: 'Eyebrow',
      defaultValue: 'BEHANDLUNGSMÖGLICHKEITEN',
    },
    {
      name: 'heading',
      type: 'text',
      localized: true,
      label: 'Heading',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      label: 'Description (rechts)',
    },
    {
      name: 'options',
      type: 'array',
      localized: true,
      label: 'Therapie Optionen',
      minRows: 2,
      maxRows: 2,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Option Titel',
          required: true,
        },
        {
          name: 'subTitle',
          type: 'text',
          label: 'Untertitel (Beschreibung in der Karte)',
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
          label: 'Link-URL',
          defaultValue: '#',
        },
      ],
    },
  ],
}
