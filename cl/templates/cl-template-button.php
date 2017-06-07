<?php

$classes = 'button';

if($prominant) {
    $classes .= ' prominent';
}

$output = '<a class="' . $classes . '" href="' . $link . '" title="' . $tooltip . '">';