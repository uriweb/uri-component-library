<?php
/**
 * The template for displaying a post as a hero
 *
 * @package uri-component-library
 */

$sc = '[cl-panel title="' . get_the_title() . '" img="' . get_the_post_thumbnail_url() . '"]';
$sc .= get_the_excerpt();
$sc .= '<p>[cl-button link="' . get_the_permalink() . '" text="Read More"]</p>';
$sc .= '[/cl-panel]';

print do_shortcode( $sc );
