<?php

/*
连接数据库
*/

$servername="localhost";
$username="root";
$password="";
$dbname="haitun";

$conn=new mysqli($servername,$username,$password,$dbname);


if($conn->connect_error){
  exit("连接失败：".$conn->connect_error);
}

// echo "连接成功";

//查询前设置编码，防止输出乱码
$conn->set_charset('utf8');


?>