/*
 * @Author: Sam liu 
 * @Date: 2018-12-21 23:11:16 
 * @Last Modified by: Sam liu
 * @Last Modified time: 2018-12-22 01:45:12
 */
/* jshint esversion: 6 */

//#region addclass settext
window.jquery = function (selectorornode) {
    let nodes = {}; //声明一个对象管理传入选择器选择的对象及其方法
    if (typeof selectorornode === 'string') {
        let temp = document.querySelectorAll(selectorornode);
        //检测到传入为选择器，获取选择的所有对象后存入临时变量；
        for (let i = 0; i < temp.length; i++) {
            nodes[i] = temp[i];
            //由于临时变量是个数组导致原型链不纯粹且不方便管理
            //拷贝至先前声明的对象中
        }
        nodes.length = temp.length;
    } else if (selector instanceof Node) {
        //如果传入的是一个节点对象，那nodes就是传入的节点对象
        nodes = {
            0: selectorornode,
            length: 1
        };
    }

    //以免传入的参数是字符串
    function classesToArray(classes) {
        if (Array.isArray(classes)) {
            return classes;
        }
        if (typeof classes === 'string') {
            return classes.match(/[^\x20\t\r\n\f]+/g) || [];
        }
        return [];
    }

    //nodes上的方法
    //classes形参供用户要设置的类名传入
    nodes.addClass = function (classes) {
        classes = classesToArray(classes);
        classes.forEach((value) => {
            //遍历先前获取到的nodes对象，依次添加用户传入类名
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].classList.add(value);
            }
        });
    };
    //text形参供用户传入要设置的文本
    nodes.setText = function (text) {
        //依次遍历添加
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].textContent = text;
        }
    };

    //返回对象，这样才能链式调用？
    return nodes;
};
//#endregion

var my$ = jquery('ul li'); //传入一个选择器
my$.addClass(['blue']);
my$.setText('hi sam');
//my$.addClass(['blue']).setText('hi sam');


//#region  jquery ajax

window.jquery.ajax = function (method, path, body, successfn, failfn) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, path);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                successfn.call(undefined, Request.responseText);
            } else if (xhr.status >= 400) {
                failfn.call(undefined, Request);
            }
        }
    };
    xhr.send(body);
};
window.jquery.ajax(
    'get',
    '/index.html',
    null,
    (responseText) => {},
    (Request) => {}
);
//version 1.0

window.jquery.ajax = function (options) {
    let method = options.method;
    let path = options.path;
    let body = options.body;
    let successfn = options.successfn;
    let failfn = options.failfn;

    let xhr = new XMLHttpRequest();
    xhr.open(method, path);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                successfn.call(undefined, Request.responseText);
            } else if (xhr.status >= 400) {
                failfn.call(undefined, Request);
            }
        }
    };
    xhr.send(body);
};

// let obj={
//     path:'/index.html',
//     method:'get',
//     successfn:()=>{},
//     failfn:()=>{}
// };
// window. jquery.ajax(obj);
window.jquery.ajax({
    path: '/index.html',
    method: 'get',
    successfn: (x) => {
        console.log(x);
    },
    failfn: (x) => {
        console.log(x);
    }
});
//version 2.0

window.jQuery.ajax = function ({
    path,
    method,
    body
}) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, path);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve.call(undefined, xhr.responseText);
                } else if (xhr.status >= 400) {
                    reject.call(undefined, request);
                }
            }
        };
        xhr.send(body);
    });
};


myButton.addEventListener('click', function () {
    window.jQuery.ajax({
        path: "/xxx",
        method: 'get',
        body: null
    }).then(
        (text) => {
            console.log(text);
            console.log('success')
        },
        (request) => {
            console.log(request);
            console.log(fail);
        }
    );
});
//#endregion