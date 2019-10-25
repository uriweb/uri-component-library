/**
 * CL Helper Function
 *
 * @package uri-component-library
 */

// jshint esversion: 6
// jscs:disable requireVarDeclFirst
class URICL {

	/*
	 * Check browser support (essentially anything but IE)
	 * @return bool
	 */
	static checkSupport() {

		var support = true,
			ua = navigator.userAgent,
			msie = ua.indexOf( 'MSIE ' ),
			trident = ua.indexOf( 'Trident/' );

		if ( 'Microsoft Internet Explorer' === navigator.appName || msie > 0 || trident > 0 ) {
			support = false;
		}

		return support;

	}

	static getVideoHost( s ) {

		var domain, host;

		host = 'youtube'; // Default host
		domain = URICL.getURLDomainName( s );

		if ( ! domain ) {
			return host;
		}

		if ( -1 < domain.indexOf( 'vimeo.com' ) ) {
			return host = 'vimeo';
		}

		if ( -1 < domain.indexOf( 'youtube.com' ) || -1 < domain.indexOf( 'youtu.be' ) ) {
			return host = 'youtube';
		}

	}

	/*
	 * Get domain part of url
	 * @param str url the url
	 * @return str
	 */
	static getURLDomainName( url ) {

		var matches;

		matches = url.match( /^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i );
		return matches && matches[1];  // Domain will be null if no match is found

	}

}
