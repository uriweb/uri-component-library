<?php

$classes = 'cl-video';

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output = '<section class="cl-wrapper cl-video-wrapper">';
$output .= '<div class="' . $classes . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= ' style="' . $atts['css'] . '"';
}

$output .= '>';

if ( ! empty( $atts['title'] ) || ! empty( $atts['excerpt'] ) ) {
	$output .= '<div class="overlay">';

	if ( ! empty( $atts['title'] ) ) {
		$output .= '<h1>' . $atts['title'] . '</h1>';
	}

	if ( ! empty( $atts['excerpt'] ) ) {
		$output .= '<p>' . $atts['excerpt'] . '</p>';
	}

	$output .= '</div>';
}

$output .= '<img id="' . $atts['id'] . '" data-id="' . $atts['vid'] . '" src="' . $atts['img'] . '" alt="' . $atts['alt'] . '"';

if ( ! empty( $atts['aspect'] ) ) {
	$output .= ' data-aspect="' . $atts['aspect'] . '"';
}

$output .= '>';
$output .= '</div>';
$output .= '</section>';
