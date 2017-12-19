<?php

function uri_cl_validate($atts, $req, $template) {
     
    $error = false;
    
    foreach($req as $a) {
        
        $att = array_shift($a);
        $type = array_shift($a);
                
        // Check for invalid entries
        foreach($a as $b) {
            if ($att == $b) {
                $error = true;
            }
        }
        
        // Check for empty entry
        if (empty($att)) {
            $error = true;
        }
        
    }
    
    if ($error == true) {
        $output = uri_cl_return_error();
    } else {
        extract($atts);
        include $template;
    }
    
    return $output;
}

function uri_cl_return_error() {
    return '<div>CL Error</div>';
}