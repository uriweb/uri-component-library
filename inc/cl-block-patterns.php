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
	unregister_block_pattern( 'core/large-header' );
	unregister_block_pattern( 'core/large-header-button' );
	unregister_block_pattern( 'core/heading-paragraph' );
	// unregister_block_pattern( 'core/quote' );
	// unregister every core category
	// unregister_block_pattern_category( 'buttons' );
	// unregister_block_pattern_category( 'columns' );
	// unregister_block_pattern_category( 'gallery' );
	// unregister_block_pattern_category( 'header' );
	// unregister_block_pattern_category( 'text' );
	/*
		Create a URI pattern category at the top of the list.
		@todo:  it probably makes more sense to use WP categories than
						lumping everything under one generic heading
	*/
	_uri_cl_prepend_uri_pattern_category();

	// read the pattern files,
	// prepare an array of pattern arguments to be sorted and registered.
	$patterns = _uri_cl_get_patterns();

	// sort patterns
	ksort( $patterns, SORT_NATURAL );

	// activate patterns
	foreach ( $patterns as $pattern ) {
		call_user_func_array( 'register_block_pattern', $pattern );
	}

}
add_action( 'init', 'uri_cl_manage_patterns' );



/**
 * Reads the files in the patterns directory and prepares an array of patterns.
 *
 * @return arr
 */
function _uri_cl_get_patterns() {
	$pattern_dir = URI_CL_DIR_PATH . '/inc/block-patterns/';
	$pattern_files = scandir( $pattern_dir );
	$patterns = array();
	// read the pattern files,
	// prepare an array of pattern arguments to be sorted and registered.
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
			unset( $weight );

			include_once( $pattern_dir . '/' . $f );

			if ( ! isset( $slug ) ) {
				$slug = esc_attr( basename( $f, '.php' ) );
			}

			if ( isset( $pattern ) && isset( $title ) ) {
				if ( isset( $weight ) ) {
					$k = (int) $weight;
					// make sure the array key isn't already in use.
					while ( array_key_exists( $k, $patterns ) ) {
						$k = $k + 1;
					}
				} else {
					$k = $slug;
				}

				$patterns[ $k ] = array(
					'uri-cl/' . $slug,
					array(
						'title'       => $title,
						'content'     => $pattern,
						'description' => ( isset( $description ) ? $description : '' ),
						'keywords'    => ( isset( $keywords ) ? $keywords : 'uri' ),
						'categories'  => ( isset( $categories ) ? $categories : array( 'uri' ) ),
					),
				);
			}
		}
	}
	return $patterns;
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
