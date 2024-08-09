<?php
/**
 * COMPONENT LIBRARY GUTENBERG IMPLEMENTATION
 *
 * @package uri-component-library
 * @author John Pennypacker <jpennypacker@uri.edu>
 * @author: Brandon Fuller <bjcfuller@uri.edu>
 */

// Block direct requests
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

/**
 * Include Gutenberg block registrations
 */
include 'blocks/cl-boxout.php';
include 'blocks/cl-button.php';
include 'blocks/cl-card.php';
include 'blocks/cl-date.php';
include 'blocks/cl-hero.php';
include 'blocks/cl-menu.php';
include 'blocks/cl-metric.php';
include 'blocks/cl-notice.php';
include 'blocks/cl-panel.php';
include 'blocks/cl-promo.php';
include 'blocks/cl-quote.php';
include 'blocks/cl-tabs.php';

/**
 * Include the Gutenberg block scripts and styles if active
 */
function uri_cl_gutenberg_is_active() {

	wp_enqueue_style(
		'uri-cl-gutenberg-styles',
		URI_CL_URL . '/css/cl.built.css',
		array( 'wp-edit-blocks' )
	);

	if ( file_exists( URI_CL_DIR_PATH . 'js/blocks.built.js' ) ) {
		wp_enqueue_script(
			'uri-cl-gutenberg-blocks',
			URI_CL_URL . 'js/blocks.built.js',
			array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-editor' ),
			filemtime( URI_CL_DIR_PATH . 'js/blocks.built.js' ) // cache buster
		);
		wp_localize_script( 'uri-cl-gutenberg-blocks', 'URI_CL_URL', URI_CL_URL );
		wp_localize_script( 'uri-cl-gutenberg-blocks', 'URI_CL_SITE_URL', get_site_url() );
	}

}
add_action( 'enqueue_block_editor_assets', 'uri_cl_gutenberg_is_active' );



/**
 * Defines a custom category.
 *
 * @param array $categories are the block editor categories
 * param obj $post is the current post type.
 */
function uri_cl_gutenberg_add_categories( $categories ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'cl-blocks',
				'title' => __( 'Component Library', 'cl-blocks' ),
				'icon' => null,
			),
		)
	);
}
add_filter( 'block_categories_all', 'uri_cl_gutenberg_add_categories', 10, 2 );
