<?php

$classes = 'cl-panel';

if ( $reverse ) {
	$classes .= ' reverse';
}

if ( ! empty( $class ) ) {
	$classes .= ' ' . $class;
}

$output = '<section class="cl-wrapper cl-panel-wrapper">';
$output .= '<div class="' . $classes . '"';

if ( ! empty( $css ) ) {
	$output .= ' style="' . $css . '"';
}

$output .= '>';

$output .= '<figure>';
$output .= uri_cl_build_img_tag( $img, $alt );
$output .= '</figure>';
$output .= '<article>';

if ( ! empty( $title ) ) {
	$output .= '<h1>' . $title . '</h1>';
}
if ( isset( $content ) ) {
	$output .= '<p>' . do_shortcode( $content ) . '</p>';
}

$output .= '</article>';
$output .= '</div>';
$output .= '</section>';
