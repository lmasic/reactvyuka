<?php

require_once "dbdriver.php";

Class Service {
private $OutputArray=array();
private $OutputJSON=array();
private $tab_people="people";
private $tab_types="types";
private $dbdrv;


public function __construct($conn) {
    
    $this->dbdrv=new dbdriver($conn);
    
}



public function getPeopleList() {


return $this->dbdrv->select($this->tab_people,"*");
}

public function getTypesList() {
    return $this->dbdrv->select($this->tab_types,"*");
}



public function processRequest($input) {

$data= json_decode($input);

$idUser="";

}


public function saveDrinks($drinks){

$res=0;
$i=0;
$userID = $drinks["user"];
foreach ($drinks["types"] as $key => $value) {
  if ($value==0) continue;

  $row[0]=date("Y-m-d");
  $row[1]=$userID;
  $row[2]=$i+1;
  $res += $this->dbdrv->insertRow($row);
}

if ($res==0) return -1;else return 1;


}

public function getSummaryOfDrinks($data) {
$month=0;
if (isset($data["month"])) $month=$data["month"];
    $where=" ";
if ($month>0 && $month<13)
     $where="MONTH(d.date) = $month";
    
    $sql="SELECT d.ID, p.name, t.typ, COUNT(*) AS drink_count FROM drinks d JOIN people p ON d.id_people = p.ID JOIN types t ON d.id_types = t.ID $where GROUP BY p.name, t.typ;";
    
    return $this->dbdrv->selectQAssoc($sql);
}
}//class

?>
