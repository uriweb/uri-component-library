<?php

$classes = 'cl-button';

if($prominent) {
    $classes .= ' prominent';
}

if(!empty($class)) {
    $classes .= ' ' . $class;
}

$output = '<a class="' . $classes . '" href="' . $link . '" title="' . $tooltip . '">' . $text . '</a>';