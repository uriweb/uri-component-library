<?php

$classes = 'cl-boxout';
$wrapper = 'section';

if(!empty($float)) {
    $classes .= ' ' . $float;
    $wrapper = 'aside';
}

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$output = '<' . $wrapper . ' class="cl-wrapper cl-boxout-wrapper">';
$output .= '<div class="' . $classes . '">';

if(!empty($title)) {
    $output .= '<h1>' . $title . '</h1>';
}

$output .= '<p>' . do_shortcode($content) . '</p>';
$output .= '</div>';
$output .= '</' . $wrapper . '>';