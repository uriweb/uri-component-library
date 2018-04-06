<?php

$output = '<section';

if ( ! empty( $id ) ) {
	$output .= ' id="' . $id . '"';
}

if ( ! empty( $class ) ) {
	$output .= ' class="' . $class . '"';
}

$output .= '>';

if ( ! empty( $title ) ) {
	$output .= '<h1>' . $title . '</h1>';
}

$output .= do_shortcode( $content );

$output .= '</section>';
