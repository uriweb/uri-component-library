<?php

$output = '<section';
$classes = 'cl-tab';

if ( ! empty( $atts['id'] ) ) {
	$output .= ' id="' . $atts['id'] . '"';
}

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output .= ' class="' . $classes . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= ' style="' . $atts['css'] . '"';
}

$output .= '>';

if ( ! empty( $atts['title'] ) ) {
	$output .= '<h1>' . $atts['title'] . '</h1>';
}

$output .= do_shortcode( $content );

$output .= '</section>';
