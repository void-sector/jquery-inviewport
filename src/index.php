<?php

function printTextAreas($number)
{
    $textAreas = array();
    
    for ($i=1; $i<=$number; $i++) {
        array_push($textAreas, '<textarea id="textarea_' . $i . '" cols="100" rows="30">textarea '. $i . '</textarea><br>' . "\r\n");
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
        <?= printTextAreas(200); ?>
    </div>    

    <?php /*
    <div class="displayHidden">
        <?= printTextAreas(1); ?>
    </div>    

    <div class="visibilityHidden">
        <?= printTextAreas(2); ?>
    </div>    

    <div class="opacityHidden">
        <?= printTextAreas(4); ?>
    </div>  

    */ ?>

<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="//cdn.ckeditor.com/4.4.7/standard/ckeditor.js"></script>
<script src="script.js"></script>
</body>
</html>