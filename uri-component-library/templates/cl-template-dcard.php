<?php

$output = '<a class="dcard" href="'. $link .'" title="' . $tooltip . '">';

if (!empty($img)) {
    $output .= '<img src="' . $img . '" alt="' . $alt . '">';
}
if (!empty($title)) {
    $output .= '<h1>' . $title . '</h1>';
}
if (!empty($body)) {
    $output .= '<p>' . $body . '</p>';
}

$output .= '</a>';