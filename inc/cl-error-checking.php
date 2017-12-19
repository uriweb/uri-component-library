<?php

function uri_cl_validate($atts, $req, $template) {
    
    $errors = array();
    
    foreach($req as $a) {
        
        $name = $a[0];
        
        $att = $atts[array_shift($a)];
        $type = array_shift($a);
    
                
        // Check for invalid entries
        foreach($a as $b) {
            if ($att == $b) {
                $errors[] = $name;
            }
        }
        
        // Check for empty entry
        if (empty($att)) {
            $errors[] = $name;
        }
        
    }
    
    if (count($errors) > 0) {
        $output = uri_cl_return_error($errors);
    } else {
        extract($atts);
        include $template;
    }
    
    return $output;
}

function uri_cl_return_error($errors) {
    $output = '<div class="cl-errors">';
    $output .= '<div>CL Errors</div>';
    $output .= '<ul>';
    
    foreach($errors as $e) {
        $output .= '<li>' . $e . '</li>';
    }
    
    $output .= '</ul>';
    $output .= '</div>';
    
    return $output;
}