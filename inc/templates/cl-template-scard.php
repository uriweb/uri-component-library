<?php

$classes = 'cl-scard';

if ( ! empty( $class ) ) {
	$classes .= ' ' . $class;
}

if ( ! empty( $float ) ) {
	$classes .= ' ' . $float;
}

$output = '<div class="' . $classes . '"';

if ( ! empty( $css ) ) {
	$output .= ' style="' . $css . '"';
}

$output .= '>';

$post_link = get_permalink( $post );
$post_thumbnail = get_the_post_thumbnail( $post );

// Thumbnail
if ( $post_thumbnail ) {
	$output .= '<a href="' . $post_link . '">';
	$output .= $post_thumbnail;
	$output .= '</a>';
}

// --- Begin Text Area ---
$output .= '<div class="cl-scard-text">';

$post_cat_id = wp_get_post_categories( $post, array( 'fields' => 'ids' ) );
$post_cat_name = wp_get_post_categories( $post, array( 'fields' => 'names' ) );
$post_cat_classname = 'cl-scard-category-' . strtolower( str_replace( ' ', '-', $post_cat_name[0] ) );

// Category
$output .= '<a class="cl-scard-category ' . $post_cat_classname . '" href="' . get_category_link( $post_cat_id[0] ) . '">' . $post_cat_name[0] . '</a>';

// --- Begin Body ---
$output .= '<a class="cl-scard-body" href="' . $post_link . '">';

$output .= '<h3 class="cl-scard-title">' . get_the_title( $post ) . '</h3>';

$output .= '<p class="cl-scard-exerpt">' . get_the_excerpt( $post ) . '</p>';

$output .= '</a>';
// --- End Body ---
// --- Begin Metadata ---
$output .= '<div class="cl-scard-meta">';

// Date
$output .= '<span class="cl-scard-date">' . get_the_date( 'F j, Y', $post ) . '</span>';

// Social media
$output .= '<span class="cl-scard-social">';

$output .= '<a class="twitter-share-button" href="https://twitter.com/share" data-size="small" data-url="' . $post_link . '" data-text="' . get_the_title( $post ) . '">Tweet</a>';
$output .= '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';

$output .= '</span>';

$output .= '</div>';
// --- End Metadata ---
$output .= '</div>';
// --- End Text Area ---
$output .= '</div>';
