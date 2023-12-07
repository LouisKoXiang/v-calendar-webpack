const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add('/node_modules/v-calendar/')
      .end()
      .use('babel-loader')
      .loader('babel-loader')
  },
  configureWebpack: {
    resolve: {
      modules: ['node_modules', 'v-calendar'] // 將這裡的路徑更換為你的項目中引起問題的文件夾路徑
    }
  },
  transpileDependencies: true
})
