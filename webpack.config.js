const path = require('path');
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: {
      app: ['./src/index.js']
    },
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'dist')
      },
      plugins: [
        new webpack.DllReferencePlugin({
          context: __dirname,
          manifest: require('./dist/library.json')
        })
    ]
};    