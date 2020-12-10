/**
 * YOUTUBE API
 */

class CLYT { // eslint-disable-line no-unused-vars
	/*
	 * Load the API
	 */
	static loadYouTubeAPI() {
		const tag = document.createElement( 'script' );
		tag.src = 'https://www.youtube.com/player_api';
		const firstScriptTag = document.getElementsByTagName( 'script' )[ 0 ];
		firstScriptTag.parentNode.insertBefore( tag, firstScriptTag );
	}

	/**
	 * Dynamically set the hero height and position based on width
	 *
	 * @param {Object} el The hero.
	 * @param {Object} parent The hero parent container.
	 */
	static resizeHero( el, parent ) {
		let w = parent.offsetWidth;
		const h = parent.offsetHeight;

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
	 * @param {Object} event The player event.
	 * @param {Object} el The video.
	 * @param {Object} parent The video parent container.
	 */
	static resizeVideo( event, el, parent ) {
		el.style.height = ( parent.offsetWidth / ( event.target.f.width / event.target.f.height ) ) + 'px';
	}

	/**
	 * Pause the hero when it's completely out of the viewport
	 *
	 * @param {Object} event The player event.
	 * @param {Object} parent The hero parent container.
	 */
	static determinePlayState( event, parent ) {
		const v = window.innerHeight,
			p = window.pageYOffset,
			h = parent.offsetHeight,
			o = parent.getBoundingClientRect().top + p;

		if ( v + p < o || p > o + h ) {
			event.target.pauseVideo();
		} else {
			event.target.playVideo();
		}
	}

	/**
	 * Do things with the hero when it's loaded
	 *
	 * @param {Object} event The player event.
	 */
	static onHeroReady( event ) {
		// Mute the vid
		event.target.mute();

		const el = event.target.getIframe();
		const parent = el.parentNode;

		// Listen for browser resizing
		window.addEventListener(
			'resize',
			function() {
				CLYT.resizeHero( el, parent );
			}
		);
		CLYT.resizeHero( el, parent );

		// Listen for scrolling
		window.addEventListener(
			'scroll',
			function() {
				if ( ! parent.classList.contains( 'paused' ) ) {
					CLYT.determinePlayState( event, parent );
				}
			}
		);
		CLYT.determinePlayState( event, parent );

		// Add play/pause button
		const overlay = parent.querySelector( '.overlay' );
		const button = document.createElement( 'div' );

		button.className = 'motionswitch';
		button.title = 'Pause';
		button.addEventListener(
			'click',
			function() {
				CLYT.heroControl( event, parent, this );
			}
		);

		overlay.appendChild( button );
	}

	/**
	 * Do things with the video when it's loaded
	 *
	 * @param {Object} event The player event.
	 */
	static onVideoReady( event ) {
		const el = event.target.getIframe(),
			parent = el.parentNode;

		window.addEventListener(
			'resize',
			function() {
				CLYT.resizeVideo( event, el, parent );
			}
		);
		CLYT.resizeVideo( event, el, parent );
	}

	/**
	 * User control of the hero video
	 *
	 * @param {Object} event The player event.
	 * @param {Object} parent The hero parent container.
	 * @param {Object} el The .motionswitch element.
	 */
	static heroControl( event, parent, el ) {
		switch ( event.target.getPlayerState() ) {
			default:
			case 1:
				event.target.pauseVideo();
				parent.classList.add( 'paused' );
				el.setAttribute( 'title', 'Play' );
				break;
			case 2:
				event.target.playVideo();
				parent.classList.remove( 'paused' );
				el.setAttribute( 'title', 'Pause' );
				break;
		}
	}

	/**
	 * Get hero state and decide what to do
	 *
	 * @param {Object} event The player event.
	 */
	static onHeroStateChange( event ) {
		const state = event.target.getPlayerState();
		const el = event.target.getIframe();
		switch ( state ) {
			case 0:
				event.target.playVideo();
				break;
			case -1:
			case 1:
				if ( window.innerWidth > 750 ) {
					el.previousSibling.classList.add( 'unveil' );
				}
				break;
		}
	}

	/**
	 * Revert to poster if there's an error with the hero video
	 *
	 * @param {Object} event The player event.
	 */
	static onHeroError( event ) {
		event.target.f.previousSibling.classList.remove( 'unveil' );
		event.target.f.parentNode.querySelector( '.motionswitch' ).style.display = 'none';
	}

	/**
	 * Link the poster to the video on YouTube if there's an error with the video
	 *
	 * @param {Object} event The player event.
	 */
	static onVideoError( event ) {
		let alt;

		const poster = event.target.f.previousSibling;

		const a = document.createElement( 'a' );
		a.href = 'http://www.youtube.com/watch?v=' + event.target.f.id;
		a.title = 'Try watching this video on YouTube';

		const img = document.createElement( 'img' );
		img.src = poster.getAttribute( 'src' );
		alt = poster.getAttribute( 'alt' );
		if ( ! alt ) {
			alt = 'Poster for video';
		}
		img.alt = alt;
		a.appendChild( img );

		const iframe = document.getElementById( event.target.f.id );
		if ( iframe ) {
			event.target.f.parentNode.replaceChild( a, iframe );
		}
	}

	/**
	 * Get video state and decide what to do
	 *
	 * @param {Object} event The player event.
	 */
	static onVideoStateChange( event ) {
		const state = event.target.getPlayerState(),
			overlay = event.target.f.parentNode.querySelector( '.overlay' );

		switch ( state ) {
			case 1:
			case 3:
				overlay.classList.add( 'hidden' );
				break;
			default:
				overlay.classList.remove( 'hidden' );
		}
	}
}
