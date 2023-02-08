<?php

$path = explode('/', $_SERVER['REQUEST_URI']);
 
$method = $_SERVER['REQUEST_METHOD'];
switch($path[2]) {
    case "fetch_products":
        include 'fetch_products.php';
        break;
    case "fetch_orders":
        include 'fetch_orders.php';
        break;
    case "fetch_warehouses":
        include 'fetch_warehouses.php';
        break;
    case "fetch_materials":
        include 'fetch_materials.php';
        break;
    case "fetch_bom":
    include 'fetch_bom.php';
         break;
    
}   