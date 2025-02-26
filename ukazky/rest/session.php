<?php
session_start();
if ($_SERVER['REMOTE_ADDR'] !== '127.0.0.1') { 
if(isset($_SESSION["login"]) != true){
header('HTTP/1.1 401 Unauthorized');
header('Content-Type: application/json');

$response = [
    'error' => 'Unauthorized',
    'message' => 'Invalid or missing token'
];

echo json_encode($response);
  //header("Location: /");
  exit;
}
}
?>
