<?php

$classes = 'cl-tooltip';
$wrapper = 'section';

$atts['class'] = $atts['class'] . ' ' . $atts['className'];

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output = '<section class="cl-wrapper cl-boxout-wrapper">';
$output .= '<div class="' . $classes . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= ' style="' . $atts['css'] . '"';
}

$output .= '>';

if ( ! empty( $atts['title'] ) ) {
	$output .= '<h2>' . $atts['title'] . '</h2>';
}

if ( isset( $content ) ) {
	if ( ! empty( $atts['contentWrapper'] ) ) {
		$output .= '<' . $atts['contentWrapper'] . '>' . do_shortcode( $content ) . '</' . $atts['contentWrapper'] . '>';
	} else {
		$output .= do_shortcode( $content );
	}
}

$output .= '</div>';
$output .= '</section>';
