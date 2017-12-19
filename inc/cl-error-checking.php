<?php

function uri_cl_validate($cname, $atts, $req, $template) {
    
    $errors = array();
    $fatal = false;
    $admin = is_user_logged_in();
    
    foreach($req as $a) {
        
        $name = $a[0];
        
        $att = $atts[$name];
        $type = $a[1];
        
        // Check for empty entry, otherwise validate
        if (empty($att)) {
            $errors[] = array(
                'attr' => $name,
                'message' => 'Required attribute',
                'status' => 'fatal'
            );
            $fatal = true;
        } else {
            
            // Do validation/sanitation based on var type
            switch ($type) {
                case 'url':
                    $validation = uri_cl_validate_url($att);
                    break;
                default:
                    $validation = array('valid' => true, 'value' => $att);
            }
            
            // If valid, update the attribute with the sanitized value, otherwise return an error
            if ($validation['valid']) {
                $atts[$name] = $validation['value'];
            } else {
                $errors[] = array(
                    'attr' => $name,
                    'message' => '"' . $att . '" is not valid',
                    'status' => 'warning'
                );
            }
        }
        
    }
    
    if ($fatal) {
        if ($admin) {
            $output = uri_cl_return_error($cname, $fatal, $errors);
        } else {
            $output = '';
        }
    } else {
        extract($atts);
        include $template;
        
        if (count($errors) > 0 && $admin) {
            $output .= uri_cl_return_error($cname, $fatal, $errors);
        }
    }
    
    return $output;
}

function uri_cl_return_error($cname, $fatal, $errors) {
    $output = '<div class="cl-errors">';
    
    if ($fatal) {
        $output .= '<div>' . $cname . ' shortcode could not load.</div>';
    } else {
        $output .= '<div>' . $cname . ' shortcode loaded with errors.</div>';
    }
    
    $output .= '<ul>';
    
    foreach($errors as $e) {
        $output .= '<li class="cl-error-' . $e['status'] . '">';
        $output .= '<span class="cl-error-name">' . $e['attr'] . '</span>';
        $output .= '<span class="cl-error-message">' . $e['message'] . '</span>';
        $output .= '</li>';
    }
    
    $output .= '</ul>';
    $output .= '</div>';
    
    return $output;
}

function uri_cl_validate_url($url) {
    $valid = false;
    $url = filter_var($url, FILTER_VALIDATE_URL);
    
    if (filter_var($url, FILTER_VALIDATE_URL)) {
        $valid = true;       
    }
    
    return array(
        'valid' => $valid, 
        'value' => $url
    );
    
}