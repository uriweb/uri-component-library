<?php
/**
 * COMPONENT LIBRARY DATE BLOCK REGISTRATION
 *
 * @package uri-component-library
 */

 /**
  * Register the block
  */
function uri_cl_block_register_date() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type(
		 'uri-cl/date',
		array(
			'render_callback' => 'uri_cl_shortcode_date',
		)
		);
}
add_action( 'init', 'uri_cl_block_register_date' );
