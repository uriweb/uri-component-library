<?php

function uri_cl_validate($cname, $atts, $check_atts, $template) {
    
    $errors = array();
    $fatal = false;
    $admin = is_user_logged_in();
    
    foreach($check_atts as $a) {
        
        $a_name = $a['attr'];
        
        $a_val = $atts[$a_name];
        $a_type = $a['type'];
        $a_req = true;
        
        if (array_key_exists('req', $a)) {
            $a_req = $a['req'];
        }
                
        // Check for empty entry, otherwise validate if it's set
        if ($a_req && empty($a_val)) {
            
            $errors[] = array(
                'attr' => $a_name,
                'message' => 'Required attribute',
                'status' => 'fatal'
            );
            $fatal = true;
            
        } else if (!empty($a_val)) {
                    
            // Do validation/sanitation based on var type
            switch ($a_type) {
                case 'url':
                    $validation = uri_cl_validate_url($a_val);
                    break;
                case 'bool':
                    $validation = uri_cl_validate_bool($a_val);
                    break;
                case 'str':
                    $validation = uri_cl_validate_str($a_val, $a);
                    break;
                case 'num':
                    $validation = uri_cl_validate_num($a_val, $a);
                    break;
                case 'ratio':
                    $validation = uri_cl_validate_ratio($a_val);
                    break;
                case 'unit':
                    $validation = uri_cl_validate_unit($a_val);
                    break;
                default:
                    $validation = array('valid' => true, 'value' => $a_val, 'status' => 'normal');
            }
            
            // If valid, update the attribute with the sanitized value, otherwise return an error
            if ($validation['valid']) {
                $atts[$a_name] = $validation['value'];
            } else {
                if ($validation['status'] == 'warning') {
                    $atts[$a_name] = $validation['value'];
                }
                $errors[] = array(
                    'attr' => $a_name,
                    'message' => $validation['message'],
                    'status' => $validation['status']
                );
                if ($validation['status'] == 'fatal') {
                    $fatal = true;
                }
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
    $status = 'warning';
    $url = $url = filter_var($url, FILTER_SANITIZE_URL);
    
    if (filter_var($url, FILTER_VALIDATE_URL)) {
        $valid = true;
        $status = 'normal';
    }
    
    return array(
        'valid' => $valid, 
        'value' => $url,
        'status' => $status,
        'message' => '"' . $url . '" is not a valid URL'
    );
    
}

function uri_cl_validate_bool($var) {
    $valid = false;
    $status = 'warning';
        
    if ($var == true || $var == false || $var == 1 || $var == 0) {
        $valid = true;
        $status = 'normal';
    }
    
    return array(
        'valid' => $valid,
        'value' => $var,
        'status' => $status,
        'message' => '"' . $var . '" is not a boolean'
    );
    
}

function uri_cl_validate_str($val, $a) {
    $valid = true;
    $status = 'normal';
        
    if (array_key_exists('values', $a)) {
        $valid = uri_cl_in_array($val, $a['values']);
        $status = $valid ? 'normal' : 'fatal';
    }
    
    return array(
        'valid' => $valid,
        'value' => $val,
        'status' => $status,
        'message' => '"' . $val . '" is not a valid string' . uri_cl_accepted_values($a)
    );
    
}

function uri_cl_validate_num($val, $a) {
    $valid = true;
    
    if (is_numeric($val)) {
        
        if (array_key_exists('values', $a)) {
            $valid = uri_cl_in_array($val, $a['values']);
        }
        
    } else {
        $valid = false;
    }
    
    $status = $valid ? 'normal' : 'fatal';
    
    return array(
        'valid' => $valid,
        'value' => $val,
        'status' => $status,
        'message' => '"' . $val . '" is not a valid number' . uri_cl_accepted_values($a)
    );
    
}

function uri_cl_validate_ratio($val) {
    $valid = false;
    
    $parts = explode(':', $val);
    
    if ( count($parts) == 2 ) {
        $valid = true;
        foreach($parts as $p) {
            if (!is_numeric($p)) {
                $valid = false;
                break;
            };
        }
    }
    
    $status = $valid ? 'normal' : 'fatal';
    
    return array(
        'valid' => $valid,
        'value' => $val,
        'status' => $status,
        'message' => '"' . $val . '" is not a valid ratio (accepted format: x:y)'
    );
    
}

function uri_cl_validate_unit($val) {
    $valid = true;
    $status = 'normal';
    $message = '';
    
    if (is_numeric($val)) {
        $message = '"' . $val . '" has no units, defaulting to px';
        $valid = false;
        $status = 'warning';
        $val = $val . 'px';
    } else if (preg_match('/(rem|em|px)$/', $val, $match) === 1) {
        $num = str_replace($match[0], '', $val);
        if (!is_numeric($num)) {
            $valid = false;
            $status = 'fatal';
            $message = '"' . $val . '" is not a valid number/unit combination';
        }
    } else {
        $valid = false;
        $status = 'fatal';
        $message = '"' . $val . '" is not a valid number/unit combination';
    }
    
    return array(
        'valid' => $valid,
        'value' => $val,
        'status' => $status,
        'message' => $message
    );
    
}

function uri_cl_in_array($val, $vals) {
    
    if (in_array($val, $vals)) {
        return true;
    } else {
        return false;
    }
    
}

function uri_cl_accepted_values($a) {
    
    if (array_key_exists('values', $a)) {
        $list = implode(' | ', $a['values']);
        return ' (accepted values: ' . $list . ')';
    } else {
        return '';
    }
    
}
    