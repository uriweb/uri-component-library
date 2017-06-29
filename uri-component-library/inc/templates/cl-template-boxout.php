<?php

$classes = 'cl-boxout';

if(!empty($float)) {
    $classes .= ' ' . $float;
}

$output = '<div class="' . $classes . '">';

if(!empty($title)) {
    $output .= '<h1>' . $title . '</h1>';
}

$output .= '<p>' . do_shortcode($content) . '</p>';
$output .= '</div>';