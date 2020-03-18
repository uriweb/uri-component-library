<?php

$classes = 'cl-notice';

switch ( $atts['style'] ) {
	case 'urgent':
		$classes .= ' urgent';
		break;
	case 'covid19':
		$classes .= ' covid19';
		$atts['dismissible'] = false;
		break;
}

if ( ! empty( $atts['expiration'] ) ) {

	$difference = uri_cl_get_time_difference( $atts['expiration'] );
	$left = uri_cl_expand_seconds( $difference );

	if ( 0 >= $difference ) {

		$classes .= ' expired';

		if ( ! $atts['show_expired'] ) {
			$classes .= ' dismissed';
		}
	}

	$atts['class'] = $atts['class'] . ' ' . $atts['className'];

	if ( ! empty( $atts['class'] ) ) {
		$classes .= ' ' . $atts['class'];
	}
}

$hash = uri_cl_get_hash( $atts );

$output = '<section class="cl-wrapper cl-notice-wrapper">';
$output .= '<div class="' . $classes . '" data-hash="' . $hash . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= 'style="' . $atts['css'] . '"';
}

$output .= '>';

if ( $atts['dismissible'] ) {
	$output .= '<div class="dismiss" title="Dismiss">Dismiss message</div>';
}

if ( ! empty( $atts['title'] ) ) {
	$output .= '<h1>' . $atts['title'] . '</h1>';
}

$output .= '<p>' . do_shortcode( $content ) . '</p>';

$output .= '</div>';
$output .= '</section>';
