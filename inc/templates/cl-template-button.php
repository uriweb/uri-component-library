<?php

$classes = 'cl-button';

if(!empty($class)) {
    $classes .= ' ' . $class;
}

if($disabled) {
    
    $classes .= ' disabled';
    
    $output = '<span class="' . $classes . '" title="' . $tooltip . '">' . $text . '</span>';
    
} else {

    if($prominent) {
        $classes .= ' prominent';
    }

    $output = '<a class="' . $classes . '" href="' . $link . '" title="' . $tooltip . '">' . $text . '</a>';
    
}