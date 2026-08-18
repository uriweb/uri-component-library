<?php

$classes = 'cl-metric';
$override_bgcolor = false;
$output = '';

if ( 'dark' === $atts['style'] || 'dark' === $atts['blockStyle'] ) {
	$classes .= ' dark';
} elseif ( 'clear' === $atts['style'] || 'clear' === $atts['blockStyle'] ) {
	$classes .= ' clear';
} elseif ( 'overlay' === $atts['style'] || 'overlay' === $atts['blockStyle'] ) {
	$classes .= ' dark clear';
	$override_bgcolor = true;
}

if ( ! empty( $atts['float'] ) ) {
	$classes .= ' ' . $atts['float'];
	$output = '<div class="cl-wrapper cl-metric-wrapper">';
}

$atts['class'] = $atts['class'] . ' ' . $atts['className'];

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
	$output .= '</div>';
}
