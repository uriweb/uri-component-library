<?php
/**
 * COMPONENT LIBRARY ABSTRACT BLOCK REGISTRATION
 *
 * @package uri-component-library
 */

 /**
  * Register the block
  */
function uri_cl_block_register_abstract() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type(
		 'uri-cl/abstract',
		array(
			'render_callback' => 'uri_cl_shortcode_abstract',
		)
		);
}
add_action( 'init', 'uri_cl_block_register_abstract' );
