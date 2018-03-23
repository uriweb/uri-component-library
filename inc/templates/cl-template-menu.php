<?php

$classes = 'cl-menu';

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$menuname = 'Menu';

if(!empty($name)) {
    $menuname = $name;
}
if(!empty($title)) {
    $menuname = $title;
}

if($showtitle) {
    $showtitle = '1';
} else {
    $showtitle = '0';
}

$output = '<section class="cl-wrapper cl-menu-wrapper">';
$output .= '<div id="' . $id . '" class="' . $classes . '" data-name="' . $menuname . '" data-show-title="' . $showtitle . '"';

if(!empty($css)){
    $output .= ' style="' . $css . '"';
}

$output .= '>';

if(empty($name)) {
    $output .= wp_nav_menu( 
        array(
            'theme_location' => 'menu-1', 
            'menu_class' => 'cl-menu-list', 
            'depth' => $depth, 
            'container' => '', 
            'fallback_cb' => false, 
            'echo' => false
        ) );
} else {
    $output .= wp_nav_menu( 
        array(
            'menu' => $name, 
            'menu_class' => 'cl-menu-list', 
            'depth' => $depth, 
            'container' => '', 
            'fallback_cb' => false, 
            'echo' => false
        ) );
}

$output .= '</div>';
$output .= '</section>';