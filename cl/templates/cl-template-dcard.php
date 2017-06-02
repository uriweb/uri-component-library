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
if (!empty($link)) {
    $output = '<a class="dcard" href="'. $link .'">';
    $output .= $inner;
    $output .= '</a>';
} else {
    $output = '<div class="dcard">';
    $output .= $inner;
    $output .= '</div>';
}