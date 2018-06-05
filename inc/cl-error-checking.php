<?php
/**
 * COMPONENT LIBRARY SHORTCODE ERROR CHECKING
 *
 * Validate shortcodes based on criteria set in cl-shortcodes.php
 * Errors are displayed only if user is logged in.
 *
 * @package uri-component-library
 */


/**
 * Loop through attributes to check,
 * send them each out for proper validation
 * and return the shortcode and/or error message.
 * Call this from each shortcode that needs validation.
 *
 * @param str $cname the name of the shortcode.
 * @param arr $atts the returned array of shortcode attributes.
 * @param str $content the content of the shortcode, in the case of enclosing shortcodes.
 * @param arr $check_atts the attributes to validate and their parameters.
 * @param str $template the relative url to the shortcode template.
 * @return str $output the component and/or error message html.
 */
function uri_cl_validate( $cname, $atts, $content, $check_atts, $template ) {

	$errors = array();
	$fatal = false;
	$admin = is_user_logged_in();

	foreach ( $check_atts as $a ) {

		$this_attr = array(
			'name' => $a['attr'],
			'val' => $atts[ $a['attr'] ],
			'type' => $a['type'],
			'req' => true,
		);

		if ( array_key_exists( 'req', $a ) ) {
			$this_attr['req'] = $a['req'];
		}

		// Check for empty entry, otherwise validate if it's set
		if ( $this_attr['req'] && empty( $this_attr['val'] ) ) {

			$errors[] = array(
				'attr' => $this_attr['name'],
				'message' => 'Required attribute',
				'status' => 'fatal',
			);
			$fatal = true;

		} else if ( ! empty( $this_attr['val'] ) ) {

			$validation = array();

			// Make the var type(s) an array if it isn't already
			$this_attr['type'] = is_array( $this_attr['type'] ) ? $this_attr['type'] : array( $this_attr['type'] );

			// Run validation for each var type
			foreach ( $this_attr['type'] as $t ) {
				$validation[] = uri_cl_return_validation( $t, $this_attr['val'], $a );
			}

			$these_errors = uri_cl_add_error( $atts, $this_attr, $validation );

			$errors = array_merge( $errors, $these_errors['errors'] );

			if ( true == $these_errors['fatal'] ) {
				$fatal = true;
			}
		}
	} // End for each

	if ( $fatal ) {
		if ( $admin ) {
			$output = uri_cl_return_error( $cname, $fatal, $errors );
		} else {
			$output = '';
		}
	} else {
		extract( $atts );
		include $template;

		if ( count( $errors ) > 0 && $admin ) {
			$output .= uri_cl_return_error( $cname, $fatal, $errors );
		}
	}

	return $output;
}


/**
 * Do validation/sanitation based on var type
 *
 * @param str $type the var type.
 * @param str $val the attribute value.
 * @param str $a the attribute.
 * @return arr $validation the validation array.
 */
function uri_cl_return_validation( $type, $val, $a ) {
	switch ( $type ) {
		case 'url':
			return uri_cl_validate_url( $val );
		case 'bool':
			return uri_cl_validate_bool( $val );
		case 'str':
			return uri_cl_validate_str( $val, $a );
		case 'num':
			return uri_cl_validate_num( $val, $a );
		case 'ratio':
			return uri_cl_validate_ratio( $val );
		case 'unit':
			return uri_cl_validate_unit( $val );
		default:
			return array(
				'valid' => true,
				'value' => $val,
				'status' => 'normal',
			);
	}
}


/**
 * If valid, update the attribute with the sanitized value, otherwise return an error
 */
function uri_cl_add_error( $atts, $this_attr, $validation ) {

	$e = array();

	foreach ( $validation as $v ) {

		if ( $v['valid'] ) {

			$atts[ $this_attr['name'] ] = $v['value'];
			$valid = true;

		} else {

			if ( 'warning' == $v['status'] ) {
				$atts[ $this_attr['name'] ] = $v['value'];
			}

			$e[] = array(
				'attr' => $this_attr['name'],
				'message' => $v['message'],
				'status' => $v['status'],
			);

			$this_fatal = false;
			if ( 'fatal' == $v['status'] ) {
				$this_fatal = true;
			}
		}
	}

	if ( $valid ) {
		$e = array();
		$this_fatal = false;
	}

	return array(
		'errors' => $e,
		'fatal' => $this_fatal,
	);

}


/**
 * Build the error message html and return it
 *
 * @param str  $cname the name of the shortcode.
 * @param bool $fatal whether the shortcode contains at least one fatal error.
 * @param arr  $errors the array of errors and their parameters.
 * @return str $output the error message html.
 */
function uri_cl_return_error( $cname, $fatal, $errors ) {
	$ne = count( $errors );
	$plural = 1 == $ne ? '' : 's';
	$classes = 'cl-errors';
	$output = '<div class="';

	if ( $fatal ) {
		$classes .= ' cl-errors-shortcode-failure';
		$output .= $classes . '">';
		$output .= '<div class="cl-error-message">' . $cname . ' shortcode could not load.</div>';
	} else {
		$classes .= ' cl-errors-shortcode-success';
		$output .= $classes . '">';
		$output .= '<div class="cl-error-message">' . $cname . ' shortcode loaded with ' . $ne . ' warning' . $syntax . '.</div>';
	}

	$output .= '<ul>';

	foreach ( $errors as $e ) {
		$output .= '<li class="cl-error-' . $e['status'] . '">';
		$output .= '<span class="cl-error-icon">' . $e['status'] . '</span>';
		$output .= '<span class="cl-error-name">' . $e['attr'] . '</span>';
		$output .= '<span class="cl-error-message">' . $e['message'] . '</span>';
		$output .= '</li>';
	}

	$output .= '</ul>';
	$output .= '</div>';

	return $output;
}


