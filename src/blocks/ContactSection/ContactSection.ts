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
      label: 'Eyebrow',
      defaultValue: 'OrthoMed',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      defaultValue: 'Wir freuen uns auf Ihre Kontaktaufnahme!',
    },
    {
      name: 'subtext',
      type: 'text',
      label: 'Subtext (blue)',
      defaultValue: 'ALLE KASSEN UND PRIVAT',
    },
    {
      name: 'primaryButtonLabel',
      type: 'text',
      label: 'Primary Button Label',
      defaultValue: 'Online Termin vereinbaren',
    },
    {
      name: 'primaryButtonLink',
      type: 'text',
      label: 'Primary Button Link',
      defaultValue: '#',
    },
    {
      name: 'phoneLabel',
      type: 'text',
      label: 'Phone Label',
      defaultValue: '+12 345 67 89',
    },
  ],
}