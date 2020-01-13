/**
 * DISMISS AND PIN
 *
 * @package uri-component-library
 */

( function() {
	'use strict';

	window.addEventListener( 'DOMContentLoaded', init, false );

	function init() {
		let els, i;

		// Dismissible elements.
		els = document.querySelectorAll( '.cl-countdown, .cl-notice' );

		for ( i = 0; i < els.length; i++ ) {
			setupDismiss( els[ i ] );
		}

		// Pinable elements.
		els = document.querySelectorAll( '.cl-date' );

		for ( i = 0; i < els.length; i++ ) {
			setupPin( els[ i ] );
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

	function setupPin( el ) {
		const p = el.querySelector( '.pin' );

		if ( null === p ) {
			return;
		}

		p.addEventListener( 'click', pin.bind( null, el, p ), false );
		const hash = el.getAttribute( 'data-hash' );
		const cvalue = URICL.getCookie( 'uri-cl-' + hash );

		if ( 'pinned' === cvalue ) {
			pin( el, p );
		}
	}

	function pin( el, p ) {
		const hash = el.getAttribute( 'data-hash' );

		if ( el.classList.contains( 'pinned' ) ) {
			el.classList.remove( 'pinned' );
			p.setAttribute( 'title', 'Pin this date' );
			URICL.setCookie( 'uri-cl-' + hash, 'unpinned', 30 );
		} else {
			el.classList.add( 'pinned' );
			p.setAttribute( 'title', 'Unpin this date' );
			URICL.setCookie( 'uri-cl-' + hash, 'pinned', 30 );
		}
	}
}() );
