import React from 'react'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { HeaderClient } from './Component.client'

export const Header = async () => {
  let headerData = null

  try {
    headerData = await getCachedGlobal('header', 1)()
  } catch {
    // Keep the page renderable while globals are being configured.
    headerData = null
  }

  // Возвращаем клиентский компонент и пробрасываем в него данные
  return <HeaderClient data={headerData} />
}
