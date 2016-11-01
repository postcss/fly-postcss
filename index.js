'use strict'

const postcss = require('postcss')
const assign = require('object-assign')

module.exports = function () {
    this.plugin('postcss', {}, function * (file, opts) {
      opts = assign({}, {plugins: [], options: {}}, opts)
      try {
        var processor = postcss(opts.plugins)
        var result = yield processor.process(file.data.toString(), opts)
        file.data = new Buffer(result.css)
      } catch (error) {
        this.emit('plugin_error', {
          plugin: 'fly-postcss',
          error: error.message
        })
      }
    })
}
