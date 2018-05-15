<?php

$classes = 'cl-scard';

if ( ! empty( $class ) ) {
	$classes .= ' ' . $class;
}

if ( ! empty( $float ) ) {
	$classes .= ' ' . $float;
}

$post_link = get_permalink( $post );
$post_thumbnail = get_the_post_thumbnail( $post );
$post_cat_id = wp_get_post_categories( $post, array( 'fields' => 'ids' ) )[0];
$post_cat = wp_get_post_categories( $post, array( 'fields' => 'names' ) )[0];
$post_cat_link = get_category_link( $post_cat_id );
$post_title = get_the_title( $post );
$post_excerpt = get_the_excerpt( $post );

if ( ! empty( $link ) ) {
	$post_link = $link;
}

if ( ! empty( $img ) ) {
	$post_thumbnail = '<img src="' . $img . '">';
}

if ( ! empty( $cat ) ) {
	$post_cat = $cat;
}

if ( ! empty( $catlink ) ) {
	$post_cat_link = $catlink;
}

if ( ! empty( $title ) ) {
	$post_title = $title;
}

if ( ! empty( $excerpt ) ) {
	$post_excerpt = $excerpt;
}


// ---- BUILD THE CARD ----
$output = '<div id="post-' . $post . '" class="' . $classes . '"';

if ( ! empty( $css ) ) {
	$output .= ' style="' . $css . '"';
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
if ( $showcat ) {
	$post_cat_classname = 'cl-scard-category-' . strtolower( str_replace( ' ', '-', $post_cat ) );
	$output .= '<a class="cl-scard-category ' . $post_cat_classname . '" href="' . $post_cat_link . '" title="See more from this category">' . $post_cat . '</a>';
}

// --- Begin Body ---
$output .= '<a class="cl-scard-body" href="' . $post_link . '">';

$output .= '<h3 class="cl-scard-title">' . $post_title . '</h3>';

$output .= '<p class="cl-scard-exerpt">' . $post_excerpt . '</p>';

$output .= '</a>';
// --- End Body ---
// --- Begin Metadata ---
if ( $showdate || $showsocial ) {
	$output .= '<div class="cl-scard-meta">';

	// Date
	if ( $showdate ) {
		$output .= '<span class="cl-scard-date">' . get_the_date( 'F j, Y', $post ) . '</span>';
	}

	// Social media
	if ( $showsocial ) {
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
