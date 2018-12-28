
var result=`/*你好，我是Sam*/
/*我将以动画的形式来介绍我自己*/

/*只用文字介绍太单调了*/
/*我就换用代码吧*/

/*首先准备一些样式*/

*{
    transition:all 1s;
}
html{
    background:rgb(222,222,222);
    padding:15px;
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
`;

var n=0;
var writecode=setInterval(()=>{
    n = n+1;
    code.innerHTML=result.substring(0,n);
    code.innerHTML=Prism.highlight(code.innerHTML,Prism.languages.css);
    styleTag.innerHTML=result.substring(0,n);
    if(n>=result.length){
        window.clearInterval(writecode);
    }
},10);