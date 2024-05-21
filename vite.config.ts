import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { Components } from 'antd/es/date-picker/generatePicker';
import { visualizer } from "rollup-plugin-visualizer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cv/',
  plugins: [react(), visualizer() as PluginOption],
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components'
      // public: `${path.resolve(__dirname, "./public/")}`,
      // pages: path.resolve(__dirname, "./src/pages"),
      // types: `${path.resolve(__dirname, "./src/@types")}`,
    },
  },
})
