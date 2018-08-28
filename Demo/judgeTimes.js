var str="asdfgss";
var json={};
for(var i=0;i<str.length;i++){
    //判断json这个对象中是否存在这个key，存在则value+1
    if(!json[str.charAt(i)]){
        debugger;
        json[str.charAt(i)]=i;
    }else{
        json[str.charAt(i)]++;
    }
};
var iMax=0;
var iIndex='';
for(var i in json){
    if (json[i]>iMax){
        iMax=json[i];
        iIndex=i;
    }
}
console.log('出现次数最多的是：'+iIndex+'出现'+iMax+'次');