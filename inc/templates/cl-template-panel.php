<?php

$classes = 'cl-panel';

if ( $atts['reverse'] ) {
	$classes .= ' reverse';
}

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output = '<section class="cl-wrapper cl-panel-wrapper">';
$output .= '<div class="' . $classes . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= ' style="' . $atts['css'] . '"';
}

$output .= '>';

$output .= '<figure>';
$output .= uri_cl_build_img_tag( $atts['img'], $atts['alt'] );
$output .= '</figure>';
$output .= '<article>';

if ( ! empty( $atts['title'] ) ) {
	$output .= '<h1>' . $atts['title'] . '</h1>';
}
if ( isset( $content ) ) {
	$output .= '<p>' . do_shortcode( $content ) . '</p>';
}

$output .= '</article>';
$output .= '</div>';
$output .= '</section>';
