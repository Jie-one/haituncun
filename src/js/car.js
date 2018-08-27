jQuery(function ($) {


    /*------------【购物车获取Cookie】-----------*/
    var a = Cookie.get("goodslist");
    // console.log(a);
    var datalist = JSON.parse(a);
    console.log(datalist);


    //调用函数
    createdata();



    //生成数据
    function createdata() {
        var tr = $.map(datalist, function (item) {
            var total = item.price * item.count;
            return `
        <tr>
        <td>
            <input type="checkbox" class="check">
        </td>
        <td class="product">
            <div class="left">
                <a href="#">
                    <img src="${item.img}" alt="">
                </a>
            </div>
            <div class="right">
                <a href="#">${item.name} ${item.count}x${item.weight}</a>
            </div>
        </td>
        <td>${item.weight}</td>
        <td class="price">￥<span>${item.price}</span></td>
        <td>
            <input type="number" value="${item.count}" class="num">
        </td>
        <td>￥${total}</td>
        <td>
            <a href="#" class="del">删除</a>
        </td>
    </tr>

        `;


        })
        $("tbody").html(tr);


    }



    //【全选】
    var checkAll = $(".car_gwc .checkAll");
    var ftcheckAll = $(".dvfoot .checkAll");
    $(checkAll).on("click", function () {
        if (this.checked) {
            $("tbody .check").attr("checked", true);

        } else {
            $("tbody .check").attr("checked", false);

        }
    })

    $(ftcheckAll).on("click", function () {
        if (this.checked) {
            $("tbody .check").attr("checked", true);

        } else {
            $("tbody .check").attr("checked", false);

        }
    })



    //计算总经
    var total = 0;
    var count = 0;

    //【选中】找到所有tr
    $("tbody tr").on("click", function (e) {
        if(e.target.className==="check"){
        if ($(this).find(".check").attr("checked", true)) {
            count++;
            // console.log($(this));
            var price = $(this).find(".price").find("span").html();
            total += price * 1;

            //    //显示被选中的总价格
            $(".fotright .heji").html(total);
            $(".fotright .geshu").html(count);
            // console.log(count);
        } 
    }
    })

//【删除】找到所有tr
$("tbody tr ").on("click", function (e) {
    if (e.target.className==="del") {
        var tr=$(e.target).parent().parent();
        // $("tbody").children(tr).remove(); 
        $(tr).remove();
        // console.log(tr);
    } 
})







});