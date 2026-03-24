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
      label: 'Dachzeile (Eyebrow)', // Например: "UNSERE PHILOSOPHIE"
    },
    {
      name: 'ueberschrift',
      type: 'text',
      label: 'Überschrift', // Например: "Warum OrthoMed"
      required: true,
    },
    {
      name: 'beschreibung',
      type: 'textarea',
      label: 'Beschreibung',
    },
    {
      name: 'link',
      type: 'group',
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