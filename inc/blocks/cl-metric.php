<?php
/**
 * COMPONENT LIBRARY METRIC BLOCK REGISTRATION
 *
 * @package uri-component-library
 */

 /**
  * Register the block
  */
function cl_metric_block_init() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type(
		 'uri-cl/metric',
		array(
			'render_callback' => 'uri_cl_shortcode_metric',
		)
		);
}
add_action( 'init', 'cl_metric_block_init' );
