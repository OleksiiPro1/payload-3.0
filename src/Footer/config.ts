import type { GlobalConfig } from 'payload'
import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
    // ДОБАВЛЯЕМ ПОЛЯ ДЛЯ АДРЕСА И КОНТАКТОВ
    {
      name: 'address',
      type: 'textarea',
      label: 'Адрес',
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
    // ДОБАВЛЯЕМ ЧАСЫ РАБОТЫ
    {
      name: 'openingHours',
      type: 'array',
      label: 'Часы работы',
      fields: [
        {
          name: 'day',
          type: 'text',
          label: 'День (например, Mo)',
        },
        {
          name: 'hours',
          type: 'text',
          label: 'Время (например, 08:00 - 15:30)',
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}