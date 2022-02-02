const pkg = require('./package.json')

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: "16.13.0",
        },
      },
    ],
  ],
}