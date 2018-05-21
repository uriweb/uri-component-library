<?php

$output = '<section';
$classes = 'cl-tab';

if ( ! empty( $id ) ) {
	$output .= ' id="' . $id . '"';
}

if ( ! empty( $class ) ) {
	$classes .= ' ' . $class;
}

$output .= ' class="' . $classes . '">';

if ( ! empty( $title ) ) {
	$output .= '<h1>' . $title . '</h1>';
}

$output .= do_shortcode( $content );

$output .= '</section>';
