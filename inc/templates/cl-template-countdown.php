<?php

$difference = uri_cl_get_time_difference( $atts['deadline'] );
$left = uri_cl_expand_seconds( $difference );
$message = uri_cl_get_time_left_in_words( $left, $atts );

$output = '';

if ( ! empty( $message ) ) {

	$hash = uri_cl_get_hash( $atts );
	$classes = 'cl-countdown';
	$atts['class'] = $atts['class'] . ' ' . $atts['className'];

	if ( ! empty( $atts['class'] ) ) {
		$classes .= ' ' . $atts['class'];
	}

	$output = '<section class="cl-wrapper cl-countdown-wrapper">';
	$output .= '<div class="' . $classes . '" data-hash="' . $hash . '"';

	if ( ! empty( $atts['css'] ) ) {
		$output .= 'style="' . $atts['css'] . '"';
	}

	$output .= '>';

	if ( ! empty( $atts['link'] ) ) {
		$output .= '<a class="message" href="' . $atts['link'] . '">' . $message . '</a>';
	} else {
		$output .= '<div class="message">' . $message . '</div>';
	}

	if ( $atts['dismissible'] ) {
		$output .= '<div class="dismiss" title="Dismiss">Dismiss message</div>';
	}

	$output .= '</div>';
	$output .= '</section>';

}
