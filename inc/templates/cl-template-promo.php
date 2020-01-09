<?php

$classes = 'cl-promo';

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output = '<section class="cl-wrapper cl-promo-wrapper">';
$output .= '<div class="' . $classes . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= 'style="' . $atts['css'] . '"';
}

$output .= '>';

$output .= '<div class="cl-promo-backdrop-wrapper">';

switch ( $atts['style'] ) {
	case 'confetti':
		$background = '<div class="cl-promo-backdrop style-confetti"></div>';
		break;
	case 'brand':
		$background = '<div class="cl-promo-backdrop style-brand"></div>';
		break;
	case 'default':
	default:
		$background = '<div class="cl-promo-backdrop style-blur" style="background-image:url(' . $atts['img'] . ')"></div>';
		break;
}

$output .= $background;
$output .= '</div>';

$output .= '<div class="cl-promo-content">';

$output .= '<div class="cl-promo-text">';

if ( ! empty( $atts['title'] ) ) {
	$output .= '<h1>' . $atts['title'] . '</h1>';
}

if ( ! empty( $atts['body'] ) ) {
	$output .= '<p>' . $atts['body'] . '</p>';
}

if ( ! empty( $atts['linktext'] ) ) {
	$output .= '<p><a class="cl-promo-text-link" href="' . $atts['link'] . '">' . $atts['linktext'] . '</a></p>';
}

$output .= '</div>';

$output .= '<div class="cl-promo-img-wrapper">';
$output .= '<div class="cl-promo-img">';
$output .= '<a class="cl-promo-img-link" href="' . $atts['link'] . '">';
$output .= uri_cl_build_img_tag( $atts['img'], $atts['alt'] );
$output .= '</a></div></div>';

$output .= '</div>';

$output .= '</div>';
$output .= '</section>';
