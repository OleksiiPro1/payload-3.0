import type { GlobalConfig } from 'payload'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Globals',
  },
  fields: [
    {
      name: 'address',
      type: 'textarea',
      label: 'Adresse',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Telefonnummer',
    },
    {
      name: 'email',
      type: 'text',
      label: 'E-Mail',
    },
    {
      name: 'openingHours',
      type: 'array',
      label: 'Öffnungszeiten',
      fields: [
        {
          name: 'day',
          type: 'text',
          label: 'Wochentag',
          required: true,
        },
        {
          name: 'hours',
          type: 'text',
          label: 'Uhrzeit',
          required: true,
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}