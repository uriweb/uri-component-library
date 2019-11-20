<?php

$difference = uri_cl_get_time_difference( $atts['expiration'] );
$left = uri_cl_expand_seconds( $difference );
$hash = uri_cl_get_hash( $atts );

$classes = 'cl-notice';

switch ( $atts['style'] ) {
	case 'urgent':
		$classes .= ' urgent';
		break;
}

if ( 0 >= $difference ) {

	$classes .= ' expired';

	if ( ! $atts['show_expired'] ) {
		$classes .= ' dismissed';
	}
}

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output = '<section class="cl-wrapper cl-notice-wrapper">';
$output .= '<div class="' . $classes . '" data-hash="' . $hash . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= 'style="' . $atts['css'] . '"';
}

$output .= '>';

if ( $atts['dismissable'] ) {
	$output .= '<div class="dismiss" title="Dismiss">Dismiss message</div>';
}

if ( ! empty( $atts['title'] ) ) {
	$output .= '<h1>' . $atts['title'] . '</h1>';
}

$output .= '<p>' . do_shortcode( $content ) . '</p>';

$output .= '</div>';
$output .= '</section>';
