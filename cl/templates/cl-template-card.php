<?php

// Build inner content
$inner = '';

if (!empty($img)) {
    $inner .= '<img src="' . $img . '">';
}
if (!empty($title)) {
    $inner .= '<h1>' . $title . '</h1>';
}
if (!empty($body)) {
    $inner .= '<p>' . $body . '</p>';
}

// Build wrapper around inner content
if ($clickable) {
    $output = '<a class="card" href="'. $link .'" title="' . $tooltip . '">';
    $output .= $inner;
    $output .= '<span class="button">' . $button . '</span>';
    $output .= '</a>';
} else {
    $output = '<div class="card">';
    $output .= $inner;
    $output .= '<a class="button" href="' . $link . '" title="' . $tooltip . '">' . $button . '</a>';
    $output .= '</div>';
}