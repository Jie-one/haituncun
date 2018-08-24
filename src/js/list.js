jQuery($=>{

    // var a= location.search("?");
    var arr=decodeURI(location.search).slice(1)
    // console.log(arr);


    //【发送Ajax请求】
    $.ajax({

        type:"post",
        url:"../api/list.php",
        data:"name="+arr,
        dataType:"json",
        success:function(data){
            // var dataObj=eval("("+data+")");//转换为json对象
            // console.log(data);
            var prolist=$(".list .five_Right .prolist");
            // console.log(prolist);
            createdatalist(prolist,data);
            // console.log(data);

        }//成功


    })  //ajax请求





/*----------【列表页-------生成数据结构】----------*/
function createdatalist(ele, data) {
    var li = $.map(data, function(item) {
      return `
      <li>
      <div class="item">
          <a href="goods.html?pid=${item.id}">
              <div class="pimg">
              <img src="../img/indexImg/productImg/${item.imgurl}" alt="" class="ceimg"></div>
          </a>
          <dl>
              <dt class="price">¥${item.price}</dt>
              <dd>${item.name}</dd>
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

   
$(".list .five_Right .cart").on("click",()=>{
   
	var oLay = document.getElementById("overlay");	
		oLay.style.display = "block";
	

})


  }

/*----------【列表页-------生成数据结构】----------*/






})