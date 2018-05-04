'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  port: 3000,
  proxyTable: {
    '/api': {
      target: 'http://localhost:9001',
      changeOrigin: true
    }
  }
})
