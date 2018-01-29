<?php

/* COMPONENT LIBRARY SHORTCODES
 *
 */


include 'cl-error-checking.php'; 


/**
 * Get shortcode template file
 *
 * Priority:
 * 1. /themes/theme/template-parts/cl/cl-template-*.php
 * 2. /plugins/uri-component-library/templates/cl-template-*.php
 *
 * @param str $name the name of the shortcode, as used in the filename
 * @return the path to the template file (rel for default templates, abs for theme templates)
 */
function uri_cl_shortcode_get_template( $name ) {
    
    $template = get_stylesheet_directory() . '/template-parts/cl/cl-template-' . $name . '.php';
    
    if ( is_file($template) ) {
        return $template;
    } else {
        return 'templates/cl-template-' . $name . '.php';
    }
    
}


/**
 * Boxout
 */
function uri_cl_shortcode_boxout( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
            'title' => '',
			'float' => '',
            'class' => ''
		), $atts );
    
    // Error checking
    // (string $cname , array $atts , array $check_atts , string $template)
    return uri_cl_validate( 'Boxout', $atts, $content, array(
        //(string $attr , string $type [, bool $req [, array $values]])
        array(
            'attr' => 'float',
            'type' => 'str',
            'req' => false,
            'values' => array('left', 'right')
        ) ),
        uri_cl_shortcode_get_template('boxout')
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
            'disabled' => false,
            'class' => ''
		), $atts );
    
    // Error checking
    return uri_cl_validate( 'Button', $atts, $content, array(
        array(
            'attr' => 'link',
            'type' => 'url'
        ),
        array (
            'attr' => 'prominent',
            'type' => 'bool',
            'req' => false
        ),
        array (
            'attr' => 'disabled',
            'type' => 'bool',
            'req' => false
        ) ),
        uri_cl_shortcode_get_template('button')
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
    
    // Error checking
    return uri_cl_validate( 'Card', $atts, $content, array(
        array(
            'attr' => 'link',
            'type' => 'url'
        ),
        array(
            'attr' => 'img',
            'type' => 'url',
            'req' => false
        ) ),
        uri_cl_shortcode_get_template('card')
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
    
    // Error checking
    return uri_cl_validate( 'Detail Card', $atts, $content, array(
        array(
            'attr' => 'link',
            'type' => 'url'
        ),
        array(
            'attr' => 'img',
            'type' => 'url',
            'req' => false
        ) ),
        uri_cl_shortcode_get_template('dcard')
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
    
    // Error checking
    return uri_cl_validate( 'Hero', $atts, $content, array(
        array(
            'attr' => 'img',
            'type' => 'url'
        ),
        array(
            'attr' => 'vid',
            'type' => 'str',
            'req' => false
        ),
        array(
            'attr' => 'link',
            'type' => 'url',
            'req' => false
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
        uri_cl_shortcode_get_template('hero')
    );

}
add_shortcode( 'cl-hero', 'uri_cl_shortcode_hero' );


/**
 * Menu
 */
function uri_cl_shortcode_menu( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'name' => 'menu-1',
            'depth' => 1,
            'id' => '',
            'showtitle' => false,
            'title' => '',
            'class' => ''
		), $atts );
    
    // Error checking
    return uri_cl_validate( 'Menu', $atts, $content, array(
        array(
            'attr' => 'name',
            'type' => 'str'
        ),
        array(
            'attr' => 'depth',
            'type' => 'num',
            'values' => array(1, 2)
        ),
        array(
            'attr' => 'showtitle',
            'type' => 'bool',
            'req' => false
        ) ),
        uri_cl_shortcode_get_template('menu')
    );

}
add_shortcode( 'cl-menu', 'uri_cl_shortcode_menu' );


/**
 * Notice
 */
function uri_cl_shortcode_notice( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'title' => '',
            'urgent' => false,
            'class' => ''
		), $atts );
    
    // Error checking
    return uri_cl_validate( 'Notice', $atts, $content, array(
        array(
            'attr' => 'urgent',
            'type' => 'bool',
            'req' => false
        ) ),
        uri_cl_shortcode_get_template('notice')
    );

}
add_shortcode( 'cl-notice', 'uri_cl_shortcode_notice' );


/**
 * Panel
 */
function uri_cl_shortcode_panel( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'img' => '',
            'alt' => '',
			'title' => '',
            'reverse' => false,
            'class' => ''
		), $atts );
    
    // Error checking
    return uri_cl_validate( 'Panel', $atts, $content, array(
        array(
            'attr' => 'img',
            'type' => 'url'
        ),
        array(
            'attr' => 'reverse',
            'type' => 'bool',
            'req' => false
        ) ),
        uri_cl_shortcode_get_template('panel')
    );

}
add_shortcode( 'cl-panel', 'uri_cl_shortcode_panel' );


/**
 * Social
 */
function uri_cl_shortcode_social( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'style' => 'color',
            'class' => '',
            'facebook' => '',
            'instagram' => '',
            'twitter' => '',
            'youtube' => '',
            'snapchat' => '',
            'linkedin' => ''
		), $atts );
    
    // Error checking
    return uri_cl_validate( 'Social', $atts, $content, array(
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
            'values' => array('color', 'dark', 'light')
        ) ),
        uri_cl_shortcode_get_template('social')
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
    
    include uri_cl_shortcode_get_template('tabs');
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
    
    include uri_cl_shortcode_get_template('tab');
    return $output;

}
add_shortcode( 'cl-tab', 'uri_cl_shortcode_tab' );



/**
 * Tiles
 */
function uri_cl_shortcode_tiles( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
            'across' => 3,
			'square' => false,
            'compact' => false,
            'animated' => false,
            'class' => ''
		), $atts );
    
    // Error checking
    return uri_cl_validate( 'Tiles', $atts, $content, array(
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
        uri_cl_shortcode_get_template('tiles')
    );

}
add_shortcode( 'cl-tiles', 'uri_cl_shortcode_tiles' );


/**
 * Video
 */
function uri_cl_shortcode_video( $atts ) {

	// Attributes
	$atts = shortcode_atts(
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
    
    // Error checking
    return uri_cl_validate( 'Video', $atts, $content, array(
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
        uri_cl_shortcode_get_template('video')
    );

}
add_shortcode( 'cl-video', 'uri_cl_shortcode_video' );


/**
 * Waves
 */
function uri_cl_shortcode_waves( $atts ) {

	// Attributes
	$atts = shortcode_atts(
		array(
            'placement' => 'bottom',
			'offset' => '',
            'color' => '',
            'class' => ''
		), $atts );
    
    // Error checking
    return uri_cl_validate( 'Waves', $atts, $content, array(
        array(
            'attr' => 'placement',
            'type' => 'str',
            'values' => array('bottom', 'top')
        ),
        array(
            'attr' => 'offset',
            'type' => 'unit',
            'req' => false
        ) ),
        uri_cl_shortcode_get_template('waves')
    );

}
add_shortcode( 'cl-waves', 'uri_cl_shortcode_waves' );

