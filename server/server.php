<?php
header("Content-Type: application/json"); # Set result to JSON
$json = json_decode($_GET["json"], true); # Decode JSON
echo '{"meta": {"status": 200}, "data": {'; # Start JSON
foreach ($json as $key => $value) {
  echo '"' . $key . '":"' . $value '", '; # For the items in the JSON parameter, print a key: value pair.
}
echo '"process":"sucess"} }'; # End the JSON declaration
?>
