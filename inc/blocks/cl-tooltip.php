<?php
/**
 * COMPONENT LIBRARY TOOLTIP BLOCK REGISTRATION
 *
 * @package uri-component-library
 */

 /**
  * Register the block
  */
function uri_cl_block_register_tooltip() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type(
		 'uri-cl/tooltip',
		array(
			'render_callback' => 'uri_cl_shortcode_tooltip',
		)
		);
}
add_action( 'init', 'uri_cl_block_register_tooltip' );
