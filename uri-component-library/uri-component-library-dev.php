<?php

// LOAD DEV VERSION OF COMPONENT LIBRARY

// Block direct requests
if ( !defined('ABSPATH') )
	die('-1');

if ( !function_exists( 'uri_cl_enqueues' ) ) {
    
    // Include css and js
    function uri_cl_enqueues() { 

        wp_register_style( 'uricl-css', 'http://bfuller.local/playground/uri-component-library/css/cl.built.css' );
        wp_register_style( 'uricl-css-patch', 'http://bfuller.local/playground/uri-component-library/css/clpatch.built.css' );

        wp_enqueue_style('uricl-css');
        wp_enqueue_style('uricl-css-patch');

        wp_register_script( 'uricl-js', 'http://bfuller.local/playground/uri-component-library/js/cl.built.js' );

        wp_enqueue_script('uricl-js');

    }
    add_action('wp_enqueue_scripts', 'uri_cl_enqueues');

    // Include shortcodes
    require 'inc/cl-shortcodes.php';
    
}