/**
 * CARDS
 *
 * @package uri-component-library
 */

( function() {
	'use strict';

	window.addEventListener( 'load', init, false );

	function init() {
		const els = document.querySelectorAll( '.cl-card-video-feature' );

		for ( let i = 0; i < els.length; i++ ) {
			setupCard( els[ i ] );
		}
	}

	function setupCard( el ) {
		el.addEventListener( 'click', function( e ) {
			e.preventDefault();
			handleClick( el );
		} );
	}

	function handleClick( el ) {
		el.classList.add( 'feature-visible' );
	}
}() );
