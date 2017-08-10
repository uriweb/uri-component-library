<?php

$output = '<div class="cl-wave ' . $placement . '" style="';

if(!empty($offset)) {
    $output .= 'top:' . $offset . ';';
}

$output .= '">';

$output .= '<div></div><div></div>';
$output .= '</div>';