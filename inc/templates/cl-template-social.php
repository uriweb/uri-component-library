<?php

$classes = 'cl-social ' . $atts['style'];
$atts['class'] = $atts['class'] . ' ' . $atts['className'];

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

if ( empty( $atts['facebook'] ) && empty( $atts['instagram'] ) && empty( $atts['twitter'] ) && empty( $atts['x'] ) && empty( $atts['youtube'] ) && empty( $atts['snapchat'] ) && empty( $atts['tiktok'] ) && empty( $atts['linkedin'] ) ) {

	$output = '';

} else {

	$output = '<aside class="cl-wrapper cl-social-wrapper">';
	$output .= '<ul class="' . $classes . '"';

	if ( ! empty( $atts['css'] ) ) {
		$output .= ' style="' . $atts['css'] . '"';
	}

	$output .= '>';

	if ( ! empty( $atts['facebook'] ) ) {
		$output .= '<li><a href="' . $atts['facebook'] . '" class="cl-social-facebook" title="Facebook">Facebook</a></li>';
	}
	if ( ! empty( $atts['instagram'] ) ) {
		$output .= '<li><a href="' . $atts['instagram'] . '" class="cl-social-instagram" title="Instagram">Instagram</a></li>';
	}
	if ( ! empty( $atts['x'] ) || ! empty( $atts['twitter'] ) ) {
		$twitter = $atts['twitter'];
		if ( ! empty( $atts['x'] ) ) {
			$twitter = $atts['x'];
		}
		$output .= '<li><a href="' . $twitter . '" class="cl-social-twitter" title="X">X</a></li>';
	}
	if ( ! empty( $atts['youtube'] ) ) {
		$output .= '<li><a href="' . $atts['youtube'] . '" class="cl-social-youtube" title="YouTube">YouTube</a></li>';
	}
	if ( ! empty( $atts['snapchat'] ) ) {
		$output .= '<li><a href="' . $atts['snapchat'] . '" class="cl-social-snapchat" title="Snapchat">Snapchat</a></li>';
	}
	if ( ! empty( $atts['tiktok'] ) ) {
		$output .= '<li><a href="' . $atts['tiktok'] . '" class="cl-social-tiktok" title="TikTok">TikTok</a></li>';
	}
	if ( ! empty( $atts['linkedin'] ) ) {
		$output .= '<li><a href="' . $atts['linkedin'] . '" class="cl-social-linkedin" title="LinkedIn">LinkedIn</a></li>';
	}

	$output .= '</ul>';
	$output .= '</aside>';

}
