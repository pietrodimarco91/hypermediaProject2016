<?php

require('connect_db.php');

$query="SELECT titolo,link,implement FROM assistance_services WHERE high='"."1"."'";
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