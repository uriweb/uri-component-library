/**
 * CARDS
 */

class CLCardVimeo { // eslint-disable-line no-unused-vars
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

		// Add play/pause button
		const motion = data.parent.querySelector( '.cl-accessibility-motion-control .cl-accessibility-control-button' );

		motion.addEventListener(
			'click',
			function() {
				CLCardVimeo.control( data );
			}
		);
	}

	static control( data ) {
		switch ( data.state ) {
			default:
			case 'playing':
				data.player.pause();
				data.parent.classList.add( 'paused' );
				break;
			case 'paused':
				data.player.play();
				data.parent.classList.remove( 'paused' );
				break;
		}
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
	}

	static theatreControl( data ) {
		const featureWrapper = data.parent.parentNode.parentNode;
		const controls = {
			el: featureWrapper.querySelector( '.theatre-controls' ),
		};

		controls.close = controls.el.querySelector( '.close' );
		controls.close.addEventListener( 'click', CLCardVimeo.closeTheatre.bind( null, data ), false );

		featureWrapper.parentNode.addEventListener( 'click', function( e ) {
			if ( CLCardVimeo.isClickAccessibilityRelated( e ) ) {
				return;
			}
			if ( 'close' !== e.target.className ) {
				data.player.play();
			}
		}, false );
	}

	static closeTheatre( data ) {
		data.player.pause();
	}

	static isClickAccessibilityRelated( e ) {
		let bool = false;
		if ( e.target.classList.contains( 'cl-accessibility-control' ) || e.target.classList.contains( 'cl-accessibility-control-button' ) ) {
			bool = true;
		}
		return bool;
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
			if ( CLCardVimeo.isClickAccessibilityRelated( e ) ) {
				return;
			}
			handleClick( el );
		} );
	}

	function handleClick( el ) {
		el.classList.toggle( 'theatre-open' );
	}
}() );
