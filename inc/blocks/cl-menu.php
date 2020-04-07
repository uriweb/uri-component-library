<?php
/**
 * COMPONENT LIBRARY MENU BLOCK REGISTRATION
 *
 * @package uri-component-library
 */

 /**
  * Register the block
  */
function uri_cl_block_register_menu() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type(
		 'uri-cl/menu',
		array(
			'render_callback' => 'uri_cl_shortcode_menu',
		)
		);
}
add_action( 'init', 'uri_cl_block_register_menu' );
