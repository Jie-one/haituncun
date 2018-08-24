
jQuery(function($){


    //输入框
    var ba=$(".login .threebg .denglu .biaodan li input");
 
    //验证手机号码
    $(ba).eq(0).on("blur",()=>{
        var preg=/^1[0-9]{10}$/;
        if(!preg.test($(ba).val())){
            $(ba).eq(0).next("span").html("手机号码不合法");
            return false;
        }else{
            $(ba).eq(0).next("span").html("");

        }
    })

     //验证手机号码
     $(ba).eq(1).on("blur",()=>{
        if($(ba).eq(1).val()===""){
            $(ba).eq(1).next("span").text("密码不能为空");
            return false;

        }else{
            $(ba).eq(1).next("span").html("");

        }
    })

    //验证确认密码
    $(ba).eq(2).on("blur",()=>{
        if(!($(ba).eq(2).val()===$(ba).eq(1).val())){
            $(ba).eq(2).next("span").text("密码与原密码不一致");
            return false;

        }else{
            $(ba).eq(2).next("span").html("");

        }
    })
    
    //生成验证码
    $(ba).eq(3).nextAll().eq(1).on("click",()=>{
        $(ba).eq(3).nextAll().eq(1).html(randomNumber(1000,9999));
    })
    $(ba).eq(3).nextAll().eq(1).html(randomNumber(1000,9999));

    //验证码
    $(ba).eq(3).on("blur",()=>{
        if($(ba).eq(3).val()==="" || !($(ba).eq(3).val()===$(ba).eq(3).nextAll().eq(1).text())){
            $(ba).eq(3).next(".tishi").text("内容不能为空");
            return false;

        }else{
            $(ba).eq(3).next(".tishi").html("");

        }
    })
 

    // var phone=$(ba).eq(1).val();
    // console.log(phone);
    //登录密码
    var btn=document.querySelector(".threebg .denglu .btnlogin");

    let username = document.querySelector('#username');


   btn.onclick = function(){
        let phone =$(ba).eq(0).val();
        let  pwd=$(ba).eq(1).val();
        let status = [200,304];

        let xhr = new XMLHttpRequest();
        // xhr.onreadystatechange = function(){
        // 	if(xhr.readyState === 4){

        // 	}
        // }

        xhr.onload = function(){
            if(status.includes(xhr.status)){
                let res = xhr.responseText;//fail,success
                 //注册成功
                 if(res === 'yes'){
                   location.href="login.html";
                }
            }
        }

        xhr.open('get','../api/regist.php?phone='+phone+"&pwd="+pwd,true);
        xhr.send();
    }

    


})
