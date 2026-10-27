import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base = '/ara-vera-portfolio/' para que funcione en https://josuever327.github.io/ara-vera-portfolio/
// En desarrollo local Vite ignora el subpath y sirve en '/'.
export default defineConfig({
  plugins: [react()],
  base: '/ara-vera-portfolio/',
})
