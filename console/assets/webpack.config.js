var path = require('path');
var AutoModulePlugin = require('hc-honeypack-auto-module-plugin');
var Docco = require('damo-cli-docco-plugin');

var webpackOpts = {
  devtool: '#cheap-source-map',
  plugins: [new AutoModulePlugin({
    basePath: path.resolve(__dirname, '.'),
    modelsPath: path.resolve(__dirname, './models'),
    scenesPath: path.resolve(__dirname, './scenes'),
    extensions: ['jsx', 'js']
  }), new Docco({
    dir: path.resolve(__dirname, 'scenes'),
    output: path.resolve(__dirname, 'static'),
    extension: '.jsx'
  })]
};

module.exports = webpackOpts;
