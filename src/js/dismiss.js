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

		// Dismissible elements.
		els = document.querySelectorAll( '.cl-countdown, .cl-notice' );

		for ( i = 0; i < els.length; i++ ) {
			setupDismiss( els[i] );
		}

		// Pinable elements.
		els = document.querySelectorAll( '.cl-date' );

		for ( i = 0; i < els.length; i++ ) {
			setupPin( els[i] );
		}

	}

	function setupDismiss( el ) {

		var d, cvalue, hash;

		d = el.querySelector( '.dismiss' );

		if ( null === d ) {
			return;
		}

		d.addEventListener( 'click', dismiss.bind( null, el ), false );
		hash = el.getAttribute( 'data-hash' );
		cvalue = URICL.getCookie( 'uri-cl-' + hash );

		if ( 'dismissed' == cvalue ) {
			dismiss( el );
		}

	}

	function dismiss( el ) {

		var hash;

		hash = el.getAttribute( 'data-hash' );

		el.classList.add( 'dismissed' );
		URICL.setCookie( 'uri-cl-' + hash, 'dismissed', 30 );

	}

	function setupPin( el ) {

		var d, cvalue, hash;

		d = el.querySelector( '.pin' );

		if ( null === d ) {
			return;
		}

		d.addEventListener( 'click', pin.bind( null, el ), false );
		hash = el.getAttribute( 'data-hash' );
		cvalue = URICL.getCookie( 'uri-cl-' + hash );

		if ( 'pinned' == cvalue ) {
			pin( el );
		}

	}

	function pin( el ) {

		var hash;

		hash = el.getAttribute( 'data-hash' );

		if ( el.classList.contains( 'pinned' ) ) {
			el.classList.remove( 'pinned' );
			URICL.setCookie( 'uri-cl-' + hash, 'unpinned', 30 );
		} else {
			el.classList.add( 'pinned' );
			URICL.setCookie( 'uri-cl-' + hash, 'pinned', 30 );
		}

	}

})();
