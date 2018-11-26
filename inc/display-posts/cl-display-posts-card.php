<?php
/**
 * The template for displaying a post as a card
 *
 * @package uri-component-library
 */

print do_shortcode( '[cl-card title="' . get_the_title() . '" body="' . get_the_excerpt() . '" link="' . get_the_permalink() . '" img="' . get_the_post_thumbnail_url() . '" button="Read More" ' . $cl_atts . ']' );
