<?php

$classes = 'cl-wave ' . $placement;

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$output = '<div class="' . $classes . '" style="';

if(!empty($offset)) {
    $output .= 'top:' . $offset . ';';
}

$output .= '">';

$output .= '<div></div><div></div>';
$output .= '</div>';