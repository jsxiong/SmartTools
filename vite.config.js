import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  plugins: [
    vue(),
    Pages({
      // 根据你的组件结构指定pagesDir
      pagesDir: 'src/views',
      // 指定组件文件的扩展名
      extensions: ['vue'],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
    AutoImport({
      resolvers: [VantResolver()]
    })
  ],
  css: {
    preprocessorOptions: {
      less: true, // 启用 less 支持，如果有额外配置可以在这里添加
    },
  },
})
