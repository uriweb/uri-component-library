<?php

$classes = 'cl-promo';

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output = '<section class="cl-wrapper cl-promo-wrapper">';
$output .= '<div class="' . $classes . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= 'style="' . $atts['css'] . '"';
}

$output .= '>';

$output .= 'it works!';

$output .= '</div>';
$output .= '</section>';
