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
  transpileDependencies: true
})
