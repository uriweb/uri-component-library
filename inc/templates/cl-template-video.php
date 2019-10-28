<?php

$classes = 'cl-video';

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output = '<section class="cl-wrapper cl-video-wrapper">';
$output .= '<div class="' . $classes . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= ' style="' . $atts['css'] . '"';
}

$output .= '>';

if ( ! empty( $atts['title'] ) || ! empty( $atts['excerpt'] ) ) {
	$output .= '<div class="overlay">';

	if ( ! empty( $atts['title'] ) ) {
		$output .= '<h1>' . $atts['title'] . '</h1>';
	}

	if ( ! empty( $atts['excerpt'] ) ) {
		$output .= '<p>' . $atts['excerpt'] . '</p>';
	}

	$output .= '</div>';
}

$vid = uri_cl_get_video_id( $atts['vid'] );
$platform = uri_cl_get_video_platform( $atts['vid'] );
$imgurl = ( 'vimeo' == $platform ) ? uri_cl_get_vimeo_thumbnail( $atts['vid'] ) : 'https://img.youtube.com/vi/' . $vid . '/maxresdefault.jpg';

if ( ! empty( $atts['img'] ) ) {
	$imgurl = $atts['img'];
}

$id = empty( $atts['id'] ) ? $vid : $atts['id'];
$output .= '<img id="' . $id . '" data-video="' . $vid . '" data-platform="' . $platform . '" src="' . $imgurl . '" alt="' . $atts['alt'] . '"';

$output .= '>';
$output .= '</div>';
$output .= '</section>';
