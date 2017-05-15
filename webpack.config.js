
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
            'muse-components': 'muse-ui/src',
            'vue$': './node_modules/vue/dist/vue.js'
        }
    },

    externals: {
        'Vue': 'window.vue'
    },
    module: {
        // noParse: [],

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
                loader: 'style-loader!css-loader!url-loader',
                // include: path.resolve(__dirname, './')
            },
            {
              test:/\.scss$/,
              loader: 'style-loader!css-loader!sass-loader'
          },

        ]
    },

    plugins: [
      extractCss
    ],
    devServer: {
        host: '192.168.0.100',
        port: '4001',
        contentBase: './',
        historyApiFallback: true,
    },

}
