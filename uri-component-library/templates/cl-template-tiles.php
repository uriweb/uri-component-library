<?php

$classes = 'tiles';

switch ($accross) {
    case 2:
        $classes .= ' halves';
        break;  
    case 3:
        $classes .= ' thirds';
        break;
    case 4:
        $classes .= ' fourths';
        break;
    case 5:
        $classes .= ' fifths';
        break;
    default:
        $classes .= ' thirds';
}

if($square) {
    $classes .= ' square';
}

if($animated) {
    $classes .= ' reveal';
}

$output = '<div class="' . $classes . '">' . do_shortcode($content) . '</div>';