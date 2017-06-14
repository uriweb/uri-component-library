<?php

$classes = 'panel';
if ($reverse) {
    $classes .= ' reverse';
}

$output = '<div class="' . $classes . '">';
$output .= '<figure>';
$output .= '<img src="' . $img . '" alt="' . $alt . '">';
$output .= '</figure>';
$output .= '<article>';

if (!empty($title)) {
    $output .= '<h1>' . $title . '</h1>';
}
if (isset($content)) {
    $output .= '<p>' . $content . '</p>';
}
    
$output .= '</article>';
$output .= '</div>';