module.exports = function () {
  this.filter("postcss", (data, processors, options) => {
    try {
      return require("postcss")(processors).process(data.toString(), options).css
    } catch (e) { throw e }
  })
}
