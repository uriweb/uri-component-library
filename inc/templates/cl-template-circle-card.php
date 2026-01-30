 <?php

$classes = 'cl-circle-card';
$atts['class'] = $atts['class'] . ' ' . $atts['className'];

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

if ( ! empty( $atts['float'] ) ) {
	$classes .= ' ' . $atts['float'];
}

$output = '<div class="' . $classes . '">';
$output .= '<a class="cl-card" href="' . $atts['link'] . '">';
$output .= '<div id="circle">';
$output .= '<div class="cl-circle-card-img" style="background-image:url(' . $atts['img'] . ')"></div>';

$output .= '<div class="cl-circle-card-content">';
$output .= '<p id="eyebrow">Impacting success</p>';
$output .= '<hr id="liner">';
$output .= '<h2>' . $atts['title'] . '</h2>';
$output .= '<p>' . $atts['body'] . '</p>';                  
$output .= '</div>';

$output .= '</div>'; 
$output .= '</a>';
$output .= '</div>';