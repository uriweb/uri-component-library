<?php
/*
Plugin Name: URI Component Library
Plugin URI: http://www.uri.edu
Description: Component Library
Version: 1.0
Author: URI Web Communications
Author URI: 
@author: Brandon Fuller <bjcfuller@uri.edu>
*/

// Block direct requests
if ( !defined('ABSPATH') )
	die('-1');

// Include stylesheet
function uri_cl_styles() { 
    wp_enqueue_style( 'uricl', plugins_url( 'cl.built.css', __FILE__ ), array(), $version, 'all' );
}
add_action('wp_enqueue_scripts', 'uri_cl_styles');

// Include shortcodes
include( plugin_dir_path( __FILE__ ) . 'cl-shortcodes.php');