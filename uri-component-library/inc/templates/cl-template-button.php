<?php

$classes = 'cl-button';

if($prominent) {
    $classes .= ' prominent';
}

if(empty($tooltip)) {
    $tooltip = $text;
}

$output = '<a class="' . $classes . '" href="' . $link . '" title="' . $tooltip . '">' . $text . '</a>';