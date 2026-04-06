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
      localized: true,
      label: 'Adresse',
    },
    {
      name: 'phone',
      type: 'text',
      localized: true,
      label: 'Telefonnummer',
    },
    {
      name: 'email',
      type: 'text',
      localized: true,
      label: 'E-Mail',
    },
    {
      name: 'openingHours',
      type: 'array',
      localized: true,
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
