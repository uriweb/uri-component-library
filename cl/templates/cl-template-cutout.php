<?php

$classes = 'cutout';

if(!empty($float)) {
    $classes .= ' ' . $float;
}

$output = '<div class="' . $classes . '">';

if(!empty($title)) {
    $output .= '<h1>' . $title . '</h1>';
}

$output .= do_shortcode($content);
$output .= '</div>';