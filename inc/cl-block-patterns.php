<?php
/**
 * COMPONENT LIBRARY BLOCK PATTERNS IMPLEMENTATION
 *
 * @package uri-component-library
 * @author John Pennypacker <jpennypacker@uri.edu>
 * @author: Brandon Fuller <bjcfuller@uri.edu>
 */

// Block direct requests
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}


/**
 * Removes some core patterns, adds a few new ones.
 */
function uri_cl_manage_patterns() {

	if ( ! class_exists( 'WP_Block_Patterns_Registry' ) ) {
		return false;
	}

	// unregister every core pattern
	/*
	$patterns = WP_Block_Patterns_Registry::get_instance()->get_all_registered();
	foreach( $patterns as $p ) {
		if ( 'core' === substr( $p['name'], 0, 4 ) ) {
			unregister_block_pattern( $p['name'] );
		}
	}
	*/
	// unregister selected core patterns
	unregister_block_pattern( 'core/two-buttons' );
	unregister_block_pattern( 'core/three-buttons' );
	unregister_block_pattern( 'core/text-two-columns' );
	// unregister_block_pattern( 'core/two-images' );
	// unregister_block_pattern( 'core/text-two-columns-with-images' );
	unregister_block_pattern( 'core/text-three-columns-buttons' );
	// unregister_block_pattern( 'core/large-header' );
	// unregister_block_pattern( 'core/large-header-button' );
	// unregister_block_pattern( 'core/heading-paragraph' );
	// unregister_block_pattern( 'core/quote' );
	// unregister every core category
	unregister_block_pattern_category( 'buttons' );
	// unregister_block_pattern_category( 'columns' );
	// unregister_block_pattern_category( 'gallery' );
	// unregister_block_pattern_category( 'header' );
	// unregister_block_pattern_category( 'text' );
	_uri_cl_prepend_uri_pattern_category();

	_uri_cl_add_pattern(
		'boxout-two-buttons-right',
		'Boxout with two buttons, floated right.',
		array(
			'description' => 'Boxout with two buttons, floated right.',
			'keywords' => 'button, boxout',
			'categories'  => array( 'uri' ),
		)
	);

	_uri_cl_add_pattern(
		'three-buttons-in-columns',
		'Three buttons',
		array(
			'description' => 'Three buttons in columns.',
			'keywords' => 'button, column',
			'categories'  => array( 'uri' ),
		)
	);

	_uri_cl_add_pattern(
		'three-cards-in-columns',
		'Three cards',
		array(
			'description' => 'Three cards in columns.',
			'keywords' => 'card, column',
			'categories'  => array( 'uri' ),
		)
	);

	_uri_cl_add_pattern(
		'four-cards-in-columns',
		'Four cards',
		array(
			'description' => 'Four cards in columns.',
			'keywords' => 'card, column',
			'categories'  => array( 'uri' ),
		)
	);

	_uri_cl_add_pattern(
		'four-metrics-in-columns',
		'Four metrics',
		array(
			'description' => 'Four cards in columns.',
			'keywords' => 'metric, column',
			'categories'  => array( 'uri' ),
		)
	);

	_uri_cl_add_pattern(
		'headline-three-columns',
		'Headline and three columns.',
		array(
			'description' => 'Headline and three columns.',
			'keywords' => 'headline, paragraph, column',
			'categories'  => array( 'uri' ),
		)
	);

}
add_action( 'init', 'uri_cl_manage_patterns' );




/**
 * Wrapper for register_block_pattern.
 *
 * @param str $name is the computer name of the pattern
 * @param str $title is the user-facing name of the pattern
 * @param arr $args an array with optional keys:
 *  - text_domain: string (uri is default)
 *  - description: a user-facing text description of the pattern
 *  - keywords: an array of keywords for searching
 *  - categories: an array of pattern categories to place the pattern into
 * @return mixed
 */
function _uri_cl_add_pattern( $name, $title, $args ) {

	// block patterns aren't supported; return
	if ( ! function_exists( 'register_block_pattern' ) ) {
		return;
	}

	$path = URI_CL_DIR_PATH . '/inc/block-patterns/' . $name . '.php';
	if ( ! is_file( $path ) ) {
		// the template file doesn't exist
		// @todo: trigger error
		$error = new WP_Error( 'uri-cl-no-pattern-template', 'Template file for block pattern <strong>' . $name . '</strong> does not exist.', $path );

		// this would be awesome if it actually displayed.  JS hides admin notices when the block editor loads.
		add_action(
			 'admin_notices',
			function() use ( $error ) {
				echo '<div class="error notice notice-warning is-dismissible"><p>' . $error->get_error_message() . '</p></div>';
			}
			);

		return $error;
	}

	ob_start();
	include $path;
	$include = ob_get_contents();
	ob_end_clean();

	$text_domain = isset( $args['text_domain'] ) ? $args['text_domain'] : 'uri';
	$keywords = is_array( $args['keywords'] ) ? $args['keywords'] : array();
	$categories = is_array( $args['categories'] ) ? $args['categories'] : array();
	$description = isset( $args['description'] ) ? $args['description'] : '';

	return register_block_pattern(
		'uri-cl/' . $name,
		array(
			'title'       => __( $title, 'uri' ),
			'description' => _x( $description, 'Block pattern description', $text_domain ),
			'content'     => $include,
			'keywords'     => $keywords,
			'categories'  => $categories,
		)
	);

}

/**
 * Adds the URI pattern category to the top of the list.
 * How?  By unsetting every category, setting the URI category, then resetting every category.
 *
 * @todo keep an eye out, this'll probably break in a spectacular way.
 */
function _uri_cl_prepend_uri_pattern_category() {
	$categories = WP_Block_Pattern_Categories_Registry::get_instance()->get_all_registered();

	foreach ( $categories as $c ) {
		unregister_block_pattern_category( $c['name'] );
	}
	register_block_pattern_category(
		'uri',
		array( 'label' => __( 'URI', 'uri' ) )
	);
	foreach ( $categories as $c ) {
		register_block_pattern_category( $c['name'], array( 'label' => $c['label'] ) );
	}
}
