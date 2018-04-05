<?php

$classes = 'cl-quote';

if ( ! empty( $class ) ) {
    $classes .= ' ' . $class;
}

$output = '<section class="cl-wrapper cl-quote-wrapper">';
$output .= '<div class="' . $classes . '"';

if ( ! empty( $css ) ) {
	$output .= 'style="' . $css . '"';
}

$output .= '>';

if ( ! empty( $img ) ) {
	$output .= '<div class="cl-quote-image" style="background-image:url(' . $img . ')"></div>';
}

$output .= '<blockquote>' . $quote . '</blockquote>';
$output .= '<cite>' . $citation . '</cite>';

$output .= '</div>';
$output .= '</section>';