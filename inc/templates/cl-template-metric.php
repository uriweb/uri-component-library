<?php

$classes = 'cl-metric';

switch ($style) {
    case 'dark':
        $classes .= ' dark';
        break;
    case 'clear':
        $classes .= ' clear';
        break;
    case 'overlay':
        $classes .= ' dark clear';
        break;
}

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$output = '<div class="' . $classes . '"';

if(!empty($css)){
    $output .= 'style="' . $css . '"';
}

$output .= '>';

$output = '<span>' . $fact . '</span>';

$output = '<span>' . $caption . '</span>';

$output = '</div>';