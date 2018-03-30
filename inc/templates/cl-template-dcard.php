<?php

$classes = 'cl-dcard';

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
	$output .= '<img src="' . $img . '" alt="' . $alt . '">';
}

$output .= '<div class="cl-dcard-text">';

if ( ! empty( $title ) ) {
	$output .= '<h3>' . $title . '</h3>';
}
if ( ! empty( $body ) ) {
	$output .= '<p>' . $body . '</p>';
}

$output .= '</div>';

$output .= '</a>';
