import * as S from './src/base/secret'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: S.CLIENT_IP,
    port: S.CLIENT_PORT

  }
})
