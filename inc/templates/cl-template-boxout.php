<?php

$classes = 'cl-boxout';
$wrapper = 'section';

if ( ! empty( $atts['float'] ) ) {
	$classes .= ' ' . $atts['float'];
	$wrapper = 'aside';
}

$atts['class'] = $atts['class'] . ' ' . $atts['className'];

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output = '<' . $wrapper . ' class="cl-wrapper cl-boxout-wrapper">';
$output .= '<div class="' . $classes . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= ' style="' . $atts['css'] . '"';
}

$output .= '>';

if ( ! empty( $atts['title'] ) ) {
	$output .= '<h1>' . $atts['title'] . '</h1>';
}

if ( isset( $content ) ) {
	if ( ! empty( $atts['contentWrapper'] ) ) {
		$output .= '<' . $atts['contentWrapper'] . '>' . do_shortcode( $content ) . '</' . $atts['contentWrapper'] . '>';
	} else {
		$output .= do_shortcode( $content );
	}
}

$output .= '</div>';
$output .= '</' . $wrapper . '>';
