<?php

$classes = 'cl-button';

if(!empty($class)) {
    $classes .= ' ' . $class;
}

if($style == 'disabled') {
    
    $classes .= ' disabled';
    
    $output = '<span class="' . $classes . '" title="' . $tooltip . '"';
    
    if(!empty($css)){
        $output .= 'style="' . $css . '"';
    }

    $output .= '>' . $text . '</span>';
    
} else {

    if($style == 'prominent') {
        $classes .= ' prominent';
    }

    $output = '<a class="' . $classes . '" href="' . $link . '" title="' . $tooltip . '"';
    
    if(!empty($css)){
        $output .= 'style="' . $css . '"';
    }

    $output .= '>' . $text . '</a>';
    
}