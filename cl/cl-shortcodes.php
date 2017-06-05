<?php

/* COMPONENT LIBRARY SHORTCODES
 *
 * CONTENTS
 *
 * - Standard Card
 * - Flex Card
 * - Detail Card
 *
 */


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
			'img' => '',
			'title' => '',
            'body' => '',
            'link' => ''
		), $atts )
	);
    
    include 'templates/cl-template-dcard.php';
    return $output;

}
add_shortcode( 'cl-dcard', 'uri_cl_shortcode_dcard' );