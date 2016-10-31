'use strict'

var postcss = require('postcss')
var assign = require('object-assign')

module.exports = function () {
    var self = this

    self.plugin('postcss', {}, function * (file, opts) {
      opts = assign({}, {plugins: [], options: {}}, opts)

      try {
        var processor = postcss(opts.plugins)
        var result = yield processor.process(file.data.toString(), opts)

        file.data = new Buffer(result.css)
      } catch (error) {
        self.emit('plugin_error', {
          plugin: 'fly-postcss',
          error: error
        })
      }
    })
}
