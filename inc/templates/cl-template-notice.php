<?php

$classes = 'cl-notice';

switch ( $atts['style'] ) {
	case 'urgent':
		$classes .= ' urgent';
		break;
}

if ( ! empty( $atts['deadline'] ) ) {
	$classes .= ' deadline';
}

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output = '<section class="cl-wrapper cl-notice-wrapper">';
$output .= '<div class="' . $classes . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= 'style="' . $atts['css'] . '"';
}

$output .= '>';

if ( ! empty( $atts['title'] ) ) {
	$output .= '<h1>' . $atts['title'] . '</h1>';
}

$output .= '<p>' . do_shortcode( $content ) . '</p>';
$output .= '</div>';
$output .= '</section>';
