<?php

require('connect_db.php');

if (isset($_POST['categoria'])) {
    $nomeCategoria=$_POST['categoria'];
}
else
    echo "Error, table wasn't set correctly";
$query="SELECT title,categoria,html FROM categorie WHERE tipo='".$nomeCategoria."'";
$result=mysqli_query($dbc,$query);
if($result){

    $myArray = array(); //create an array
    while($row = $result->fetch_array(MYSQL_ASSOC)) {
        $myArray[] = array_map('utf8_encode', $row);
    }
    echo json_encode($myArray);

    //free result
    $result->close();
}
else
    echo "Error: invalid query";


//close connection
$dbc->close();

?>