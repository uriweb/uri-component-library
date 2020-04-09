<?php

$classes = 'cl-panel';

if ( $atts['reverse'] ) {
	$classes .= ' reverse';
}

$atts['class'] = $atts['class'] . ' ' . $atts['className'];

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
	if ( ! empty( $atts['contentWrapper'] ) ) {
		$output .= '<' . $atts['contentWrapper'] . '>' . do_shortcode( $content ) . '</' . $atts['contentWrapper'] . '>';
	} else {
		$output .= do_shortcode( $content );
	}
}

$output .= '</article>';
$output .= '</div>';
$output .= '</section>';
