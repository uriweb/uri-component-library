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

		var overlay, button;

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

	/*
	 * Do things with the video when it's loaded
	 * @param str id the id of the video
	 */
	static onVideoReady( data ) {

		data.poster.querySelector( 'img' ).style.display = 'none';

		// Store aspect ratio
		data.ratio = data.player.element.width / data.player.element.height;

		window.addEventListener(
			'resize',
			function() {
				CLVimeo.resizeVideo( data );
			}
		);
		CLVimeo.resizeVideo( data );

	}

	static determinePlayState( data ) {
		var v = window.innerHeight,
			p = window.pageYOffset,
			h = data.parent.offsetHeight,
			o = data.parent.getBoundingClientRect().top + p;

		if ( v + p < o || p > o + h ) {
			data.player.pause();
		} else {
			data.player.play();
		}
	}

	static heroControl( data, button ) {
		switch ( data.state ) {
			default:
			case 'playing':
				data.player.pause();
				data.parent.classList.add( 'paused' );
				button.setAttribute( 'title', 'Play' );
				break;
			case 'paused':
				data.player.play();
				data.parent.classList.remove( 'paused' );
				button.setAttribute( 'title', 'Pause' );
				break;
		}
	}

	/*
	 * Get hero state and decide what to do
	 * @param obj event the hero player
	 */
	static onHeroStateChange( data ) {
		switch ( data.state ) {
			case 'playing':
				data.poster.classList.add( 'unveil' );
				break;
		}
	}

	/*
	 * Dynamically set the hero height and position based on width
	 * @param obj data the data
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

	/*
	 * Dynamically set the video height and position based on width
	 * @param obj event the event
	 * @param el el the video
	 * @param el parent the video parent container
	 */
	static resizeVideo( data ) {
		data.player.element.setAttribute( 'height', data.parent.offsetWidth / data.ratio );
	}

	/*
	 * Revert to poster if there's an error with the hero video
	 * @param obj data the data
	 */
	static onHeroError( data ) {
		data.poster.classList.remove( 'unveil' );
		data.parent.querySelector( '.motionswitch' ).style.display = 'none';
	}

	/*
	 * Link the poster to the video on YouTube if there's an error with the video
	 * @param obj data the data
	 */
	static onVideoError( data ) {

		var a, img, alt;

		a = document.createElement( 'a' );
		a.href = data.src;
		a.title = 'Try watching this video on Vimeo';

		img = document.createElement( 'img' );
		img.src = data.poster.getAttribute( 'src' );
		alt = data.poster.getAttribute( 'alt' );
		if ( ! alt ) {
			alt = 'Poster for video';
		}
		img.alt = alt;
		a.appendChild( img );

		data.parent.replaceChild( a, data.player.element );

	}

	/*
	 * Get video state and decide what to do
	 * @param obj data the data
	 */
	static onVideoStateChange( data ) {

		var overlay;

		overlay = data.parent.querySelector( '.overlay' );

		switch ( data.state ) {
			case 'playing':
			case 'buffering':
				overlay.classList.add( 'hidden' );
				break;
			default:
				overlay.classList.remove( 'hidden' );
		}
	}

}
