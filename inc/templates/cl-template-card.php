<?php

$classes = 'cl-card';
$atts['class'] = $atts['class'] . ' ' . $atts['className'];

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

if ( ! empty( $atts['float'] ) ) {
	$classes .= ' ' . $atts['float'];
}

$output = '<div class="cl-wrapper cl-card-wrapper">';
$output .= '<a class="' . $classes . '" href="' . $atts['link'] . '" title="' . $atts['tooltip'] . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= ' style="' . $atts['css'] . '"';
}

$output .= '>';

if ( ! empty( $atts['img'] ) ) {
	$output .= '<div class="cl-card-container">';

	if ( 'vimeo' == uri_cl_get_video_platform( $atts['img'] ) ) {

		$vid = uri_cl_get_video_id( $atts['img'] );
		$imgurl = uri_cl_get_vimeo_thumbnail( $atts['img'] );
		$output .= '<div id="' . $vid . '" data-video="' . $vid . '" data-platform="vimeo" class="poster" style="background-image:url(' . $imgurl . ')"></div>';

	} else {
		$output .= uri_cl_build_img_tag( $atts['img'], $atts['alt'] );
	}

	$output .= '</div>';
}

$output .= '<div class="cl-card-container">';

if ( ! empty( $atts['title'] ) || ! empty( $atts['body'] ) ) {

	$output .= '<div class="cl-card-text">';

	if ( ! empty( $atts['title'] ) ) {
		$output .= '<h2>' . $atts['title'] . '</h2>';
	}

	if ( ! empty( $atts['body'] ) ) {
		$output .= '<p>' . $atts['body'] . '</p>';
	}

	$output .= '</div>';
}

if ( ! empty( $atts['button'] ) ) {
	$output .= '<div class="cl-button">' . $atts['button'] . '</div>';
}

$output .= '</div>';

$output .= '</a>';
$output .= '</div>';
