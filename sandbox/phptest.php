<?php
$verb = $_SERVER['REQUEST_METHOD'];
if ($verb == 'GET') {
  if (isset($_GET['filename'])) {
    $file_content = file_get_contents($_GET['filename']);
    echo $file_content;
  } else {
    die('ERROR: REQUIRED PARAMETRS NOT GIVEN');
  }
  echo 'GET';  
} elseif ($verb == 'POST') {
  echo 'POST';  
} elseif ($verb == 'DELETE') {
  echo 'DELETE';  
}

?>