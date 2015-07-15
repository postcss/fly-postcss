module.exports = function () {
  this.filter("postcss", (source, processors, options) => {
    try {
      return require("postcss")(processors).process(source, options).css
    } catch (e) { throw e }
  })
}
