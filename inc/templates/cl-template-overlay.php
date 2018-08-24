<?php

$classes = 'cl-overlay';

switch ( $atts['style'] ) {
	case 'dark':
		$classes .= ' dark';
		break;
}

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output = '<section class="cl-wrapper cl-overlay-wrapper">';
$output .= '<div class="' . $classes . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= 'style="' . $atts['css'] . '"';
}

$output .= '>';

$output .= '<div class="cl-overlay-artwork" style="background-image:url(' . $atts['img'] . ')"></div>';

$output .= '<div class="cl-overlay-block">';
$output .= '<div class="cl-overlay-text">';

if ( ! empty( $atts['title'] ) ) {
	$output .= '<h1>' . $atts['title'] . '</h1>';
}

$output .= '<p>' . do_shortcode( $content ) . '</p>';
$output .= '</div>';
$output .= '</div>';
$output .= '</div>';
$output .= '</section>';
