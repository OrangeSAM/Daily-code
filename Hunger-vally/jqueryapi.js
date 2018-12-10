/* jshint esversion: 6 */
window.jquery=function(selectorornode){
    let nodes={};//声明一个对象管理传入选择器选择的对象及其方法
    if(typeof selectorornode ==='string'){
        let temp=document.querySelectorAll(selectorornode);
        //检测到传入为选择器，获取选择的所有对象后存入临时变量；
        for(let i=0;i<temp.length;i++){
            nodes[i]=temp[i];
            //由于临时变量是个数组导致原型链不纯粹且不方便管理
            //拷贝至先前声明的对象中
        }
        nodes.length=temp.length;
    }else if(selector instanceof Node){
        //如果传入的是一个节点对象，那nodes就是传入的节点对象
        nodes={
            0:selectorornode,
            length:1
        };
    }
    
    //nodes上的方法

    //classes形参供用户要设置的类名传入
    nodes.addClass=function(classes){
        classes.forEach((value)=>{
            //遍历先前获取到的nodes对象，依次添加用户传入类名
            for(let i=0;i<nodes.length;i++){
                nodes[i].classList.add(value);
            }
        });
    //text形参供用户传入要设置的文本
    nodes.setText=function(text){
        //依次遍历添加
        for(let i=0;i<nodes.length;i++){
            nodes[i].length=text;
        }
    };
    };
    //返回对象，这样才能链式调用？
    return nodes;
};

var my$=jquery('ul li');//传入一个选择器
my$.addClass(['blue']);
my$.setText('hi sam');
//my$.addClass(['blue']).setText('hi sam');