<?php
require_once "conn.php";
class dbdriver{
private $cn;



function __construct ($conn) {

if ($conn==null) die; 

    $this->cn=$conn;
    

}

public function getConn () {
return  $this->cn;
}

function query ($sql) {


$result = $this->cn ->query($sql);

if (is_object($result)) {
    $row = $result->fetch_assoc();
} else {$row =$result; }


return $row;
}

function delete ($tab, $where,$limit) {

$sql="delete from $tab $where $limit";
return $this->cn ->query($sql);

}


function selectWhere ($tab,$colm,$where) {
$List="*";
$res=array();

if (is_array($colm)) 
    $List = implode(', ', $colm);
    else $List=$colm; 
        
    $sql="select $List from $tab $where";

$result =$this->cn->query($sql);


$i=0;
if ($result = $this->cn -> query($sql)) {
  while ($row = $result -> fetch_assoc()) {
     
     $res[$i]=$row;
     $i++;
  }
}

return $res;

}

function select ($tab,$colm) {
return $this->selectWhere ($tab,$colm,"");
}

public function selectQAssoc ($sql) {
  $res=array();
    
  $i=0;
    if ($result = $this->cn -> query($sql)) {
      while ($row = $result -> fetch_assoc()) {
         
         $res[$i]=$row;
         $i++;
      }
    }
  
  return $res;
  
  }
   
public function selectQ ($sql) {
  $res=array();
    
  $i=0;
    if ($result = $this->cn -> query($sql)) {
      while ($row = $result -> fetch_row()) {
         
         $res[$i]=$row;
         $i++;
      }
    }
  
  return $res;
  
  }
  
public function insert($tab,$input) {  
    $attrs = "";
 
    foreach ($input as $key => $value) {
    
    if ($key=="phone") {
    $value= str_replace("+420","",$value);
    $value= str_replace("+","",$value);
    $value= str_replace(" ","",$value);
    
    }
    
    if ($value==null) $value="";
        
        if(strlen($value) != 0){   
        
        $attrs .="$key='$value',";
                
        }  
    }
    $attrs = substr($attrs,0,-1);
    

   $sql = "INSERT INTO $tab set $attrs";
        
        if ($this->cn->query($sql))
        return  array ("id"=>mysqli_insert_id($this->cn));
        
        else return -1;
   
}  
public function insertRow($arr) {

  if (!is_array($arr)) return -1;



      $val="null";
      foreach ($arr as $key=>$value) {

          $val .=",'$value'";
      }


      echo $sql="INSERT INTO drinks values($val)";
      return $this->cn -> query($sql);



      }

}//class






?>
