<?php

$classes = 'cl-menu';

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$output = wp_nav_menu( array('menu' => $name, 'menu_class' => 'cl-menu-list', 'depth' => $depth, 'container' => 'div', 'container_class' => $classes, 'container_id' => $id, 'fallback_cb' => false, 'echo' => false) );