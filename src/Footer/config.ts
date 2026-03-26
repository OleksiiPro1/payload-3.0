import type { GlobalConfig } from 'payload'
import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Globals', // Добавили группу, чтобы легче было найти в меню
  },
  fields: [
    {
      name: 'address',
      type: 'textarea',
      label: 'Адрес (Musterstraße 1...)',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Телефон',
    },
    {
      name: 'email',
      type: 'text',
      label: 'Email',
    },
    {
      name: 'openingHours',
      type: 'array',
      label: 'Часы работы',
      labels: {
        singular: 'Рабочий день',
        plural: 'Рабочие дни',
      },
      fields: [
        {
          name: 'day',
          type: 'text',
          label: 'День недели (Mo, Di...)',
          required: true,
        },
        {
          name: 'hours',
          type: 'text',
          label: 'Время (08:00 - 15:30)',
          required: true,
        },
      ],
    },
    {
      name: 'navItems',
      type: 'array',
      label: 'Ссылки навигации',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}