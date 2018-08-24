
jQuery(function ($) {




    var muyinglist = new Array();     //母婴用品
    var yingyanglist = new Array();  //营养保健
    var meironglist = new Array();   //美容药妆
    var gerenlist = new Array();     //个人护理
    var jiajulist = new Array();     //家居厨卫
    var shipinlist = new Array();    //食品精选

    //Ajax发送请求
    $.ajax({
        type: "post",
        url: "api/index.php",
        dataType: "json",
        success: function (data) {

            $.each(data, function (idx, item) {
                if (item.category === "母婴用品") {
                    muyinglist.push(item);
                } else if (item.category === "营养保健") {
                    yingyanglist.push(item);
                } else if (item.category === "美容药妆") {
                    meironglist.push(item);
                } else if (item.category === "个人护理") {
                    gerenlist.push(item);
                } else if (item.category === "家居厨卫") {
                    jiajulist.push(item);
                } else if (item.category === "食品精选") {
                    shipinlist.push(item);
                }
            })

            //【01母婴用品】取5条数据出来
            var muyingb = muyinglist.slice(1, 5);
            var muyinga = muyinglist.splice(0, 1);
            var muyingul = $(".haitun .ht_muying .muyingBottom .bottomCenter .datalist");
            //生成数据结构【1个】
            createdataOne(muyingul, muyinga);
            //生成数据结构【相同的4个】
            createdataFour(muyingul, muyingb);


            //【02营养保健】取5条数据出来
            var yingyangul = $(".haitun .ht_yingyang .muyingBottom .bottomCenter .datalist");
            var yingyangb = yingyanglist.slice(1, 5);
            var yingyanga = yingyanglist.splice(0, 1);

            //生成数据结构【1个】
            createdataOne(yingyangul, yingyanga);
            //生成数据结构【相同的4个】
            createdataFour(yingyangul, yingyangb);


            //【03美容药妆】取5条数据出来
            var meirongul = $(".haitun .ht_meirong .muyingBottom .bottomCenter .datalist");
            var meirongb = meironglist.slice(1, 5);
            var meironga = meironglist.splice(0, 1);

            //生成数据结构【1个】
            createdataOne(meirongul, meironga);
            //生成数据结构【相同的4个】
            createdataFour(meirongul, meirongb);

            //【04个人护理】取5条数据出来
            var huliul = $(".haitun .ht_gerenhuli .muyingBottom .bottomCenter .datalist");
            var hulib = gerenlist.slice(1, 5);
            var hulia = gerenlist.splice(0, 1);

            //生成数据结构【1个】
            createdataOne(huliul, hulia);
            //生成数据结构【相同的4个】
            createdataFour(huliul, hulib);

            //【05家居厨卫】取5条数据出来
            var jiajuul = $(".haitun .ht_jiaju .muyingBottom .bottomCenter .datalist");
            var jiajub = jiajulist.slice(1, 5);
            var jiajua = jiajulist.splice(0, 1);

            //生成数据结构【1个】
            createdataOne(jiajuul, jiajua);
            //生成数据结构【相同的4个】
            createdataFour(jiajuul, jiajub);

             //【06食品精选】取5条数据出来
             var shipinul = $(".haitun .ht_shipin .muyingBottom .bottomCenter .datalist");
             var shipinb = shipinlist.slice(1, 5);
             var shipina = shipinlist.splice(0, 1);
 
             //生成数据结构【1个】
             createdataOne(shipinul, shipina);
             //生成数据结构【相同的4个】
             createdataFour(shipinul, shipinb);


        }  //sucess请求成功
       

    });//Ajax请求
     



    /*------------------- 【列表页】 ----------------------*/
    $('.tab2 .tab2li').eq(0).on('click', e => {
        if (e.target.tagName === 'A' || e.target.tagName === 'DD') {
            location.href = 'html/list.html?母婴用品';
            // alert("aaa");
        }
       
    })

    $('.tab2li').eq(1).on('click', e => {
        if (e.target.tagName === 'A' || e.target.tagName === 'DD') {
            location.href = 'html/list.html?营养保健';
            // console.log("bbb");
        }
    })

    $('.tab2li').eq(2).on('click', e => {
        if (e.target.tagName === 'A' || e.target.tagName === 'DD') {
            location.href = 'html/list.html?美容药妆';
            // console.log("bbb");
        }
    })

    $('.tab2li').eq(3).on('click', e => {
        if (e.target.tagName === 'A' || e.target.tagName === 'DD') {
            location.href = 'html/list.html?个人护理';
            // console.log("bbb");
        }
    })

    $('.tab2li').eq(4).on('click', e => {
        if (e.target.tagName === 'A' || e.target.tagName === 'DD') {
            location.href = 'html/list.html?家居厨卫';
            // console.log("bbb");
        }
    })

    $('.tab2li').eq(5).on('click', e => {
        if (e.target.tagName === 'A' || e.target.tagName === 'DD') {
            location.href = 'html/list.html?食品精选';
            // console.log("bbb");
        }
    })


    $('.tab2li').eq(6).on('click', e => {
        if (e.target.tagName === 'A' || e.target.tagName === 'DD') {
            location.href = 'html/list.html?儿童玩具';
            // console.log("bbb");
        }
    })

    /*------------------- 【列表页】 ----------------------*/




    






    //【首页-------生成数据结构】【1个】
    function createdataOne(ele, data) {
      var li = $.map(data, function(item) {
        return `
            <li class="celia">
            <ul>
                
                <li>
                    <a href="html/goods.html?pid=${item.id}">
                        <img src="img/indexImg/productImg/${item.imgurl}" alt="" class="ceimg">
                    </a>
                </li>
                <li class="celiaContent">
                    <a href="html/goods.html?pid=${item.id}">
                        <div class="good-txt">
                            <h1>${item.name}</h1>
                            <p class="good-info">
                            ${item.description}
                            </p>
                            <span class="good-price">
                                <em class="em">¥${item.price}</em>
                                <span>AU$${item.activeprice}</span>
                            </span>
                        </div>
                
                    </a>
                </li>
            </ul>
        </li>`;
      });

      $(ele).append(li);
    }



    //【首页-------生成数据结构】【相同的4个】
    function createdataFour(ele, data) {
    var li=  $.map(data, function(item) {
        return `
            <li class="centerTwo">
                <a href="html/goods.html?pid=${item.id}">
                    <dl>
                        <dt><img src="img/indexImg/productImg/${item.imgurl}" alt=""></dt>
                        <dd>${item.name}</dd>
                        <dd> 
                            <em class="em">¥${item.price}</em>
                            <span>£${item.activeprice}</span>
                        </dd>
                    </dl>
                </a>
            </li>`;
      });

      $(ele).append(li);
    }


});