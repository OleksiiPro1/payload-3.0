import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { HeaderClient } from './Component.client'

export const Header = async () => {
  const payload = await getPayload({ config })

  let headerData = null

  try {
    headerData = await payload.findGlobal({
      slug: 'header',
    })
  } catch {
    // Keep the page renderable while globals are being configured.
    headerData = null
  }

  // Возвращаем клиентский компонент и пробрасываем в него данные
  return <HeaderClient data={headerData} />
}
