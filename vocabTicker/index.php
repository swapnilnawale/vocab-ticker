<?php 

define("WORDCOUNT", '5014');

$indexRand = rand(1,WORDCOUNT);	

$db_name = "swapniln_wordlist";

$table_name = "wordlist";

$connection = @mysql_connect("localhost","swapniln","intheend@123") or die(mysql_error());

$db = @mysql_select_db($db_name, $connection) or die(mysql_error());

$sql = "SELECT $table_name.index,word,meaning from $table_name WHERE $table_name.index = '$indexRand'";

$result = @mysql_query($sql,$connection) or die(mysql_error());

$response = array();

$posts = array();

while($row = mysql_fetch_array($result)) 
{ 
	$indexVal=$row['index']; 
	$word=$row['word']; 
	$meaning=$row['meaning']; 
	$posts[] = array('index'=> $indexVal, 'word'=> $word , 'meaning' => $meaning);

} 

$response['posts'] = $posts;
echo json_encode($response);
//$fp = fopen('results.json', 'w');
//fwrite($fp, json_encode($response));
//fclose($fp);

?>
