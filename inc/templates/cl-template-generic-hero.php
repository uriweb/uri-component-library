<?php

$classes = 'cl-generic-hero';

$atts['class'] = $atts['class'] . ' ' . $atts['className'];

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output = '<section class="cl-generic-hero-wrapper">';
$output .= '<div class="' . $classes . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= 'style="' . $atts['css'] . '"';
}

$output .= '>';

// The backdrop
$bgclasses = 'cl-generic-hero-backdrop';
if ( 'lattice' == $atts['style'] ) {
	$bgclasses .= ' lattice';
}
if ( 'honeycomb' == $atts['style'] ) {
	$bgclasses .= ' honeycomb';
}
$bg = '<div class="' . $bgclasses . '"';
if ( ! empty( $atts['background'] ) ) {
	$bg .= ' style="background:' . $atts['background'] . '"';
}
$bg .= '>';

$speeds = array(
	'low',
	'medium',
	'high',
);
$directions = array(
	'left',
	'right',
);

if ( 'bars' == $atts['style'] ) {
	for ( $n = 0; $n <= 10; $n++ ) {
		$w = rand( 2, 8 ) * 10;
		$x = rand( 10, 90 );
		$o = rand( 1, 5 ) / 10;
		$s = $speeds[ array_rand( $speeds, 1 ) ];
		$bg .= '<div class="bar speed-' . $s . '" style="width:calc( 1vw * ' . $w . '); left:' . ( $x - ( $w / 2 ) ) . '%; opacity:' . $o . '"></div>';
	}
}

if ( 'discs' == $atts['style'] ) {
	for ( $n = 0; $n <= 5; $n++ ) {
		$w = rand( 2, 7 ) * 10;
		$x = rand( 10, 90 );
		$y = rand( 10, 90 );
		$o = rand( 2, 5 ) / 10;
		$r = rand( 1, 3 ) * 10;
		$d = $directions[ array_rand( $directions, 1 ) ];
		$s = $speeds[ array_rand( $speeds, 1 ) ];
		$bg .= '<div class="disc direction-' . $d . ' speed-' . $s . '" style="width:calc( 1vw * ' . $r . '); height:calc( 1vw * ' . $r . '); left:' . ( $x - ( $r / 2 ) ) . '%; top:' . ( $y - ( $r / 2 ) ) . '%; opacity:' . $o . '">';
		$bg .= '<div style="top:-' . ( $w / 2 ) . 'vw; left:' . ( ( $r / 2 ) - ( $w / 2 ) ) . 'vw; width:calc( 1vw * ' . $w . '); height:calc( 1vw * ' . $w . ');"></div>';
		$bg .= '</div>';
	}
}

if ( 'lattice' == $atts['style'] ) {
	for ( $n = 0; $n <= 200; $n++ ) {
		$lattice_classes = 'triangle';
		$t = rand( 10, 60 );
		$s = $speeds[ array_rand( $speeds, 1 ) ];
		$p = rand( 1, 3 );
		if ( 1 < $p ) {
			$lattice_classes .= ' speed-' . $s;
		}
		$bg .= '<div class="' . $lattice_classes . '" style="animation-duration:' . $t . 's;"></div>';
	}
}

if ( 'honeycomb' == $atts['style'] ) {
	for ( $n = 0; $n <= 200; $n++ ) {
		$d = rand( 1, 29 );
		$s = $speeds[ array_rand( $speeds, 1 ) ];
		$bg .= '<div class="hex speed-' . $s . '" style="animation-delay:-' . $d . 's"><div class="hexwrap"><div class="hexcontent"></div></div></div>';
	}
}

$bg .= '</div>';
$output .= $bg;

$img = '';
$proper_classes = 'cl-generic-hero-proper animate-text';

if ( ! empty( $atts['img'] ) ) {
	$proper_classes .= ' has-img';
	$img .= '<div class="cl-generic-hero-img">';
	$img .= '<div class="img-wrapper">';
	$img .= '<img src="' . $atts['img'] . '">';
	$img .= '</div>';
	$img .= '</div>';
}

$output .= '<div class="' . $proper_classes . '">';

$output .= '<div class="cl-generic-hero-content-wrapper">';

$output .= $img;

$output .= '<div class="cl-generic-hero-text">';

// The title
if ( ! empty( $atts['title'] ) ) {
	$output .= '<h1>' . $atts['title'] . '</h1>';
}

// The body
if ( ! empty( $atts['body'] ) ) {
	$output .= '<p>' . $atts['body'] . '</p>';
}

// The button
if ( ! empty( $atts['link'] ) ) {
	$button = '<a class="cl-generic-hero-button" href="' . $atts['link'] . '" title="' . $atts['tooltip'] . '">' . $atts['button'] . '</a>';
	if ( function_exists( 'uri_cl_shortcode_button' ) ) {
		$button = do_shortcode( '[cl-button link="' . $atts['link'] . '" text="' . $atts['button'] . '"]' );
	}
	$output .= $button;
}

$output .= '</div>'; // .cl-generic-hero-text

$output .= '</div>'; // .cl-generic-hero-content-wrapper

$output .= '</div>'; // .cl-generic-hero-proper


$output .= '</div>'; // .cl-generic-hero
$output .= '</section>';
