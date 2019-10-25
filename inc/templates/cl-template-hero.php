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

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output = '<section class="cl-wrapper cl-hero-wrapper">';
$output .= '<div class="' . $classes . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= 'style="' . $atts['css'] . '"';
}

$output .= '>';

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

	$imgurl = 'https://img.youtube.com/vi/' . $atts['vid'] . '/maxresdefault.jpg';
	$id = empty( $atts['id'] ) ? $atts['vid'] : $atts['id'];
	$image = '<div id="' . $id . '" data-video="' . $atts['vid'] . '" class="poster"';

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
}

$image .= ' style="background-image:url(' . $imgurl . ')"></div>'; // image

$output .= $image;
$output .= '</div>'; // .hero
$output .= '</section>';
