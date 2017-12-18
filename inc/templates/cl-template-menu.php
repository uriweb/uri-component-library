<?php

$classes = 'cl-menu';

if($horizontal) {
    $classes .= ' bar';
}

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$output = wp_nav_menu( array('menu' => $name, 'menu_class' => $classes, 'depth' => $depth, 'container' => '', 'fallback_cb' => false, 'echo' => false) );