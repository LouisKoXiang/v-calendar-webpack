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
      {
        targets: {
          browsers: ['iOS >= 12']
        },
        useBuiltIns: 'entry',
        corejs: 3
      }
    ]
  ]
}
