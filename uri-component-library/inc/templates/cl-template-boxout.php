<?php

$classes = 'cl-boxout';

if(!empty($float)) {
    $classes .= ' ' . $float;
}

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$output = '<div class="' . $classes . '">';

if(!empty($title)) {
    $output .= '<h1>' . $title . '</h1>';
}

$output .= '<p>' . do_shortcode($content) . '</p>';
$output .= '</div>';