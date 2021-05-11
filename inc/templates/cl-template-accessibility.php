<?php
/**
 * GLOBAL ACCESSIBILITY CONTROLS
 *
 * @package uri-component-library
 */

$output .= '<div class="cl-accessibility-controls-container">';
$output .= '<div class="cl-accessibility-controls">';

$output .= '<div class="cl-accessibility-icon" title="Accessibility controls">Accessibility controls</div>';

$output .= '<div class="cl-accessibility-control cl-accessibility-motion-control">';
$output .= '<div class="cl-accessibility-control-button" title="Pause motion">Pause motion</div>';
$output .= '<div class="cl-accessibility-control-label">Motion: <span class="cl-accessibility-syntax">On</span></div>';
$output .= '</div>';

$output .= '<div class="cl-accessibility-control cl-accessibility-contrast-control">';
$output .= '<div class="cl-accessibility-control-button" title="Increase text contrast">Increase text contrast</div>';
$output .= '<div class="cl-accessibility-control-label">Contrast: <span class="cl-accessibility-syntax">Standard</span></div>';
$output .= '</div>';

$output .= '</div>';
$output .= '</div>';
