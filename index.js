var postcss = require('postcss')

module.exports = function () {
    this.postcss = function (processors, opts) {
        return this.filter((data) => {
            try {
                return postcss(processors).process(data, opts).css
            } catch (e) {
                plugin: 'postcss',
                error: e
            }
        }).notify('plugin_run', {plugin: 'postcss'})
    }
}
