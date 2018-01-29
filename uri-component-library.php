<?php
/*
Plugin Name: URI Component Library
Plugin URI: http://www.uri.edu
Description: Component Library
Version: 1.2.1
Author: URI Web Communications
Author URI: 
@author: Brandon Fuller <bjcfuller@uri.edu>
*/

// Block direct requests
if ( !defined('ABSPATH') )
	die('-1');

// Include css and js
function uri_cl_enqueues() { 
    
    wp_register_style( 'uricl-css', plugins_url( '/css/cl.built.css', __FILE__ ) );
    wp_enqueue_style('uricl-css');
    
    wp_register_script( 'uricl-js', plugins_url( '/js/cl.built.js', __FILE__ ) );
    wp_enqueue_script('uricl-js');
    
}
add_action('wp_enqueue_scripts', 'uri_cl_enqueues');

// Include shortcodes
include( plugin_dir_path( __FILE__ ) . 'inc/cl-shortcodes.php');

// Enable styles in the WYSIWYG Editor
if ( is_admin() ){
	add_editor_style( plugins_url( 'css/cl.built.css' , __FILE__ ) );
}