
jQuery(function ($) {

    // 插件是否支持链式调用
    $('.goods_details .top').lxzoom({ width: 500, height: 200 }).addClass('box');



    var pid = decodeURI(location.search).slice(1).split("=")[1];
    
    // console.log(pid);
    $.ajax({

        type: "get",
        url: "../api/goods.php",
        data: "pid=" + pid,
        dataType: "json",
        success: function (data) {
            //    console.log(data[0]);

            //图片路径
            var deilimg = $(".goods_details .deal_Left .top");

            /*---------delOne---------*/
            //商品名称
            var pname = $(" .deal_Center .delOne .protitle");
            //外文名称
            var forename = $(name).next("h2");

            var forename = $(".goods_details .deal_Center .country .cname");
            //商品描述
            var des = $(".goods_details .deal_Center .prodes");
            /*---------delTwo---------*/
            var price = $(".goods_details .delTwo .price");
            var active = $(".goods_details .delTwo .active");

            $(deilimg).html(`<img src="../img/indexImg/productImg/${data[0].imgurl}"/>`);
            $(pname).html(data[0].name);
            $(forename).html(` <a href="#">${data[0].forename}</a>`);
            $(des).html(data[0].description);
            $(price).html("￥" + data[0].price);
            $(active).html("￥" + data[0].activeprice);



        }
    })




})