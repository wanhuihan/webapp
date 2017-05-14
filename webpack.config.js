
var path = require('path');

var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

var extractCss = new ExtractTextWebpackPlugin("./static/css/[name].css");
module.exports = {

    entry: path.resolve(__dirname, './index.js'),

    output: {

        path: path.resolve(__dirname, './static'),

        publicPath: 'static/',
        filename: '[name].js',
        chunkFilename: '[id].[chunkhash].js'
    },

    resolve: {
        extensions: ['*', '.js', '.vue','scss'],

        alias: {
            'muse-components': 'muse-ui/src'
        }
    },
    module: {

        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?presets=es2015',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
              test:/\.scss$/,
              loader: 'style-loader!css-loader!sass-loader'
            }
            // {test:/\.scss$/,loader:extractCss.extract(['css','sass'])}
        ]
    },

    plugins: [
      extractCss
    ],
    devServer: {
        host: '192.168.1.103',
        port: '4001',
        contentBase: './',
        historyApiFallback: true,
    },

}
