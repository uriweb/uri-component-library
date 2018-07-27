<?php

$classes = 'cl-metric';

switch ( $atts['style'] ) {
	case 'dark':
		$classes .= ' dark';
		break;
	case 'clear':
		$classes .= ' clear';
		break;
	case 'overlay':
		$classes .= ' dark clear';
		break;
}

if ( ! empty( $atts['float'] ) ) {
	$classes .= ' ' . $atts['float'];
	$output = '<aside class="cl-wrapper cl-metric-wrapper">';
}

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output .= '<div class="' . $classes . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= ' style="' . $atts['css'] . '"';
}

$output .= '>';

$output .= '<span>' . $atts['metric'] . '</span>';

$output .= '<span>' . $atts['caption'] . '</span>';

$output .= '</div>';
if ( ! empty( $atts['float'] ) ) {
	$output .= '</aside>';
}
