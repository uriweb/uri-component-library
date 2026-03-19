 <?php

$classes = 'cl-display-card';
$atts['class'] = $atts['class'] . ' ' . $atts['className'];

if ( ! empty( $atts['class'] ) ) {
    $classes .= ' ' . $atts['class'];
}

if ( ! empty( $atts['float'] ) ) {
    $classes .= ' ' . $atts['float'];
}

$output = '<div class="' . $classes . '">';
$output .= '<a class="cl-display-card-link" href="' . $atts['link'] . '">';
$output .= '<div class="display">';
$output .= '<div class="cl-display-card-img" style="background-image:url(' . $atts['img'] . ')"></div>';

$output .= '<div class="cl-display-card-content">';
$output .= '<p class="eyebrow">' . $atts['eyebrow'] . '</p>';
$output .= '<hr id="liner">';
$output .= '<h2>' . $atts['title'] . '</h2>';               
$output .= '</div>';

$output .= '</div><!--end display -->'; 
$output .= '</a><!--end cl-display-card-link-->';
$output .= '</div>';