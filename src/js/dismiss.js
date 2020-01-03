/**
 * DISMISS
 *
 * @package uri-component-library
 */

( function() {

	'use strict';

	window.addEventListener( 'load', init, false );

	function init() {

		var els, i;

		els = document.querySelectorAll( '.cl-countdown, .cl-notice' );

		for ( i = 0; i < els.length; i++ ) {
			setup( els[i] );
		}

	}

	function setup( el ) {

		var d, cvalue, hash;

		d = el.querySelector( '.dismiss' );

		if ( null === d ) {
			return;
		}

		d.addEventListener( 'click', dismiss.bind( null, el ), false );
		hash = el.getAttribute( 'data-hash' );
		cvalue = getCookie( 'uri-cl-' + hash );

		if ( 'dismissed' == cvalue ) {
			dismiss( el );
		}

	}

	function dismiss( el ) {

		var hash;

		hash = el.getAttribute( 'data-hash' );

		el.classList.add( 'dismissed' );
		setCookie( 'uri-cl-' + hash, 'dismissed', 30 );

	}

	function setCookie( cname, cvalue, exdays ) {

		var d, expires;

		d = new Date();
		d.setTime( d.getTime() + ( exdays * 24 * 60 * 60 * 1000 ) );

		expires = 'expires=' + d.toUTCString();
		document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';

	}

	function getCookie( cname ) {

		var name, ca, i, c;

		name = cname + '=';
		ca = document.cookie.split( ';' );

		for ( i = 0; i < ca.length; i++ ) {

			c = ca[i];

			while ( ' ' == c.charAt( 0 ) ) {
				c = c.substring( 1 );
			}

			if ( 0 == c.indexOf( name ) ) {
				return c.substring( name.length, c.length );
			}

		}

		return '';

	}

})();
