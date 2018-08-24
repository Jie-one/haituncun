<?php

require "connect.php";

$a=$_GET["phone"];
$b=$_GET["pwd"];

$sql="insert into users (phone,pwd) VALUES ('".$a."','".$b."');";
// $sqla="select count(*) from users where phone='".$a."' and pwd ='".$b."';";
if ($conn->query($sql)) {
    echo "yes";
} 


?>