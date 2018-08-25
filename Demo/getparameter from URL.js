function geturl(){
    var hrefs=window.location.href;
    var args=hrefs.split('?');
    if(args[0]==hrefs){
        return '';
    }
    //分割url中的第二部分查询字符串
    var arr=args[1].split('&');
    var obj=[];
    for(var i=0;i<arr.length;i++){
        //将每一个参数分为等号前后两部分
        var arg=arr[i].split('=');
        obj[arg[0]]=arg[1];
    }
    return obj;
}
var href=geturl();
console.log(href.name);