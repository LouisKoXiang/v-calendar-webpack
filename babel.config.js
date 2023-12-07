module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        useBuiltIns: 'entry',
        corejs: 3
      }
    ],
    [
      '@babel/preset-env',
      { useBuiltIns: 'entry', corejs: '3.0', bugfixes: true }
    ],
    [
      '@vue/app',
      {
        polyfills: ['es.promise', 'es.symbol']
      }
    ],
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['iOS >= 11']
        },
        useBuiltIns: 'entry',
        corejs: 3
      }
    ]
  ]
}