/**
 * Validate urls, return the value and metadata
 *
 * @param str $url the url to validate.
 * @return arr the validation metadata.
 */
function uri_cl_validate_url( $url ) {
	$valid = false;
	$status = 'warning';

	// @todo more robust URL validation.
	// Add a default protocol (if needed) for validation purposes only.
	$testurl = 0 === strpos( $url, '//' ) ? 'https:' . $url : $url;
	$testurl = $testurl = filter_var( $testurl, FILTER_SANITIZE_URL );

	if ( filter_var( $testurl, FILTER_VALIDATE_URL ) ) {
		$valid = true;
		$status = 'normal';
	}

	return array(
		'valid' => $valid,
		'value' => $url,
		'status' => $status,
		'message' => '"' . $url . '" is not a valid URL',
	);

}


/**
 * Validate booleans, return the value and metadata
 *
 * @param bool/str $var the boolean or boolean-equivalent string to validate.
 * @return arr the validation metadata.
 */
function uri_cl_validate_bool( $var ) {
	$valid = false;
	$status = 'fatal';

	$truths = array(
		true,
		'true',
		1,
		'1',
	);

	$falses = array(
		false,
		'false',
		0,
		'0',
	);

	foreach ( $truths as $v ) {
		if ( $var === $v ) {
			$valid = true;
			$var = true;
			$status = 'normal';
			break;
		}
	}

	foreach ( $falses as $v ) {
		if ( $var === $v ) {
			$valid = true;
			$var = false;
			$status = 'normal';
			break;
		}
	}

	return array(
		'valid' => $valid,
		'value' => $var,
		'status' => $status,
		'message' => '"' . $var . '" is not a boolean',
	);

}


/**
 * Validate strings, return the value and metadata
 *
 * @param str $val the string to validate.
 * @param arr $a the attribute parameters.
 * @return arr the validation metadata.
 */
function uri_cl_validate_str( $val, $a ) {
	$valid = true;
	$status = 'normal';

	if ( array_key_exists( 'values', $a ) ) {
		$valid = uri_cl_in_array( $val, $a['values'] );
		$status = $valid ? 'normal' : 'fatal';
	}

	return array(
		'valid' => $valid,
		'value' => $val,
		'status' => $status,
		'message' => '"' . $val . '" is not a valid string' . uri_cl_accepted_values( $a ),
	);

}


/**
 * Validate numbers, return the value and metadata
 *
 * @param num $val the number to validate.
 * @param arr $a the attribute parameters.
 * @return arr the validation metadata.
 */
function uri_cl_validate_num( $val, $a ) {
	$valid = true;

	if ( is_numeric( $val ) ) {

		if ( array_key_exists( 'values', $a ) ) {
			$valid = uri_cl_in_array( $val, $a['values'] );
		}
	} else {
		$valid = false;
	}

	$status = $valid ? 'normal' : 'fatal';

	return array(
		'valid' => $valid,
		'value' => $val,
		'status' => $status,
		'message' => '"' . $val . '" is not a valid number' . uri_cl_accepted_values( $a ),
	);

}


/**
 * Validate ratios, return the value and metadata
 *
 * @param str $val the ratio to validate.
 * @return arr the validation metadata.
 */
function uri_cl_validate_ratio( $val ) {
	$valid = false;

	$parts = explode( ':', $val );

	if ( count( $parts ) == 2 ) {
		$valid = true;
		foreach ( $parts as $p ) {
			if ( ! is_numeric( $p ) ) {
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
		'message' => '"' . $val . '" is not a valid ratio (accepted format: x:y)',
	);

}


/**
 * Validate units (rem, em, px), return the sanatized value and metadata
 *
 * @param str $val the units to validate.
 * @return arr the validation metadata.
 */
function uri_cl_validate_unit( $val ) {
	$valid = true;
	$status = 'normal';
	$message = '';

	if ( is_numeric( $val ) ) {
		$message = '"' . $val . '" has no units, defaulting to px';
		$valid = false;
		$status = 'warning';
		$val = $val . 'px';
	} else if ( preg_match( '/(rem|em|px)$/', $val, $match ) === 1 ) {
		$num = str_replace( $match[0], '', $val );
		if ( ! is_numeric( $num ) ) {
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
		'message' => $message,
	);

}


/**
 * Check if given value is in array
 *
 * @param str $val the value to check.
 * @param arr $vals the array in which to check.
 * @return bool
 */
function uri_cl_in_array( $val, $vals ) {

	if ( in_array( $val, $vals ) ) {
		return true;
	} else {
		return false;
	}

}


/**
 * Build list of accepted attribute values, if specified
 *
 * @param arr $a the attribute parameters.
 * @return str
 */
function uri_cl_accepted_values( $a ) {

	if ( array_key_exists( 'values', $a ) ) {
		$list = implode( ' | ', $a['values'] );
		return ': remove the attribute or set an accepted value (accepted values: ' . $list . ')';
	} else {
		return '';
	}

}

