<?php

$output = '<section';
$classes = 'cl-tab';

if ( ! empty( $atts['id'] ) ) {
	$output .= ' id="' . $atts['id'] . '"';
}

if ( isset( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

if ( isset( $atts['className'] ) ) {
	$classes .= ' ' . $atts['className'];
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
