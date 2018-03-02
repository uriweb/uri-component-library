<?php

$classes = 'cl-metric';
$wrapper = 'section';

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

if(!empty($float)) {
    $classes .= ' ' . $float;
    $wrapper = 'aside';
}

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$output = '<' . $wrapper . ' class="cl-wrapper cl-metric-wrapper">';
$output .= '<div class="' . $classes . '"';

if(!empty($css)){
    $output .= ' style="' . $css . '"';
}

$output .= '>';

$output .= '<span>' . $metric . '</span>';

$output .= '<span>' . $caption . '</span>';

$output .= '</div>';
$output .= '</' . $wrapper . '>';