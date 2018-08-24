jQuery(function ($) {




    var phone = $(".denglu .phone");
    var pwd = $(".denglu .pwd");
    var ch = $(".denglu .dltop .ch");
    var btnSubmit = $(".btnlogin p");


    //  console.log(phone);
    //  console.log(pwd);
    //  console.log(checkbox);


    //登录

    $(btnSubmit).on("click", function () {
        var ph = $(phone).val();
        var pw = $(pwd).val();
        let status = [200, 304];

        let xhr = new XMLHttpRequest();

        //发送Ajax请求
        xhr.onload = function () {
            if (status.includes(xhr.status)) {
                let res = xhr.responseText;//fail,success
                //【若注册成功，则跳转到首页，否则跳转到注册页面】
                if (res === 'yes') {
                    window.location.href="../index.html";
                }else if(res==="no"){
                    location.href="regist.html";
                }
            }
        }

        xhr.open('get', '../api/login.php?phone=' + ph + "&pwd=" + pw, true);
        xhr.send();


        //判断是否选择了7天免登录，并写入cookie
        if ($(ch).prop("checked",true)) {
            // console.log(ch);
            //获取时间
            var date = new Date();
            date.setDate(date.getDate() + 7);

            document.cookie = "username=" + ph + ";expires=" + date.toUTCString();
            document.cookie = "pwd=" + pw + ";expires=" + date.toUTCString();
        }


    })

 
   

    /*----------- 当前登录用户名和密码 【打开页面，判断是否用户登录】-----------*/
    var currentname="";
    var currentpwd="";

    //再次登录时，判断是否有Cookie记录
        var cookies=document.cookie.split("; ");
        cookies.forEach(function(item){
           var i=item.split("=");
           if(i[0]==="username"){
               currentname=i[1];
           }else if(i[0]==="pwd"){
               currentpwd=i[1];
           }
        });

       if(currentname===$(phone).val() && currentpwd ===$(pwd).val()){
           window.location.href="../index.html";
       }


})
