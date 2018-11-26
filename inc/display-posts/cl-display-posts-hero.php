<?php
/**
 * The template for displaying a post as a hero
 *
 * @package uri-component-library
 */

print do_shortcode( '[cl-hero headline="' . get_the_title() . '" subhead="' . get_the_excerpt() . '" link="' . get_the_permalink() . '" img="' . get_the_post_thumbnail_url() . '" button="Read More"]' );
