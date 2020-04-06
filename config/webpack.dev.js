/**
 * BundleAnalyzerPlugin
 * Analyzer is available to http://127.0.0.1:8888/
 * @see https://www.npmjs.com/package/webpack-bundle-analyzer
 *
 * ProgressPlugin
 * @see https://webpack.js.org/plugins/progress-plugin/
 */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require("./webpack.common.js");
const merge = require("webpack-merge");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new webpack.ProgressPlugin(),
    // To uncomment if you would like see the build analyzer
    // new BundleAnalyzerPlugin({
    //   openAnalyzer: false,
    //   generateStatsFile: true,
    //   excludeAssets: [
    //     /node_modules/,
    //     /lib/,
    //     /config/,
    //     /.github/
    //   ]
    // })
  ]
});
