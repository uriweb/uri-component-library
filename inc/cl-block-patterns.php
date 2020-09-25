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

	/*
	// unregister every core pattern
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

	$pattern_dir = URI_CL_DIR_PATH . '/inc/block-patterns/';
	$pattern_files = scandir( $pattern_dir );
	foreach ( $pattern_files as $f ) {

		// skip over anything that begins with _ or .
		// that eliminates directories and allows us to "comment out" patterns by using _
		if ( '.' !== $f[0] && '_' !== $f[0] ) {

			// reset the variables we're using
			unset( $slug );
			unset( $pattern );
			unset( $title );
			unset( $description );
			unset( $keywords );
			unset( $categories );

			include_once( $pattern_dir . '/' . $f );

			if ( isset( $slug ) && isset( $pattern ) && isset( $title ) ) {
				register_block_pattern(
					'uri-cl/' . $slug,
					array(
						'title'       => $title,
						'content'     => $pattern,
						'description' => ( isset( $description ) ? $description : '' ),
						'keywords'    => ( isset( $keywords ) ? $keywords : 'uri' ),
						'categories'  => ( isset( $categories ) ? $categories : 'uri' ),
					)
				);
			}
		}
	}

}
add_action( 'init', 'uri_cl_manage_patterns' );




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
