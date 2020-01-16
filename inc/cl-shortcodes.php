<?php
/**
 * COMPONENT LIBRARY SHORTCODES
 *
 * @package uri-component-library
 */


include 'cl-error-checking.php';
include 'cl-helpers.php';

/**
 * Boxout
 */
function uri_cl_shortcode_boxout( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'title' => '',
			'float' => '',
			'class' => '',
			'className' => '',
			'css' => '',
		),
		$atts
		);

	// Error checking
	// (string $cname , array $atts , array $check_atts , string $template)
	return uri_cl_validate(
		 'Boxout',
		$atts,
		$content,
		array(
			// (string $attr , string $types [, bool $req [, array $values]])
			array(
				'attr' => 'float',
				'types' => array( 'str' ),
				'req' => false,
				'values' => array( 'left', 'right' ),
			),
		),
		uri_cl_shortcode_get_template( 'boxout' )
	);

}
add_shortcode( 'cl-boxout', 'uri_cl_shortcode_boxout' );


/**
 * Button
 */
function uri_cl_shortcode_button( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'text' => 'Explore',
			'link' => '#',
			'tooltip' => '',
			'style' => '',
			'class' => '',
			'className' => '',
			'css' => '',
		),
		$atts
		);

	// Error checking
	return uri_cl_validate(
		 'Button',
		$atts,
		$content,
		array(
			array(
				'attr' => 'link',
				'types' => array( 'url' ),
			),
			array(
				'attr' => 'style',
				'types' => array( 'str' ),
				'req' => false,
				'values' => array( 'prominent', 'disabled' ),
			),
		),
		uri_cl_shortcode_get_template( 'button' )
	);

}
add_shortcode( 'cl-button', 'uri_cl_shortcode_button' );


/**
 * Action Card
 */
function uri_cl_shortcode_card( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'img' => '',
			'alt' => '',
			'title' => '',
			'body' => '',
			'button' => '',
			'link' => '#',
			'tooltip' => '',
			'float' => '',
			'class' => '',
			'className' => '',
			'css' => '',
		),
		$atts
		);

	// Error checking
	return uri_cl_validate(
		 'Card',
		$atts,
		$content,
		array(
			array(
				'attr' => 'link',
				'types' => array( 'url' ),
			),
			array(
				'attr' => 'img',
				'types' => array( 'url', 'num' ),
				'req' => false,
			),
			array(
				'attr' => 'float',
				'types' => array( 'str' ),
				'req' => false,
				'values' => array( 'left', 'right' ),
			),
		),
		uri_cl_shortcode_get_template( 'card' )
	);

}
add_shortcode( 'cl-card', 'uri_cl_shortcode_card' );


/**
 * Detail Card
 */
function uri_cl_shortcode_dcard( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'link' => '#',
			'img' => '',
			'alt' => '',
			'title' => '',
			'body' => '',
			'tooltip' => '',
			'float' => '',
			'class' => '',
			'className' => '',
			'css' => '',
		),
		$atts
		);

	// Error checking
	return uri_cl_validate(
		 'Detail Card',
		$atts,
		$content,
		array(
			array(
				'attr' => 'link',
				'types' => array( 'url' ),
			),
			array(
				'attr' => 'img',
				'types' => array( 'url', 'num' ),
				'req' => false,
			),
			array(
				'attr' => 'float',
				'types' => array( 'str' ),
				'req' => false,
				'values' => array( 'left', 'right' ),
			),
		),
		uri_cl_shortcode_get_template( 'dcard' )
	);

}
add_shortcode( 'cl-dcard', 'uri_cl_shortcode_dcard' );


/**
 * Story Card
 */
function uri_cl_shortcode_scard( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'post' => '',
			'link' => '',
			'showcat' => true,
			'cat' => '',
			'catlink' => '',
			'img' => '',
			'title' => '',
			'excerpt' => '',
			'showexcerpt' => true,
			'showsocial' => true,
			'showdate' => true,
			'class' => '',
			'className' => '',
			'css' => '',
		),
		$atts
		);

	// Error checking
	return uri_cl_validate(
		 'Story Card',
		$atts,
		$content,
		array(
			array(
				'attr' => 'post',
				'types' => array( 'num' ),
			),
			array(
				'attr' => 'link',
				'types' => array( 'url' ),
				'req' => false,
			),
			array(
				'attr' => 'showcat',
				'types' => array( 'bool' ),
				'req' => false,
			),
			array(
				'attr' => 'catlink',
				'types' => array( 'url' ),
				'req' => false,
			),
			array(
				'attr' => 'img',
				'types' => array( 'url' ),
				'req' => false,
			),
			array(
				'attr' => 'showexcerpt',
				'types' => array( 'bool' ),
				'req' => false,
			),
			array(
				'attr' => 'showsocial',
				'types' => array( 'bool' ),
				'req' => false,
			),
			array(
				'attr' => 'showdate',
				'types' => array( 'bool' ),
				'req' => false,
			),
		),
		uri_cl_shortcode_get_template( 'scard' )
	);

}
add_shortcode( 'cl-scard', 'uri_cl_shortcode_scard' );


