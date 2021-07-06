import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import visualizer from 'rollup-plugin-visualizer'
import analyze from 'rollup-plugin-analyzer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    sourcemap: true,
    rollupOptions: {
      plugins: [
        visualizer(),
        analyze({ summaryOnly: true })
      ]
    }
  }
})
