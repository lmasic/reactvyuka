<?php
require_once "service.php";
  

Class requests {
  private $method;
  private $GETdata;
  private $POSTdata;
  private $ser;
  
  
  public function __construct($conn) {
    $this->ser=new Service($conn);
    $this->method=$_SERVER["REQUEST_METHOD"];
    $this->GETdata=$_GET;
    $this->POSTdata=$_POST;
    if ($this->POSTdata != null)
      $input=$_POST;
    else
      $input = json_decode(file_get_contents('php://input'), true);
   
    $url = $_SERVER['REQUEST_URI'];
    $uri = explode('/', $url);


  switch ($uri[1]) {

  case "getPeopleList":  $this->output($this->ser->getPeopleList()); 
    break;
    case "getTypesList":  $this->output($this->ser->gettypesList()); 
    break;
    case "saveDrinks":  $this->output($this->ser->saveDrinks($input));
    break;
    case "listCmd":  $this->output(array("getPeopleList","getTypesList","saveDrinks","getSummaryOfDrinks")); 
    break;
    case "getSummaryOfDrinks":  $this->output($this->ser->getSummaryOfDrinks($this->GETdata));
    break;
        
   default:$this->output ("err"); 
  }
  }
  

private function output ($str) {
    if (!is_array($str))
         echo json_encode(array("msg"=>$str));
    else 
        echo json_encode($str);

}

}

  
  

/*
echo "<pre>";
print_r($_GET);
print_r($_POST);
print_r($_SERVER);
*/

?>