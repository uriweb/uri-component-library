<?php

$output = '<a class="card" href="'. $link .'" title="' . $tooltip . '">';

if (!empty($img)) {
    $output .= '<img src="' . $img . '">';
}
if (!empty($title)) {
    $output .= '<h1>' . $title . '</h1>';
}
if (!empty($body)) {
    $output .= '<p>' . $body . '</p>';
}

$output .= '<span class="button">' . $button . '</span>';
$output .= '</a>';