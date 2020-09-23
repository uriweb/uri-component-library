<?php

$classes = 'cl-hero';

switch ( $atts['format'] ) {
	case 'super':
		$classes .= ' super';
		break;
	case 'fullwidth':
		$classes .= ' fullwidth';
		break;
}

$atts['class'] = $atts['class'] . ' ' . $atts['className'];

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output = '<section class="cl-wrapper cl-hero-wrapper">';
$output .= '<div class="' . $classes . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= 'style="' . $atts['css'] . '"';
}

$output .= '>';

$output .= '<div class="cl-hero-proper">';

$output .= '<div class="overlay">';
$output .= '<div class="block">';

if ( ! empty( $atts['headline'] ) ) {
	$output .= '<h1>' . $atts['headline'] . '</h1>';
}

if ( ! empty( $atts['subhead'] ) ) {
	$output .= '<p>' . $atts['subhead'] . '</p>';
}

if ( ! empty( $atts['link'] ) ) {
	$output .= '<a class="cl-button" href="' . $atts['link'] . '" title="' . $atts['tooltip'] . '">' . $atts['button'] . '</a>';
}

$output .= '</div>'; // .block
$output .= '</div>'; // .overlay

if ( ! empty( $atts['vid'] ) ) {

	$vid = uri_cl_get_video_id( $atts['vid'] );
	$platform = uri_cl_get_video_platform( $atts['vid'] );
	$imgurl = ( 'vimeo' == $platform ) ? uri_cl_get_vimeo_thumbnail( $atts['vid'] ) : 'https://img.youtube.com/vi/' . $vid . '/maxresdefault.jpg';
	$id = empty( $atts['id'] ) ? $vid : $atts['id'];
	$image = '<div id="' . $id . '" data-video="' . $vid . '" data-platform="' . $platform . '" class="poster"';

} else if ( ! empty( $atts['animation'] ) ) {

	switch ( $atts['animation'] ) {
		case 'shift':
			$ani_method = 'shift';
			break;
	}

	$image = '<div class="animate ' . $ani_method . '"';

} else {

	$image = '<div class="still"';

}

if ( ! empty( $atts['img'] ) ) {

	$imgurl = $atts['img'];

	if ( $atts['use_caption'] ) {

		$caption = '';
		$img_id = attachment_url_to_postid( $imgurl );

		if ( 0 !== $img_id ) {
			$caption = wp_get_attachment_caption( $img_id );
		}
	}

	$image .= ' style="background-image:url(' . $imgurl . ');';
}

if ( 0.5 != $atts['positionX'] || 0.5 != $atts['positionY'] ) {
	$position = $atts['positionX'] * 100 . '% ' . $atts['positionY'] * 100 . '%';
	$image .= 'background-position:' . $position . ';';
}

$image .= '"></div>'; // image

$output .= $image;

$output .= '</div>'; // .cl-hero-proper

if ( ! empty( $atts['caption'] ) ) {
	$caption = $atts['caption'];
}

if ( ( $atts['use_caption'] && ! empty( $caption ) ) || ! empty( $atts['caption'] ) || ! empty( $atts['credit'] ) ) {

	$output .= '<div class="cl-hero-caption-wrapper">';

	if ( ! empty( $caption ) ) {
		$output .= '<div class="cl-hero-caption">' . $caption . '</div>';
	}

	if ( ! empty( $atts['credit'] ) ) {
		$output .= '<div class="cl-hero-credit">' . $atts['credit'] . '</div>';
	}

	$output .= '</div>';

}

$output .= '</div>'; // .cl-hero
$output .= '</section>';
