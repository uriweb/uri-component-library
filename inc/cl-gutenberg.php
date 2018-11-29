<?php

/**
 * COMPONENT LIBRARY GUTENBERG IMPLEMENTATION
 *
 * @package uri-component-library
 * @author John Pennypacker <jpennypacker@uri.edu>
 */



/**
 * include the Gutenberg blocks if gutenberg is active
 */
function uri_cl_gutenberg_is_active() {

	wp_enqueue_style(
		'cl-styles',
		URI_CL_URL . '/css/cl.built.css',
		array( 'wp-edit-blocks')
	);
	
	wp_enqueue_style(
		'uri-gutenberg-editor-styles',
		URI_CL_URL . '/css/uri-gutenberg.css',
		array( 'wp-edit-blocks'),
		filemtime( URI_CL_DIR_PATH . '/css/uri-gutenberg.css' ) // cache buster			
	);

// jp testing
	$name = 'jp-dev-block';
	if ( file_exists( URI_CL_DIR_PATH . '/js/blocks/build/blocks.build.js' ) ) {
		wp_enqueue_script(
			'uri-gutenberg-script-' . $name,
			URI_CL_URL . '/js/blocks/build/blocks.build.js',
			array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-editor' ),
			filemtime( URI_CL_DIR_PATH . '/js/blocks/build/blocks.build.js' ) // cache buster
		);
		wp_localize_script( 'uri-gutenberg-script-' . $name, 'URI_CL_URL', URI_CL_URL );
	}
// end jp testing	



	// Cards
	_uri_cl_load_block( 'card' );

	// Buh-ins
	_uri_cl_load_block( 'button' );

	// Boxouts
	_uri_cl_load_block( 'boxout' );
	
}
add_action( 'enqueue_block_editor_assets', 'uri_cl_gutenberg_is_active' );


/**
 * Helper function to simplify the process of enqueing scripts and styles
 * @param $name is the name of the component, and its directory name inside /js/blocks/
 */
function _uri_cl_load_block( $name ) {
	
	if ( file_exists( URI_CL_DIR_PATH . '/js/blocks/' . $name . '/block.js' ) ) {
		wp_enqueue_script(
			'uri-gutenberg-script-' . $name,
			URI_CL_URL . '/js/blocks/' . $name . '/block.js',
			array( 'wp-blocks', 'wp-element', 'wp-i18n' ),
			filemtime( URI_CL_DIR_PATH . '/js/blocks/' . $name . '/block.js' ) // cache buster
		);
		wp_localize_script( 'uri-gutenberg-script-' . $name, 'URI_CL_URL', URI_CL_URL );
	
	}

	if ( file_exists( URI_CL_DIR_PATH . '/js/blocks/' . $name . '/block.js' ) ) {
		wp_enqueue_style(
			'uri-gutenberg-styles-' . $name,
			URI_CL_URL . '/js/blocks/' . $name . '/block.css',
			array( 'wp-edit-blocks'),
			filemtime( URI_CL_DIR_PATH . '/js/blocks/' . $name . '/block.css' ) // cache buster			
		);
	}
	
}

/**
 * Defines a custom category
 */
add_filter( 'block_categories', function( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'cl-blocks',
				'title' => __( 'Component Library', 'cl-blocks' ),
			),
		)
	);
}, 10, 2 );
