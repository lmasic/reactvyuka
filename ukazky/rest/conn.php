<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$host="localhost";
$user="root";
$pass="";
$db="coffe_lmsoft_cz";

  $conn = new mysqli($host, $user, $pass, $db);
  $conn->query("set names utf8");

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    exit();
  }

?>
