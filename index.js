var postcss = require("postcss")
var assign = require("object-assign")

module.exports = function() {
    this.filter("postcss", function (data, config) {
        // Combine our config with defaults using Object.assign
        let fullConfig = assign({}, { plugins: [], options: {} }, config)

        // Return our promise out so we can wrap this async promise-based API
        return new Promise((resolve, reject) => {
            // Pull in the plugins list
            postcss(fullConfig.plugins)
                // Process the CSS with PostCSS and our options object passed to PostCSS
                .process(data.toString(), fullConfig.options)
                .then((result) => {
                    // Resolve our CSS the way Fly expects it
                    return resolve({ css: result.css })
                })
                .catch((err) => {
                    return reject(err)
                })
        })
    })
}
