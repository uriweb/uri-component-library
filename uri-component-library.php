<?php
/**
 * Plugin Name: URI Component Library
 * Plugin URI: http://www.uri.edu
 * Description: Component Library
 * Version: 4.1.0
 * Author: URI Web Communications
 * Author URI: https://today.uri.edu/
 *
 * @author: Brandon Fuller <bjcfuller@uri.edu>
 * @author: John Pennypacker <jpennypacker@uri.edu>
 * @package uri-component-library
 */

// Block direct requests
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

define( 'URI_CL_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'URI_CL_URL', str_replace( '/js', '/', plugins_url( 'js', __FILE__ ) ) );

/**
 * Return the plugin base url
 */
function uri_cl_dir_url() {
	return plugin_dir_url( __FILE__ );
}

/**
 * Returns version from package.json to be used for cache busting
 *
 * @return str
 */
function uri_cl_cache_buster() {
	static $cache_buster;
	if ( empty( $cache_buster ) && function_exists( 'get_plugin_data' ) ) {
		$values = get_plugin_data( URI_CL_DIR_PATH . 'uri-component-library.php', false );
		$cache_buster = $values['Version'];
	} else {
		$cache_buster = date( 'Ymd', strtotime( 'now' ) );
	}
	return $cache_buster;
}

/**
 * Include css and js
 */
function uri_cl_enqueues() {

	wp_register_style( 'uricl-css', plugins_url( '/css/cl.built.css', __FILE__ ), array(), uri_cl_cache_buster(), 'all' );
	wp_enqueue_style( 'uricl-css' );

	wp_register_script( 'uricl-js', plugins_url( '/js/cl.built.js', __FILE__ ), array(), uri_cl_cache_buster(), true );
	wp_enqueue_script( 'uricl-js' );

}
add_action( 'wp_enqueue_scripts', 'uri_cl_enqueues' );

// Include shortcodes
include( URI_CL_DIR_PATH . 'inc/cl-shortcodes.php' );

// Include display posts extensions
include( URI_CL_DIR_PATH . 'inc/cl-display-posts.php' );

// Include WYSIWYG buttons on all themes except URI Responsive
if ( 'responz-child' != wp_get_theme()->get_stylesheet() ) {
	include( URI_CL_DIR_PATH . 'inc/cl-wysiwyg.php' );
}

// Include gutenberg
include( URI_CL_DIR_PATH . 'inc/cl-gutenberg.php' );


// Enable styles in the WYSIWYG Editor
if ( is_admin() ) {
	add_editor_style( plugins_url( 'css/cl.built.css', __FILE__ ) );
}

/**
 * URI Autoupdater
 */
function uri_component_library_update() {
	if ( function_exists( 'uri_autoupdater_check_for_updates' ) ) {
		uri_autoupdater_check_for_updates( __FILE__, 'uri-component-library' );
	}
};
add_action( 'plugins_loaded', 'uri_component_library_update' );
