<?php

$classes = 'cl-menu';

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$menuname = 'Menu';

if ( ! empty( $atts['name'] ) ) {
	$menuname = $atts['name'];
}
if ( ! empty( $atts['title'] ) ) {
	$menuname = $atts['title'];
}

if ( $atts['showtitle'] ) {
	$atts['showtitle'] = '1';
} else {
	$atts['showtitle'] = '0';
}

$output = '<section class="cl-wrapper cl-menu-wrapper">';
$output .= '<div id="' . $atts['id'] . '" class="' . $classes . '" data-name="' . $menuname . '" data-show-title="' . $atts['showtitle'] . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= ' style="' . $atts['css'] . '"';
}

$output .= '>';

if ( empty( $atts['name'] ) ) {
	$output .= wp_nav_menu(
		array(
			'theme_location' => 'menu-1',
			'menu_class' => 'cl-menu-list cl-menu-list-no-js',
			'depth' => $atts['depth'],
			'container' => '',
			'fallback_cb' => false,
			'echo' => false,
		)
		);
} else {
	$output .= wp_nav_menu(
		array(
			'menu' => $atts['name'],
			'menu_class' => 'cl-menu-list cl-menu-list-no-js',
			'depth' => $atts['depth'],
			'container' => '',
			'fallback_cb' => false,
			'echo' => false,
		)
		);
}

$output .= '</div>';
$output .= '</section>';
