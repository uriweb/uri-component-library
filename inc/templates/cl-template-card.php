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

	$output .= uri_cl_build_img_tag( $img, $alt );

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
