<?php

/* COMPONENT LIBRARY SHORTCODES
 *
 * CONTENTS
 *
 * - Button
 * - Card (Standard)
 * - Card (Flex)
 * - Card (Detail)
 * - Cutout
 *
 */



/**
 * Button
 */
function uri_cl_shortcode_button( $atts ) {

	// Attributes
	extract( shortcode_atts(
		array(
            'text' => 'Explore',
			'link' => '#',
            'tooltip' => 'Explore',
            'prominant' => false
		), $atts )
	);
    
    include 'templates/cl-template-button.php';
    return $output;

}
add_shortcode( 'cl-button', 'uri_cl_shortcode_button' );


/**
 * Standard Card
 */
function uri_cl_shortcode_card( $atts ) {

	// Attributes
	extract( shortcode_atts(
		array(
			'img' => '',
			'title' => '',
            'body' => '',
            'button' => 'Explore',
            'link' => '#',
            'tooltip' => 'Explore',
            'clickable' => false
		), $atts )
	);
    
    include 'templates/cl-template-card.php';
    return $output;

}
add_shortcode( 'cl-card', 'uri_cl_shortcode_card' );


/**
 * Flex Card
 */
function uri_cl_shortcode_flexcard( $atts, $content = null ) {

	// Attributes
	extract( shortcode_atts(
		array(
			'img' => '',
			'title' => '',
            'button' => 'Explore',
            'link' => '#',
            'tooltip' => 'Explore',
            'reverse' => false
		), $atts )
	);
    
    include 'templates/cl-template-flexcard.php';
    return $output;

}
add_shortcode( 'cl-flexcard', 'uri_cl_shortcode_flexcard' );


/**
 * Detail Card
 */
function uri_cl_shortcode_dcard( $atts ) {

	// Attributes
	extract( shortcode_atts(
		array(
            'link' => '#',
			'img' => '',
			'title' => '',
            'body' => '',
            'tooltip' => 'Explore',
		), $atts )
	);
    
    include 'templates/cl-template-dcard.php';
    return $output;

}
add_shortcode( 'cl-dcard', 'uri_cl_shortcode_dcard' );


/**
 * Cutout
 */
function uri_cl_shortcode_cutout( $atts, $content = null ) {

	// Attributes
	extract( shortcode_atts(
		array(
            'title' => '';
			'float' => ''
		), $atts )
	);
    
    include 'templates/cl-template-cutout.php';
    return $output;

}
add_shortcode( 'cl-cutout', 'uri_cl_shortcode_cutout' );