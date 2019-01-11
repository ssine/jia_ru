const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const fs = require('fs');

fs.open('./src/config/env.js', 'w', function (err, fd) {
    const buf = 'export default "development";';
    // This works for a higher version of nodejs:
    fs.write(fd, buf, 0, 'utf-8', function(err, written, buffer) {});
    // For a lower version of nodejs, use code below:
    // fs.write(fd, buf, 0, buf.length, 0, function (err, written, buffer){});
});

module.exports = merge(webpackBaseConfig, {
    devtool: '#source-map',
    output: {
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js'
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: './src/template/index.ejs',
            inject: false
        })
    ],
    devServer: {
        port: 8888,
        proxy:{
        //配置跨域
        '/api': {//配置跨域的名字
            target:'http://39.105.181.135/',//跨域的地址
            changOrigin: true,//是否跨域
            pathRewrite:{ //当前的名字
                '^/api':'http://39.105.181.135'
            }
          }
        }
    }
});