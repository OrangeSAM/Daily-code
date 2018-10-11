/*
* @Author: admin
* @Date:   2017-09-14 10:07:41
* @Last Modified by:   admin
* @Last Modified time: 2017-11-13 17:59:34
*/

// 统计代码
window.onload=function (){
    var oHead = document.getElementsByTagName('HEAD').item(0);
    var oScript= document.createElement("script");
    oScript.type = "text/javascript";
    oScript.src="http://www.huazhen.com/promotion/old_page_log?id="+returnCitySN["cip"];
    oHead.appendChild( oScript);
}

// 获取时长和tid

$(function(){
   
    visit_timing(log_id);
})
	 
        
 function GetQueryString(name)
        {
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        }

        var log_id = GetQueryString("log_id");
        function visit_timing(log_id)
        {
            var start;
            var end;
            var duration = 0;
            start = new Date();
            $(window).bind('beforeunload', function(e) {
                end = new Date();//用户退出时间
                duration = end.getTime() - start.getTime();
                //  duration = duration/1000;//取的是秒
                console.log(log_id);
                console.log(duration);
                $.ajax({
                    type: 'get',
                    async: false,//这块至关重要，用$post默认是true
                    url: 'http://ssp.huazhen2008.com/api/store_log',
                    data: {log_id:log_id,visited_time:duration},
                    success: function (data) {
                        console.log(data)
                    }
                });
            });
        }
