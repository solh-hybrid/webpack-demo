const webpack = require("webpack")
var path = require("path");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = (_, argv) => {
    return {
        stats: {
            errorDetails: true
        },
        mode: 'development',
        entry: {
            app: ['./src/index.js']
        },
        output: {
            filename: 'main.bundle.js',
            path: path.join(__dirname, 'dist'),
            /*
            - virtual when "webpack serve" because <image src> of image get from src
            - When build "webpack " this is link real
            */
            publicPath: path.join(__dirname, 'dist/images/'),
        },
        module: {
            rules: [
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    type: 'asset'
                },
            ]
        },
        plugins: [
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: path.join(__dirname, 'dist', 'vendor-manifest.json')
            }),
            new ImageMinimizerPlugin({
                severityError: 'warning', // Ignore errors on corrupted images
                minimizerOptions: {
                    plugins: ['gifsicle'],
                },
                loader: false,
                deleteOriginalAssets: true,
                filename: './images/[name][ext]'
            }),
        ],
        devServer: {
            contentBase: path.join(__dirname,'dist/'),
            compress: true,
            port: 9000,
            allowedHosts: ['.localhost']
        }
    }
}