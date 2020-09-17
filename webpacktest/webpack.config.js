// ./webpack.config.js
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
    }
  }