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
 * - Menu
 * - Notice
 * - Panel
 * - Social
 * - Tiles
 * - Video
 * - Waves
 *
 */


include 'cl-error-checking.php'; 


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
    
    // (name, atts, check_atts, template)
    return uri_cl_validate( 'Boxout', $atts, array(
        array(
            'attr' => 'float',
            'type' => 'str',
            'req' => false,
            'values' => array('left', 'right')
        ) ),
        'templates/cl-template-boxout.php'
    );

}
add_shortcode( 'cl-boxout', 'uri_cl_shortcode_boxout' );


/**
 * Button
 */
function uri_cl_shortcode_button( $atts ) {

	// Attributes
	$atts = shortcode_atts(
		array(
            'text' => 'Explore',
			'link' => '#',
            'tooltip' => '',
            'prominent' => false,
            'class' => ''
		), $atts );
    
    // (name, atts, check_atts, template)
    return uri_cl_validate( 'Button', $atts, array(
        array(
            'attr' => 'link',
            'type' => 'url'
        ),
        array (
            'attr' => 'prominent',
            'type' => 'bool',
            'req' => false
        ) ),
        'templates/cl-template-button.php'
    );

}
add_shortcode( 'cl-button', 'uri_cl_shortcode_button' );


/**
 * Action Card
 */
function uri_cl_shortcode_card( $atts ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'img' => '',
            'alt' => '',
			'title' => '',
            'body' => '',
            'button' => 'Explore',
            'link' => '#',
            'tooltip' => 'Explore',
            'class' => ''
        ), $atts );
    
    // (name, atts, check_atts, template)
    return uri_cl_validate( 'Card', $atts, array(
        array(
            'attr' => 'link',
            'type' => 'url'
        ),
        array(
            'attr' => 'img',
            'type' => 'url',
            'req' => false
        ) ),
        'templates/cl-template-card.php'
    );
        
}
add_shortcode( 'cl-card', 'uri_cl_shortcode_card' );


/**
 * Detail Card
 */
function uri_cl_shortcode_dcard( $atts ) {

	// Attributes
	$atts = shortcode_atts(
		array(
            'link' => '#',
			'img' => '',
            'alt' => '',
			'title' => '',
            'body' => '',
            'tooltip' => 'Explore',
            'class' => ''
		), $atts );
    
    // (name, atts, check_atts, template)
    return uri_cl_validate( 'Detail Card', $atts, array(
        array(
            'attr' => 'link',
            'type' => 'url'
        ),
        array(
            'attr' => 'img',
            'type' => 'url',
            'req' => false
        ) ),
        'templates/cl-template-dcard.php'
    );

}
add_shortcode( 'cl-dcard', 'uri_cl_shortcode_dcard' );


/**
 * Hero
 */
function uri_cl_shortcode_hero( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
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
		), $atts );
    
    // (name, atts, check_atts, template)
    return uri_cl_validate( 'Hero', $atts, array(
        array(
            'attr' => 'img',
            'type' => 'url'
        ),
        array(
            'attr' => 'link',
            'type' => 'url'
        ),
        array(
            'attr' => 'dynamic',
            'type' => 'bool',
            'req' => false
        ),
        array(
            'attr' => 'super',
            'type' => 'bool',
            'req' => false
        ),
        array(
            'attr' => 'fullwidth',
            'type' => 'bool',
            'req' => false
        ) ),
        'templates/cl-template-hero.php'
    );

}
add_shortcode( 'cl-hero', 'uri_cl_shortcode_hero' );


/**
 * Menu
 */
