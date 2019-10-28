<?php
/**
 * COMPONENT LIBRARY HELPERS
 *
 * @package uri-component-library
 */


/**
 * Get shortcode template file
 *
 * Priority:
 * 1. /themes/theme/template-parts/cl/cl-template-*.php
 * 2. /plugins/uri-component-library/templates/cl-template-*.php
 *
 * @param str $name the name of the shortcode, as used in the filename.
 * @return the path to the template file (rel for default templates, abs for theme templates)
 */
function uri_cl_shortcode_get_template( $name ) {

	$template = get_stylesheet_directory() . '/template-parts/cl/cl-template-' . $name . '.php';

	if ( ! is_file( $template ) ) {
		$template = 'templates/cl-template-' . $name . '.php';
	}

	return $template;

}


/**
 * Return img tag
 *
 * @param mixed $img the shortcode img attribute.
 * @param str   $alt the shortcode alt attribute.
 * @return str
 */
function uri_cl_build_img_tag( $img, $alt = '' ) {

	$img_src = $img;
	$img_srcset = '';

	if ( is_numeric( $img ) ) {
		$img_id = $img;
		$img_src = wp_get_attachment_image_src( $img_id )[0];
		$img_meta = wp_get_attachment_metadata( $img_id );
		$img_srcset = wp_calculate_image_srcset( array( $img_meta['width'], $img_meta['height'] ), $img_src, $img_meta );
	}

	return '<img src="' . $img_src . '" srcset="' . $img_srcset . '" alt="' . $alt . '">';

}

/**
 * Get video id
 */
function uri_cl_get_video_id( $src ) {

	$platform = uri_cl_get_video_platform( $src );

	if ( 'vimeo' == $platform ) {
		return $src;
	}

	/* Youtube */
	$pattern = '/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/';
	preg_match( $pattern, $src, $matches );
	return ( $matches && 11 == strlen( $matches[1] ) ) ? $matches[1] : $src;

}

/**
 * Get video platform
 *
 * @param str $src the source url.
 * @return str
 */
function uri_cl_get_video_platform( $src ) {

	$host = uri_cl_get_url_host( $src );

	$platform = 'youtube'; // Default platform

	if ( false !== strpos( $host, 'vimeo' ) ) {
		$platform = 'vimeo';
	}

	return $platform;

}

/**
 * Get url host
 *
 * @param str $src the source url.
 * @return str
 */
function uri_cl_get_url_host( $src ) {
	return parse_url( $src )['host'];
}

/**
 * Get Vimeo thumbnail
 *
 * @param str $src the source url.
 * @return str
 */
function uri_cl_get_vimeo_thumbnail( $src ) {

	if ( ! $src ) {
			return false;
	}

	$data = json_decode( file_get_contents( 'http://vimeo.com/api/oembed.json?url=' . $src ) );

	if ( ! $data ) {
			return false;
	}

	return explode( '_', $data->thumbnail_url )[0];

}
