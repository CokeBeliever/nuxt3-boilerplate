import type { Config } from 'tailwindcss'
import { namespace, defaultTheme } from './configs/theme'
import { addDynamicIconSelectors } from '@iconify/tailwind'

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        [`${namespace}-primary`]: defaultTheme.primary.color['100'],
        [`${namespace}-primary-50`]: defaultTheme.primary.color['50'],
        [`${namespace}-primary-75`]: defaultTheme.primary.color['75'],
        [`${namespace}-primary-50a`]: defaultTheme.primary.color['50a'],
        [`${namespace}-primary-75a`]: defaultTheme.primary.color['75a'],
        [`${namespace}-white`]: defaultTheme.white.color['100'],
        [`${namespace}-white-50`]: defaultTheme.white.color['50'],
        [`${namespace}-white-75`]: defaultTheme.white.color['75'],
        [`${namespace}-white-50a`]: defaultTheme.white.color['50a'],
        [`${namespace}-white-75a`]: defaultTheme.white.color['75a'],
        [`${namespace}-black`]: defaultTheme.black.color['100'],
        [`${namespace}-black-50`]: defaultTheme.black.color['50'],
        [`${namespace}-black-75`]: defaultTheme.black.color['75'],
        [`${namespace}-black-50a`]: defaultTheme.black.color['50a'],
        [`${namespace}-black-75a`]: defaultTheme.black.color['75a'],
        [`${namespace}-gray`]: defaultTheme.gray.color['100'],
        [`${namespace}-gray-50`]: defaultTheme.gray.color['50'],
        [`${namespace}-gray-75`]: defaultTheme.gray.color['75'],
        [`${namespace}-gray-50a`]: defaultTheme.gray.color['50a'],
        [`${namespace}-gray-75a`]: defaultTheme.gray.color['75a'],
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
} satisfies Config
