'use strict';

const path = require('path');

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
        filename: '[name].js'
    },
    module: {
        rules: [

        ]
    },
    plugins: [

    ],
    mode: 'production'
}