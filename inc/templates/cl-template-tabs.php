<?php

$classes = 'cl-tabs';

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$output = '<div class="' . $classes . '">';
$output .= do_shortcode($content);
$output .= '</div>';