const path = require('path');
const webpack = require('webpack')

module.exports = {
  context: process.cwd(),
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less', '.css'],
    modules: [__dirname, 'node_modules']
  },
  entry: {
    library: [
      'react',
      'redux',
      'jquery',
      'd3',
      'highcharts',
      'bootstrap',
      'angular'
    ]
  },
  mode: 'development',
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, 'dist/[name].json'),
    })
  ]
};    