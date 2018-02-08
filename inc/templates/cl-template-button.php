<?php

$classes = 'cl-button';

if(!empty($class)) {
    $classes .= ' ' . $class;
}

if($inline) {
    $classes .= ' inline';
}

if($style == 'disabled') {
    
    $classes .= ' disabled';
    
    $output = '<span class="' . $classes . '" title="' . $tooltip . '">' . $text . '</span>';
    
} else {

    if($style == 'prominent') {
        $classes .= ' prominent';
    }

    $output = '<a class="' . $classes . '" href="' . $link . '" title="' . $tooltip . '">' . $text . '</a>';
    
}