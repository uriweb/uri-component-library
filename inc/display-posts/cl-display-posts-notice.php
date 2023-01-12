<?php
/**
 * The template for displaying a post as a notice
 *
 * @package uri-component-library
 */

$sc = '[cl-notice title="' . _uri_cl_escape_brackets( get_the_title() ) . '" ' . $cl_atts . ']';
$sc .= _uri_cl_escape_brackets( get_the_excerpt() );
$sc .= '<p><a href="' . get_the_permalink() . '">Read more</a></p>';
$sc .= '[/cl-notice]';

print do_shortcode( $sc );