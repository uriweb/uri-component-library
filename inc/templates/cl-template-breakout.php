<?php

$classes = 'cl-breakout';
$wrapper = 'section';

$atts['class'] = $atts['class'] . ' ' . $atts['className'];

if ( $atts['use_content_width'] ) {
	$classes .= ' use-content-width';
}

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output = '<' . $wrapper . ' class="cl-wrapper cl-breakout-wrapper">';
$output .= '<div class="' . $classes . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= ' style="' . $atts['css'] . '"';
}

$output .= '>';

$inner_content = '';

if ( isset( $content ) ) {
	$inner_content = do_shortcode( $content );
}

if ( $atts['use_content_width'] ) {
	$output .= '<div class="content-width">';
	$output .= $inner_content;
	$output .= '</div>';
} else {
	$output .= $inner_content;
}

$output .= '</div>';
$output .= '</' . $wrapper . '>';
