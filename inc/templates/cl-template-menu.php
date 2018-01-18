<?php

$classes = 'cl-menu';

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$output = '<div id="' . $id . '" class="' . $classes . '" data-name="' . $name . '">';

$output .= wp_nav_menu( 
    array(
        'menu' => $name, 
        'menu_class' => 'cl-menu-list', 
        'depth' => $depth, 
        'container' => '', 
        'fallback_cb' => false, 
        'echo' => false
    ) );

$output .= '</div>';