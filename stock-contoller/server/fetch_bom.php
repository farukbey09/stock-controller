<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");


$sql = "SELECT * FROM bom";

$conn = mysqli_connect('localhost',"root","","task");
 $mysqli=mysqli_query($conn,$sql);
$jsonData=array();
while($row=mysqli_fetch_assoc($mysqli)){
    $jsonData[]=$row;
}
echo json_encode($jsonData);