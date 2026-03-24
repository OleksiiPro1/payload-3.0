export const requireEnv = (name: keyof NodeJS.ProcessEnv): string => {
  const value = process.env[name]

  if (value) {
    return value
  }

  throw new Error(
    `Missing required environment variable ${name}. Copy .env.example to .env and update it for your local setup.`,
  )
}
