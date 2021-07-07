import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import visualizer from "rollup-plugin-visualizer";
import analyze from "rollup-plugin-analyzer";
import eslint from "@rollup/plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    sourcemap: true,
    rollupOptions: {
      plugins: [
        eslint({
          throwOnError: true,
          include: "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}",
          formatter: "unix",
        }),
        visualizer(),
        analyze({ summaryOnly: true }),
      ],
    },
  },
});
