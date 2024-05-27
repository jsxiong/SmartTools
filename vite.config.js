import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import less from 'vite-plugin-less';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    less({
      lessOptions: {
        modifyVars: {}, // 如果需要覆盖默认主题变量，可以在这里配置
        javascriptEnabled: true, // 允许在less文件中使用JavaScript
      },
    }),
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
  ]
})
