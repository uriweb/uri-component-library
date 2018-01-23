<?php

$classes = 'cl-menu';

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$menuname = $name;
if(!empty($title)) {
    $menuname = $title;
}

if($showtitle) {
    $showtitle = '1';
} else {
    $showtitle = '0';
}

$output = '<div id="' . $id . '" class="' . $classes . '" data-name="' . $menuname . '" data-show-title="' . $showtitle . '">';

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