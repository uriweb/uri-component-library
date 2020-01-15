<?php

$classes = 'cl-card';
$atts['class'] = $atts['class'] . ' ' . $atts['className'];

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

if ( ! empty( $atts['float'] ) ) {
	$classes .= ' ' . $atts['float'];
}

$output = '<div class="cl-wrapper cl-card-wrapper">';
$output .= '<a class="' . $classes . '" href="' . $atts['link'] . '" title="' . $atts['tooltip'] . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= ' style="' . $atts['css'] . '"';
}

$output .= '>';

if ( ! empty( $atts['img'] ) ) {
	$output .= uri_cl_build_img_tag( $atts['img'], $atts['alt'] );
}

if ( ! empty( $atts['title'] ) || ! empty( $atts['body'] ) ) {

	$output .= '<div class="cl-card-text">';

	if ( ! empty( $atts['title'] ) ) {
		$output .= '<h2>' . $atts['title'] . '</h2>';
	}

	if ( ! empty( $atts['body'] ) ) {
		$output .= '<p>' . $atts['body'] . '</p>';
	}

	$output .= '</div>';
}

if ( ! empty( $atts['button'] ) ) {
	$output .= '<div class="cl-button">' . $atts['button'] . '</div>';
}

$output .= '</a>';
$output .= '</div>';
