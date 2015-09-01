module.exports = function () {
  this.filter("postcss", (data, options) => ({
    css: require("postcss")(options.processors).process(data.toString(), options).css
  }))
}
