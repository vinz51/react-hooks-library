const common = require("./webpack.common.js");
const merge = require("webpack-merge");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  // Remove all the librairies that are in peerDependencies
  // and decrease weight of the prod build
  externals: {
    "prop-types": "prop-types",
    react: "react"
  },
  mode: "production",
  optimization: {
    minimizer: [new UglifyJsPlugin({
      parallel: true,
    })],
    noEmitOnErrors: true
  }
});
