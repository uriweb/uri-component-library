<?php

$classes = 'cl-panel-super';

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

$output .= '<div class="cl-panel-super-blur" style="background-image:url(' . $atts['img'] . ')"></div>';

$output .= '<div class="cl-panel-super-content">';

$output .= '<div class="cl-panel-super-image">';
$output .= uri_cl_build_img_tag( $atts['img'], $atts['alt'] );
$output .= '</div>';

$output .= '<div class="cl-panel-super-text">';
if ( ! empty( $atts['title'] ) ) {
	$output .= '<h1>' . $atts['title'] . '</h1>';
}
if ( isset( $content ) ) {
	$output .= '<p>' . do_shortcode( $content ) . '</p>';
}
$output .= '</div>';

$output .= '</div>';

$output .= '</div>';
$output .= '</section>';
