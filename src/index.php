<?php

/**
 * Just a simple way to get a bunch of textarea's
 *  
 * @param type $number
 * @return type
 */
function getTextAreas($number)
{
    $textAreas = array();
    
    for ($i=1; $i<=$number; $i++) {
        array_push($textAreas, '<textarea class="ckeditorLazyLoad" id="textarea_' . $i . '" cols="100" rows="16">textarea '. $i . '</textarea><br>' . "\r\n");
    }
    
    return implode($textAreas);
}

?><!DOCTYPE html>
<html>
<head>
<title>Title of the document</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>

    <div class="textareaHolder">
        <?= getTextAreas(200); ?>
    </div>    

<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="//cdn.ckeditor.com/4.4.7/standard/ckeditor.js"></script>
<script src="script.js"></script>
</body>
</html>