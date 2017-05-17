
var path = require('path');

var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

var extractCss = new ExtractTextWebpackPlugin("./static/css/[name].css");

var webpack = require('webpack');
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
            // 'muse-components': 'muse-ui/src',
            // 'vue$': 'vue/dist/vue.js',
            // 'vue-router$': 'vue-router/dist/vue-router.common.js'
        }
    },

    externals: {
        'Vue': 'vue',
        'vue-router': 'vue-router'
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
    //   new webpack.LoaderOptionsPlugin({
    //     vue: {
    //       // 使用用户自定义插件
    //       postcss: [require('postcss-cssnext')()]
    //     }
    //   })
    ],
    devServer: {
        host: '192.168.0.100',
        port: '4001',
        contentBase: './',
        historyApiFallback: true,
    },

}
