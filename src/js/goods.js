
jQuery(function ($) {


    //图片路径
    var deilimg = $(".goods_details .deal_Left .top");

    /*---------delOne---------*/
    //商品名称
    var pname = $(" .deal_Center .delOne .protitle");
    //外文名称
    // var forename = $(name).next("h2");

    var forename = $(".goods_details .deal_Center .country .cname");
    //商品描述
    var des = $(".goods_details .deal_Center .prodes");
    //商品价格
    var price = $(".goods_details .delTwo .price");
    //活动价格
    var active = $(".goods_details .delTwo .active");
    //重量
    var weight = $(".goods_details .delThree .weight");

    var pid = decodeURI(location.search).slice(1).split("=")[1];



    /*-----------【根据ID得到数据】-------- */
    $.ajax({

        type: "get",
        url: "../api/goods.php",
        data: "pid=" + pid,
        dataType: "json",
        success: function (data) {
            //    console.log(data[0]);

            $(deilimg).html(`<img src="../img/indexImg/productImg/${data[0].imgurl}"/>`);
            $(pname).html(data[0].name);
            $(forename).html(` <a href="#">${data[0].forename}</a>`);
            $(des).html(data[0].description);
            $(price).html(data[0].price);
            $(active).html(data[0].activeprice);
            $(weight).html(data[0].weight)
        }
    })
    /*-----------【根据ID得到数据】-------- */


    // 读取Cookie
    var goodslist = Cookie.get('goodslist')
    if (goodslist === '' || goodslist == []) {
        goodslist = [];
        // console.log(6666)
    } else {
        goodslist = JSON.parse(goodslist);

    }


    //购物车
    var gwc = $(".goods .delFour .gwc");
    // console.log(gwc);


    /*------------------（1）购物车点击【弹出层】--------------- */
    $(gwc).on("click", function () {
        $(".goods .zhezhao").css("display", "block");
        $(".goods #win").css("display", "block");
        tanchuceng();
        $(window).on("scroll", function () {
            tanchuceng();
        })

        /*----（2）【添加商品，存入Cookie】----- */
        //    console.log(data)
        var goods = {
            name: $(pname).html(),
            price: $(price).html(),
            img: $(deilimg).children("img").attr("src"),
            count: $(".num").val(),
            weight: $(weight).html()
        };

        //将商品对象添加到数组当中
        goodslist.push(goods);

        Cookie.set("goodslist", JSON.stringify(goodslist));

        console.log(goodslist)


        // console.log(goodslist.length);

    })





    /*-------------------【弹出层购物车】---------------- */
    function tanchuceng() {
        var offw = window.innerWidth;
        var offh = window.innerHeight;
        var mleft = $(".goods #win").width();
        var mtop = $(".goods #win").height();
        var a = (offw - mleft) / 2 + "px";
        var b = (offh - mtop) / 2 + "px";

        $(win).css({ "left": a, "top": b });

        //【继续购物】【去购物车结算】
        var no = $(".goods #easyDialogNoBtn");
        var yes = $(".goods #easyDialogYesBtn");

        //【继续购物】
        $(no).on("click", function () {
            close();
        })
        $("#win #close").on("click", function () {
            close();
        })

        //【去购物车结算】购物车页面
        $(yes).on("click", function () {
            location.href = "car.html";
        })
        // console.log(no);
        // console.log(yes);

    }

    //关闭遮罩层
    function close() {
        $(".goods .zhezhao").css("display", "none");
        $(".goods #win").css("display", "none");
    }


    // Cookie.set("goodslist")
    //  【购物车数量显示】
    var glcookie = Cookie.get('goodslist');
    var count = $(".headTwo .two-four .count");
    var a = JSON.parse(glcookie);
    $(count).html(a.length);



})

