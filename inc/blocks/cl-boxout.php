<?php
/**
 * COMPONENT LIBRARY BOXOUT BLOCK REGISTRATION
 *
 * @package uri-component-library
 */

 /**
  * Register the block
  */
function cl_boxout_block_init() {
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
add_action( 'init', 'cl_boxout_block_init' );
