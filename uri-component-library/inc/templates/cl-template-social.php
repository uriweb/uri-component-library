<?php

$classes = 'cl-social ' . $style;

if(!empty($class)) {
    $classes .= ' ' . $class;
}

if(empty($facebook) && empty($instagram) && empty($twitter) && empty($youtube) && empty($snapchat) && empty($linkedin)) {
    
    $output = '';
    
} else {
    
    $output = '<ul class="' . $classes . '">';

    if(!empty($facebook)) {
        $output .= '<li><a href="' . $facebook . '" class="cl-social-facebook">Facebook</a></li>';
    }
    if(!empty($instagram)) {
        $output .= '<li><a href="' . $instagram . '" class="cl-social-instagram">Instagram</a></li>';
    }
    if(!empty($twitter)) {
        $output .= '<li><a href="' . $twitter . '" class="cl-social-twitter">Twitter</a></li>';
    }
    if(!empty($youtube)) {
        $output .= '<li><a href="' . $youtube . '" class="cl-social-youtube">YouTube</a></li>';
    }
    if(!empty($snapchat)) {
        $output .= '<li><a href="' . $snapchat . '" class="cl-social-snapchat">Snapchat</a></li>';
    }
    if(!empty($linkedin)) {
        $output .= '<li><a href="' . $linkedin . '" class="cl-social-linkedin">LinkedIn</a></li>';
    }

    $output .= '</ul>';
    
}