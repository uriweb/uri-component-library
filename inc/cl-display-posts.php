<?php
/**
 * COMPONENT LIBRARY DISPLAY POSTS EXTENSIONS
 *
 * @package uri-component-library
 */

/**
 * Components
 *
 * @see https://www.billerickson.net/template-parts-with-display-posts-shortcode
 *
 * @param str $output Current output of post.
 * @param arr $original_atts Original attributes passed to shortcode.
 * @return str $output
 */
function uri_cl_display_posts_component( $output, $original_atts ) {

	if ( empty( $original_atts['component'] ) ) {
		return $output;
	}

	ob_start();
	$template = null;

	if ( ! empty( $original_atts['component'] ) ) {
		$template = URI_CL_DIR_PATH . 'inc/display-posts/cl-display-posts-' . $original_atts['component'] . '.php';
	}

	if ( is_file( $template ) ) {
		include $template;
	}

	$html = ob_get_clean();

	if ( ! empty( $html ) ) {
		$output = $html;
	}

	return $output;

}
add_action( 'display_posts_shortcode_output', 'uri_cl_display_posts_component', 10, 2 );
