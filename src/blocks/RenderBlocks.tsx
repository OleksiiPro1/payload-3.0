import React, { Fragment } from 'react'
import type { Page } from '@/payload-types'
// Импорты стандартных блоков
import { FooterBlock } from '@/blocks/Footer/FooterBlock'
import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
// ИСПРАВЛЕНО: Прямой импорт компонента (без звездочек)
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { ContactSectionBlock } from '@/blocks/ContactSection/ContactSectionBlock'

// Импорты ТВОИХ новых блоков
import { KategorieRasterBlock } from '@/blocks/KategorieRaster'
import { InfoSektionBlock } from '@/blocks/InfoSektion'
import { AboutSectionBlock } from '@/blocks/AboutSection/AboutSectionBlock' 
import { TherapieOptionenBlock } from '@/blocks/TherapieOptionen/TherapieOptionenBlock'
import { ServiceInfoSectionBlock } from '@/blocks/ServiceInfoSection'

const blockComponents: Record<string, React.FC<any>> = {
  archive: ArchiveBlock,
  content: ContentBlock,
  contactSection: ContactSectionBlock,
  // ИСПРАВЛЕНО: Теперь используем чистый компонент
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  
  // Твои блоки
  kategorieRaster: KategorieRasterBlock,
  infoSektion: InfoSektionBlock,
  aboutSection: AboutSectionBlock, 
  footer: FooterBlock,
  // Slug должен совпадать с тем, что указан в коллекции TherapieOptionen
  therapieOptionen: TherapieOptionenBlock, 
  serviceInfoSection: ServiceInfoSectionBlock,
}

export const RenderBlocks: React.FC<{
  blocks: any[] | null | undefined
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block
          const Component = blockComponents[blockType]
          
          if (Component) {
            return <Component key={index} {...block} /> 
          }

          // Помогает отловить опечатки в slug блоков в админке
          console.warn(`Блок типа "${blockType}" не найден в blockComponents. Проверь slug в конфигурации блока!`)
          return null
        })}
      </Fragment>
    )
  }

  return null
}
