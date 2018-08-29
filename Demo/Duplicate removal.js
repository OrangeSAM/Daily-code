//方法一
var arr=[0,2,3,2,3,5];
var obj={};
var tmp=[];
for(var i=0;i<arr.length;i++){
    if(!obj[arr[i]]){
        obj[arr[i]]=1;
        //obj对象的key都是只出现一次的数组元素
        tmp.push(arr[i]);
    }
}
console.log(tmp);

//方法二
var arrs=[0,2,3,2,3,5],arr2=[];
for(var i=0;i<arrs.length;i++){
    if(arr2.indexOf(arrs[i])<0){
        arr2.push(arrs[i]);
    }
}
//方法三
var arrss=[0,2,3,2,3,5]
var arr3=arrss.filter(function (element,index,self) {
    return self.indexOf(element)===index;
  });
console.log(arr3);