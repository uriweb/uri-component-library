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

}
