<?php

/**
 * Just a simple dirty way to get a bunch of textarea's
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
</head>
<body>

    <div class="textareaHolder">
        <?= getTextAreas(200); ?>
    </div>    

<!-- load from cdn -->    
<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="//cdn.ckeditor.com/4.4.7/standard/ckeditor.js"></script>

<!-- grab custom -->
<script src="./jquery.inViewport.js"></script>
<script src="./main.js"></script>

</body>
</html>