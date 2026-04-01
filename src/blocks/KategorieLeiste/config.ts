import type { Block } from 'payload'

export const KategorieLeiste: Block = {
  slug: 'kategorieLeiste',
  labels: {
    singular: 'Kategorie-Leiste',
    plural: 'Kategorie-Leisten',
  },
  fields: [
    {
      name: 'ueberschrift',
      type: 'text',
      label: 'Überschrift',
      required: true,
    },
    {
      name: 'kategorien',
      type: 'array',
      label: 'Kategorien',
      minRows: 1,
      fields: [
        {
          name: 'titel',
          type: 'text',
          label: 'Titel',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link-URL',
          defaultValue: '#',
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Icon',
          required: false,
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Hintergrundfarbe (HEX)',
          required: false,
          admin: {
            description: 'Beispiel: #F8FCFE',
            placeholder: '#F8FCFE',
          },
        },
      ],
    },
  ],
}
