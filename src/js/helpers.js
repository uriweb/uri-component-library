/**
 * CL Helper Function
 *
 * @package uri-component-library
 */

// jshint esversion: 6
class URICL {
	/*
	 * Check browser support (essentially anything but IE)
	 * @return bool
	 */
	static checkSupport() {
		let support = true;
		const ua = navigator.userAgent;
		const msie = ua.indexOf( 'MSIE ' );
		const trident = ua.indexOf( 'Trident/' );

		if ( 'Microsoft Internet Explorer' === navigator.appName || msie > 0 || trident > 0 ) {
			support = false;
		}

		return support;
	}

	static setCookie( cname, cvalue, exdays ) {
		const d = new Date();
		d.setTime( d.getTime() + ( exdays * 24 * 60 * 60 * 1000 ) );

		const expires = 'expires=' + d.toUTCString();
		document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
	}

	static getCookie( cname ) {
		let i, c;

		const name = cname + '=';
		const ca = document.cookie.split( ';' );

		for ( i = 0; i < ca.length; i++ ) {
			c = ca[ i ];

			while ( ' ' === c.charAt( 0 ) ) {
				c = c.substring( 1 );
			}

			if ( 0 === c.indexOf( name ) ) {
				return c.substring( name.length, c.length );
			}
		}

		return '';
	}
}
