<?php

$classes = 'cl-video';

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$output = '<div class="' . $classes . '">';

if(!empty($title) || !empty($excerpt)) {
    $output .= '<div class="overlay">';
    
    if(!empty($title)) {
        $output .= '<h1>' . $title . '</h1>';
    }
    
    if(!empty($excerpt)) {
        $output .= '<p>' . $excerpt . '</p>';
    }
    
    $output .= '</div>';
}

$output .= '<img id="' . $id . '" data-id="' . $vid . '" src="' . $img . '" alt="' . $alt . '"';
    
if (!empty($aspect)) {
    $output .= ' data-aspect="' . $aspect . '"';
}

$output .= '>';
$output .= '</div>';