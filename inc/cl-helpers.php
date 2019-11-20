<?php
/**
 * COMPONENT LIBRARY HELPERS
 *
 * @package uri-component-library
 */


/**
 * Get shortcode template file
 *
 * Priority:
 * 1. /themes/theme/template-parts/cl/cl-template-*.php
 * 2. /plugins/uri-component-library/templates/cl-template-*.php
 *
 * @param str $name the name of the shortcode, as used in the filename.
 * @return the path to the template file (rel for default templates, abs for theme templates)
 */
function uri_cl_shortcode_get_template( $name ) {

	$template = get_stylesheet_directory() . '/template-parts/cl/cl-template-' . $name . '.php';

	if ( ! is_file( $template ) ) {
		$template = 'templates/cl-template-' . $name . '.php';
	}

	return $template;

}


/**
 * Return img tag
 *
 * @param mixed $img the shortcode img attribute.
 * @param str   $alt the shortcode alt attribute.
 * @return str
 */
function uri_cl_build_img_tag( $img, $alt = '' ) {

	$img_src = $img;
	$img_srcset = '';

	if ( is_numeric( $img ) ) {
		$img_id = $img;
		$img_src = wp_get_attachment_image_src( $img_id )[0];
		$img_meta = wp_get_attachment_metadata( $img_id );
		$img_srcset = wp_calculate_image_srcset( array( $img_meta['width'], $img_meta['height'] ), $img_src, $img_meta );
	}

	return '<img src="' . $img_src . '" srcset="' . $img_srcset . '" alt="' . $alt . '">';

}

/**
 * Get video id
 */
function uri_cl_get_video_id( $src ) {

	$platform = uri_cl_get_video_platform( $src );

	if ( 'vimeo' == $platform ) {
		return $src;
	}

	/* Youtube */
	$pattern = '/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/';
	preg_match( $pattern, $src, $matches );
	return ( $matches && 11 == strlen( $matches[1] ) ) ? $matches[1] : $src;

}

/**
 * Get video platform
 *
 * @param str $src the source url.
 * @return str
 */
function uri_cl_get_video_platform( $src ) {

	$host = uri_cl_get_url_host( $src );

	$platform = 'youtube'; // Default platform

	if ( false !== strpos( $host, 'vimeo' ) ) {
		$platform = 'vimeo';
	}

	return $platform;

}

/**
 * Get url host
 *
 * @param str $src the source url.
 * @return str
 */
function uri_cl_get_url_host( $src ) {
	return parse_url( $src )['host'];
}

/**
 * Get Vimeo thumbnail
 *
 * @param str $src the source url.
 * @return str
 */
function uri_cl_get_vimeo_thumbnail( $src ) {

	if ( ! $src ) {
			return false;
	}

	$data = json_decode( file_get_contents( 'http://vimeo.com/api/oembed.json?url=' . $src ) );

	if ( ! $data ) {
			return false;
	}

	return explode( '_', $data->thumbnail_url )[0];

}


/**
 * Return the hash of a variable.
 *
 * @param mix $var the variable to hash.
 * @return str
 */
function uri_cl_get_hash( $var ) {
	return md5( is_array( $var ) ? implode( '', $var ) : $var );
}


/**
 * Return time difference in seconds.
 *
 * @param str $date the data string.
 * @return num
 */
function uri_cl_get_time_difference( $date ) {
	$deadline = strtotime( $date );
	$today = time();
	return $deadline - $today;
}


/**
 * Return an array with seconds, days, hours, minutes defined.
 *
 * @param num $secs the number of seconds togo.
 * @return arr
 */
function uri_cl_expand_seconds( $secs ) {

	$seconds = (int) $secs;
	$days = floor( $seconds / 86400 );
	$hours = floor( ( $seconds - ( $days * 86400 ) ) / 3600 );
	$minutes = floor( ( $seconds - $days * 86400 - $hours * 3600 ) / 60 );
	$seconds = floor( $seconds - ( $days * 86400 ) - ( $hours * 3600 ) - ( $minutes * 60 ) );

	return array(
		'seconds' => $seconds,
		'minutes' => $minutes,
		'hours' => $hours,
		'days' => $days,
		'tense' => ( $secs >= 0 ) ? 'future' : 'past',
	);

}

