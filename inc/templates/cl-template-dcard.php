<?php

$classes = 'cl-dcard';

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$output = '<a class="' . $classes . '" href="'. $link .'" title="' . $tooltip . '">';

if (!empty($img)) {
    $output .= '<img src="' . $img . '" alt="' . $alt . '">';
}

$output .= '<div class="cl-dcard-text">';

if (!empty($title)) {
    $output .= '<h3>' . $title . '</h3>';
}
if (!empty($body)) {
    $output .= '<p>' . $body . '</p>';
}

$output .= '</div>';

$output .= '</a>';