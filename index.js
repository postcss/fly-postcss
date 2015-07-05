var postcss = require('postcss')

module.exports = function () {
    this.filter('postcss', (src, processors, opts) => {
        try {
            return postcss(processors).process(src).css
        } catch (e) { throw e }
    })
}
