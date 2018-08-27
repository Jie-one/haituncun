jQuery($ => {

    // var a= location.search("?");
    var arr = decodeURI(location.search).slice(1)
    // console.log(arr);


    //【发送Ajax请求】
    $.ajax({

        type: "post",
        url: "../api/list.php",
        data: "name=" + arr,
        dataType: "json",
        success: function (data) {
            // var dataObj=eval("("+data+")");//转换为json对象
            var prolist = $(".list .five_Right .prolist");
            createdatalist(prolist, data);

        }//成功


    })  //ajax请求





    /*----------【列表页-------生成数据结构】----------*/
    function createdatalist(ele, data) {
        var li = $.map(data, function (item, idx) {
            return `
      <li>
      <div class="item" data-guid="${idx}">
          <a href="goods.html?pid=${item.id}">
              <div class="pimg">
              <img src="../img/indexImg/productImg/${item.imgurl}" alt="" class="ceimg"></div>
          </a>
          <dl>
              <dt class="price">¥<span>${item.price}</span></dt>
              <dd class="name">${item.name}</dd>
              <dd class="cart">
                  <a href="#">加入购物车</a>
              </dd>
          </dl>
          <div class="contry">
              <p class="pl"><span></span>德国2号店</p>
              <p class="pr"><img src="../img/listImg/pcontry.png" alt=""></p>
          </div>
      </div>
  </li>

          `;
        });

        $(ele).append(li);


    }
    /*----------【列表页-------生成数据结构】----------*/


    // 读取Cookie
    var goodslist = Cookie.get('goodslist')
    if (goodslist === '' || goodslist == []) {
        goodslist = [];
        // console.log(6666)
    } else {
        goodslist = JSON.parse(goodslist);

    }



    /*------------【写入Cookie】--------------*/
    $(".list .five_Right .prolist").on("click", function (e) {
        // 事件源对象兼容
        var target = e.target || e.srcElement;

        if (target.className === "cart") {

            $(".list .zhezhao").css("display", "block");
            $(".list #win").css("display", "block");
            tanchuceng();
            $(window).on("scroll", function () {
                tanchuceng();
            })

            // 获取当前li
            var currentItem = target.parentNode.parentNode;
            var guid = currentItem.getAttribute('data-guid');

            //   var name=$(currentItem).find("dl").find(".name").html();
            //   var price=$(currentItem).find("dl").find("dt").find("span").html();
            //   var img=$(currentItem).find(".pimg").find("img").attr("src");


            // 判断当前商品是否已经添加过
            var currentGoods = goodslist.filter(function (g) {
                return g.guid === guid;
            });//[{}]或[]
            // console.log(currentGoods);

            if (currentGoods.length > 0) {
                // 存在，数量+1
                currentGoods[0].count++;
            } else {
                // 不存在，添加商品
                var goods = {
                    guid: guid,
                    name: $(currentItem).find("dl").find(".name").html(),
                    price: $(currentItem).find("dl").find("dt").find("span").html(),
                    img: $(currentItem).find(".pimg").find("img").attr("src"),
                    weight: 200,
                    count: 1
                };
                // 当前商品添加到数组
                goodslist.push(goods);


            }
            Cookie.set('goodslist', JSON.stringify(goodslist));

        }


    });
    /*------------【写入Cookie】--------------*/




    /*-------------------【弹出层购物车】---------------- */
    function tanchuceng() {
        var offw = window.innerWidth;
        var offh = window.innerHeight;
        var mleft = $(".list #win").width();
        var mtop = $(".list #win").height();
        var a = (offw - mleft) / 2 + "px";
        var b = (offh - mtop) / 2 + "px";

        $(win).css({ "left": a, "top": b });

        //【继续购物】【去购物车结算】
        var no = $(".list #easyDialogNoBtn");
        var yes = $(".list #easyDialogYesBtn");

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
        $(".list .zhezhao").css("display", "none");
        $(".list #win").css("display", "none");
    }


    /*----------【存在Cookie后才能有数据】---------------*/
    // Cookie.set("goodslist")
    //  【购物车数量显示】
    var glcookie = Cookie.get('goodslist');
    var count = $(".headTwo .two-four .count");
    var a = JSON.parse(glcookie);
    $(count).html(a.length);




})