
var arr1 = ["您的性别是？","您的年龄是？"
    ,"在对方提出分开的时候，你选择的挽回方式是无休止地纠缠，还是冷静地处理？","分开后你是反复电话、微信、短信轰炸，还是冷处理？"
    ,"是否有跟身边亲朋好友诉苦，哭诉你遭受的委屈？","离开Ta后是否有茫然失措，完全不知道该怎么去挽回？"
    ,"您已完成全部自测答题，你的自测分析结果系统已自动发送给天道老师，请及时添加天道老师微信：hfq658 ,待3分钟后自测分析检测结果将发送到您的微信！"];

var arr2 = ["男","18岁-30岁","无休止纠缠","电话/微信/短信轰炸","是","是"];

var arr3 = ["女","30岁以上","冷静处理","冷处理","否","否"];

$(".start").click(function () {
    $(".content").append(" <div class=\"guke animated fadeInUp\">\n" +
        "<div class=\"bg2\">开始</div>\n" +
        " <div class=\"imgSize2-box0\"><img src=\"images/qw.png\" class=\"imgSize2\" alt=\"\"></div></div>");
    $(".first").show();
    $(".secend").hide();
    $(".first .start").html("请稍后...");
    setTimeout(function () {
        $(".content").append("<div class=\"yisheng  animated fadeInUp\">\n" +
            " <div class=\"imgSize2-box\"><img src=\"images/2wq.png\" class=\"imgSize2\" alt=\"\"></div>" +
            " <div class=\"bg1\">您的性别是？</div>\n" +
            " </div>");
        $(".first").hide();
        $(".secend").show();
        $(".left").html("男");
        $(".right").html("女");
    },800);

});
function answerShow(answer){
    var index0 = $(".yisheng").length;
      $(".content").append(" <div class=\"guke animated fadeInUp\">\n" +
        "<div class=\"bg2\">" + answer + "</div>\n" +
        "<div class=\"imgSize2-box0\"><img src=\"images/qw.png\" class=\"imgSize2\" alt=\"\"></div></div>");
    $(".first").show();
    $(".secend").hide();
    $(".first .start").html("请稍后...");
    setTimeout(function () {
        $(".content").append("<div class=\"yisheng  animated fadeInUp\">\n" +
            " <div class=\"imgSize2-box\"><img src=\"images/2wq.png\" class=\"imgSize2\" alt=\"\"></div>" +
            " <div class=\"bg1\">" + arr1[index0]+"</div>\n" + " </div>");
        if(index0 === 6){
            setTimeout(function () {
                $(".bottom-box").show();
            },1000)
            $(".secend").hide();
            $(".three").show();
            $("#here").removeClass("here");
            $(".first").hide();
                 }else{
            $(".first").hide();
            $(".secend").show();
            $(".left").html(arr2[index0]);
            $(".right").html(arr3[index0]);
        }
    },800);

}
$(".left").click(function () {
    var answer = $(this).html();
    answerShow(answer)
});
$(".right").click(function () {
    var answer = $(this).html();
    answerShow(answer)
});

$(".copy1").on("click",function () {
    var clipboard2 = new ClipboardJS('.copy1', {
        text: function() {
            return "hfq658";
        }
    });
    clipboard2.on('success', function(e) {
        alert("复制成功");
    });
    clipboard2.on('error', function(e) {

        alert('请选择“拷贝”进行复制!')
    });
})








