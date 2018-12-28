function writeCode(prev, code, fn2) {
    let domCode = document.querySelector('#code');
    let n = 0;
    let codeinterval = setInterval(() => {
        n = n + 1;
        domCode.innerHTML = Prism.highlight(prev + code.substring(0, n), Prism.languages.css);
        styleTag.innerHTML = prev + code.substring(0, n);
        domCode.scrollTop = domCode.scrollHeight; //具体含义待研究
        if (n >= code.length) {
            window.clearInterval(codeinterval);
            fn2 && fn2.call(); //写博客记得介绍这个
        }
    });
}

function writeMarkdown(markdown, fn) {
    let dompaper = document.querySelector('#paper');
    let n = 0;
    let markdownInterval = setInterval(() => {
        n += 1;
        dompaper.innerHTML = markdown.substring(0, n);
        dompaper.scrollTop = dompaper.scrollHeight;
        if (n >= markdown.length) {
            window.clearInterval(markdownInterval);
            fn && fn.call();
        }
    }, 0);
}

var markdowncontent = `
# 自我介绍
我叫刘强东
1998 年 1 月出生
瑶湖女子学院毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍
熟悉HTML CSS JavaScript
使用过C# .Net开发网站项目

#项目介绍
苹果风格轮播
简历网站
canvas画板

#联系方式
QQ 1792606258
wechat ponyma
Email awesome_sam@qq.com
Phone 13170864209
`


var result = `/*你好，我是Sam*/
/*我将以动画的形式来介绍我自己*/

/*只用文字介绍太单调了*/
/*我就换用代码吧*/

/*首先准备一些样式*/

*{
    transition:all 1s;
}
body{
    margin:0;
    padding:0 30px;  
}
html{
    background:rgb(222,222,222);

}

/* 接下来我需要一点代码高亮 */
.token.selector{
    color:#690;
}
.token.property{
    color:#905;
}
.token.function{
    color:#DD4A68;
}
/*再来点3D效果*/
#code{
    transform:rotate(360deg);
}
/*玩耍结束，接下来办正事*/
#code{
    position:fixed;
    left:0;
    padding:30px;
    width:50%;
    height:100%;
}
#paper{
    position:fixed;
    padding:30px;
    right:0;
    width:50%;
    height:100%;
    background:lightgray;
}
`;

var result2 = `
#paper{
    /* width:100px;
      height:100px;
      background-color:green;
*/}`;

writeCode('', result, () => {
    createPaper(() => {
        writeCode(result, result2,writeMarkdown(markdowncontent));
    });
});


function createPaper(fn) {
    var paper = document.createElement('pre');
    paper.id = 'paper';
    document.body.appendChild(paper);
    fn && fn.call(null);
}