/**
 * Countdown
 */
function uri_cl_shortcode_countdown( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'deadline' => '',
			'event' => 'the deadline',
			'show_expired' => false,
			'dismissible' => true,
			'until' => 'until',
			'is_today' => 'is today',
			'passed' => 'passed',
			'link' => '',
			'class' => '',
			'className' => '',
			'css' => '',
		),
		$atts
		);

	// Error checking
	return uri_cl_validate(
		 'Countdown',
		$atts,
		$content,
		array(
			array(
				'attr' => 'deadline',
				'types' => array( 'date' ),
			),
			array(
				'attr' => 'show_expired',
				'types' => array( 'bool' ),
				'req' => false,
			),
			array(
				'attr' => 'dismissible',
				'types' => array( 'bool' ),
				'req' => false,
			),
		),
		uri_cl_shortcode_get_template( 'countdown' )
	);

}
add_shortcode( 'cl-countdown', 'uri_cl_shortcode_countdown' );


/**
 * Date
 */
function uri_cl_shortcode_date( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'date' => '',
			'caption' => '',
			'float' => '',
			'show_year' => false,
			'color' => 'blue',
			'class' => '',
			'className' => '',
			'css' => '',
		),
		$atts
		);

	// Error checking
	return uri_cl_validate(
		 'Date',
		$atts,
		$content,
		array(
			array(
				'attr' => 'date',
				'types' => array( 'date' ),
			),
			array(
				'attr' => 'caption',
				'types' => array( 'str' ),
			),
			array(
				'attr' => 'float',
				'types' => array( 'str' ),
				'req' => false,
				'values' => array( 'left', 'right' ),
			),
			array(
				'attr' => 'show_year',
				'types' => array( 'bool' ),
				'req' => false,
			),
			array(
				'attr' => 'color',
				'types' => array( 'str' ),
				'req' => false,
				'values' => array( 'blue', 'red', 'grey' ),
			),
		),
		uri_cl_shortcode_get_template( 'date' )
	);

}
add_shortcode( 'cl-date', 'uri_cl_shortcode_date' );


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
			'animation' => '',
			'format' => '',
			'img' => '',
			'use_caption' => false,
			'caption' => '',
			'credit' => '',
			'class' => '',
			'className' => '',
			'css' => '',
		),
		$atts
		);

	// Error checking
	return uri_cl_validate(
		 'Hero',
		$atts,
		$content,
		array(
			array(
				'attr' => 'img',
				'types' => array( 'url' ),
				'req' => false,
			),
			array(
				'attr' => 'vid',
				'types' => array( 'str' ),
				'req' => false,
			),
			array(
				'attr' => 'link',
				'types' => array( 'url' ),
				'req' => false,
			),
			array(
				'attr' => 'animation',
				'types' => array( 'str' ),
				'req' => false,
				'values' => array( 'shift' ),
			),
			array(
				'attr' => 'format',
				'types' => array( 'str' ),
				'req' => false,
				'values' => array( 'super', 'fullwidth' ),
			),
			array(
				'attr' => 'use_caption',
				'types' => array( 'bool' ),
				'req' => false,
			),
		),
		uri_cl_shortcode_get_template( 'hero' )
	);

}
add_shortcode( 'cl-hero', 'uri_cl_shortcode_hero' );


/**
 * Metric
 */
function uri_cl_shortcode_metric( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'metric' => '',
			'caption' => '',
			'style' => '',
			'float' => '',
			'bgcolor' => '',
			'class' => '',
			'className' => '',
			'css' => '',
		),
		$atts
		);

	// Error checking
	return uri_cl_validate(
		 'Metric',
		$atts,
		$content,
		array(
			array(
				'attr' => 'metric',
				'types' => array( 'str' ),
			),
			array(
				'attr' => 'caption',
				'types' => array( 'str' ),
			),
			array(
				'attr' => 'style',
				'types' => array( 'str' ),
				'req' => false,
				'values' => array( 'dark', 'clear', 'overlay' ),
			),
			array(
				'attr' => 'float',
				'types' => array( 'str' ),
				'req' => false,
				'values' => array( 'left', 'right' ),
			),
		),
		uri_cl_shortcode_get_template( 'metric' )
	);

}
add_shortcode( 'cl-metric', 'uri_cl_shortcode_metric' );


/**
 * Menu
 */
