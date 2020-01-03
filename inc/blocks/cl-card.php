<?php
/**
 * COMPONENT LIBRARY CARD BLOCK REGISTRATION
 *
 * @package uri-component-library
 */

 /**
  * Register the block
  */
function uri_cl_block_register_card() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type(
		 'uri-cl/card',
		array(
			'render_callback' => 'uri_cl_shortcode_card',
		)
		);
}
add_action( 'init', 'uri_cl_block_register_card' );
