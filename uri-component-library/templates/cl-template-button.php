<?php

$classes = 'button';

if($prominent) {
    $classes .= ' prominent';
}

$output = '<a class="' . $classes . '" href="' . $link . '" title="' . $tooltip . '">' . $text . '</a>';