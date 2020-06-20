'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // 单入口 entry是一个字符串，单页面应用
    // 多入口 entry是一个对象，适合多页面应用
    // entry: './src/index.js',
    // 告诉webpack如何将编译后的文件输出到磁盘
    // 单入口配置，直接写死文件路径和文件名
    // 多页面应用，使用占位符概念，
    // output: {
    //     path: path.join(__dirname, 'dist'),
    //     filename: 'bundle.js'
    // },
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js'
    },
    module: {
        rules: [
            // 配置babel
            {
                test: /.js$/,
                use: 'babel-loader'
            },
            {
                test: /.css$/,
                // 从右到左执行。
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /.less$/,
                // 从右到左执行。
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash:8].[ext]',
                    }
                }]
            },
            {
                test: /.(woff|woff2|eot|ttf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash:8][ext]',
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        })
    ],
    mode: 'production'
}