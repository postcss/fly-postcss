var postcss = require("postcss")
var assign = require("object-assign")

module.exports = function() {
    var self = this
    
    self.filter("postcss", function (data, config) {
        // Combine our config with defaults using Object.assign
        config = assign({}, {plugins: [], options: {}}, config)

        // Return our promise out so we can wrap this async promise-based API
        return new Promise(function (resolve, reject) {
            // Pull in the plugins list
            postcss(config.plugins)
                // Process the CSS with PostCSS and our options object passed to PostCSS
                .process(data.toString(), config.options)
                .then(function (result) {
                    // Resolve our CSS the way Fly expects it
                    return resolve({css: result.css})
                })
                .catch(function (err) {
                    self.emit("plugin_error", {
                      plugin: "fly-postcss",
                      error: err
                    })
                })
        })
    })
}
