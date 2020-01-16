/**
 * DATES
 *
 * @package uri-component-library
 */

( function() {
	'use strict';

	window.addEventListener( 'DOMContentLoaded', init, false );

	function init() {
		let i;

		const els = document.querySelectorAll( '.cl-date' );

		for ( i = 0; i < els.length; i++ ) {
			setupDate( els[ i ] );
		}
	}

	function setupDate( el ) {
		el.classList.add( 'has-js' );
		const p = el.querySelector( '.cl-date-content-wrapper' );
		p.addEventListener( 'click', dialogue.bind( null, el ), false );

		const a = el.querySelector( '.cl-date-download-confirm' );
		a.addEventListener( 'click', download.bind( null, el, p ), false );

		const c = el.querySelector( '.cl-date-download-cancel' );
		c.addEventListener( 'click', dialogue.bind( null, el ), false );

		const hash = el.getAttribute( 'data-hash' );
		const cvalue = URICL.getCookie( 'uri-cl-' + hash );

		if ( 'downloaded' === cvalue ) {
			el.classList.add( 'downloaded' );
			p.setAttribute( 'title', "You've downloaded this date before. Check your downloads folder for an ICS file." );
		}
	}

	function dialogue( el ) {
		const className = 'dialogue';

		if ( el.classList.contains( 'downloaded' ) ) {
			return;
		}

		if ( el.classList.contains( className ) ) {
			el.classList.remove( className );
		} else {
			el.classList.add( className );
		}
	}

	function download( el, p ) {
		const hash = el.getAttribute( 'data-hash' );

		if ( ! el.classList.contains( 'downloaded' ) ) {
			el.querySelector( 'form' ).submit();
			dialogue( el );
			el.classList.add( 'downloaded' );
			p.setAttribute( 'title', 'Check your downloads folder for an ICS file.' );
			URICL.setCookie( 'uri-cl-' + hash, 'downloaded', 0.5 );
		}
	}
}() );
