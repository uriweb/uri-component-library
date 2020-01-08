<?php

$classes = 'cl-metric';
$override_bgcolor = false;
$output = '';

switch ( $atts['style'] ) {
	case 'dark':
		$classes .= ' dark';
		break;
	case 'clear':
		$classes .= ' clear';
		break;
	case 'overlay':
		$classes .= ' dark clear';
		$override_bgcolor = true;
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

if ( ! empty( $atts['css'] ) || ! empty( $atts['bgcolor'] ) ) {

	$output .= ' style="';

	if ( ! empty( $atts['bgcolor'] ) && ! $override_bgcolor ) {
		$output .= 'background-color:' . $atts['bgcolor'] . ';';
	}

	if ( ! empty( $atts['css'] ) ) {
		$output .= $atts['css'];
	}

	$output .= '"';
}

$output .= '>';

$output .= '<span>' . $atts['metric'] . '</span>';

$output .= '<span>' . $atts['caption'] . '</span>';

$output .= '</div>';
if ( ! empty( $atts['float'] ) ) {
	$output .= '</aside>';
}
