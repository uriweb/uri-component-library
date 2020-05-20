<?php

$classes = 'cl-card';
$atts['class'] = $atts['class'] . ' ' . $atts['className'];

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

if ( ! empty( $atts['float'] ) ) {
	$classes .= ' ' . $atts['float'];
}

if ( ! empty( $atts['feature'] ) ) {
	$classes .= ' cl-card-theatre';
}

$output = '<div class="cl-wrapper cl-card-wrapper">';
$output .= '<a class="' . $classes . '" href="' . $atts['link'] . '" title="' . $atts['tooltip'] . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= ' style="' . $atts['css'] . '"';
}

$output .= '>';

if ( ! empty( $atts['feature'] ) ) {

	$output .= '<div class="cl-card-feature-video-wrapper">';
	$output .= '<div class="theatre-controls">';
	$output .= '<span class="close" title="Close video">close</span>';
	$output .= '</div>';
	$output .= do_shortcode( '[cl-video class="cl-card-feature-video" vid="' . $atts['feature'] . '"]' );
	$output .= '</div>';

	if ( empty( $atts['button'] ) ) {
		$atts['button'] = 'Play Video';
	}
}

if ( ! empty( $atts['img'] ) ) {
	$output .= '<div class="cl-card-container media';

	if ( 'vimeo' == uri_cl_get_video_platform( $atts['img'] ) ) {

		$output .= ' video">';
		$output .= '<div class="overlay"></div>';

		$vid = uri_cl_get_video_id( $atts['img'] );
		$imgurl = uri_cl_get_vimeo_thumbnail( $atts['img'] );
		$output .= '<div id="' . $vid . '" data-video="' . $vid . '" data-platform="vimeo" class="poster" style="background-image:url(' . $imgurl . ')"></div>';

	} else {
		$output .= '">' . uri_cl_build_img_tag( $atts['img'], $atts['alt'] );
	}

	$output .= '</div>';
}

$output .= '<div class="cl-card-container text">';

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

$output .= '</div>';

if ( ! empty( $atts['button'] ) ) {
	$output .= '<div class="cl-button">' . $atts['button'] . '</div>';
}

$output .= '</a>';
$output .= '</div>';
