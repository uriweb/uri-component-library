<?php
/**
 * The template for displaying a post as a card
 *
 * @package uri-component-library
 */

$sc = '[cl-card title="' . _uri_cl_escape_brackets( get_the_title() ) . '" body="' . _uri_cl_escape_brackets( get_the_excerpt() ) . '" link="' . get_the_permalink() . '" img="' . get_the_post_thumbnail_url() . '" button="Read More" ' . $cl_atts . ']';

print do_shortcode( $sc );
