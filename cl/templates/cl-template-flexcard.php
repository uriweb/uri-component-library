<?php

$classes = 'flexcard';
if ($reverse) {
    $classes = 'flexcard reverse';
}

$output = '<div class="' . $classes . '">';
$output .= '<figure>';
$output .= '<img src="' . $img . '">';
$output .= '</figure>';
$output .= '<article>';

if (!empty($title)) {
    $output .= '<h1>' . $title . '</h1>';
}
if (isset($content)) {
    $output .= '<p>' . $content . '</p>';
}
    
$output .= '<a class="button" href="' . $link . '" title="' . $tooltip . '">' . $button . '</a>';
$output .= '</article>';
$output .= '</div>';