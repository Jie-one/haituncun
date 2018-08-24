<?php

require "connect.php";

$sql="select * from product where id=".$_GET["pid"];
$result=$conn->query($sql);


$detail=$result->fetch_all(MYSQLI_ASSOC);
$detail=json_encode($detail);
$result->close();

echo $detail;

// 关闭数据库，避免资源浪费
  $conn->close();


?>