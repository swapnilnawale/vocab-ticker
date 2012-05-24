<?php 

$db_name = "swapniln_wordlist";

$table_name = "wordlist";

$connection = @mysql_connect("localhost","swapniln","intheend@123") or die(mysql_error());

$db = @mysql_select_db($db_name, $connection) or die(mysql_error());

$sql = "SELECT meaning from $table_name";

$result = @mysql_query($sql,$connection) or die(mysql_error());

$response = array();

$posts = array();

while($row = mysql_fetch_array($result)) 
{ 
	
	$word=$row['meaning']; 
	$word = "\"".addslashes($word)."\",";
        echo $word;
} 


?>
