import type { Block } from 'payload'

export const InfoSektion: Block = {
  slug: 'infoSektion', // Этот ID должен совпадать с ключом в RenderBlocks
  labels: {
    singular: 'Info-Sektion',
    plural: 'Info-Sektionen',
  },
  fields: [
    {
      name: 'dachzeile',
      type: 'text',
      localized: true,
      label: 'Dachzeile (Eyebrow)', // Например: "UNSERE PHILOSOPHIE"
    },
    {
      name: 'ueberschrift',
      type: 'text',
      localized: true,
      label: 'Überschrift', // Например: "Warum OrthoMed"
      required: true,
    },
    {
      name: 'beschreibung',
      type: 'textarea',
      localized: true,
      label: 'Beschreibung',
    },
    {
      name: 'link',
      type: 'group',
      localized: true,
      label: 'Button',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Button Text',
        },
        {
          name: 'url',
          type: 'text',
          label: 'Button URL',
        },
      ],
    },
  ],
}
