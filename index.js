'use strict'

const postcss = require('postcss')

module.exports = function (fly) {
    fly.plugin('postcss', {}, function * (file, opts) {
      opts = Object.assign({}, {plugins: [], options: {}}, opts)
      try {
        var processor = postcss(opts.plugins)
        var result = yield processor.process(file.data.toString(), opts)
        file.data = new Buffer(result.css)
      } catch (error) {
        fly.emit('plugin_error', {
          plugin: 'fly-postcss',
          error: error.message
        })
      }
    })
}
