<?php

$classes = 'cl-metric';
$override_bgcolor = false;
$date_metric = false;
$output = '';

$timestamp = strtotime( $atts['metric'] );
if ( $timestamp ) {
	$override_bgcolor = true;
	$date_parts = getdate( $timestamp );
	if ( 'default' != $atts['format'] ) {
		$atts['format'] = 'date';
	}
}

if ( 'date' != $atts['format'] ) {

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
} else {
	$classes .= ' date';
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

if ( 'date' != $atts['format'] ) {
	$output .= '<span>' . $atts['metric'] . '</span>';
	$output .= '<span>' . $atts['caption'] . '</span>';
} else {
	$output .= '<div class="cl-metric-date-wrapper">';
	$output .= '<div class="cl-metric-month">' . $date_parts['month'] . ' ' . $date_parts['year'] . '</div>';
	$output .= '<div class="cl-metric-day">' . $date_parts['mday'] . '</div>';
	$output .= '</div>';
}

$output .= '</div>';
if ( ! empty( $atts['float'] ) ) {
	$output .= '</aside>';
}
