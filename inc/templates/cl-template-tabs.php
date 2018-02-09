<?php

$classes = 'cl-tabs';

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$output = '<section class="cl-wrapper cl-tabs-wrapper">';
$output .= '<div class="' . $classes . '"';

if(!empty($css)){
    $output .= 'style="' . $css . '"';
}

$output .= '>';

$output .= do_shortcode($content);
$output .= '</div>';
$output .= '</section>';