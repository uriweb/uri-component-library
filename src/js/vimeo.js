/**
 * VIMEO API
 *
 * @package uri-component-library
 */

// jshint esversion: 6
// jscs:disable requireVarDeclFirst
class CLVimeo {

	/*
	 * Load the API
	 */
	static loadVimeoAPI() {

		var tag, firstScriptTag;

		tag = document.createElement( 'script' );
		tag.src = 'https://player.vimeo.com/api/player.js';
		firstScriptTag = document.getElementsByTagName( 'script' )[0];
		firstScriptTag.parentNode.insertBefore( tag, firstScriptTag );

		tag.addEventListener( 'load', CLCreateVimeoPlayers, false );

	}

	/*
	* Do things with the hero when it's loaded
	* @param obj event the hero player
	*/
	static onHeroReady( data ) {

		// Listen for browser resizing
		window.addEventListener(
			 'resize',
			function() {
				CLVimeo.resizeHero( data );
			}
			);
		CLVimeo.resizeHero( data );

		// Listen for scrolling
		window.addEventListener(
			 'scroll',
			function() {
				if ( ! data.parent.classList.contains( 'paused' ) ) {
					CLVimeo.determinePlayState( data );
				}
			}
			);
		CLVimeo.determinePlayState( data );

		// Add play/pause button
		overlay = data.parent.querySelector( '.overlay' );
		button = document.createElement( 'div' );

		button.className = 'motionswitch';
		button.title = 'Pause';
		button.addEventListener(
			 'click',
			function() {
				CLVimeo.heroControl( data, button );
			}
			);

		overlay.appendChild( button );

	}

	static determinePlayState( data, button ) {
		console.log( 'playstate' );
	}

	static heroControl( data ) {
		console.log( 'control' );
	}

	/*
	 * Dynamically set the hero height and position based on width
	 * @param el el the hero
	 * @param el parent the hero parent container
	 */
	static resizeHero( data ) {

		var el = data.parent.querySelector( 'iframe' ),
		w = data.parent.offsetWidth,
			h = data.parent.offsetHeight;

		if ( w / h > 16 / 9 ) {
			el.style.height = w * 9 / 16 + 'px';
			el.style.width = '100%';
			el.style.left = 0;
			el.style.top = ( h - ( w * 9 / 16 ) ) / 2 + 'px';
			el.style.marginLeft = 0;
		} else {
			w = h * 16 / 9;
			el.style.height = '100%';
			el.style.width = w + 'px';
			el.style.left = 0 - w / 2 + 'px';
			el.style.top = 0;
			el.style.marginLeft = '50%';
		}

	}

	static onHeroError( data ) {
		console.log( data );
	}

}
