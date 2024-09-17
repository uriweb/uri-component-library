/**
 * CL Helper Function
 */

class URICL { // eslint-disable-line no-unused-vars
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
