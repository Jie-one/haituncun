<?php

require "connect.php";

//获取请求中的数据

// select * from product where category='母婴用品';
$sqla="select * from product where category='".$_POST["name"]."'";
$resulta = $conn->query($sqla);


//使用查询结果集得到数组
$rea= $resulta->fetch_all(MYSQLI_ASSOC);

// var_dump($rea);
$datalist=json_encode($rea,JSON_UNESCAPED_UNICODE);


//释放查询结果集
$resulta->close();

echo $datalist;
// echo "{status:true,a:$datalist}";


//关闭数据库
$conn->close();

?>