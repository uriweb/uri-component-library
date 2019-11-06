<?php

$classes = 'cl-share ' . $atts['style'];

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output = '<aside class="cl-wrapper cl-share-wrapper">';
$output .= '<div class="' . $classes . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= ' style="' . $atts['css'] . '"';
}

$output .= '>';

$output .= '<span class="share-label">Share:</span>';
$output .= '<a href="http://twitter.com/share?text=' . get_the_title() . '&amp;url=' . esc_url( get_the_permalink() ) . '" title="Share on Twitter" class="cl-share-twitter share-twitter" target="_blank" rel="nofollow noopener">Twitter</a>';
$output .= '<a href="https://www.facebook.com/sharer/sharer.php?u=' . esc_url( get_the_permalink() ) . '" title="Share on Facebook" class="cl-share-facebook share-facebook" target="_blank" rel="nofollow noopener">Facebook</a>';

$output .= '</div>';
$output .= '</aside>';
