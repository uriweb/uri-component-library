<?php

$classes = 'button';

if($prominant) {
    $classes .= ' prominant';
}

$output = '<a class="' . $classes . '" href="' . $link . '" title="' . $tooltip . '">';