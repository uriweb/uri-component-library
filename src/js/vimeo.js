/**
 * VIMEO API AND CONTROLS
 */

class CLVimeo { // eslint-disable-line no-unused-vars
	/*
	 * Load the API
	 */
	static loadVimeoAPI() {
		const tag = document.createElement( 'script' );
		tag.src = 'https://player.vimeo.com/api/player.js';

		const firstScriptTag = document.getElementsByTagName( 'script' )[ 0 ];
		firstScriptTag.parentNode.insertBefore( tag, firstScriptTag );

		tag.addEventListener( 'load', CLCreateVimeoPlayers, false );
	}

	static determinePlayState( data ) {
		if ( CLA11y.hasNoMotion() ) {
			//console.log( '"' + data.parent.textContent.slice( 0, 10 ) + '" - user prefers no motion globally, pausing player' );
			data.player.pause();
			//data.parent.classList.add( 'paused' );
			return false;
		}

		if ( data.parent.parentNode.classList.contains( 'cl-accessibility-motion-paused' ) ) {
			return false;
		}

		const v = window.innerHeight,
			p = window.pageYOffset,
			h = data.parent.offsetHeight,
			o = data.parent.getBoundingClientRect().top + p;

		//debugging
		//const a = ( CLA11y.arePrefsSaved() ) ? 'user has saved prefs' : 'user has not saved prefs',
		//	b = ( CLA11y.isSystemMotionPaused() ) ? 'user prefers no motion' : 'user prefers motion';

		if ( v + p < o || p > o + h ) {
			//console.log( '"' + data.parent.textContent.slice( 0, 10 ) + '" - ' + a + ' | ' + b + ' | pausing based on viewport' );
			data.player.pause();
		} else {
			//console.log( '"' + data.parent.textContent.slice( 0, 10 ) + '" - ' + a + ' | ' + b + ' | pausing based on viewport' );
			data.player.play();
		}
	}

	/**
	 * Dynamically set the hero height and position based on width
	 *
	 * @param {Object} data The player data.
	 */
	static resizeRelative( data ) {
		let w = data.parent.offsetWidth;
		const el = data.parent.querySelector( 'iframe' );
		const h = data.parent.offsetHeight;

		if ( w / h > 16 / 9 ) {
			el.style.height = ( w * 9 / 16 ) + 'px';
			el.style.width = '100%';
			el.style.left = 0;
			el.style.top = ( ( h - ( w * 9 / 16 ) ) / 2 ) + 'px';
			el.style.marginLeft = 0;
		} else {
			w = h * 16 / 9;
			el.style.height = '100%';
			el.style.width = w + 'px';
			el.style.left = 0 - ( w / 2 ) + 'px';
			el.style.top = 0;
			el.style.marginLeft = '50%';
		}
	}

	/**
	 * Dynamically set the video height and position based on width
	 *
	 * @param {Object} data The player data.
	 */
	static resizeProportionate( data ) {
		data.player.element.setAttribute( 'height', data.parent.offsetWidth / data.ratio );
	}
}

class CLHeroVimeo { // eslint-disable-line no-unused-vars
	/**
	 * Do things with the hero when it's loaded
	 *
	 * @param {Object} data The player data.
	 */
	static onReady( data ) {
		// Listen for browser resizing
		window.addEventListener(
			'resize',
			function() {
				CLVimeo.resizeRelative( data );
			}
		);
		CLVimeo.resizeRelative( data );

		// Listen for scrolling
		window.addEventListener( 'scroll', CLVimeo.determinePlayState.bind( null, data ), false );
		CLVimeo.determinePlayState( data );

		// Add play/pause button
		const motion = data.parent.querySelector( '.cl-accessibility-motion-control' );

		motion.addEventListener(
			'click',
			function() {
				CLHeroVimeo.control( data );
			}
		);
	}

	static control( data ) {
		//console.log( '"' + data.parent.textContent.slice( 0, 10 ) + '" - control called, hero was ' + data.state + ' when call made' );
		switch ( data.state ) {
			default:
			case 'playing':
				data.player.pause();
				//console.log( '"' + data.parent.textContent.slice( 0, 10 ) + '" - state altered, hero is now paused' );
				break;
			case 'loaded':
			case 'paused':
				data.player.play();
				//console.log( '"' + data.parent.textContent.slice( 0, 10 ) + '" - state altered, hero is now playing' );
				break;
		}
	}

	/**
	 * Get hero state and decide what to do
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
	 * Revert to poster if there's an error with the hero video
	 *
	 * @param {Object} data The player data.
	 */
	static onError( data ) {
		data.poster.classList.remove( 'unveil' );
	}
}

class CLVideoVimeo { // eslint-disable-line no-unused-vars
	/**
	 * Do things with the video when it's loaded
	 *
	 * @param {Object} data The player data.
	 */
	static onReady( data ) {
		data.poster.querySelector( 'img' ).style.display = 'none';

		// Store aspect ratio
		data.ratio = data.player.element.width / data.player.element.height;

		window.addEventListener(
			'resize',
			function() {
				CLVimeo.resizeProportionate( data );
			}
		);
		CLVimeo.resizeProportionate( data );

		if ( data.parent.classList.contains( 'cl-card-feature-video' ) ) {
			CLCardVimeo.theatreControl( data );
		}
	}

	/**
	 * Link the poster to the video on YouTube if there's an error with the video
	 *
	 * @param {Object} data The player data.
	 */
	static onError( data ) {
		let alt;

		const a = document.createElement( 'a' );
		a.href = data.src;
		a.title = 'Try watching this video on Vimeo';

		const img = document.createElement( 'img' );
		img.src = data.poster.getAttribute( 'src' );
		alt = data.poster.getAttribute( 'alt' );
		if ( ! alt ) {
			alt = 'Poster for video';
		}
		img.alt = alt;
		a.appendChild( img );

		data.parent.replaceChild( a, data.player.element );
	}

	/**
	 * Get video state and decide what to do
	 *
	 * @param {Object} data The player data.
	 */
	static onStateChange( data ) {
		const overlay = data.parent.querySelector( '.overlay' );

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
