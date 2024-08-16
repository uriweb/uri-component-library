<?php
/**
 * Plugin Name: URI Component Library
 * Plugin URI: http://github.com/uriweb/uri-component-library
 * Description: Standardizes the look and feel of web elements, and makes it fast and simple to build webpages that look great and stay on-brand.
 * Version: 5.1.0
 * Author: URI Web Communications
 * Author URI: https://www.uri.edu/wordpress
 *
 * @author: Brandon Fuller <bjcfuller@uri.edu>
 * @author: John Pennypacker <jpennypacker@uri.edu>
 * @author: Alexandra Gauss <alexandra_gauss@uri.edu>
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
		$cache_buster = gmdate( 'Ymd', strtotime( 'now' ) );
	}
	return $cache_buster;
}

/**
 * Include css and js
 */
function uri_cl_enqueues() {

	wp_register_style( 'uricl-css', plugins_url( '/css/cl.built.css', __FILE__ ), array(), uri_cl_cache_buster(), 'all' );
	wp_enqueue_style( 'uricl-css' );

	wp_register_script( 'uricl-js', plugins_url( '/js/cl.built.js', __FILE__ ), array('jquery'), uri_cl_cache_buster(), true );
	wp_enqueue_script( 'uricl-js' );

}
add_action( 'wp_enqueue_scripts', 'uri_cl_enqueues' );

// Include shortcodes
include( URI_CL_DIR_PATH . 'inc/cl-shortcodes.php' );

// Include display posts extensions
include( URI_CL_DIR_PATH . 'inc/cl-display-posts.php' );

/**
 * Include WYSIWYG buttons on all themes except URI Responsive
 */
function load_wysiwyg() {
	global $pagenow;
	// do not load the WYSIWYG editor in the responsive theme
	if ( 'responz-child' === wp_get_theme()->get_stylesheet() ) {
		return;
	}
	// do not load the WYSIWYG editor in the WP All Import Admin interface
	if ( 'admin.php' === $pagenow && false !== strpos( $_GET['page'], 'pmxi' ) ) {
		return;
	}
	include( URI_CL_DIR_PATH . 'inc/cl-wysiwyg.php' );
}

add_action( 'init', 'load_wysiwyg' );

// Include gutenberg
include( URI_CL_DIR_PATH . 'inc/cl-gutenberg.php' );
// Include block pattern library manager
include( URI_CL_DIR_PATH . 'inc/cl-block-patterns.php' );


// Enable styles in the WYSIWYG Editor
if ( is_admin() ) {
	add_editor_style( plugins_url( 'css/cl.built.css', __FILE__ ) );
}

/**
 * Callback for REST API menus route
 */
function uri_cl_get_site_menus() {
	return wp_get_nav_menus();
}

/**
 * Register REST API endpoint for navigation menus
 */
function uri_cl_register_api_route_menus() {
	register_rest_route(
		'uri-component-library/v1',
		'/menus',
		array(
			'methods' => 'GET',
			'callback' => 'uri_cl_get_site_menus',
			'permission_callback' => '__return_true',
		)
	);
}
add_action( 'rest_api_init', 'uri_cl_register_api_route_menus' );

/**
 * URI Autoupdater
 */
function uri_component_library_update() {
	if ( function_exists( 'uri_autoupdater_check_for_updates' ) ) {
		uri_autoupdater_check_for_updates( __FILE__, 'uri-component-library' );
	}
};
add_action( 'plugins_loaded', 'uri_component_library_update' );
