<?php

$classes = 'cl-card';

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$output = '<a class="' . $classes . '" href="'. $link .'" title="' . $tooltip . '"';

if(!empty($css)){
    $output .= 'style="' . $css . '"';
}

$output .= '>';

if (!empty($img)) {
    $output .= '<img src="' . $img . '" alt="' . $alt . '">';
}

if (!empty($title) || !empty($body)) {
    
    $output .= '<div class="cl-card-text">';
    
    if (!empty($title)) {
        $output .= '<h3>' . $title . '</h3>';
    }
    
    if (!empty($body)) {
        $output .= '<p>' . $body . '</p>';
    }
    
    $output .= '</div>';
}

if (!empty($button)) {
    $output .= '<div class="cl-button">' . $button . '</div>';
}

$output .= '</a>';