<?php
/**
 * COMPONENT LIBRARY BUTTON BLOCK REGISTRATION
 *
 * @package uri-component-library
 */

function cl_button_block_init() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type(
		 'uri-cl/button',
		array(
			'render_callback' => 'uri_cl_shortcode_button',
		)
		);
}
add_action( 'init', 'cl_button_block_init' );
