<?php

$classes = 'cl-hero';

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$output = '<div class="' . $classes . '">';
$output .= '<div class="overlay">';
$output .= '<div class="block">';

if (!empty($headline)) {
    $output .= '<h1>' . $headline . '</h1>';
}

if (!empty($subhead)) {
    $output .= '<p>' . $subhead . '</p>';
}

if (!empty($link)) {
    $output .= '<a class="cl-button" href="' . $link . '" title="' . $tooltip . '">' . $button . '</a>';
}

$output .= '</div>'; // .block
$output .= '</div>'; // .overlay

if (!empty($vid)) {
    $image = '<div id="'. $id . '" data-id="' . $vid . '" class="poster"';
} else if ($dynamic) {
    $image = '<div class="dynamic"';
} else {
    $image = '<div class="still"';
}

$image .= ' style="background-image:url(' . $img . ')"></div>'; // image

$output .= $image;
$output .= '</div>'; // .hero