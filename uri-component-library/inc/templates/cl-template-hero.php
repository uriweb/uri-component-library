<?php

$classes = 'cl-hero';

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
    $image = '<img id="' . $vid . '" class="poster" src="' . $img . '"';
} else if ($dynamic) {
    $image = '<img class="dynamic" src="' . $img . '"';
} else {
    $image = '<img src="' . $img . '"';
}

if (is_numeric($zoom) && $zoom != 1.25) {
    $image .= ' data-zoom="' . $zoom . '"';
}

$image .= '>';

$output .= $image;
$output .= '</div>'; // .hero