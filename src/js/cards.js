/**
 * CARDS
 *
 * @package uri-component-library
 */

class CLCardVimeo {
	/**
	 * Do things with the card when it's loaded
	 *
	 * @param {Object} data The player data.
	 */
	static onReady( data ) {
		// Listen for browser resizing
		window.addEventListener( 'resize', function() {
			CLVimeo.resizeRelative( data );
		} );
		CLVimeo.resizeRelative( data );

		// Listen for scrolling
		window.addEventListener( 'scroll', function() {
			if ( ! data.parent.classList.contains( 'paused' ) ) {
				CLVimeo.determinePlayState( data );
			}
		} );
		CLVimeo.determinePlayState( data );
	}

	/**
	 * Get state and decide what to do
	 *
	 * @param {Object} data The player data.
	 */
	static onStateChange( data ) {
		switch ( data.state ) {
			case 'playing':
				data.poster.classList.add( 'unveil' );
				break;
		}
	}

	/**
	 * Revert to poster if there's an error with the card video
	 *
	 * @param {Object} data The player data.
	 */
	static onError( data ) {
		data.poster.classList.remove( 'unveil' );
		data.parent.querySelector( '.motionswitch' ).style.display = 'none';
	}

	static theatreControl( data ) {
		const featureWrapper = data.parent.parentNode.parentNode;
		const controls = {
			el: featureWrapper.querySelector( '.theatre-controls' ),
		};

		controls.close = controls.el.querySelector( '.close' );
		controls.close.addEventListener( 'click', CLCardVimeo.closeTheatre.bind( null, data ), false );

		featureWrapper.parentNode.addEventListener( 'click', function( e ) {
			if ( 'close' !== e.target.className ) {
				data.player.play();
			}
		}, false );
	}

	static closeTheatre( data ) {
		data.player.pause();
	}
} // END CLCardVimeo

( function() {
	'use strict';

	window.addEventListener( 'load', init, false );

	function init() {
		const els = document.querySelectorAll( '.cl-card-theatre' );

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
		el.classList.toggle( 'theatre-open' );
	}
}() );
