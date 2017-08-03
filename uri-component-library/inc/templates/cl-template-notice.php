<?php

$classes = 'cl-notice';

if($urgent) {
    $classes .= ' urgent';
}

$output = '<div class="' . $classes . '">';

if(!empty($title)) {
    $output .= '<h1>' . $title . '</h1>';
}

$output .= '<p>' . $content . '</p>';
$output .= '</div>';