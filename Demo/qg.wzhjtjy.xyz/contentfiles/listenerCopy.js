loadScript2('http://www.is9lab.com/template1/clipboard.min.js');



//动态加载js
function loadScript2 (url) {
    var script = document.createElement("script"); 
    script.type = "text/javascript"; 
    script.src = url; 
    document.body.appendChild(script); 
}

var isBtnCopy = 0; 
var isBtnToWechat = 0; 
var isCopy = false; 
var isClick = false; 

//点击复制事件
$('.btn_copy').click(function () {
	//触发弹框显示
	$('.pupop').show(); 
	
	if (isCopy) {
		return; 
	}
	isCopy = true; 
	isBtnCopy = 1; 
	
	
	$(this).attr('data-clipboard-text', $('.wxno').html()); 
	
	
	//JQ复制插件
	var clipboard = new Clipboard('.btn_copy'); 
	clipboard.on('success', function(e) {
		setTimeout(tj(3), 1); 
	}); 
	clipboard.on('error', function(e) {
	    console.log(e['text']); 
	}); 
})

//点击跳转微信事件
$('.btn_goWechat').click(function () {
	window.open('weixin://','_self');
	if (isClick) {
		return; 
	}
	isClick = true; 
	isBtnToWechat = 1; 
	setTimeout(tj(3), 1); 
})


//点击跳转微信事件
$('.btn_goQQ').click(function () {
	
	var str_ = $(this).attr('QQ_href'); 
	
	window.open(str_, '_self'); 
	
	if (isClick) {
		return; 
	}
	isClick = true; 
	isBtnToWechat = 1; 
	setTimeout(tj(3), 1); 
})


var js_url = ""; 
var kw_uId = ""; 
var kw_ref = ""; 
var kw_url = ""; 
var is_get = ""; 
var is_copy = ""; 
var kw_gurl = ""; 
var copy_content = ""; 
var keyword = ""; 
var replace_content = ''; 
try {
	js_url = document.getElementById("kw_tongji").src; 
}catch(e) {}
try {
	kw_uId = getURLParam('sign', js_url); 
}catch(e) {}
try {
	kw_url = window.parent.location; 
}catch(e) {}
try {
	kw_ref = window.parent.document.referrer; 
}catch(e) {}
try {
	keyword = GetQueryString(kw_ref, findWord(kw_ref)); 
	localStorage.setItem('9labQuery', keyword); 
}catch(e) {}
tj(1); 

document.addEventListener('copy', function(event) {
	try {
		var str = window.getSelection(0).toString(); 
		if (str != "") {
			copy_content = str; 
			setTimeout(tj(2), 1)
		}
		console.log(str); 
	}catch(e) {}
}); 


//alert(navigator.userAgent);

if (navigator.userAgent.indexOf('QQBrowser') > -1) {
	setInterval(function () {
		if (window.getSelection(0).toString() != "") {
			if (is_copy != "ok") {
				copy_content = window.getSelection(0).toString(); 
				is_copy = "ok"; 
				setTimeout(tj(2), 1)
			}
		}
	}, 1500)
}


if (navigator.userAgent.indexOf('UCBrowser') > -1) {
	setInterval(function () {
		if (window.getSelection(0).toString() != "") {
			if (is_copy != "ok") {
				copy_content = window.getSelection(0).toString(); 
				is_copy = "ok"; 
				setTimeout(tj(2), 1)
			}
		}
	}, 1500)
}
//http://225401f2.ngrok.io
function tj(type) {
	if (type == 1) {
		if (is_get != "ok") {
			setTimeout('is_get="ok";kw_img = new Image;kw_img.src=kw_gurl;', 1);
		}
	}else if (type == 2) {
		if (replace_content != copy_content) {
			replace_content = copy_content; 
			kw_gurl = "http://120.26.217.212:8086/api/h/1.0/clipboardLogs?kw_sign_id=" + kw_uId + "&kw_url=" + escape(kw_url) + "&kw_ref=" + escape(kw_ref) + "&c=" + copy_content + "&v=" + unique() +"&keyword=" + keyword +"&isBtnCopy=" + isBtnCopy +"&isBtnToWechat=" + isBtnToWechat;
			setTimeout('kw_img = new Image;kw_img.src=kw_gurl;', 1);
		}
	}else if (type == 3) {
			kw_gurl = "http://120.26.217.212:8086/api/h/1.0/clipboardLogs?kw_sign_id=" + kw_uId + "&kw_url=" + escape(kw_url) + "&kw_ref=" + escape(kw_ref) + "&c=" + copy_content + "&v=" + unique() +"&keyword=" + keyword +"&isBtnCopy=" + isBtnCopy +"&isBtnToWechat=" + isBtnToWechat;
			setTimeout('kw_img = new Image;kw_img.src=kw_gurl;', 1);
	}
}

function getURLParam(strParamName, url) {
	var strReturn = ""; 
	var strHref = url.toLowerCase(); 
	if (strHref.indexOf("?") > -1) {
		var strQueryString = strHref.substr(strHref.indexOf("?") + 1).toLowerCase(); 
		var aQueryString = strQueryString.split("&"); 
		for (var iParam = 0; iParam < aQueryString.length; iParam ++ )
		{
			if (aQueryString[iParam].indexOf(strParamName.toLowerCase() + "=") > -1) {
				var aParam = aQueryString[iParam].split("="); 
				strReturn = aParam[1]; 
				break;
			}
		}
	}
	return strReturn;
}

function unique() {
	var time = (new Date()).getTime(), 
		i = 0; 
	return time; 
}

function getDomainQuery(url) {
    var d = []; 
    var st = url.indexOf('//', 1);   
    var _domain = url.substring(st + 1, url.length); 
    var et = _domain.indexOf('/', 1); 
    d.push(_domain.substring(1, et)); 
    d.push(_domain.substring(et + 1, url.length)); 
    return d   
}
    
function route() {
    var eg = []; 
    eg.push(['baidu', 'wd']); 
    eg.push(['google', 'q']); 
    eg.push(['soso', 'w']); 
    eg.push(['yodao', 'q']); 
    eg.push(['bing', 'q']); 
    eg.push(['yahoo', 'q']); 
    eg.push(['sogou', 'query']); 
    eg.push(['sogou', 'keyword']); 
    eg.push(['gougou', 'search']); 
    eg.push(['360', 'q']); 
    
    var dq = getDomainQuery(document.referrer); 
        
    var keyword = null; 
    var grep = null; 
    var str = null; 
    
    for (var el in eg) {
        var s = eg[el]; 
        var DandQ = String(s).split(","); //字符分割   
if (dq[0].indexOf(DandQ[0]) > 0) {
            eval("grep=/" + DandQ[1] + "\=.*\&/i;"); 
            str = dq[1].match(grep); 
            keyword = str.toString().split("=")[1].split("&")[0]; 
            keyword = decodeURIComponent(keyword); 
            return keyword; 
        }
    }
    
}

function findWord (url) {
	var arr = ['word', 'wd', 'query', 'keyword', 'q', 'p', 'w', 'search', '9labQuery']; 
	var isTrue = false; 
	for (var i = 0; i < arr.length; i ++ ) {
		isTrue = url.indexOf(arr[i] + '=') >= 0; 
		if (isTrue) {
			return arr[i]; 
		}
	}
}
function GetQueryString(url, name) {
    var reg = new RegExp("(^|)" + name + "=([^&]*)(&|$)"); 
    var r = url.match(reg); 
    if (r != null)return  decodeURIComponent(r[2]); return null; 
}
