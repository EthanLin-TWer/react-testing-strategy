const { merge } = require('webpack-merge')
const { baseConfig } = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  devtool: 'eval-source-map',
})
