export const getPreviewSecret = () => {
  return process.env.PREVIEW_SECRET || process.env.PAYLOAD_SECRET || ''
}