/**
 * Get a plain language sentence that announces the time remaining.
 *
 * @param arr $a an array with seconds, days, hours, minutes defined.
 * @param arr $attributes are the shortcode attributes.
 * @return str
 */
function uri_cl_get_time_left_in_words( $a, $attributes ) {

	$days = $a['days'];
	$day_string = ( 1 == $days || -1 == $days ) ? 'day' : 'days';

	$hours = $a['hours'];
	$hour_string = ( 1 == $hours || -1 == $hours ) ? 'hour' : 'hours';

	$minutes = $a['minutes'];
	;
	$minute_string = ( 1 == $minutes || -1 == $minutes ) ? 'minute' : 'minutes';

	$seconds = $a['seconds'];
	$second_string = ( 1 == $seconds || -1 == $seconds ) ? 'second' : 'seconds';

	// we're loose with months and years since it's so far away
	$years = round( $days / 365 );
	$year_string = 1 == $years ? 'year' : 'years';
	$months = round( $days / 30 );
	$month_string = 1 == $months ? 'month' : 'months';

	if ( 0 == $days ) {
		// if we want to get really granular, this will do it.
		// caching more or less defeats the purpose of getting so granular
		// if ( $hours > 1 ) {
		// $message = sprintf('<span class="time-left-number">%d</span> %s until <span class="time-left-event">%s</span>.', $hours, $hour_string, $attributes['event'] );
		// } elseif ( $minutes > 0 ) {
		// $message = sprintf('<span class="time-left-number">%d</span> %s until <span class="time-left-event">%s</span>.', $minutes, $minute_string, $attributes['event'] );
		// } else {
		// $message = sprintf('<span class="time-left-number">%d</span> %s until <span class="time-left-event">%s</span>.', $seconds, $second_string, $attributes['event'] );
		// }
		$capitalized_event = ucfirst( $attributes['event'] );
		$message = sprintf( '<span class="time-left-event">%s</span> %s.', $capitalized_event, $attributes['is_today'] );
	} elseif ( $days > 59 ) {
		if ( $years > 0 ) {
			$message = sprintf( '<span class="time-left"><span class="time-left-number">%d</span> <span class="time-left-unit">%s</span></span> %s <span class="time-left-event">%s</span>.', $years, $year_string, $attributes['until'], $attributes['event'] );
		} else {
			$message = sprintf( '<span class="time-left"><span class="time-left-number">%d</span> <span class="time-left-unit">%s</span></span> %s <span class="time-left-event">%s</span>.', $months, $month_string, $attributes['until'], $attributes['event'] );
		}
	} else {
		$message = sprintf( '<span class="time-left"><span class="time-left-number">%d</span> <span class="time-left-unit">%s</span></span> %s <span class="time-left-event">%s</span>.', $days, $day_string, $attributes['until'], $attributes['event'] );
	}

	if ( $days < 0 ) {
		if ( false !== $attributes['show_expired'] ) {
			if ( $days < -30 ) {
				if ( $years < 0 ) {
					$message = sprintf( '<span class="time-left-event">%s</span> %s <span class="time-left"><span class="time-left-number">%d</span> <span class="time-left-unit">%s</span></span> ago.', $attributes['event'], $attributes['passed'], abs( $years ), $year_string );
				} else {
					$message = sprintf( '<span class="time-left-event">%s</span> %s <span class="time-left"><span class="time-left-number">%d</span> <span class="time-left-unit">%s</span></span> ago.', $attributes['event'], $attributes['passed'], abs( $months ), $month_string );
				}
			} elseif ( $days < -1 ) {
				$message = sprintf( '<span class="time-left-event">%s</span> %s <span class="time-left"><span class="time-left-number">%d</span> <span class="time-left-unit">%s</span></span> ago.', $attributes['event'], $attributes['passed'], abs( $days ), $day_string );
			} else {
				$message = sprintf( '<span class="time-left-event">%s</span> has %s.', $attributes['event'], $attributes['passed'] );
			}
		} else {
			$message = false;
		}
	}

	return $message;

}
