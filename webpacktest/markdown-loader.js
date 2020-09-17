const marked = require('marked')

// ./markdown-loader.js
module.exports = source => {
    // 加载到的模块内容 => '# About\n\nthis is a markdown file.'

    const html = marked(source)

    //  返回处理过的html

    // const code =  `export default ${JSON.stringify(html)}`
    // const code =  `module.export = ${JSON.stringify(html)}`
    // 两种方式都可以，webpack会自动转换
    
    // 返回值就是最终被打包的内容
    // return code

    // 直接返回html
    
    return html
  }
  