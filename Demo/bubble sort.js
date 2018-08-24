function myArray(){
    this.sort=function(arr){
        for(var i=0;i<arr.length-1;i++){
            for(var j=0;j<arr.length-1-i;j++){
                if(arr[j]>arr[j+1]){
                    var temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }//j是一趟之中的排序   
            }
        }//i是一次完整的冒泡排序
    };
}
arr=[1,9,3,43,55];
myarray=new myArray();
myarray.sort(arr);
console.log(arr);