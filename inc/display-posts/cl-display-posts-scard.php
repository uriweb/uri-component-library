<?php
/**
 * The template for displaying a post as a story card
 *
 * @package uri-component-library
 */

print do_shortcode( '[cl-scard post="' . get_the_ID() . '" ' . $cl_atts . ']' );
