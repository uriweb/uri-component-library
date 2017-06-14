<?php

$classes = 'flexcard';
if ($reverse) {
    $classes .= ' reverse';
}

$output = '<a class="' . $classes . '" href="' . $link . '" title="' . $tooltip . '">';
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
    
$output .= '<span class="button">' . $button . '</span>';
$output .= '</article>';
$output .= '</a>';