module.exports = function () {
  this.filter("postcss", (data, processors, options) => ({
    css: require("postcss")(processors).process(data.toString(), options).css
  }))
}
