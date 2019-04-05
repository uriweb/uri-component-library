<?php
/**
 * CL Gutenberg Implementation
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
 * Include the Gutenberg blocks if gutenberg is active
 */
function uri_cl_gutenberg_is_active() {

	wp_enqueue_style(
		'cl-styles',
		URI_CL_URL . '/css/cl.built.css',
		array( 'wp-edit-blocks' )
	);

	wp_enqueue_style(
		'uri-gutenberg-editor-styles',
		URI_CL_URL . '/css/uri-gutenberg.css',
		array( 'wp-edit-blocks' ),
		filemtime( URI_CL_DIR_PATH . '/css/uri-gutenberg.css' ) // cache buster
	);

	if ( file_exists( URI_CL_DIR_PATH . '/js/blocks/build/blocks.build.js' ) ) {
		wp_enqueue_script(
			'uri-cl-gutenberg-blocks',
			URI_CL_URL . '/js/blocks/build/blocks.build.js',
			array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-editor' ),
			filemtime( URI_CL_DIR_PATH . '/js/blocks/build/blocks.build.js' ) // cache buster
		);
		wp_localize_script( 'uri-cl-gutenberg-blocks', 'URI_CL_URL', URI_CL_URL );
	}
	if ( file_exists( URI_CL_DIR_PATH . '/js/blocks/build/blocks.build.css' ) ) {
		wp_enqueue_style(
			'uri-cl-gutenberg-styles',
			URI_CL_URL . '/js/blocks/build/blocks.build.css',
			array( 'wp-edit-blocks' ),
			filemtime( URI_CL_DIR_PATH . '/js/blocks/build/blocks.build.css' ) // cache buster
		);
	}

}
add_action( 'enqueue_block_editor_assets', 'uri_cl_gutenberg_is_active' );



/**
 * Defines a custom category
 */
function uri_cl_gutenberg_add_categories( $categories, $post ) {
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
add_filter( 'block_categories', 'uri_cl_gutenberg_add_categories', 10, 2 );
