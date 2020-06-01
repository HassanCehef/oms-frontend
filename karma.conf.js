const vueConfig = require('./vue.config.js')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

let webpackConfig = vueConfig.configureWebpack;
webpackConfig.mode = "development"
webpackConfig.module = {}
webpackConfig.module.rules = []
webpackConfig.module.rules.push(
  {
    test: /\.vue$/,
    loader: 'vue-loader',
  }, /*{ if I enable this, the unit test fails. Dunno what the values should be.
    test: /\.js$/,
    loader: 'babel-loader'
  }, {
    test: /\.css$/i,
    use: [
      'css-loader',
      'vue-style-loader',
    ]
  }*/
)
webpackConfig.plugins = []
webpackConfig.plugins.push(new VueLoaderPlugin())

module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai'],

    files: ['test/**/*.spec.js'],

    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    reporters: ['spec'],

    browsers: ['Chromium']
  })
}
