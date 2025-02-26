<?php
require_once "session.php";
require_once "conn.php";
require_once "cors.php";
require_once "requests.php";
header('Content-Type: application/json');
$r = new requests($conn);

?>
