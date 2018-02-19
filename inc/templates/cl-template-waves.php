<?php

$classes = 'cl-wave ' . $placement;

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$output = '<section class="cl-wrapper cl-wave-wrapper">';
$output .= '<div class="' . $classes . '" style="';

if(!empty($offset)) {
    $output .= 'top:' . $offset . ';';
}

if(!empty($css)) {
    $output .= $css;
}

$output .= '">';

$output .= '<div></div><div></div>';
$output .= '</div>';
$output .= '</section>';