module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        useBuiltIns: 'entry',
        corejs: 3
      }
    ],
    ['@vue/app', {
      polyfills: [
        'es.promise',
        'es.symbol'
      ]
    }],
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
