<?php

/* COMPONENT LIBRARY SHORTCODES
 *
 * CONTENTS
 *
 * - Boxout
 * - Button
 * - Card (Action)
 * - Card (Detail)
 * - Hero
 * - Panel
 * - Tiles
 *
 */


/**
 * Boxout
 */
function uri_cl_shortcode_boxout( $atts, $content = null ) {

	// Attributes
	extract( shortcode_atts(
		array(
            'title' => '',
			'float' => ''
		), $atts )
	);
    
    include 'templates/cl-template-boxout.php';
    return $output;

}
add_shortcode( 'cl-boxout', 'uri_cl_shortcode_boxout' );


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
            'prominent' => false
		), $atts )
	);
    
    include 'templates/cl-template-button.php';
    return $output;

}
add_shortcode( 'cl-button', 'uri_cl_shortcode_button' );


/**
 * Action Card
 */
function uri_cl_shortcode_card( $atts ) {

	// Attributes
	extract( shortcode_atts(
		array(
			'img' => '',
            'alt' => '',
			'title' => '',
            'body' => '',
            'button' => 'Explore',
            'link' => '#',
            'tooltip' => 'Explore'
        ), $atts )
	);
    
    include 'templates/cl-template-card.php';
    return $output;

}
add_shortcode( 'cl-card', 'uri_cl_shortcode_card' );


/**
 * Detail Card
 */
function uri_cl_shortcode_dcard( $atts ) {

	// Attributes
	extract( shortcode_atts(
		array(
            'link' => '#',
			'img' => '',
            'alt' => '',
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
 * Hero
 */
function uri_cl_shortcode_hero( $atts, $content = null ) {

	// Attributes
	extract( shortcode_atts(
		array(
			'headline' => '',
            'subhead' => '',
            'button' => 'Explore',
            'tooltip' => '',
            'link' => '',
            'vid' => '',
            'dynamic' => false,
            'zoom' => 1.25,
            'img' => '',
		), $atts )
	);
    
    include 'templates/cl-template-hero.php';
    return $output;

}
add_shortcode( 'cl-hero', 'uri_cl_shortcode_hero' );


/**
 * Panel
 */
function uri_cl_shortcode_panel( $atts, $content = null ) {

	// Attributes
	extract( shortcode_atts(
		array(
			'img' => '',
            'alt' => '',
			'title' => '',
            'reverse' => false
		), $atts )
	);
    
    include 'templates/cl-template-panel.php';
    return $output;

}
add_shortcode( 'cl-panel', 'uri_cl_shortcode_panel' );


/**
 * Tiles
 */
function uri_cl_shortcode_tiles( $atts, $content = null ) {

	// Attributes
	extract( shortcode_atts(
		array(
            'across' => 3,
			'square' => false,
            'compact' => false,
            'animated' => false
		), $atts )
	);
    
    include 'templates/cl-template-tiles.php';
    return $output;

}
add_shortcode( 'cl-tiles', 'uri_cl_shortcode_tiles' );

