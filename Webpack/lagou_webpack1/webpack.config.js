// ./webpack.config.js
// webpack.config.js 是运行在 Node.js 环境中的代码，所以直接可以使用 path 之类的 Node.js 内置模块。

const path = require('path')

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'output')
  }
}
