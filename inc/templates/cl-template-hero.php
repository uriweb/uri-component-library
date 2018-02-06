<?php

$classes = 'cl-hero';

switch ($format) {
    case 'super':
        $classes .= ' super';
        break;
    case 'fullwidth':
        $classes .= ' fullwidth';
        break;
}

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$output = '<section class="cl-wrapper cl-hero-wrapper">';
$output .= '<div class="' . $classes . '">';
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
} else if (!empty($animation)) {
    switch ($animation) {
        case 'shift':
            $ani_method = 'shift';
            break;
    }
    $image = '<div class="animate ' . $ani_method . '"';
} else {
    $image = '<div class="still"';
}

$image .= ' style="background-image:url(' . $img . ')"></div>'; // image

$output .= $image;
$output .= '</div>'; // .hero
$output .= '</section>';