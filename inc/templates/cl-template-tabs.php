<?php

$classes = 'cl-tabs';

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$output = '<section class="cl-wrapper cl-tabs-wrapper">';
$output .= '<div class="' . $classes . '">';
$output .= do_shortcode($content);
$output .= '</div>';
$output .= '</section>';