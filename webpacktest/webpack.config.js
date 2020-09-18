// ./webpack.config.js

// 自动清理打包目录
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// 自动打包文件注入HTML文件中
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 用于复制文件的插件
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    // entry: './src/index.js', index.js 配合heading.js使用的
    entry: './src/main.js',
    mode: 'none',
    output: {
        filename: 'main.js',
    },
    module:{
        rules: [
            {
                test: /\.md$/,
                use: ['html-loader', './markdown-loader']
            }
        ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      // 根据配置生成对于的HTML文件
      // new HtmlWebpackPlugin({
      //     title: 'webpack plugin sample',
      //     meta: {
      //         viewport: 'width=device-width'
      //     }
      // })

      // 根据模板文件生成HTML文件
      new HtmlWebpackPlugin({
          title: 'webpack plugin sample',
          template: './src/index.html'
      }),
      // 多页面，再生成一个html文件
      new HtmlWebpackPlugin({
          filename: 'about.html'
      }),
      // 复制目标路径的文件到dist目录
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'public'
          }
        ]
      })
    ]
  }