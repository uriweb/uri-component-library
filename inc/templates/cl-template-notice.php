<?php

$classes = 'cl-notice';

if($urgent) {
    $classes .= ' urgent';
}

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$output = '<section class="cl-wrapper cl-notice-wrapper">';
$output .= '<div class="' . $classes . '">';

if(!empty($title)) {
    $output .= '<h1>' . $title . '</h1>';
}

$output .= '<p>' . do_shortcode($content) . '</p>';
$output .= '</div>';
$output .= '</section>';