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
		p.addEventListener( 'click', download.bind( null, el, p ), false );

		const hash = el.getAttribute( 'data-hash' );
		const cvalue = URICL.getCookie( 'uri-cl-' + hash );

		if ( 'downloaded' === cvalue ) {
			el.classList.add( 'downloaded' );
			p.setAttribute( 'title', "You've downloaded this date before. Check your downloads folder for an ICS file." );
		}
	}

	function download( el, p ) {
		const hash = el.getAttribute( 'data-hash' );

		if ( ! el.classList.contains( 'downloaded' ) ) {
			el.querySelector( 'form' ).submit();
			el.classList.add( 'downloaded' );
			p.setAttribute( 'title', 'Check your downloads folder for an ICS file.' );
			URICL.setCookie( 'uri-cl-' + hash, 'downloaded', 0.5 );
		}
	}
}() );
