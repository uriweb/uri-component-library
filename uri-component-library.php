<?php
/**
 * Plugin Name: URI Component Library
 * Plugin URI: http://www.uri.edu
 * Description: Component Library
 * Version: 3.3.0
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

/**
 * Return the plugin base url
 */
function uri_cl_dir_url() {
	return plugin_dir_url( __FILE__ );
}

/**
 * Include css and js
 */
function uri_cl_enqueues() {

	wp_register_style( 'uricl-css', plugins_url( '/css/cl.built.css', __FILE__ ) );
	wp_enqueue_style( 'uricl-css' );

	wp_register_script( 'uricl-js', plugins_url( '/js/cl.built.js', __FILE__ ) );
	wp_enqueue_script( 'uricl-js' );

}
add_action( 'wp_enqueue_scripts', 'uri_cl_enqueues' );

// Include shortcodes
include( URI_CL_DIR_PATH . 'inc/cl-shortcodes.php' );

// Include WYSIWYG buttons on all themes except URI Responsive
if ( 'responz-child' != wp_get_theme()->get_stylesheet() ) {
	include( URI_CL_DIR_PATH . 'inc/cl-wysiwyg.php' );
}

// Enable styles in the WYSIWYG Editor
if ( is_admin() ) {
	add_editor_style( plugins_url( 'css/cl.built.css', __FILE__ ) );
}
