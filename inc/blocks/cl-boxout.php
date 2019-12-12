<?php
/**
 * COMPONENT LIBRARY BOXOUT BLOCK REGISTRATION
 *
 * @package uri-component-library
 */

 /**
  * Register the block
  */
function uri_cl_block_register_boxout() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type(
		 'uri-cl/boxout',
		array(
			'render_callback' => 'uri_cl_shortcode_boxout',
		)
		);
}
add_action( 'init', 'uri_cl_block_register_boxout' );
