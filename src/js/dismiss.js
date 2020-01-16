/**
 * DISMISS
 *
 * @package uri-component-library
 */

( function() {
	'use strict';

	window.addEventListener( 'DOMContentLoaded', init, false );

	function init() {
		let i;

		// Dismissible elements.
		const els = document.querySelectorAll( '.cl-countdown, .cl-notice' );

		for ( i = 0; i < els.length; i++ ) {
			setupDismiss( els[ i ] );
		}
	}

	function setupDismiss( el ) {
		const d = el.querySelector( '.dismiss' );

		if ( null === d ) {
			return;
		}

		d.addEventListener( 'click', dismiss.bind( null, el ), false );
		const hash = el.getAttribute( 'data-hash' );
		const cvalue = URICL.getCookie( 'uri-cl-' + hash );

		if ( 'dismissed' === cvalue ) {
			dismiss( el );
		}
	}

	function dismiss( el ) {
		const hash = el.getAttribute( 'data-hash' );

		el.classList.add( 'dismissed' );
		URICL.setCookie( 'uri-cl-' + hash, 'dismissed', 30 );
	}
}() );
