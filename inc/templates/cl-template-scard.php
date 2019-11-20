<?php

$classes = 'cl-scard';

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

if ( ! empty( $float ) ) {
	$classes .= ' ' . $float;
}

$post_link = get_permalink( $atts['post'] );
$post_thumbnail = get_the_post_thumbnail( $atts['post'] );
$post_cat_id = wp_get_post_categories( $atts['post'], array( 'fields' => 'ids' ) )[0];
$post_cat = wp_get_post_categories( $atts['post'], array( 'fields' => 'names' ) )[0];
$post_cat_link = get_category_link( $post_cat_id );
$post_title = get_the_title( $atts['post'] );
$post_excerpt = get_the_excerpt( $atts['post'] );

if ( ! empty( $atts['link'] ) ) {
	$post_link = $atts['link'];
}

if ( ! empty( $atts['img'] ) ) {
	$post_thumbnail = uri_cl_build_img_tag( $atts['img'] );
}

if ( ! empty( $atts['cat'] ) ) {
	$post_cat = $atts['cat'];
}

if ( ! empty( $atts['catlink'] ) ) {
	$post_cat_link = $atts['catlink'];
}

if ( ! empty( $atts['title'] ) ) {
	$post_title = $atts['title'];
}

if ( ! empty( $atts['excerpt'] ) ) {
	$post_excerpt = $atts['excerpt'];
}


// ---- BUILD THE CARD ----
$output = '<div class="cl-wrapper cl-scard-wrapper">';
$output .= '<div id="post-' . $atts['post'] . '" class="' . $classes . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= ' style="' . $atts['css'] . '"';
}

$output .= '>';

// Thumbnail
if ( $post_thumbnail ) {
	$output .= '<a class="cl-scard-img-container" href="' . $post_link . '">';
	$output .= $post_thumbnail;
	$output .= '<div class="cl-scard-img-overlay"><span>Read</span></div>';
	$output .= '</a>';
}

// --- Begin Text Area ---
$output .= '<div class="cl-scard-text">';

// Category
if ( $atts['showcat'] && $post_cat ) {
	$post_cat_classname = 'cl-scard-category-' . strtolower( str_replace( ' ', '-', $post_cat ) );
	$output .= '<a class="cl-scard-category ' . $post_cat_classname . '" href="' . $post_cat_link . '" title="See more from this category">' . $post_cat . '</a>';
}

// --- Begin Body ---
$output .= '<a class="cl-scard-body" href="' . $post_link . '">';

$output .= '<h2 class="cl-scard-title">' . $post_title . '</h2>';

if ( $atts['showexcerpt'] && $post_excerpt ) {
	$output .= '<p class="cl-scard-excerpt">' . $post_excerpt . '</p>';
}

$output .= '</a>';
// --- End Body ---
// --- Begin Metadata ---
if ( $atts['showdate'] || $atts['showsocial'] ) {
	$output .= '<div class="cl-scard-meta">';

	// Date
	if ( $atts['showdate'] ) {
		$output .= '<span class="cl-scard-date">' . get_the_date( 'F j, Y', $atts['post'] ) . '</span>';
	}

	// Social media
	if ( $atts['showsocial'] ) {
		$output .= '<span class="cl-scard-social">';

		$output .= '<a class="twitter-share-button" href="https://twitter.com/share" data-size="small" data-url="' . $post_link . '" data-text="' . $post_title . '">Tweet</a>';
		$output .= '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';

		$output .= '</span>';
	}

	$output .= '</div>';
}
// --- End Metadata ---
$output .= '</div>';
// --- End Text Area ---
$output .= '</div>';
$output .= '</div>';
