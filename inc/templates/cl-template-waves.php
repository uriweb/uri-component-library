<?php

$classes = 'cl-wave ' . $atts['placement'];

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output = '<section class="cl-wrapper cl-wave-wrapper">';
$output .= '<div class="' . $classes . '" style="';

if ( ! empty( $atts['offset'] ) ) {
	$output .= 'top:' . $atts['offset'] . ';';
}

if ( ! empty( $atts['css'] ) ) {
	$output .= $atts['css'];
}

$output .= '">';

$output .= '<div></div><div></div>';
$output .= '</div>';
$output .= '</section>';
