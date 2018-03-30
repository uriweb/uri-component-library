<?php

$classes = 'cl-notice';

switch ( $style ) {
	case 'urgent':
		$classes .= ' urgent';
		break;
}

if ( ! empty( $class ) ) {
	$classes .= ' ' . $class;
}

$output = '<section class="cl-wrapper cl-notice-wrapper">';
$output .= '<div class="' . $classes . '"';

if ( ! empty( $css ) ) {
	$output .= 'style="' . $css . '"';
}

$output .= '>';

if ( ! empty( $title ) ) {
	$output .= '<h1>' . $title . '</h1>';
}

$output .= '<p>' . do_shortcode( $content ) . '</p>';
$output .= '</div>';
$output .= '</section>';
