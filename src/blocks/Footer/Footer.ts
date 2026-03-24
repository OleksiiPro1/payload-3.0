import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Global Settings',
  },
  fields: [
    {
      name: 'logoText',
      type: 'text',
      label: 'Logo Text',
      defaultValue: 'OrthoMed',
    },
    {
      name: 'address',
      type: 'textarea',
      label: 'Adresse',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Telefon',
    },
    {
      name: 'email',
      type: 'text',
      label: 'Email',
    },
    
    {
      name: 'openingHours',
      type: 'array',
      label: 'Ordinationszeiten',
      fields: [
        { name: 'day', type: 'text', label: 'Tag' },
        { name: 'hours', type: 'text', label: 'Zeit' },
      ],
    },
    
    {
      name: 'copyright',
      type: 'text',
      label: 'Copyright Text',
      defaultValue: '© 2026 Dr. Lorem Ipsum',
    },
  ],
}