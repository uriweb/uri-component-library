<?php

$output = '<a class="cl-card" href="'. $link .'" title="' . $tooltip . '">';

if (!empty($img)) {
    $output .= '<img src="' . $img . '" alt="' . $alt . '">';
}
if (!empty($title)) {
    $output .= '<h1>' . $title . '</h1>';
}
if (!empty($body)) {
    $output .= '<p>' . $body . '</p>';
}

$output .= '<span class="cl-button">' . $button . '</span>';
$output .= '</a>';