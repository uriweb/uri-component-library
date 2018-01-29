<?php

$classes = 'cl-card';

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$output = '<a class="' . $classes . '" href="'. $link .'" title="' . $tooltip . '">';

if (!empty($img)) {
    $output .= '<img src="' . $img . '" alt="' . $alt . '">';
}
if (!empty($title)) {
    $output .= '<h3>' . $title . '</h3>';
}
if (!empty($body)) {
    $output .= '<p>' . $body . '</p>';
}

$output .= '<span class="cl-button">' . $button . '</span>';
$output .= '</a>';