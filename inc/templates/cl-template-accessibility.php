<?php

$output = '<div class="cl-accessibility-controls-container">';
$output .= '<div class="cl-accessibility-controls">';

$output .= '<div class="cl-accessibility-icon" title="Accessibility controls">Accessibility controls</div>';

// Motion Controls

    $output .= '<div class="cl-accessibility-control cl-accessibility-motion-control';

    if ( ! $defaults[ 'motion' ] ) {
        $output .= ' cl-accessibility-control-hidden';
    }

    $output .= '">';

    $output .= '<div class="cl-accessibility-control-default">';
    $output .= '<div class="cl-accessibility-control-button" title="Pause motion">Pause motion</div>';
    $output .= '<div class="cl-accessibility-control-label">Motion: <span class="cl-accessibility-syntax">On</span></div>';
    $output .= '</div>';

    $output .= '<div class="cl-accessibility-control-alternate">';
    $output .= '<div class="cl-accessibility-control-button" title="Play motion">Play motion</div>';
    $output .= '<div class="cl-accessibility-control-label">Motion: <span class="cl-accessibility-syntax">Off</span></div>';
    $output .= '</div>';

    $output .= '</div>';

// Contrast Controls
    $output .= '<div class="cl-accessibility-control cl-accessibility-contrast-control';

    if ( ! $defaults[ 'contrast' ] ) {
        $output .= ' cl-accessibility-control-hidden';
    }
    
    $output .= '">';

    $output .= '<div class="cl-accessibility-control-default">';
    $output .= '<div class="cl-accessibility-control-button" title="Increase text contrast">Increase text contrast</div>';
    $output .= '<div class="cl-accessibility-control-label">Contrast: <span class="cl-accessibility-syntax">Standard</span></div>';
    $output .= '</div>';

    $output .= '<div class="cl-accessibility-control-alternate">';
    $output .= '<div class="cl-accessibility-control-button" title="Reset text contrast">Reset text contrast</div>';
    $output .= '<div class="cl-accessibility-control-label">Contrast: <span class="cl-accessibility-syntax">High</span></div>';
    $output .= '</div>';

    $output .= '</div>';

// System Setting
$output .= '<div class="cl-accessibility-system-setting">';
$output .= '<div class="cl-accessibility-toggle" title="Apply my preferences site-wide"></div>';
$output .= '<div class="cl-accessibility-toggle-label">Apply site-wide</div>';
$output .= '</div>';

$output .= '</div>';
$output .= '</div>';
