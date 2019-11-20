<?php

$deadline = strtotime( $atts['deadline'] );
$today = time();
$difference = $deadline - $today;

$left = uri_cl_expand_seconds( $difference );
$message = uri_cl_time_left_in_words( $left, $atts );

$output = '';

if ( ! empty( $message ) ) {

	$hash = md5( implode( '', $atts ) );
	$classes = 'cl-countdown';

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

	if ( $atts['dismissable'] ) {
		$output .= '<div class="dismiss" title="Dismiss">Dismiss message</div>';
	}

	$output .= '</div>';
	$output .= '</section>';

}
