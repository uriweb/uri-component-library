<?php

// COMPONENT LIBRARY SHORTCODES


/**
 * Standard Card
 */
function uri_cl_shortcode_card( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'img' => '',
			'title' => '',
            'button' => 'Explore',
            'link' => '#',
            'clickable' => false
		),
		$atts
	);
    
    ob_start();
    include 'templates/cl-template-card.php';
    $html = ob_get_clean();
    return $html;

}
add_shortcode( 'cl-card', 'uri_cl_shortcode_card' );


/**
 * Flex Card
 */
function uri_cl_shortcode_flexcard( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'img' => '',
			'title' => '',
            'button' => 'Explore',
            'link' => '#',
            'reverse' => false
		),
		$atts
	);
    
    ob_start();
    include 'templates/cl-template-flexcard.php';
    $html = ob_get_clean();
    return $html;

}
add_shortcode( 'cl-flexcard', 'uri_cl_shortcode_flexcard' );


/**
 * Detail Card
 */
function uri_cl_shortcode_dcard( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'img' => '',
			'title' => '',
            'link' => ''
		),
		$atts
	);
    
    ob_start();
    include 'templates/cl-template-dcard.php';
    $html = ob_get_clean();
    return $html;

}
add_shortcode( 'cl-dcard', 'uri_cl_shortcode_dcard' );