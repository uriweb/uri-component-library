<?php

$classes = 'cl-dcard';

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

if ( ! empty( $atts['float'] ) ) {
	$classes .= ' ' . $atts['float'];
}

$output = '<a class="' . $classes . '" href="' . $atts['link'] . '" title="' . $atts['tooltip'] . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= ' style="' . $atts['css'] . '"';
}

$output .= '>';

if ( ! empty( $atts['img'] ) ) {
	$output .= uri_cl_build_img_tag( $atts['img'], $atts['alt'] );
}

$output .= '<div class="cl-dcard-text">';

if ( ! empty( $atts['title'] ) ) {
	$output .= '<h3>' . $atts['title'] . '</h3>';
}
if ( ! empty( $atts['body'] ) ) {
	$output .= '<p>' . $atts['body'] . '</p>';
}

$output .= '</div>';

$output .= '</a>';
