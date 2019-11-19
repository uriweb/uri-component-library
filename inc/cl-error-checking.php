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

	foreach ( $check_atts as $att ) {

		$this_attr = array(
			'name' => $att['attr'],
			'val' => $atts[ $att['attr'] ],
			'types' => $att['types'],
			'req' => true,
		);

		if ( array_key_exists( 'req', $att ) ) {
			$this_attr['req'] = $att['req'];
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

			// Run validation for each var type
			foreach ( $this_attr['types'] as $type ) {
				$validation[] = uri_cl_return_validation( $type, $this_attr['val'], $att );
			}

			// Get error information
			$err = uri_cl_compile_error( $atts, $this_attr, $validation );

			// Update atts
			$atts = $err['atts'];

			// Add errors to the master list
			$errors = array_merge( $errors, $err['errors'] );

			if ( true == $err['fatal'] ) {
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
 * @param str $att the attribute.
 * @return arr $validation the validation array.
 */
function uri_cl_return_validation( $type, $val, $att ) {
	switch ( $type ) {
		case 'url':
			return uri_cl_validate_url( $val );
		case 'bool':
			return uri_cl_validate_bool( $val );
		case 'str':
			return uri_cl_validate_str( $val, $att );
		case 'num':
			return uri_cl_validate_num( $val, $att );
		case 'ratio':
			return uri_cl_validate_ratio( $val );
		case 'unit':
			return uri_cl_validate_unit( $val );
		case 'date':
			return uri_cl_validate_date( $val );
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
 *
 * @param arr $atts the shortcode attributes.
 * @param arr $this_attr the current attribute.
 * @param arr $validation the attribute validation(s).
 * @return arr
 */
function uri_cl_compile_error( $atts, $this_attr, $validation ) {

	$err = array();
	$valid = false;

	foreach ( $validation as $vld ) {

		if ( $vld['valid'] ) {

			$atts[ $this_attr['name'] ] = $vld['value'];
			$valid = true;

		} else {

			if ( 'warning' == $vld['status'] ) {
				$atts[ $this_attr['name'] ] = $vld['value'];
			}

			$err[] = array(
				'attr' => $this_attr['name'],
				'message' => $vld['message'],
				'status' => $vld['status'],
			);

			$is_fatal = false;
			if ( 'fatal' == $vld['status'] ) {
				$is_fatal = true;
			}
		}
	}

	if ( $valid ) {
		$err = array();
		$is_fatal = false;
	}

	return array(
		'atts' => $atts,
		'errors' => $err,
		'fatal' => $is_fatal,
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
	$num_errors = count( $errors );
	$plural = 1 == $num_errors ? '' : 's';
	$classes = 'cl-errors';
	$output = '<div class="';

	if ( $fatal ) {
		$classes .= ' cl-errors-shortcode-failure';
		$output .= $classes . '">';
		$output .= '<div class="cl-error-message">' . $cname . ' shortcode could not load.</div>';
	} else {
		$classes .= ' cl-errors-shortcode-success';
		$output .= $classes . '">';
		$output .= '<div class="cl-error-message">' . $cname . ' shortcode loaded with ' . $num_errors . ' warning' . $plural . '.</div>';
	}

	$output .= '<ul>';

	foreach ( $errors as $err ) {
		$output .= '<li class="cl-error-' . $err['status'] . '">';
		$output .= '<span class="cl-error-icon">' . $err['status'] . '</span>';
		$output .= '<span class="cl-error-name">' . $err['attr'] . '</span>';
		$output .= '<span class="cl-error-message">' . $err['message'] . '</span>';
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

	foreach ( $truths as $value ) {
		if ( $var === $value ) {
			$valid = true;
			$var = true;
			$status = 'normal';
			break;
		}
	}

	foreach ( $falses as $value ) {
		if ( $var === $value ) {
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
 * @param arr $att the attribute parameters.
 * @return arr the validation metadata.
 */
function uri_cl_validate_str( $val, $att ) {
	$valid = true;
	$status = 'normal';

	if ( array_key_exists( 'values', $att ) ) {
		$valid = uri_cl_in_array( $val, $att['values'] );
		$status = $valid ? 'normal' : 'fatal';
	}

	return array(
		'valid' => $valid,
		'value' => $val,
		'status' => $status,
		'message' => '"' . $val . '" is not a valid string' . uri_cl_accepted_values( $att ),
	);

}


/**
 * Validate numbers, return the value and metadata
 *
 * @param num $val the number to validate.
 * @param arr $att the attribute parameters.
 * @return arr the validation metadata.
 */
function uri_cl_validate_num( $val, $att ) {
	$valid = true;

	if ( is_numeric( $val ) ) {

		if ( array_key_exists( 'values', $att ) ) {
			$valid = uri_cl_in_array( $val, $att['values'] );
		}
	} else {
		$valid = false;
	}

	$status = $valid ? 'normal' : 'fatal';

	return array(
		'valid' => $valid,
		'value' => $val,
		'status' => $status,
		'message' => '"' . $val . '" is not a valid number' . uri_cl_accepted_values( $att ),
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
		foreach ( $parts as $part ) {
			if ( ! is_numeric( $part ) ) {
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
 * Validate dates, return the value and metadata
 *
 * @param str $url the date to validate.
 * @return arr the validation metadata.
 */
function uri_cl_validate_date( $date ) {
	$valid = false;
	$status = 'fatal';

	if ( strtotime( $date ) ) {
		$valid = true;
		$status = 'normal';
	}

	return array(
		'valid' => $valid,
		'value' => $date,
		'status' => $status,
		'message' => '"' . $date . '" is not a valid date (see <a href="https://www.php.net/manual/en/datetime.formats.php">accepted formats</a>)',
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
 * @param arr $att the attribute parameters.
 * @return str
 */
function uri_cl_accepted_values( $att ) {

	if ( array_key_exists( 'values', $att ) ) {
		$list = implode( ' | ', $att['values'] );
		return ': remove the attribute or set an accepted value (accepted values: ' . $list . ')';
	} else {
		return '';
	}

}
