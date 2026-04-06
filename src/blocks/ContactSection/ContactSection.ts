import type { Block } from 'payload'

export const ContactSection: Block = {
  slug: 'contactSection',
  labels: {
    singular: 'Contact Section',
    plural: 'Contact Sections',
  },
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      label: 'Image (Interior)',
      required: true,
    },
    {
      name: 'eyebrow',
      type: 'text',
      localized: true,
      label: 'Eyebrow',
      defaultValue: 'OrthoMed',
    },
    {
      name: 'heading',
      type: 'text',
      localized: true,
      label: 'Heading',
      required: true,
      defaultValue: 'Wir freuen uns auf Ihre Kontaktaufnahme!',
    },
    {
      name: 'subtext',
      type: 'text',
      localized: true,
      label: 'Subtext (blue)',
      defaultValue: 'ALLE KASSEN UND PRIVAT',
    },
    {
      name: 'primaryButtonLabel',
      type: 'text',
      localized: true,
      label: 'Primary Button Label',
      defaultValue: 'Online Termin vereinbaren',
    },
    {
      name: 'primaryButtonLink',
      type: 'text',
      localized: true,
      label: 'Primary Button Link',
      defaultValue: '#',
    },
    {
      name: 'phoneLabel',
      type: 'text',
      localized: true,
      label: 'Phone Label',
      defaultValue: '+12 345 67 89',
    },
  ],
}
