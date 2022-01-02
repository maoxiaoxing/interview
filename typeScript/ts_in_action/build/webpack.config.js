const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const prodConfig = require('./webpack.prod.config')

const config = process.NODE_ENV = 'devolopment' ? devConfig : prodConfig

module.exports = merge(baseConfig, config)
