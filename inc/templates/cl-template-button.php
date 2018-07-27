<?php

$classes = 'cl-button';

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

if ( 'disabled' == $atts['style'] ) {

	$classes .= ' disabled';

	$output = '<span class="' . $classes . '" title="' . $atts['tooltip'] . '"';

	if ( ! empty( $atts['css'] ) ) {
		$output .= 'style="' . $atts['css'] . '"';
	}

	$output .= '>' . $atts['text'] . '</span>';

} else {

	if ( 'prominent' == $atts['style'] ) {
		$classes .= ' prominent';
	}

	$output = '<a class="' . $classes . '" href="' . $atts['link'] . '" title="' . $atts['tooltip'] . '"';

	if ( ! empty( $atts['css'] ) ) {
		$output .= 'style="' . $atts['css'] . '"';
	}

	$output .= '>' . $atts['text'] . '</a>';

}
