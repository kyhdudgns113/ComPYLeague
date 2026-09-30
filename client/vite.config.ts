import * as S from './src/base/secret'

import path from 'node:path'
import {fileURLToPath} from 'node:url'
import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

const root = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@context': path.resolve(root, 'src/manager/contexts'),
      '@prop': path.resolve(root, 'src/base/types/props'),
      '@redux': path.resolve(root, 'src/manager/redux'),
      '@secret': path.resolve(root, 'src/base/secret'),
      '@styles': path.resolve(root, 'src/base/styles'),
      '@type': path.resolve(root, 'src/base/types/types')
    }
  },
  server: {
    host: S.CLIENT_IP,
    port: S.CLIENT_PORT
  }
})
