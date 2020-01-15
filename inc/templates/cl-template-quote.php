<?php

$classes = 'cl-quote';
$atts['class'] = $atts['class'] . ' ' . $atts['className'];

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output = '<section class="cl-wrapper cl-quote-wrapper">';
$output .= '<div class="' . $classes . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= 'style="' . $atts['css'] . '"';
}

$output .= '>';

if ( ! empty( $atts['img'] ) ) {
	$output .= '<div class="cl-quote-image" style="background-image:url(' . $atts['img'] . ')" title="' . $atts['alt'] . '"></div>';
}

$output .= '<blockquote>' . $atts['quote'] . '</blockquote>';

if ( ! empty( $atts['citation'] ) ) {
	$output .= '<cite>' . $atts['citation'] . '</cite>';
}

$output .= '</div>';
$output .= '</section>';
