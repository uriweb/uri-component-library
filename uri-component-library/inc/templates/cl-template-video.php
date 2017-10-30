<?php

$classes = 'cl-video';

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$output = '<div class="' . $classes . '">';
$output .= '<img id="' . $vid . '" src="' . $img . '" alt="' . $alt . '"';
    
if (!empty($aspect)) {
    $output .= ' data-aspect="' . $aspect . '"';
}

$output .= '>';
$output .= '</div>';