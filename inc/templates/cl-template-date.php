<?php

$classes = 'cl-date';
$output = '';

$timestamp = strtotime( $atts['date'] );
$date_parts = getdate( $timestamp );
$date_start = date( 'Ymd', strtotime( $atts['date'] ) );

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

// ICS FILE

$output .= '<form method="post" action="' . URI_CL_URL . '/inc/cl-ics.php">';
$output .= '<input type="hidden" name="date_start" value="' . $date_start . '">';
$output .= '<input type="hidden" name="summary" value="' . $atts['caption'] . '">';
$output .= '<input type="submit" value="Add to Calendar">';
$output .= '</form>';

// END

$output .= '<div class="cl-date-content-wrapper" title="Add to my calendar">';
$output .= '<div class="cl-date-content">';
$output .= '<div class="cl-date-download"></div>';
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