function uri_cl_shortcode_menu( $atts, $content = null ) {

	// Attributes
	extract( shortcode_atts(
		array(
			'name' => 'menu-1',
            'depth' => 1,
            'id' => '',
            'class' => ''
		), $atts )
	);
    
    // (name, atts, check_atts, template)
    return uri_cl_validate( 'Menu', $atts, array(
        array(
            'attr' => 'name',
            'type' => 'str'
        ),
        array(
            'attr' => 'depth',
            'type' => 'num',
            'req' => false,
            'values' => array(1, 2)
        ) ),
        'templates/cl-template-menu.php'
    );

}
add_shortcode( 'cl-menu', 'uri_cl_shortcode_menu' );


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
    
    // (name, atts, check_atts, template)
    return uri_cl_validate( 'Notice', $atts, array(
        array(
            'attr' => 'urgent',
            'type' => 'bool',
            'req' => false
        ) ),
        'templates/cl-template-notice.php'
    );

}
add_shortcode( 'cl-notice', 'uri_cl_shortcode_notice' );


/**
 * Panel
 */
function uri_cl_shortcode_panel( $atts, $content = null ) {

	// Attributes
	$attr = shortcode_atts(
		array(
			'img' => '',
            'alt' => '',
			'title' => '',
            'reverse' => false,
            'class' => ''
		), $atts );
    
    // (name, atts, check_atts, template)
    return uri_cl_validate( 'Panel', $atts, array(
        array(
            'attr' => 'img',
            'type' => 'url'
        ),
        array(
            'attr' => 'reverse',
            'type' => 'bool',
            'req' => false
        ) ),
        'templates/cl-template-panel.php'
    );

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
    
    // (name, atts, check_atts, template)
    return uri_cl_validate( 'Social', $atts, array(
        array(
            'attr' => 'facebook',
            'type' => 'url',
            'req' => false
        ),
        array(
            'attr' => 'instagram',
            'type' => 'url',
            'req' => false
        ),
        array(
            'attr' => 'twitter',
            'type' => 'url',
            'req' => false
        ),
        array(
            'attr' => 'youtube',
            'type' => 'url',
            'req' => false
        ),
        array(
            'attr' => 'snapchat',
            'type' => 'url',
            'req' => false
        ),
        array(
            'attr' => 'linkedin',
            'type' => 'url',
            'req' => false
        ),
        array(
            'attr' => 'style',
            'type' => 'str',
            'req' => false,
            'values' => array('color', 'dark', 'light')
        ) ),
        'templates/cl-template-social.php'
    );

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
    
    // (name, atts, check_atts, template)
    return uri_cl_validate( 'Tiles', $atts, array(
        // (attr, type)
        array(
            'attr' => 'across',
            'type' => 'num',
            'values' => array(2,3,4,5)
        ),
        array(
            'attr' => 'square',
            'type' => 'bool',
            'req' => false
        ),
        array(
            'attr' => 'compact',
            'type' => 'bool',
            'req' => false
        ),
        array(
            'attr' => 'animated',
            'type' => 'bool',
            'req' => false
        ) ),
        'templates/cl-template-tiles.php'
    );

}
add_shortcode( 'cl-tiles', 'uri_cl_shortcode_tiles' );


/**
 * Video
 */
function uri_cl_shortcode_video( $atts ) {

	// Attributes
	$attr = shortcode_atts(
		array(
            'vid' => '',
            'id' => '',
            'img' => '',
            'alt' => '',
            'title' => '',
            'excerpt' => '',
            'aspect' => '',
            'class' => ''
		), $atts );
    
    // (name, atts, check_atts, template)
    return uri_cl_validate( 'Video', $atts, array(
        // (attr, type)
        array(
            'attr' => 'id',
            'type' => 'str'
        ),
        array(
            'attr' => 'vid',
            'type' => 'str'
        ),
        array(
            'attr' => 'img',
            'type' => 'url'
        ),
        array(
            'attr' => 'aspect',
            'type' => 'ratio',
            'req' => false
        ) ),
        'templates/cl-template-video.php'
    );

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
    
    // (name, atts, check_atts, template)
    return uri_cl_validate( 'Waves', $atts, array(
        // (attr, type)
        array(
            'attr' => 'placement',
            'type' => 'str',
            'values' => array('bottom', 'top')
        ) ),
        'templates/cl-template-waves.php'
    );

}
add_shortcode( 'cl-waves', 'uri_cl_shortcode_waves' );

