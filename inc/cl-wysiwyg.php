<?php
/**
 * COMPONENT LIBRARY WYSIWYG
 *
 * @see https://codex.wordpress.org/TinyMCE_Custom_Buttons
 * @package uri-component-library
 */

// Block direct requests
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}


/**
 * Load the TinyMCE plugin
 */
function uri_cl_wysiwyg_register_tinymce_plugin( $plugin_array ) {

	$values = get_plugin_data( URI_CL_DIR_PATH . 'uri-component-library.php', false );
	$values['Path'] = URI_CL_URL;
	wp_enqueue_script( 'uricl-wysiwyg-helpers', uri_cl_dir_url() . 'js/wysiwyg/cl-wysiwyg-helpers.js', array(), $values['Version'] );
	wp_localize_script( 'uricl-wysiwyg-helpers', 'URIComponentLibrary', $values );

	wp_enqueue_style( 'uricl-wysiwyg-admin-styles', uri_cl_dir_url() . 'css/cl-wysiwyg-admin.css' );
	// load up the noneditable plugin from TinyMCE
	$plugin_array['noneditable'] = uri_cl_dir_url() . 'js/wysiwyg/noneditable/plugin.min.js';

	// IMPORTANT
	// load the components that are more likely to have a nested component first.
	// because nested components don't play well with TinyMCE
	// load the custom boxout plugin
	$plugin_array['uri_cl_wysiwyg_boxout'] = uri_cl_dir_url() . 'js/wysiwyg/cl-boxout-plugin.js';
	// load the custom panel plugin
	$plugin_array['uri_cl_wysiwyg_panel'] = uri_cl_dir_url() . 'js/wysiwyg/cl-panel-plugin.js';
	// load the custom notice plugin
	$plugin_array['uri_cl_wysiwyg_notice'] = uri_cl_dir_url() . 'js/wysiwyg/cl-notice-plugin.js';
	// load the custom overlay plugin
	$plugin_array['uri_cl_wysiwyg_overlay'] = uri_cl_dir_url() . 'js/wysiwyg/cl-overlay-plugin.js';

	// load the custom cards plugin
	$plugin_array['uri_cl_wysiwyg_card'] = uri_cl_dir_url() . 'js/wysiwyg/cl-card-plugin.js';
	// load the custom heros plugin
	$plugin_array['uri_cl_wysiwyg_hero'] = uri_cl_dir_url() . 'js/wysiwyg/cl-hero-plugin.js';
	// load the custom metric plugin
	$plugin_array['uri_cl_wysiwyg_metric'] = uri_cl_dir_url() . 'js/wysiwyg/cl-metric-plugin.js';
	// load the custom quote plugin
	$plugin_array['uri_cl_wysiwyg_quote'] = uri_cl_dir_url() . 'js/wysiwyg/cl-quote-plugin.js';
	// load the custom video plugin
	$plugin_array['uri_cl_wysiwyg_video'] = uri_cl_dir_url() . 'js/wysiwyg/cl-video-plugin.js';
	// load the custom tiles plugin
	$plugin_array['uri_cl_wysiwyg_tiles'] = uri_cl_dir_url() . 'js/wysiwyg/cl-tiles-plugin.js';
	// load the custom buttons plugin
	$plugin_array['uri_cl_wysiwyg_button'] = uri_cl_dir_url() . 'js/wysiwyg/cl-button-plugin.js';

	return $plugin_array;
}
add_filter( 'mce_external_plugins', 'uri_cl_wysiwyg_register_tinymce_plugin' );


/**
 * Add new buttons
 */
function uri_cl_wysiwyg_register_buttons( $buttons ) {
	array_unshift( $buttons, 'CLBoxout', 'CLButton', 'CLCard', 'CLHero', 'CLMetric', 'CLNotice', 'CLOverlay', 'CLPanel', 'CLQuote', 'CLVideo', 'CLTiles' );
	return $buttons;
}
add_filter( 'mce_buttons_3', 'uri_cl_wysiwyg_register_buttons' );



/**
 * Apply styles to the visual editor
 */
function uri_cl_wysiwyg_editor_style( $url ) {
	if ( ! empty( $url ) ) {
		$url .= ',';
	}
	$url .= uri_cl_dir_url() . 'css/cl-wysiwyg-editor.css';
	return $url;
}
add_filter( 'mce_css', 'uri_cl_wysiwyg_editor_style' );


/**
 * Set up an AJAX endpoint to parse shortcodes and get the HTML from the server
 */
function uri_cl_wysiwyg_get_html() {
	// only allow contributors to use this endpoint
	if ( ! current_user_can( 'edit_posts' ) ) {
		header( 'HTTP/1.0 403 Forbidden' );
		return __( 'This resource is for authors only, sorry.', 'uri' );
	}

	if ( empty( $_REQUEST['sc'] ) ) {
		return;
	}

	$shortcode = stripslashes( $_REQUEST['sc'] );
	$shortcode = mb_convert_encoding( $shortcode, 'HTML-ENTITIES', 'UTF-8' );

	$out = do_shortcode( $shortcode );

	// parse errors out of the returned HTML, otherwise, they'll be saved in the post.
	$dom = new DOMDocument();
	$dom->loadHTML( $out, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD );

	$divs = $dom->getElementsByTagName( 'div' );
	foreach ( $divs as $element ) {
		$class = $element->getAttribute( 'class' );
		if ( strpos( $class, 'cl-errors' ) !== false ) {
			$element->parentNode->removeChild( $element );
		}
	}

	$out = $dom->saveHTML();

	// return the output
	wp_send_json( $out );
	wp_die();
}
add_action( 'wp_ajax_uri_cl_wysiwyg', 'uri_cl_wysiwyg_get_html' );
