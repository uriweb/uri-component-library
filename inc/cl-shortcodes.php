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
 * - Notice
 * - Panel
 * - Social
 * - Tiles
 * - Video
 * - Waves
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
			'float' => '',
            'class' => ''
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
            'tooltip' => '',
            'prominent' => false,
            'class' => ''
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
            'tooltip' => 'Explore',
            'class' => ''
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
            'class' => ''
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
            'id' => '',
            'dynamic' => false,
            'super' => false,
            'fullwidth' => false,
            'img' => '',
            'class' => ''
		), $atts )
	);
    
    include 'templates/cl-template-hero.php';
    return $output;

}
add_shortcode( 'cl-hero', 'uri_cl_shortcode_hero' );


/**
 * Notice
 */
function uri_cl_shortcode_notice( $atts, $content = null ) {

	// Attributes
	extract( shortcode_atts(
		array(
			'title' => '',
            'urgent' => false,
            'class' => ''
		), $atts )
	);
    
    include 'templates/cl-template-notice.php';
    return $output;

}
add_shortcode( 'cl-notice', 'uri_cl_shortcode_notice' );


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
            'reverse' => false,
            'class' => ''
		), $atts )
	);
    
    include 'templates/cl-template-panel.php';
    return $output;

}
add_shortcode( 'cl-panel', 'uri_cl_shortcode_panel' );


/**
 * Social
 */
function uri_cl_shortcode_social( $atts, $content = null ) {

	// Attributes
	extract( shortcode_atts(
		array(
			'style' => 'color',
            'class' => '',
            'facebook' => '',
            'instagram' => '',
            'twitter' => '',
            'youtube' => '',
            'snapchat' => '',
            'linkedin' => ''
		), $atts )
	);
    
    include 'templates/cl-template-social.php';
    return $output;

}
add_shortcode( 'cl-social', 'uri_cl_shortcode_social' );


/**
 * Tabs
 */
function uri_cl_shortcode_tabs( $atts, $content = null ) {
    
    // Attributes
	extract( shortcode_atts(
		array(
            'class' => ''
		), $atts )
	);
    
    include 'templates/cl-template-tabs.php';
    return $output;
    
}
add_shortcode( 'cl-tabs', 'uri_cl_shortcode_tabs' );

function uri_cl_shortcode_tab( $atts, $content = null ) {

	// Attributes
	extract( shortcode_atts(
		array(
            'title' => '',
            'body' => '',
            'id' => '',
            'class' => ''
		), $atts )
	);
    
    include 'templates/cl-template-tab.php';
    return $output;

}
add_shortcode( 'cl-tab', 'uri_cl_shortcode_tab' );



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
            'animated' => false,
            'class' => ''
		), $atts )
	);
    
    include 'templates/cl-template-tiles.php';
    return $output;

}
add_shortcode( 'cl-tiles', 'uri_cl_shortcode_tiles' );


/**
 * Video
 */
function uri_cl_shortcode_video( $atts ) {

	// Attributes
	extract( shortcode_atts(
		array(
            'vid' => '',
            'id' => '',
            'img' => '',
            'alt' => '',
            'title' => '',
            'excerpt' => '',
            'aspect' => '',
            'class' => ''
		), $atts )
	);
    
    include 'templates/cl-template-video.php';
    return $output;

}
add_shortcode( 'cl-video', 'uri_cl_shortcode_video' );


/**
 * Waves
 */
function uri_cl_shortcode_waves( $atts ) {

	// Attributes
	extract( shortcode_atts(
		array(
            'placement' => 'bottom',
			'offset' => '',
            'color' => '',
            'class' => ''
		), $atts )
	);
    
    include 'templates/cl-template-waves.php';
    return $output;

}
add_shortcode( 'cl-waves', 'uri_cl_shortcode_waves' );

