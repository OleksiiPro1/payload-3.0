import type { Block } from 'payload'

export const KategorieRaster: Block = {
  slug: 'kategorieRaster',
  labels: {
    singular: 'Kategorie-Raster',
    plural: 'Kategorie-Raster',
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
          name: 'bild',
          type: 'upload',
          relationTo: 'media',
          label: 'Hintergrundbild',
          required: false,
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Hintergrundfarbe (HEX)',
          required: false,
          admin: {
            description: 'Beispiel: #7BA7C3. Wenn leer, wird Hellgrau verwendet.',
            placeholder: '#F8FCFE',
          },
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
          required: false,
        },
      ],
    },
  ],
}