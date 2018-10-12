$(function(){
    var urlchannel_code,urlchannel;
    function getparams(){
        var searchArr = location.search.slice(1).split('&');
        var obj = {};
        searchArr.forEach(function(item,index){
            var pi = item.split('=');
            obj[pi[0]] = pi[1];
        })
        return obj;
    };
    var params = getparams();
    urlchannel = params['channel'] || 'QX爱奇艺-分手挽回';
    urlchannel_code = params['channel_code'] || 'f542eae1949358e25d8bfeefe5b199f1';
    console.log(urlchannel_code)
    var mySwiper = new Swiper('.swiper-container', {
        pagination : '.swiper-pagination',
    });
    $(".selsex1 label").click(function(){
        $(this).parent('.selsex1').siblings().find('label').removeClass('active');
        $(this).get(0).classname = 'active';
    });
    $(".selsex2 label").click(function(){
        $(this).parent('.selsex2').siblings().find('label').removeClass('active');
        $(this).get(0).classname = 'active';
    });
    var Index = new Submit('.contact-box2', {
        submitSuccess: function (data) {
        },
        submitError: function () {
            Index.popupShow('提交失败');
        },
        channel: urlchannel,
        channel_code:urlchannel_code
    });
    var Index2 = new Submit('.contact-box', {
        submitSuccess: function (data) {
        },
        submitError: function () {
            Index.popupShow('提交失败');
        },
        channel: urlchannel,
        channel_code:urlchannel_code
    }); 
    $(".closea img").click(function(){
        $(".form2").removeClass('fadeIn').addClass('fadeOut');
        setTimeout(function () {
            $(".form2").hide();
        },1000);
    });
    $(".sub2").click(function(){
        $(".form2").show();
        $(".form2").removeClass('fadeOut').addClass('fadeIn')
    });  
    $(".btnss").click(function(){
        $(".mask").show()
    })
    $(".close").click(function(){
        $(".mask").hide();
    })
})
    