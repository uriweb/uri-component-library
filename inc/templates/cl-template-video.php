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

$imgsrc = 'https://img.youtube.com/vi/' . $atts['vid'] . '/maxresdefault.jpg';

if ( ! empty( $atts['img'] ) ) {
	$imgsrc = $atts['img'];
}

$id = empty( $atts['id'] ) ? $atts['vid'] : $atts['id'];
$output .= '<img id="' . $id . '" data-video="' . $atts['vid'] . '" src="' . $imgsrc . '" alt="' . $atts['alt'] . '"';

if ( ! empty( $atts['aspect'] ) ) {
	$output .= ' data-aspect="' . $atts['aspect'] . '"';
}

$output .= '>';
$output .= '</div>';
$output .= '</section>';
