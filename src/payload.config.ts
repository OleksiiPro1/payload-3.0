import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
// import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Categories } from './collections/Categories'
import { Header } from './Header/config'
import { Footer } from './Footer/config'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const plugins = [
  formBuilderPlugin({
    fields: {
      payment: false,
    },
  }),
]

if (process.env.BLOB_READ_WRITE_TOKEN) {
  const plugins = [
  formBuilderPlugin({
    fields: {
      payment: false,
    },
  }),
]

// ВРЕМЕННО НИЧЕГО НЕ ДОБАВЛЯЕМ СЮДА
// plugins.push(
//   vercelBlobStorage({
//     collections: {
//       media: true,
//     },
//     token: process.env.BLOB_READ_WRITE_TOKEN,
//   }) as any,
// )
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Pages, Posts, Categories, Media, Users],
  globals: [Header, Footer],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins,
})