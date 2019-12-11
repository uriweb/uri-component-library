<?php

function cl_card_block_init() {
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
add_action( 'init', 'cl_card_block_init' );
