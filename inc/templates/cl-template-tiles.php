<?php

$classes = 'cl-tiles';

switch ( $atts['across'] ) {
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

if ( $atts['square'] ) {
	$classes .= ' square';
}

if ( $atts['compact'] ) {
	$classes .= ' compact';
}

if ( $atts['animated'] ) {
	$classes .= ' reveal';
}

$atts['class'] = $atts['class'] . ' ' . $atts['className'];

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output = '<section class="cl-wrapper cl-tiles-wrapper">';
$output .= '<div class="' . $classes . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= ' style="' . $atts['css'] . '"';
}

$output .= '>' . do_shortcode( $content ) . '</div>';

$output .= '</section>';
