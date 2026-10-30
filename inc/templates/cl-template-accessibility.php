<?php

$output = '<div class="cl-accessibility-controls-container">';
//$output .= '<div class="cl-accessibility-controls">';

// Motion Controls

$output .= '<button class="cl-accessibility-control cl-accessibility-motion-control';

if ( ! $defaults[ 'motion' ] ) {
    $output .= ' cl-accessibility-control-hidden';
}

$output .= '">';

$output .= '<div class="cl-accessibility-control-default">';
$output .= '<div class="cl-accessibility-control-button" title="Pause motion">Pause motion</div>';
//$output .= '<div class="cl-accessibility-control-label">Motion: <span class="cl-accessibility-syntax">On</span></div>';
$output .= '</div>';

$output .= '<div class="cl-accessibility-control-alternate">';
$output .= '<div class="cl-accessibility-control-button" title="Play motion">Play motion</div>';
//$output .= '<div class="cl-accessibility-control-label">Motion: <span class="cl-accessibility-syntax">Off</span></div>';
$output .= '</div>';

$output .= '</button>';

//$output .= '</div>';
$output .= '</div>';


