import type { Block } from 'payload'

export const ServiceInfoSection: Block = {
  slug: 'serviceInfoSection',
  labels: {
    singular: 'Service Info Section',
    plural: 'Service Info Sections',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      localized: true,
      label: 'Eyebrow',
      defaultValue: 'IHR SPEZIALIST FUR ORTHOPADIE',
    },
    {
      name: 'introHeading',
      type: 'textarea',
      localized: true,
      label: 'Intro Heading',
      required: true,
    },
    {
      name: 'introDescription',
      type: 'textarea',
      localized: true,
      label: 'Intro Description',
    },
    {
      name: 'reasonHeading',
      type: 'text',
      localized: true,
      label: 'Reason Heading',
      required: true,
    },
    {
      name: 'reasonBody',
      type: 'textarea',
      localized: true,
      label: 'Reason Body',
      admin: {
        description: 'Use line breaks to split the content into paragraphs.',
      },
    },
    {
      name: 'reasonList',
      type: 'array',
      localized: true,
      label: 'Reason List',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Item',
          required: true,
        },
      ],
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Main Image',
      required: true,
    },
    {
      name: 'doctorCard',
      type: 'group',
      localized: true,
      label: 'Doctor Card',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Doctor Image',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          label: 'Doctor Name',
          required: true,
        },
        {
          name: 'specialty',
          type: 'text',
          label: 'Specialty',
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Subtitle',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Doctor Description',
        },
        {
          name: 'linkLabel',
          type: 'text',
          label: 'Doctor Link Label',
          defaultValue: 'Uber Dr. Lorem Ipsum',
        },
        {
          name: 'linkUrl',
          type: 'text',
          label: 'Doctor Link URL',
          defaultValue: '#',
        },
      ],
    },
  ],
}
