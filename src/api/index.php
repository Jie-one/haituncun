<?php


require "connect.php";


$sqla="select * from product;";
// $sqlb="select * from product where category='营养保健';";
// $sqlc="select * from product where category='美容药妆';";
// $sqld="select * from product where category='个人护理';";
// $sqle="select * from product where category='家居厨卫';";
// $sqlf="select * from product where category='食品精选';";

//获取查询结果集
$resulta = $conn->query($sqla);


//使用查询结果集得到数组
$rea= $resulta->fetch_all(MYSQLI_ASSOC);


$results=json_encode($rea,JSON_UNESCAPED_UNICODE);


//释放查询结果集
$resulta->close();


echo $results;


//关闭数据库
$conn->close();


?>