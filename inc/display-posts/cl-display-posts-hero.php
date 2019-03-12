<?php
/**
 * The template for displaying a post as a hero
 *
 * @package uri-component-library
 */

print do_shortcode( '[cl-hero headline="' . _uri_cl_escape_brackets( get_the_title() ) . '" subhead="' . _uri_cl_escape_brackets( get_the_excerpt() ) . '" link="' . get_the_permalink() . '" img="' . get_the_post_thumbnail_url(NULL, $original_atts['image_size']) . '" button="Read More" ' . $cl_atts . ']' );