function uri_cl_shortcode_menu( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'name' => '',
			'depth' => 1,
			'id' => '',
			'showtitle' => false,
			'title' => '',
			'class' => '',
			'className' => '',
			'css' => '',
		),
		$atts
		);

	// Error checking
	return uri_cl_validate(
		 'Menu',
		$atts,
		$content,
		array(
			array(
				'attr' => 'depth',
				'types' => array( 'num' ),
				'values' => array( 1, 2 ),
			),
			array(
				'attr' => 'showtitle',
				'types' => array( 'bool' ),
				'req' => false,
			),
		),
		uri_cl_shortcode_get_template( 'menu' )
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
			'expiration' => '',
			'title' => '',
			'style' => '',
			'show_expired' => false,
			'dismissible' => true,
			'class' => '',
			'className' => '',
			'css' => '',
		),
		$atts
		);

	// Error checking
	return uri_cl_validate(
		 'Notice',
		$atts,
		$content,
		array(
			array(
				'attr' => 'expiration',
				'types' => array( 'date' ),
				'req' => false,
			),
			array(
				'attr' => 'style',
				'types' => array( 'str' ),
				'req' => false,
				'values' => array( 'urgent' ),
			),
			array(
				'attr' => 'show_expired',
				'types' => array( 'bool' ),
				'req' => false,
			),
			array(
				'attr' => 'dismissible',
				'types' => array( 'bool' ),
				'req' => false,
			),
		),
		uri_cl_shortcode_get_template( 'notice' )
	);

}
add_shortcode( 'cl-notice', 'uri_cl_shortcode_notice' );


/**
 * Overlay
 */
function uri_cl_shortcode_overlay( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'img' => '',
			'title' => '',
			'style' => '',
			'class' => '',
			'className' => '',
			'css' => '',
		),
		$atts
		);

	// Error checking
	return uri_cl_validate(
		 'Overlay',
		$atts,
		$content,
		array(
			array(
				'attr' => 'img',
				'types' => array( 'url' ),
			),
			array(
				'attr' => 'style',
				'types' => array( 'str' ),
				'req' => false,
				'values' => array( 'dark' ),
			),
		),
		uri_cl_shortcode_get_template( 'overlay' )
	);

}
add_shortcode( 'cl-overlay', 'uri_cl_shortcode_overlay' );


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
			'format' => '',
			'class' => '',
			'className' => '',
			'css' => '',
		),
		$atts
		);

	$template = 'panel';
	if ( 'super' == $atts['format'] ) {
		$template = 'panel-super';
	}

	// Error checking
	return uri_cl_validate(
		 'Panel',
		$atts,
		$content,
		array(
			array(
				'attr' => 'img',
				'types' => array( 'url', 'num' ),
			),
			array(
				'attr' => 'reverse',
				'types' => array( 'bool' ),
				'req' => false,
			),
			array(
				'attr' => 'format',
				'types' => array( 'str' ),
				'req' => false,
				'values' => array( 'default', 'super' ),
			),
		),
		uri_cl_shortcode_get_template( $template )
	);

}
add_shortcode( 'cl-panel', 'uri_cl_shortcode_panel' );


/**
 * Promo
 */
function uri_cl_shortcode_promo( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'title' => '',
			'body' => '',
			'link' => '',
			'linktext' => '',
			'img' => '',
			'alt' => '',
			'style' => 'default',
			'class' => '',
			'className' => '',
			'css' => '',
		),
		$atts
		);

	// Error checking
	return uri_cl_validate(
		 'Promo',
		$atts,
		$content,
		array(
			array(
				'attr' => 'img',
				'types' => array( 'url', 'num' ),
			),
			array(
				'attr' => 'link',
				'types' => array( 'url' ),
			),
			array(
				'attr' => 'style',
				'types' => array( 'str' ),
				'req' => false,
				'values' => array( 'default', 'confetti', 'brand' ),
			),
		),
		uri_cl_shortcode_get_template( 'promo' )
	);

}
add_shortcode( 'cl-promo', 'uri_cl_shortcode_promo' );


/**
 * Quote
 */
function uri_cl_shortcode_quote( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'img' => '',
			'alt' => '',
			'quote' => '',
			'citation' => '',
			'class' => '',
			'className' => '',
			'css' => '',
		),
		$atts
		);

	// Error checking
	return uri_cl_validate(
		 'Quote',
		$atts,
		$content,
		array(
			array(
				'attr' => 'quote',
				'types' => array( 'str' ),
			),
			array(
				'attr' => 'img',
				'types' => array( 'url' ),
				'req' => false,
			),
		),
		uri_cl_shortcode_get_template( 'quote' )
	);

}
add_shortcode( 'cl-quote', 'uri_cl_shortcode_quote' );


/**
 * Share
 */
