<?php
/**
 * COMPONENT LIBRARY TABS BLOCK REGISTRATION
 *
 * @package uri-component-library
 */

 /**
  * Register the tabs block
  */
function uri_cl_block_register_tabs() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type(
		 'uri-cl/tabs',
		array(
			'render_callback' => 'uri_cl_shortcode_tabs',
		)
		);
}
add_action( 'init', 'uri_cl_block_register_tabs' );

/**
 * Register the tab block
 */
function uri_cl_block_register_tab() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type(
		'uri-cl/tab',
	 array(
		 'render_callback' => 'uri_cl_shortcode_tab',
	 )
	 );
}
add_action( 'init', 'uri_cl_block_register_tab' );
