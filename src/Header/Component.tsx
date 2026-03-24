import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { HeaderClient } from './Component.client'

export const Header = async () => {
  const payload = await getPayload({ config })
  
  // Получаем данные из глобальных настроек Payload
  const headerData = await payload.findGlobal({
    slug: 'header',
  })

  // Возвращаем клиентский компонент и пробрасываем в него данные
  return <HeaderClient data={headerData} />
}