function uri_cl_shortcode_share( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'platforms' => 'all',
			'style' => 'color',
			'class' => '',
			'className' => '',
			'css' => '',
		),
		$atts
		);

	// Error checking
	return uri_cl_validate(
		 'Share',
		$atts,
		$content,
		array(
			array(
				'attr' => 'platforms',
				'types' => array( 'str' ),
				'req' => false,
			),
			array(
				'attr' => 'style',
				'types' => array( 'str' ),
				'values' => array( 'color', 'dark', 'light' ),
			),
		),
		uri_cl_shortcode_get_template( 'share' )
	);

}
add_shortcode( 'cl-share', 'uri_cl_shortcode_share' );


/**
 * Social
 */
function uri_cl_shortcode_social( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'style' => 'color',
			'class' => '',
			'className' => '',
			'facebook' => '',
			'instagram' => '',
			'twitter' => '',
			'youtube' => '',
			'snapchat' => '',
			'linkedin' => '',
			'css' => '',
		),
		$atts
		);

	// Error checking
	return uri_cl_validate(
		 'Social',
		$atts,
		$content,
		array(
			array(
				'attr' => 'facebook',
				'types' => array( 'url' ),
				'req' => false,
			),
			array(
				'attr' => 'instagram',
				'types' => array( 'url' ),
				'req' => false,
			),
			array(
				'attr' => 'twitter',
				'types' => array( 'url' ),
				'req' => false,
			),
			array(
				'attr' => 'youtube',
				'types' => array( 'url' ),
				'req' => false,
			),
			array(
				'attr' => 'snapchat',
				'types' => array( 'url' ),
				'req' => false,
			),
			array(
				'attr' => 'linkedin',
				'types' => array( 'url' ),
				'req' => false,
			),
			array(
				'attr' => 'style',
				'types' => array( 'str' ),
				'values' => array( 'color', 'dark', 'light' ),
			),
		),
		uri_cl_shortcode_get_template( 'social' )
	);

}
add_shortcode( 'cl-social', 'uri_cl_shortcode_social' );


/**
 * Tabs
 */
function uri_cl_shortcode_tabs( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'class' => '',
			'className' => '',
			'css' => '',
		),
		$atts
		);

	include uri_cl_shortcode_get_template( 'tabs' );
	return $output;

}
add_shortcode( 'cl-tabs', 'uri_cl_shortcode_tabs' );


/**
 * Tab
 */
function uri_cl_shortcode_tab( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'title' => '',
			'id' => '',
			'class' => '',
			'css' => '',
		),
		$atts
		);

	include uri_cl_shortcode_get_template( 'tab' );
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
			'class' => '',
			'className' => '',
			'css' => '',
		),
		$atts
		);

	// Error checking
	return uri_cl_validate(
		 'Tiles',
		$atts,
		$content,
		array(
			array(
				'attr' => 'across',
				'types' => array( 'num' ),
				'values' => array( 2, 3, 4, 5 ),
			),
			array(
				'attr' => 'square',
				'types' => array( 'bool' ),
				'req' => false,
			),
			array(
				'attr' => 'compact',
				'types' => array( 'bool' ),
				'req' => false,
			),
			array(
				'attr' => 'animated',
				'types' => array( 'bool' ),
				'req' => false,
			),
		),
		uri_cl_shortcode_get_template( 'tiles' )
	);

}
add_shortcode( 'cl-tiles', 'uri_cl_shortcode_tiles' );


/**
 * Video
 */
function uri_cl_shortcode_video( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'vid' => '',
			'id' => '',
			'img' => '',
			'alt' => '',
			'title' => '',
			'excerpt' => '',
			'class' => '',
			'className' => '',
			'css' => '',
		),
		$atts
		);

	// Error checking
	return uri_cl_validate(
		 'Video',
		$atts,
		$content,
		array(
			array(
				'attr' => 'vid',
				'types' => array( 'str' ),
			),
			array(
				'attr' => 'img',
				'types' => array( 'url' ),
				'req' => false,
			),
		),
		uri_cl_shortcode_get_template( 'video' )
	);

}
add_shortcode( 'cl-video', 'uri_cl_shortcode_video' );


/**
 * Waves
 */
function uri_cl_shortcode_waves( $atts, $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'placement' => 'bottom',
			'offset' => '',
			'class' => '',
			'className' => '',
			'css' => '',
		),
		$atts
		);

	// Error checking
	return uri_cl_validate(
		 'Waves',
		$atts,
		$content,
		array(
			array(
				'attr' => 'placement',
				'types' => array( 'str' ),
				'values' => array( 'bottom', 'top' ),
			),
			array(
				'attr' => 'offset',
				'types' => array( 'unit' ),
				'req' => false,
			),
		),
		uri_cl_shortcode_get_template( 'waves' )
	);

}
add_shortcode( 'cl-waves', 'uri_cl_shortcode_waves' );
