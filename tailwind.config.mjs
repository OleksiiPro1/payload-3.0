/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      // 1. Добавляем Montserrat в шрифты
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              h1: {
                // Изменяем на Montserrat Medium (500)
                fontWeight: '500', 
                marginBottom: '0.25em',
                fontFamily: 'var(--font-montserrat)',
              },
              h2: {
                // Изменяем на Montserrat Medium (500)
                fontWeight: '500',
                fontFamily: 'var(--font-montserrat)',
              },
              p: {
                // Изменяем на Montserrat Light (300)
                fontWeight: '300',
              }
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '2.5rem',
              },
              h2: {
                fontSize: '1.25rem',
                // Здесь было 600, меняем на 500 (Medium) для соответствия стилю
                fontWeight: 500, 
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '3.5rem',
              },
              h2: {
                fontSize: '1.5rem',
              },
            },
          ],
        },
      }),
    },
  },
}

export default config