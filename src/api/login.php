<?php

require "connect.php";

$a=$_GET["phone"];
$b=$_GET["pwd"];
$sql="select * from users where phone='".$a."' and pwd ='".$b."';";
$result = $conn->query($sql);

// $c=$result->num_rows;

if ($result->num_rows >=1) {
    echo "yes";
}else{
    echo("no");
}

?>