import { defineConfig, ServerOptions } from "vite"
import vue from "@vitejs/plugin-vue"
// 自动导入
import AutoImport from "unplugin-auto-import/vite"
// 自动导入组件
import Components from "unplugin-vue-components/vite"
// 打包分析
import { visualizer } from "rollup-plugin-visualizer"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 自动导入的配置
    AutoImport({
      imports: ["vue"],
      dts: true,
      dirs: ["src/api/index.ts"]
    }),
    // 自动导入组件的配置
    Components({
      // 自动导入的路径
      dirs: ["src/components"],
      // 按需引入的文件的类型
      extensions: ["vue"]
    }),
    // 打包分析
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      filename: "analyze.html", //分析图生成的文件名
      open: false //如果存在本地服务端口，将在打包后自动展示
    })
  ],
  server: {
    port: 8080,
    open: false, //自动打开
    base: "./ ", //生产环境路径
    // https: true,
    proxy: {
      // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      // 正则表达式写法
      "^/api": {
        target: "https://saas01.dev.bancoulm.com", // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    },
    server: "0.0.0.0"
  } as ServerOptions,
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  build: {
    cssCodeSplit: true, //启用 CSS 代码拆分
    minify: true, // 是否打包压缩
    reportCompressedSize: true, // 启用/禁用 gzip 压缩大小报告
    rollupOptions: {
      treeshake: true, // 开启 Tree Shaking，消除未使用的代码，减小最终的包大小
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        manualChunks: (id) => {
          // 这个ID，就是所有文件的绝对路径
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString()
          }
        }
      }
    }
  }
})
