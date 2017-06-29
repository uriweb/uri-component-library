<?php

$classes = 'hero';
if ($fullscreen) {
    $classes .= ' fullscreen';
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
    $output .= '<a class="button" href="' . $link . '" title="' . $tooltip . '">' . $button . '</a>';
}

$output .= '</div>'; // #block

$poster = '<img id="' . $vid . '" class="poster" src="' . $poster . '" ';

if (!empty($start)) {
    $poster .= 'data-start="' . $start . '" ';
}

if (!empty($end)) {
    $poster .= 'data-end="' . $end . '" ';
}

$poster .= '>';

$output .= $poster;
$output .= '</div>'; // #overlay