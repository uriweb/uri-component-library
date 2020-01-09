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

$hash = uri_cl_get_hash( $atts );

$output .= '<div class="' . $classes . '" data-hash="' . $hash . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= ' style="' . $atts['css'] . '"';
}

$output .= '>';

$output .= '<div class="cl-date-content-wrapper pin" title="Pin this date">';
$output .= '<div class="cl-date-content">';
$output .= '<div class="cl-date-pin"></div>';
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
