<?php

$classes = 'cl-tiles';

switch ( $accross ) {
	case 2:
		$classes .= ' halves';
		break;
	case 3:
		$classes .= ' thirds';
		break;
	case 4:
		$classes .= ' fourths';
		break;
	case 5:
		$classes .= ' fifths';
		break;
	default:
		$classes .= ' thirds';
}

if ( $square ) {
	$classes .= ' square';
}

if ( $compact ) {
	$classes .= ' compact';
}

if ( $animated ) {
	$classes .= ' reveal';
}

if ( ! empty( $class ) ) {
	$classes .= ' ' . $class;
}

$output = '<section class="cl-wrapper cl-tiles-wrapper">';
$output .= '<div class="' . $classes . '"';

if ( ! empty( $css ) ) {
	$output .= ' style="' . $css . '"';
}

$output .= '>' . do_shortcode( $content ) . '</div>';

$output .= '</section>';
