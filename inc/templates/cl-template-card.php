<?php

$classes = 'cl-card';

if ( ! empty( $class ) ) {
	$classes .= ' ' . $class;
}

if ( ! empty( $float ) ) {
	$classes .= ' ' . $float;
}

$output = '<a class="' . $classes . '" href="' . $link . '" title="' . $tooltip . '"';

if ( ! empty( $css ) ) {
	$output .= ' style="' . $css . '"';
}

$output .= '>';

if ( ! empty( $img ) ) {

	$img_src = $img;
	$img_srcset = '';

	if ( is_numeric( $img ) ) {
		$img_id = $img;
		$img_src = wp_get_attachment_image_src( $img_id );
		$img_meta = wp_get_attachment_metadata( $img_id );
		$img_srcset = wp_calculate_image_srcset( array( $img_meta['width'], $img_meta['height'] ), $img_src, $img_meta );
	}

	$output .= '<img src="' . $img_src . '" srcset="' . $img_srcset . '" alt="' . $alt . '">';

}

if ( ! empty( $title ) || ! empty( $body ) ) {

	$output .= '<div class="cl-card-text">';

	if ( ! empty( $title ) ) {
		$output .= '<h3>' . $title . '</h3>';
	}

	if ( ! empty( $body ) ) {
		$output .= '<p>' . $body . '</p>';
	}

	$output .= '</div>';
}

if ( ! empty( $button ) ) {
	$output .= '<div class="cl-button">' . $button . '</div>';
}

$output .= '</a>';
