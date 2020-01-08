<?php

$classes = 'cl-date';
$output = '';

$timestamp = strtotime( $atts['date'] );
$date_parts = getdate( $timestamp );

if ( ! empty( $atts['float'] ) ) {
	$classes .= ' ' . $atts['float'];
	$output = '<aside class="cl-wrapper cl-date-wrapper">';
}

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output .= '<div class="' . $classes . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= ' style="' . $atts['css'] . '"';
}

$output .= '>';

$output .= '<div class="cl-date-content-wrapper">';
$output .= '<div class="cl-date-content">';
$output .= '<div class="cl-date-month">';

if ( $atts['show_year'] ) {
	$output .= substr( $date_parts['month'], 0, 3 ) . ' ' . $date_parts['year'];
} else {
	$output .= $date_parts['month'];
}

$output .= '</div>';
$output .= '<div class="cl-date-day">' . $date_parts['mday'] . '</div>';
$output .= '</div>';
$output .= '</div>';

$output .= '<div class="cl-date-caption-wrapper">';
$output .= '<div class="cl-date-caption">' . $atts['caption'] . '</div>';
$output .= '</div>';

$output .= '</div>';
if ( ! empty( $atts['float'] ) ) {
	$output .= '</aside>';
}
