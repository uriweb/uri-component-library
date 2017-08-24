<?php

$output = '<div class="cl-video">';
$output .= '<img id="' . $vid . '" src="' . $img . '" alt="' . $alt . '"';
    
if (!empty($aspect)) {
    $output .= ' data-aspect="' . $aspect . '"';
}

$output .= '>';
$output .= '</div>';